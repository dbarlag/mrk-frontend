import type { ReactNode } from "react";
import { Divider, Heading } from "@norwegianredcross/designsystem";
import styles from "./SectionHeader.module.css";

type SectionHeaderProps = {
  children: ReactNode;
  level?: 2 | 3;
  /** Optional action rendered to the right of the heading (e.g. "Legge til"). */
  action?: ReactNode;
};

/** Section title with a divider underneath ("Nytting", "Medlemskap", …). */
export function SectionHeader({ children, level = 2, action }: SectionHeaderProps) {
  return (
    <div className={styles.header}>
      <div className={styles.row}>
        <Heading level={level} data-size="sm">
          {children}
        </Heading>
        {action}
      </div>
      <Divider />
    </div>
  );
}
