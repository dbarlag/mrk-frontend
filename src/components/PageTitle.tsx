import Link from "next/link";
import { ChevronLeftIcon } from "@navikt/aksel-icons";
import { Button, Heading } from "@norwegianredcross/designsystem";
import styles from "./PageTitle.module.css";

type PageTitleProps = {
  children: string;
  /** Where the back button goes. Omit to hide it. */
  backHref?: string;
};

/** Sub-page title with an optional back button ("< Min timeplan"). */
export function PageTitle({ children, backHref }: PageTitleProps) {
  return (
    <div className={styles.title}>
      {backHref && (
        <Button asChild icon variant="tertiary" data-color="neutral">
          <Link href={backHref} aria-label="Tilbake">
            <ChevronLeftIcon aria-hidden fontSize="1.75rem" />
          </Link>
        </Button>
      )}
      <Heading level={1} data-size="md" className={styles.heading}>
        {children}
      </Heading>
    </div>
  );
}
