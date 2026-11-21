'use server'

import { appAuth } from '@/lib/app-auth'

export type AuthActionState = {
  error?: string
  success: boolean
}

function textField(formData: FormData, field: string, maxLength: number) {
  const value = formData.get(field)
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : ''
}

function validateCredentials(formData: FormData, includeName: boolean) {
  const email = textField(formData, 'email', 254).toLowerCase()
  const password = textField(formData, 'password', 128)
  const name = textField(formData, 'name', 80)

  if (includeName && name.length < 2) return { error: 'Enter your full name.' }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: 'Enter a valid email address.' }
  }
  if (password.length < 8) return { error: 'Password must be at least 8 characters.' }

  return { email, name, password }
}

export async function signInAction(
  _previousState: AuthActionState,
  formData: FormData,
): Promise<AuthActionState> {
  const fields = validateCredentials(formData, false)
  if ('error' in fields) return { error: fields.error, success: false }

  try {
    await appAuth.login(fields.email, fields.password)
    return { success: true }
  } catch {
    return { error: 'Email or password is incorrect.', success: false }
  }
}

export async function createAccountAction(
  _previousState: AuthActionState,
  formData: FormData,
): Promise<AuthActionState> {
  const fields = validateCredentials(formData, true)
  if ('error' in fields) return { error: fields.error, success: false }

  try {
    await appAuth.createAccount(fields.name, fields.email, fields.password)
    return { success: true }
  } catch {
    return {
      error: 'We could not create that account. The email may already be in use.',
      success: false,
    }
  }
}
