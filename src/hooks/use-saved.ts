"use client";

import { useCallback, useSyncExternalStore } from "react";

const KEY = "kosha:saved";
const EMPTY: string[] = [];
const listeners = new Set<() => void>();
let cache: string[] | null = null;

function read(): string[] {
  if (cache) return cache;
  try {
    const parsed = JSON.parse(localStorage.getItem(KEY) ?? "[]");
    cache = Array.isArray(parsed) ? parsed.filter((s) => typeof s === "string") : [];
  } catch {
    cache = [];
  }
  return cache!;
}

function write(next: string[]) {
  cache = next;
  localStorage.setItem(KEY, JSON.stringify(next));
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const onStorage = (e: StorageEvent) => {
    if (e.key === KEY) {
      cache = null;
      listener();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

export function useSaved() {
  const saved = useSyncExternalStore(subscribe, read, () => EMPTY);

  const isSaved = useCallback((slug: string) => saved.includes(slug), [saved]);

  const toggle = useCallback((slug: string) => {
    const current = read();
    write(
      current.includes(slug)
        ? current.filter((s) => s !== slug)
        : [...current, slug]
    );
  }, []);

  const clear = useCallback(() => write([]), []);

  return { saved, isSaved, toggle, clear };
}
