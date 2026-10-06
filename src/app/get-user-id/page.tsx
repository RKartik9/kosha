import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default async function GetUserIdPage() {
  const { userId } = await auth()
  
  if (!userId) {
    redirect('/sign-in')
  }

  const code = "rounded-sm bg-paper px-2 py-1 font-mono text-xs text-ink"

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-14">
      <div className="index-card w-full max-w-2xl rounded-[4px] p-8 pb-14">
        <h1 className="mb-6 font-display text-5xl text-ink">
          Your Clerk User ID
        </h1>
        
        <div className="mb-6 rounded-sm border-2 border-ink bg-paper p-4">
          <p className="mb-2 font-semibold text-[11px] uppercase tracking-wider text-muted-foreground">User ID</p>
          <code className="select-all break-all font-mono text-lg text-free">{userId}</code>
        </div>

        <div className="space-y-6 text-sm text-ink">
          <div className="ruled-plain leading-7">
            <h3 className="font-semibold text-xs uppercase tracking-wider text-muted-foreground">Next steps</h3>
            <ol className="list-inside list-decimal">
              <li>Copy the User ID above (click to select all)</li>
              <li>Open <code className={code}>scripts/seed-admin.ts</code></li>
              <li>Replace <code className={code}>user_temp_admin</code> with your User ID</li>
              <li>Run: <code className={code}>pnpm seed:admin</code></li>
              <li>Visit <code className={code}>/admin</code> to access the dashboard</li>
            </ol>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/admin"
              className="inline-flex h-11 items-center rounded-sm bg-ink px-5 font-semibold text-xs uppercase tracking-wider text-paper hover:bg-marigold hover:text-[#1e1b4b]"
            >
              Go to admin desk →
            </Link>
            <Link
              href="/"
              className="inline-flex h-11 items-center rounded-sm border-2 border-ink px-5 font-semibold text-xs uppercase tracking-wider text-ink hover:bg-paper"
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
