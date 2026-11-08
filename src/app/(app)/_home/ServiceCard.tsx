import { ExternalLinkIcon } from "@navikt/aksel-icons";
import {
  Card,
  Heading,
  Link,
  ListItem,
  ListUnordered,
  Paragraph,
} from "@norwegianredcross/designsystem";
import styles from "./ServiceCard.module.css";

export type ServiceGroup = {
  title: string;
  links: { label: string; href: string; description: string }[];
};

/** Card listing groups of external services with descriptions. */
export function ServiceCard({ groups }: { groups: ServiceGroup[] }) {
  return (
    <Card data-color="neutral" className={styles.card}>
      {groups.map((group) => (
        <div key={group.title} className={styles.group}>
          <Heading level={3} data-size="2xs">
            {group.title}
          </Heading>
          <ListUnordered className={styles.list}>
            {group.links.map((link) => (
              <ListItem key={link.label} className={styles.item}>
                <Link href={link.href} target="_blank" rel="noreferrer" data-color="neutral">
                  {link.label}
                  <ExternalLinkIcon title="(åpnes i ny fane)" />
                </Link>
                <Paragraph data-size="xs" className={styles.description}>
                  {link.description}
                </Paragraph>
              </ListItem>
            ))}
          </ListUnordered>
        </div>
      ))}
    </Card>
  );
}
