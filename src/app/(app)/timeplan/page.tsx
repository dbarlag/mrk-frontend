import type { Metadata } from "next";
import { PageTitle } from "@/components/PageTitle";
import pageStyles from "@/components/Page.module.css";
import { TimeplanView } from "./_components/TimeplanView";

export const metadata: Metadata = { title: "Min timeplan" };

export default function TimeplanPage() {
  return (
    <div className={pageStyles.body}>
      <PageTitle backHref="/">Min timeplan</PageTitle>
      <TimeplanView />
    </div>
  );
}
