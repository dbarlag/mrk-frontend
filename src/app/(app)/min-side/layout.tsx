import { PageTitle } from "@/components/PageTitle";
import pageStyles from "@/components/Page.module.css";
import { MinSideTabs } from "./MinSideTabs";

export default function MinSideLayout({ children }: LayoutProps<"/min-side">) {
  return (
    <div className={pageStyles.body}>
      <PageTitle backHref="/">Min side</PageTitle>
      <MinSideTabs />
      {children}
    </div>
  );
}
