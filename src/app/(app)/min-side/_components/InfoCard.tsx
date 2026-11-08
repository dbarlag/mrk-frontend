import type { ComponentType, ReactNode, SVGProps } from "react";
import {
  Card,
  Divider,
  Heading,
  Link,
  Paragraph,
  Tag,
} from "@norwegianredcross/designsystem";
import type { Status } from "../_data";
import styles from "./InfoCard.module.css";

type Icon = ComponentType<SVGProps<SVGSVGElement> & { title?: string }>;

export type InfoRow = {
  label: string;
  value: ReactNode;
  icon?: Icon;
  /** Renders the value as a link (e.g. mailto:). */
  href?: string;
  /** Colours the value, e.g. "success" for a valid status or active end date. */
  tone?: "success";
};

type InfoCardProps = {
  title?: string;
  headingLevel?: 2 | 3 | 4;
  status?: Status;
  /** Overrides the tag colour derived from the status. */
  statusColor?: "success" | "info" | "warning" | "danger";
  /** Content above the rows (e.g. an avatar). */
  leading?: ReactNode;
  rows: InfoRow[];
  /** "tight" = 4px between rows (profile), "loose" = 16px (activity cards). */
  density?: "tight" | "loose";
  /** Buttons for the footer. A divider is drawn above them. */
  actions?: ReactNode;
};

const statusColor: Record<Status, "success" | "info" | "warning"> = {
  Pågående: "success",
  Fullført: "info",
  Inaktiv: "warning",
};

/**
 * White card with a title, optional status tag, icon/label/value rows and
 * a footer with actions. Used across all Min side tabs.
 */
export function InfoCard({
  title,
  headingLevel = 3,
  status,
  statusColor: statusColorOverride,
  leading,
  rows,
  density = "loose",
  actions,
}: InfoCardProps) {
  return (
    <Card className={styles.card} data-color="neutral">
      {leading}
      {(title || status) && (
        <div className={styles.top}>
          {title && (
            <Heading level={headingLevel} data-size="xs" className={styles.title}>
              {title}
            </Heading>
          )}
          {status && (
            <Tag data-color={statusColorOverride ?? statusColor[status]} className={styles.tag}>
              {status}
            </Tag>
          )}
        </div>
      )}
      <dl className={styles.rows} data-density={density}>
        {rows.map(({ label, value, icon: Icon, href, tone }) => (
          <div key={label} className={styles.row}>
            {Icon && <Icon aria-hidden className={styles.icon} />}
            <Paragraph data-size="sm" asChild>
              <dt className={styles.label}>{label}</dt>
            </Paragraph>
            <Paragraph data-size="sm" asChild>
              <dd className={styles.value} data-tone={tone}>
                {href ? (
                  <Link href={href} data-color="neutral">
                    {value}
                  </Link>
                ) : (
                  value
                )}
              </dd>
            </Paragraph>
          </div>
        ))}
      </dl>
      {actions && (
        <>
          <Divider />
          {/* Card text is neutral; actions use the brand colour. */}
          <div className={styles.actions} data-color="primary-color-red">
            {actions}
          </div>
        </>
      )}
    </Card>
  );
}
