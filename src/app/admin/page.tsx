import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import dbConnect from "@/lib/mongodb";
import LibrarySubmission from "@/models/LibrarySubmission";
import CategoryRequest from "@/models/CategoryRequest";
import AdminUser from "@/models/AdminUser";
import {
  approveSubmission,
  rejectSubmission,
  approveRequest,
  rejectRequest,
} from "@/actions/adminActions";

export default async function AdminPage() {
  // Use Clerk's auth() helper which works correctly in Next.js App Router server components
  const { userId } = await auth();

  // Not signed in → redirect to Clerk sign-in
  if (!userId) {
    redirect("/sign-in");
  }

  // Connect to DB and verify admin role
  await dbConnect();
  
  // First try to find by Clerk user ID
  let admin = await AdminUser.findOne({ clerkUserId: userId, role: "admin" }).lean();
  
  // If not found, try to match by email (for users who sign in with Google/social)
  if (!admin) {
    const user = await currentUser();
    if (user?.emailAddresses?.[0]?.emailAddress) {
      const email = user.emailAddresses[0].emailAddress;
      admin = await AdminUser.findOne({ email, role: "admin" }).lean();
    }
  }

  if (!admin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
        <div className="max-w-2xl p-8 bg-white dark:bg-slate-800 rounded-2xl shadow">
          <h1 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">Access denied</h1>
          <p className="text-sm text-slate-600 dark:text-slate-300">You must be an admin to view this page.</p>
        </div>
      </div>
    );
  }

  // Fetch data
  const [submissions, requests] = await Promise.all([
    LibrarySubmission.find().sort({ createdAt: -1 }).lean(),
    CategoryRequest.find().sort({ createdAt: -1 }).lean(),
  ]);

  // Render a simple dashboard showing counts and tables
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#0b1220] to-[#071028] text-white p-8">
      <div className="max-w-6xl mx-auto">
        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-sm text-slate-300/80 mt-1">Welcome back, {admin.name || admin.email || "Admin"} — overview of submissions</p>
          </div>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="p-6 bg-white/6 rounded-xl">
            <h3 className="text-sm text-slate-300">Library Submissions</h3>
            <p className="text-2xl font-bold mt-2">{submissions.length}</p>
          </div>
          <div className="p-6 bg-white/6 rounded-xl">
            <h3 className="text-sm text-slate-300">Category Requests</h3>
            <p className="text-2xl font-bold mt-2">{requests.length}</p>
          </div>
          <div className="p-6 bg-white/6 rounded-xl">
            <h3 className="text-sm text-slate-300">Pending Reviews</h3>
            <p className="text-2xl font-bold mt-2">{submissions.filter(s => s.status === 'pending').length + requests.filter(r => r.status === 'pending').length}</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Latest Library Submissions</h2>
          <div className="overflow-x-auto rounded-xl bg-white/5 p-2">
            <table className="min-w-full">
              <thead>
                <tr className="text-left text-sm text-slate-300/80 border-b border-slate-700/40">
                  <th className="py-3 px-4">Name</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Email</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Submitted</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((s: any) => (
                  <tr key={s._id} className="border-b border-slate-700/30">
                    <td className="py-3 px-4">{s.name}</td>
                    <td className="py-3 px-4">{s.category}</td>
                    <td className="py-3 px-4 text-slate-300/80">{s.submitterEmail}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <span className="capitalize">{s.status}</span>
                        <form action={approveSubmission} method="post">
                          <input type="hidden" name="id" value={String(s._id)} />
                          <button type="submit" className="ml-2 inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white text-sm">Approve</button>
                        </form>
                        <form action={rejectSubmission} method="post">
                          <input type="hidden" name="id" value={String(s._id)} />
                          <button type="submit" className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-600 hover:bg-rose-500 text-white text-sm">Reject</button>
                        </form>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm text-slate-400">{new Date(s.createdAt).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Latest Category Requests</h2>
          <div className="overflow-x-auto rounded-xl bg-white/5 p-2">
            <table className="min-w-full">
              <thead>
                <tr className="text-left text-sm text-slate-300/80 border-b border-slate-700/40">
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Requester</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Submitted</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((r: any) => (
                  <tr key={r._id} className="border-b border-slate-700/30">
                    <td className="py-3 px-4">{r.categoryName}</td>
                    <td className="py-3 px-4 text-slate-300/80">{r.requesterEmail}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <span className="capitalize">{r.status}</span>
                        <form action={approveRequest} method="post">
                          <input type="hidden" name="id" value={String(r._id)} />
                          <button type="submit" className="ml-2 inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white text-sm">Approve</button>
                        </form>
                        <form action={rejectRequest} method="post">
                          <input type="hidden" name="id" value={String(r._id)} />
                          <button type="submit" className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-600 hover:bg-rose-500 text-white text-sm">Reject</button>
                        </form>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm text-slate-400">{new Date(r.createdAt).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
