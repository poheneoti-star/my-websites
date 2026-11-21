import { logoutAction } from './actions'
import { appAuth } from '@/lib/app-auth'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function AccountPage() {
  const user = await appAuth.currentUser()
  if (!user) redirect('/signin')

  return (
    <main className="min-h-dvh bg-[#f7f6f2] px-5 py-6 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <header className="flex items-center justify-between border-b border-black/10 pb-6">
          <Link
            href="/"
            className="brand-mark font-display text-[28px] font-semibold tracking-[-0.04em]"
          >
            MODÉA
          </Link>
          <form action={logoutAction}>
            <button
              type="submit"
              className="border-b border-black pb-1 text-[10px] font-bold uppercase tracking-[0.14em]"
            >
              Sign out
            </button>
          </form>
        </header>

        <section className="grid gap-12 py-16 lg:grid-cols-[0.7fr_1.3fr] lg:py-24">
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-black/45">
              Your account
            </p>
            <h1 className="font-display text-6xl leading-[0.9] tracking-[-0.04em]">
              Hello,
              <br />
              {user.name}.
            </h1>
            <p className="mt-6 text-sm text-black/50">{user.email}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/#shop"
              className="account-card group flex min-h-64 flex-col justify-between bg-[#dbe367] p-7"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.16em]">Shop</span>
              <span className="font-display text-4xl leading-none">
                Find your
                <br />
                next look
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.12em]">
                Browse the edit →
              </span>
            </Link>
            <div className="account-card flex min-h-64 flex-col justify-between border border-black/10 bg-white p-7">
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-black/45">
                Profile
              </span>
              <div>
                <p className="font-display text-3xl">Account details</p>
                <p className="mt-3 text-xs leading-5 text-black/50">
                  Your account is active and protected by secure session access.
                </p>
              </div>
              <span className="text-[10px] uppercase tracking-[0.12em] text-black/35">
                Member since today
              </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
