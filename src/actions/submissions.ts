"use server";

import dbConnect from "@/lib/mongodb";
import LibrarySubmission from "@/models/LibrarySubmission";
import CategoryRequest from "@/models/CategoryRequest";
import { captureServerEvent, captureServerException } from "@/lib/posthog-server";

export async function submitLibrary(
  formData: {
    name: string;
    description: string;
    url: string;
    githubUrl?: string;
    category: string;
    submitterEmail: string;
  },
  distinctId?: string
) {
  const phDistinctId = distinctId || formData.submitterEmail;
  try {
    await dbConnect();

    const submission = await LibrarySubmission.create({
      name: formData.name,
      description: formData.description,
      url: formData.url,
      githubUrl: formData.githubUrl || "",
      category: formData.category,
      submitterEmail: formData.submitterEmail,
    });

    await captureServerEvent(phDistinctId, "library_submitted", {
      name: formData.name,
      url: formData.url,
      category: formData.category,
      has_github: Boolean(formData.githubUrl),
    });

    return {
      success: true,
      message: "Library submitted successfully! We'll review it soon.",
      data: JSON.parse(JSON.stringify(submission)),
    };
  } catch (error: any) {
    console.error("Error submitting library:", error);
    await captureServerException(error, phDistinctId, { action: "submitLibrary" });
    return {
      success: false,
      message: error.message || "Failed to submit library. Please try again.",
    };
  }
}

export async function requestCategory(
  formData: {
    categoryName: string;
    description: string;
    examples?: string;
    requesterEmail: string;
  },
  distinctId?: string
) {
  const phDistinctId = distinctId || formData.requesterEmail;
  try {
    await dbConnect();

    const request = await CategoryRequest.create({
      categoryName: formData.categoryName,
      description: formData.description,
      examples: formData.examples || "",
      requesterEmail: formData.requesterEmail,
    });

    await captureServerEvent(phDistinctId, "category_requested", {
      category_name: formData.categoryName,
    });

    return {
      success: true,
      message: "Category request submitted successfully! We'll review it soon.",
      data: JSON.parse(JSON.stringify(request)),
    };
  } catch (error: any) {
    console.error("Error requesting category:", error);
    await captureServerException(error, phDistinctId, { action: "requestCategory" });
    return {
      success: false,
      message:
        error.message || "Failed to submit category request. Please try again.",
    };
  }
}
