"use client";

import Link from "next/link";
import { Header } from "@norwegianredcross/designsystem";

type AppHeaderProps = {
  /** Show the signed-in user and navigation (hidden during onboarding). */
  showUser?: boolean;
};

// Demo user until authentication is wired up.
const user = { name: "Ola Norman", avatarSrc: "/demo/avatar.jpg" };

// Desktop navigation row. On mobile the Header puts these in its menu, and the
// bottom TabMenu is the primary navigation.
const navItems = [
  { label: "Min timeplan", href: "/timeplan" },
  { label: "Min side", href: "/min-side" },
  { label: "Nyttig", href: "/#nyttig" },
  { label: "Læring", href: "/min-side/kompetanse" },
];

// "Mitt Røde Kors" wordmark. On mobile the Header hides the Red Cross logo
// and shows only this secondary logo slot; on desktop both are shown.
const logo = (
  <Link href="/">
    {/* eslint-disable-next-line @next/next/no-img-element -- SVG wordmark at its native size */}
    <img src="/brand/mitt-rode-kors.svg" alt="Mitt Røde Kors" width={190} height={64} className="mrk-wordmark" />
  </Link>
);

export function AppHeader({ showUser = true }: AppHeaderProps) {
  return (
    <Header
      secondaryLogo={logo}
      showHeaderExtension
      extensionColor="tinted"
      showNavItems={showUser}
      navItems={showUser ? navItems : undefined}
      showMenuButton={false}
      showUser={showUser}
      userName={showUser ? user.name : undefined}
      userAvatarSrc={showUser ? user.avatarSrc : undefined}
      showModeToggle
      showLanguageSwitch
    />
  );
}
