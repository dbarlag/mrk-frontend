"use client";

import Link from "next/link";
import { Header } from "@norwegianredcross/designsystem";

type AppHeaderProps = {
  /** Show the signed-in user (hidden during onboarding). */
  showUser?: boolean;
};

// Demo user until authentication is wired up.
const user = { name: "Ola Norman", avatarSrc: "/demo/avatar.jpg" };

// "Mitt Røde Kors" wordmark. On mobile the Header hides the Red Cross logo
// and shows only this secondary logo slot.
const logo = (
  <Link href="/">
    {/* eslint-disable-next-line @next/next/no-img-element -- SVG wordmark at its native size */}
    <img src="/brand/mitt-rode-kors.svg" alt="Mitt Røde Kors" width={190} height={64} />
  </Link>
);

export function AppHeader({ showUser = true }: AppHeaderProps) {
  return (
    <Header
      secondaryLogo={logo}
      showUser={showUser}
      userName={showUser ? user.name : undefined}
      userAvatarSrc={showUser ? user.avatarSrc : undefined}
      showModeToggle
      showLanguageSwitch
    />
  );
}
