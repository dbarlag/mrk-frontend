import Link from "next/link";
import { Button } from "@norwegianredcross/designsystem";
import styles from "./onboarding.module.css";

type StepActionsProps = {
  /** Previous step. Omit on the first step. */
  previous?: string;
};

/** "Forrige" (link back) and "Neste" (submits the step form). */
export function StepActions({ previous }: StepActionsProps) {
  return (
    <div className={styles.actions}>
      {previous && (
        <Button asChild variant="secondary" data-color="primary-color-red">
          <Link href={previous}>Forrige</Link>
        </Button>
      )}
      <Button type="submit" data-color="primary-color-red">
        Neste
      </Button>
    </div>
  );
}
