import { AppHeader } from "@/components/AppHeader";

export default function OnboardingLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <AppHeader showUser={false} />
      <main>{children}</main>
    </>
  );
}
