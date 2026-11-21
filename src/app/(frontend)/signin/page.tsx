import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SignInForm from './SignInForm'

export const metadata: Metadata = {
  title: 'Sign in | MODÉA',
  description: 'Sign in to your MODÉA account or create a new account.',
}

export default function SignInPage() {
  return (
    <main className="min-h-dvh bg-[#f7f6f2]">
      <div className="grid min-h-dvh lg:grid-cols-[1.08fr_0.92fr]">
        <section className="auth-visual group relative hidden min-h-dvh overflow-hidden bg-[#26251f] lg:block">
          <Image
            src="/assets/mot/d480c.png"
            alt="Woman wearing the Dunsin dress"
            fill
            priority
            sizes="55vw"
            className="auth-visual-image object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-black/15" />
          <div className="auth-visual-copy absolute inset-x-10 bottom-10 flex items-end justify-between text-white">
            <div>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em]">
                The MODÉA community
              </p>
              <h1 className="font-display max-w-xl text-6xl leading-[0.92] tracking-[-0.04em]">
                Your wardrobe,
                <br />
                remembered.
              </h1>
            </div>
            <p className="max-w-44 text-right text-[11px] leading-5 text-white/65">
              Save favourites, revisit your bag, and make every edit yours.
            </p>
          </div>
        </section>

        <section className="auth-panel flex min-h-dvh flex-col px-5 py-6 sm:px-10 lg:px-16 lg:py-8">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="brand-mark font-display text-[28px] font-semibold tracking-[-0.04em]"
            >
              MODÉA
            </Link>
            <Link
              href="/"
              className="border-b border-black/40 pb-1 text-[10px] font-bold uppercase tracking-[0.14em]"
            >
              Back to shop
            </Link>
          </div>

          <div className="mx-auto my-auto w-full max-w-md py-16">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-black/45">
              Welcome to MODÉA
            </p>
            <h2 className="font-display text-5xl leading-none tracking-[-0.035em]">
              Good to see you.
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-6 text-black/55">
              Sign in to keep your favourite pieces and account details in one place.
            </p>
            <div className="mt-10">
              <SignInForm />
            </div>
          </div>

          <p className="text-center text-[10px] uppercase tracking-[0.12em] text-black/35">
            Secure account access · Independent from CMS administration
          </p>
        </section>
      </div>
    </main>
  )
}
