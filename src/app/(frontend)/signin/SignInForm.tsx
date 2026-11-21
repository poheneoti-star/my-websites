'use client'

import { useRouter } from 'next/navigation'
import { useActionState, useEffect, useState } from 'react'
import { createAccountAction, signInAction, type AuthActionState } from './actions'

const initialState: AuthActionState = { success: false }

export default function SignInForm() {
  const router = useRouter()
  const [mode, setMode] = useState<'signin' | 'create'>('signin')
  const [signInState, signInFormAction, signInPending] = useActionState(signInAction, initialState)
  const [createState, createFormAction, createPending] = useActionState(
    createAccountAction,
    initialState,
  )
  const state = mode === 'signin' ? signInState : createState
  const pending = mode === 'signin' ? signInPending : createPending

  useEffect(() => {
    if (!state.success) return
    router.push('/account')
    router.refresh()
  }, [router, state.success])

  return (
    <div>
      <div className="mb-9 flex border-b border-black/10">
        {(['signin', 'create'] as const).map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setMode(item)}
            className={`relative flex-1 pb-4 text-[11px] font-bold uppercase tracking-[0.15em] ${
              mode === item ? 'text-black' : 'text-black/35'
            }`}
          >
            {item === 'signin' ? 'Sign in' : 'Create account'}
            {mode === item && <span className="absolute inset-x-0 -bottom-px h-0.5 bg-black" />}
          </button>
        ))}
      </div>

      <form action={mode === 'signin' ? signInFormAction : createFormAction}>
        {mode === 'create' && (
          <label className="mb-5 block">
            <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.14em]">
              Full name
            </span>
            <input
              name="name"
              type="text"
              autoComplete="name"
              required
              maxLength={80}
              className="h-13 w-full border border-black/20 bg-transparent px-4 text-sm outline-none transition focus:border-black"
              placeholder="Your name"
            />
          </label>
        )}
        <label className="mb-5 block">
          <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.14em]">
            Email address
          </span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            className="h-13 w-full border border-black/20 bg-transparent px-4 text-sm outline-none transition focus:border-black"
            placeholder="you@example.com"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.14em]">
            Password
          </span>
          <input
            name="password"
            type="password"
            autoComplete={mode === 'signin' ? 'current-password' : 'new-password'}
            required
            minLength={8}
            maxLength={128}
            className="h-13 w-full border border-black/20 bg-transparent px-4 text-sm outline-none transition focus:border-black"
            placeholder="At least 8 characters"
          />
        </label>

        {state.error && (
          <p role="alert" className="mt-4 border-l-2 border-[#c4402f] pl-3 text-xs text-[#9e3024]">
            {state.error}
          </p>
        )}

        <button
          type="submit"
          disabled={pending}
          className="cta-button mt-7 w-full justify-center bg-black py-4 text-xs font-bold uppercase tracking-[0.16em] text-white disabled:cursor-wait disabled:bg-black/45"
        >
          {pending
            ? 'Please wait…'
            : mode === 'signin'
              ? 'Sign in to your account'
              : 'Create my account'}
        </button>
      </form>

      <p className="mt-6 text-center text-[11px] leading-5 text-black/45">
        By continuing, you agree to our Terms and acknowledge our Privacy Policy.
      </p>
    </div>
  )
}
