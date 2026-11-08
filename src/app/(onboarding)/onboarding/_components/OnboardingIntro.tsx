import { Heading, Paragraph } from "@norwegianredcross/designsystem";
import { SectionHeader } from "@/components/SectionHeader";
import styles from "./onboarding.module.css";

type OnboardingIntroProps = {
  /** Section title for this step ("Medlemskap", "Kompetanse", …). */
  section: string;
};

/** Welcome text shared by every onboarding step, followed by the step's section title. */
export function OnboardingIntro({ section }: OnboardingIntroProps) {
  return (
    <>
      <div className={styles.welcome}>
        <Heading level={1} data-size="sm" className={styles.bold}>
          Velkommen til Mitt Røde Kors
        </Heading>
        <Paragraph data-size="sm">
          Før du starter frivillighetstjenesten i Røde Kors, trenger vi noen
          opplysninger om deg. Dette hjelper oss med å lage profilen din og finne
          oppgaver som passer din erfaring, kompetanse og tilgjengelighet.
        </Paragraph>
      </div>
      <div className={styles.section}>
        <SectionHeader>{section}</SectionHeader>
      </div>
    </>
  );
}
