"use server";

import dbConnect from "@/lib/mongodb";
import LibrarySubmission from "@/models/LibrarySubmission";
import CategoryRequest from "@/models/CategoryRequest";

export async function submitLibrary(formData: {
  name: string;
  description: string;
  url: string;
  githubUrl?: string;
  category: string;
  submitterEmail: string;
}) {
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

    return {
      success: true,
      message: "Library submitted successfully! We'll review it soon.",
      data: JSON.parse(JSON.stringify(submission)),
    };
  } catch (error: any) {
    console.error("Error submitting library:", error);
    return {
      success: false,
      message: error.message || "Failed to submit library. Please try again.",
    };
  }
}

export async function requestCategory(formData: {
  categoryName: string;
  description: string;
  examples?: string;
  requesterEmail: string;
}) {
  try {
    await dbConnect();

    const request = await CategoryRequest.create({
      categoryName: formData.categoryName,
      description: formData.description,
      examples: formData.examples || "",
      requesterEmail: formData.requesterEmail,
    });

    return {
      success: true,
      message: "Category request submitted successfully! We'll review it soon.",
      data: JSON.parse(JSON.stringify(request)),
    };
  } catch (error: any) {
    console.error("Error requesting category:", error);
    return {
      success: false,
      message:
        error.message || "Failed to submit category request. Please try again.",
    };
  }
}
