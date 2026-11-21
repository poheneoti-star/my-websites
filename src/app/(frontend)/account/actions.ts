'use server'

import { appAuth } from '@/lib/app-auth'
import { redirect } from 'next/navigation'

export async function logoutAction() {
  await appAuth.logout()
  redirect('/signin')
}
