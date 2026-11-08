"use client";

import { useSearchParams } from "next/navigation";

/**
 * Demo switch until real data exists: `?demo=<value>` shows an alternative
 * state of a section (e.g. `?demo=ingen-avtale` on Donasjoner).
 */
export function useDemoState(value: string) {
  return useSearchParams().get("demo") === value;
}
