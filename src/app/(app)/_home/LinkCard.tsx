import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import { ChevronRightIcon } from "@navikt/aksel-icons";
import { Heading, Paragraph } from "@norwegianredcross/designsystem";
import styles from "./LinkCard.module.css";

type LinkCardProps = {
  href: string;
  title: string;
  description: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

/** Whole-card link with a tinted icon tile, title, description and chevron. */
export function LinkCard({ href, title, description, Icon }: LinkCardProps) {
  return (
    <Link href={href} className={styles.card}>
      <span className={styles.icon}>
        <Icon aria-hidden fontSize="2.5rem" />
      </span>
      <span className={styles.body}>
        <Heading level={2} data-size="sm" className={styles.title}>
          {title}
        </Heading>
        <Paragraph data-size="sm">{description}</Paragraph>
      </span>
      <span className={styles.chevron} aria-hidden>
        <ChevronRightIcon fontSize="1.75rem" />
      </span>
    </Link>
  );
}
