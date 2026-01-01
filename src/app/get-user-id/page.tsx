import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default async function GetUserIdPage() {
  const { userId } = await auth()
  
  if (!userId) {
    redirect('/sign-in')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#0b1220] to-[#071028] text-white p-8">
      <div className="max-w-2xl w-full p-8 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl">
        <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Your Clerk User ID
        </h1>
        
        <div className="mb-6 p-4 bg-slate-900/50 rounded-lg border border-slate-700/50">
          <p className="text-sm text-slate-400 mb-2">User ID:</p>
          <code className="text-lg font-mono text-emerald-400 break-all select-all">{userId}</code>
        </div>

        <div className="space-y-4 text-sm text-slate-300">
          <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <h3 className="font-semibold text-blue-300 mb-2">Next Steps:</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>Copy the User ID above (click to select all)</li>
              <li>Open <code className="px-2 py-1 bg-slate-800 rounded text-xs">scripts/seed-admin.ts</code></li>
              <li>Replace <code className="px-2 py-1 bg-slate-800 rounded text-xs">user_temp_admin</code> with your User ID</li>
              <li>Run: <code className="px-2 py-1 bg-slate-800 rounded text-xs">pnpm seed:admin</code></li>
              <li>Visit <code className="px-2 py-1 bg-slate-800 rounded text-xs">/admin</code> to access the dashboard</li>
            </ol>
          </div>

          <div className="flex gap-3">
            <Link
              href="/admin"
              className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors inline-block"
            >
              Go to Admin Dashboard →
            </Link>
            <Link
              href="/"
              className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors inline-block"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
