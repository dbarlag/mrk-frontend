import { Alert, Button, Heading, Paragraph } from "@norwegianredcross/designsystem";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Heading level={1} data-size="xl">
        MRK
      </Heading>
      <Paragraph>
        Frontend bygget med Røde Kors designsystem.
      </Paragraph>
      <Alert data-color="info">Designsystemet er satt opp.</Alert>
      <div>
        <Button>Kom i gang</Button>
      </div>
    </main>
  );
}
