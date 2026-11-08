import Link from "next/link";
import { ArrowLeftIcon, ChevronLeftIcon } from "@navikt/aksel-icons";
import { Button, Heading } from "@norwegianredcross/designsystem";
import styles from "./PageTitle.module.css";

type PageTitleProps = {
  children: string;
  /** Where the back button goes. Omit to hide it. */
  backHref?: string;
};

/**
 * Sub-page title with an optional back button.
 * Mobile: "< Min timeplan" on one row. Desktop: "← Tilbake" above a large heading.
 */
export function PageTitle({ children, backHref }: PageTitleProps) {
  return (
    <div className={styles.title}>
      {backHref && (
        <Button
          asChild
          variant="tertiary"
          data-color="neutral"
          className={styles.back}
        >
          <Link href={backHref}>
            <ChevronLeftIcon aria-hidden fontSize="1.75rem" className={styles.mobileIcon} />
            <ArrowLeftIcon aria-hidden className={styles.desktopIcon} />
            <span className={styles.backLabel}>Tilbake</span>
          </Link>
        </Button>
      )}
      <Heading level={1} data-size="md" className={styles.heading}>
        {children}
      </Heading>
    </div>
  );
}
