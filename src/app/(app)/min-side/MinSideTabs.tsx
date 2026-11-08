"use client";

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

  return (
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
  );
}
