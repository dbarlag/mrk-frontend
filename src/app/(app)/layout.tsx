import { AppHeader } from "@/components/AppHeader";
import { TabMenu } from "@/components/TabMenu";
import styles from "./layout.module.css";

export default function AppLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <AppHeader />
      <main className={styles.main}>{children}</main>
      <TabMenu />
    </>
  );
}
