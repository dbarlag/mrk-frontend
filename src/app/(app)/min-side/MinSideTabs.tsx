"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  HandHeartIcon,
  HardHatIcon,
  HatSchoolIcon,
  PersonIcon,
} from "@navikt/aksel-icons";
import { Tabs, TabsList, TabsTab } from "@norwegianredcross/designsystem";
import styles from "./layout.module.css";

const tabs = [
  { href: "/min-side", label: "Profil", Icon: PersonIcon },
  { href: "/min-side/donasjoner", label: "Donasjoner", Icon: HandHeartIcon },
  { href: "/min-side/engasjement", label: "Engasjement", Icon: HardHatIcon },
  { href: "/min-side/kompetanse", label: "Kompetanse", Icon: HatSchoolIcon },
];

/** Tabs that navigate between the Min side sub-routes. */
export function MinSideTabs() {
  const pathname = usePathname();
  const router = useRouter();
  const listRef = useRef<HTMLDivElement>(null);

  // The tab row is wider than a phone; keep the active tab visible.
  useEffect(() => {
    listRef.current
      ?.querySelector('[aria-selected="true"]')
      ?.scrollIntoView({ block: "nearest", inline: "nearest" });
  }, [pathname]);

  return (
    <div ref={listRef}>
      <Tabs value={pathname} onChange={(href) => router.push(href)}>
        <TabsList className={styles.tabsList}>
          {tabs.map(({ href, label, Icon }) => (
            <TabsTab key={href} value={href}>
              <Icon aria-hidden />
              {label}
            </TabsTab>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
}
