(async function () {
  // placeholder to make TypeScript treat this file as a module
})();

import { NextResponse } from "next/server";
import { submitLibrary } from "@/actions/submissions";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const required = [
      "name",
      "description",
      "url",
      "category",
      "submitterEmail",
    ];
    for (const key of required) {
      if (!body[key]) {
        return NextResponse.json(
          { success: false, message: `Missing field: ${key}` },
          { status: 400 }
        );
      }
    }

    const result = await submitLibrary({
      name: String(body.name),
      description: String(body.description),
      url: String(body.url),
      githubUrl: body.githubUrl ? String(body.githubUrl) : undefined,
      category: String(body.category),
      submitterEmail: String(body.submitterEmail),
    });

    return NextResponse.json(result, { status: result.success ? 200 : 500 });
  } catch (err: any) {
    console.error("/api/submit-library error:", err);
    return NextResponse.json(
      { success: false, message: err?.message || "Server error" },
      { status: 500 }
    );
  }
}
