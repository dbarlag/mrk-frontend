"use client";

import type { FormEvent, ReactNode } from "react";
import { useRouter } from "next/navigation";

type StepFormProps = {
  /** Route to go to once the browser's native validation passes. */
  next: string;
  className?: string;
  children: ReactNode;
};

/**
 * A real <form> with named, required fields. There is no backend yet, so a
 * valid submit just navigates to the next step instead of posting data
 * (which would otherwise end up in the URL).
 */
export function StepForm({ next, className, children }: StepFormProps) {
  const router = useRouter();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push(next);
  }

  return (
    <form className={className} onSubmit={handleSubmit}>
      {children}
    </form>
  );
}
