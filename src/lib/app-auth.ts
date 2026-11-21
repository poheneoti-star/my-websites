import 'server-only'

import config from '@payload-config'
import { cookies } from 'next/headers'
import { getPayload } from 'payload'

const APP_SESSION_COOKIE = 'app-session'
const APP_USER_COLLECTION = 'users' as const

type PublicUser = {
  id: number | string
  email: string
  name: string
}

function toPublicUser(user: Record<string, unknown>): PublicUser | null {
  if (
    (typeof user.id !== 'string' && typeof user.id !== 'number') ||
    typeof user.email !== 'string' ||
    typeof user.name !== 'string'
  ) {
    return null
  }

  return { id: user.id, email: user.email, name: user.name }
}

export function createAppAuth() {
  return {
    async login(email: string, password: string) {
      const payload = await getPayload({ config })
      const result = await payload.login({
        collection: APP_USER_COLLECTION,
        data: { email, password },
        overrideAccess: false,
      })

      if (!result.token || !result.user) throw new Error('Unable to start your session.')

      const cookieStore = await cookies()
      cookieStore.set(APP_SESSION_COOKIE, result.token, {
        httpOnly: true,
        maxAge: result.exp ? Math.max(result.exp - Math.floor(Date.now() / 1000), 0) : 604800,
        path: '/',
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
      })

      return toPublicUser(result.user as unknown as Record<string, unknown>)
    },

    async createAccount(name: string, email: string, password: string) {
      const payload = await getPayload({ config })
      await payload.create({
        collection: APP_USER_COLLECTION,
        data: { email, name, password },
        overrideAccess: false,
      })
      return this.login(email, password)
    },

    async currentUser(): Promise<PublicUser | null> {
      const token = (await cookies()).get(APP_SESSION_COOKIE)?.value
      if (!token) return null

      const payload = await getPayload({ config })
      const authHeaders = new Headers({ Authorization: `JWT ${token}` })
      const { user } = await payload.auth({ headers: authHeaders })

      if (!user || user.collection !== APP_USER_COLLECTION) return null
      return toPublicUser(user as unknown as Record<string, unknown>)
    },

    async logout() {
      ;(await cookies()).delete(APP_SESSION_COOKIE)
    },
  }
}

export const appAuth = createAppAuth()
