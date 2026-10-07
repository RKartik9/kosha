"use server";

import dbConnect from "@/lib/mongodb";
import LibrarySubmission from "@/models/LibrarySubmission";
import CategoryRequest from "@/models/CategoryRequest";
import AdminUser from "@/models/AdminUser";
import { auth, currentUser } from "@clerk/nextjs/server";
import { captureServerEvent } from "@/lib/posthog-server";

async function trackAdminEvent(event: string, id: string) {
  const { userId } = await auth();
  if (userId) await captureServerEvent(userId, event, { id });
}

async function ensureAdmin() {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Not authenticated");
  }

  await dbConnect();

  // First try to find by Clerk user ID
  let admin = await AdminUser.findOne({
    clerkUserId: userId,
    role: "admin",
  }).lean();

  // If not found, try to match by email (for users who sign in with Google/social)
  if (!admin) {
    const user = await currentUser();
    if (user?.emailAddresses?.[0]?.emailAddress) {
      const email = user.emailAddresses[0].emailAddress;
      admin = await AdminUser.findOne({ email, role: "admin" }).lean();
    }
  }

  if (!admin) {
    throw new Error("Not authorized");
  }
  return admin;
}

export async function approveSubmission(formData: FormData) {
  await ensureAdmin();
  const id = formData.get("id") as string | null;
  if (!id) throw new Error("Missing id");
  await dbConnect();
  await LibrarySubmission.findByIdAndUpdate(
    id,
    { status: "approved" },
    { new: true }
  ).lean();
  await trackAdminEvent("submission_approved", id);
}

export async function rejectSubmission(formData: FormData) {
  await ensureAdmin();
  const id = formData.get("id") as string | null;
  if (!id) throw new Error("Missing id");
  await dbConnect();
  await LibrarySubmission.findByIdAndUpdate(
    id,
    { status: "rejected" },
    { new: true }
  ).lean();
  await trackAdminEvent("submission_rejected", id);
}

export async function approveRequest(formData: FormData) {
  await ensureAdmin();
  const id = formData.get("id") as string | null;
  if (!id) throw new Error("Missing id");
  await dbConnect();
  await CategoryRequest.findByIdAndUpdate(
    id,
    { status: "approved" },
    { new: true }
  ).lean();
  await trackAdminEvent("category_request_approved", id);
}

export async function rejectRequest(formData: FormData) {
  await ensureAdmin();
  const id = formData.get("id") as string | null;
  if (!id) throw new Error("Missing id");
  await dbConnect();
  await CategoryRequest.findByIdAndUpdate(
    id,
    { status: "rejected" },
    { new: true }
  ).lean();
  await trackAdminEvent("category_request_rejected", id);
}
