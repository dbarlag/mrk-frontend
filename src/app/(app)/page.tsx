import { Heading } from "@norwegianredcross/designsystem";
import styles from "@/components/Page.module.css";

export default function Home() {
  return (
    <div className={styles.body}>
      <Heading level={1} data-size="lg">
        Hei Ola Norman
      </Heading>
    </div>
  );
}
