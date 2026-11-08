"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CalendarIcon,
  HouseIcon,
  PersonGroupIcon,
  PersonIcon,
} from "@navikt/aksel-icons";
import { Paragraph } from "@norwegianredcross/designsystem";
import styles from "./TabMenu.module.css";

const items = [
  { href: "/", label: "Hjem", Icon: HouseIcon },
  { href: "/timeplan", label: "Timeplan", Icon: CalendarIcon },
  { href: "/registrer", label: "Bli frivillig", Icon: PersonGroupIcon },
  { href: "/min-side", label: "Min side", Icon: PersonIcon },
];

export function TabMenu() {
  const pathname = usePathname();

  return (
    <nav className={styles.menu} aria-label="Hovedmeny">
      {items.map(({ href, label, Icon }) => {
        const active =
          href === "/" ? pathname === "/" : pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            className={styles.item}
            aria-current={active ? "page" : undefined}
          >
            <Icon aria-hidden fontSize="1.5rem" />
            <Paragraph data-size="xs" asChild>
              <span className={styles.label}>{label}</span>
            </Paragraph>
          </Link>
        );
      })}
    </nav>
  );
}
