import { PostHog } from "posthog-node";

export default function PostHogClient() {
  return new PostHog(process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN!, {
    host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    flushAt: 1,
    flushInterval: 0,
  });
}

export async function captureServerEvent(
  distinctId: string,
  event: string,
  properties?: Record<string, unknown>
) {
  const posthog = PostHogClient();
  try {
    posthog.capture({ distinctId, event, properties });
  } finally {
    await posthog.shutdown();
  }
}

export async function captureServerException(
  error: unknown,
  distinctId?: string,
  properties?: Record<string, unknown>
) {
  const posthog = PostHogClient();
  try {
    posthog.captureException(error, distinctId, properties);
  } finally {
    await posthog.shutdown();
  }
}
