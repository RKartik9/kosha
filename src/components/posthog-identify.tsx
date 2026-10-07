"use client";

import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import posthog from "posthog-js";

export function PostHogIdentify() {
  const { isLoaded, isSignedIn, user } = useUser();

  useEffect(() => {
    if (!isLoaded) return;

    if (isSignedIn && user) {
      if (posthog.get_distinct_id() === user.id) return;
      posthog.identify(user.id, {
        email: user.primaryEmailAddress?.emailAddress,
        name: user.fullName ?? undefined,
      });
    } else if (posthog.get_property("$user_state") === "identified") {
      posthog.reset();
    }
  }, [isLoaded, isSignedIn, user]);

  return null;
}
