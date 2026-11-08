import type { Metadata } from "next";
import { ChevronRightIcon } from "@navikt/aksel-icons";
import { Button, Heading, Paragraph, Textfield } from "@norwegianredcross/designsystem";
import { StepForm } from "@/app/(onboarding)/onboarding/_components/StepForm";
import styles from "./registrer.module.css";

export const metadata: Metadata = { title: "Bli frivillig – Mitt Røde Kors" };

export default function RegistrerPage() {
  return (
    <div className={styles.page}>
      <div className={styles.tab} aria-hidden />
      <StepForm next="/onboarding/1" className={styles.panel}>
        <div className={styles.intro}>
          <Heading level={1} data-size="md" className={styles.heading}>
            Registrer deg
          </Heading>
          <Paragraph>
            Neste steg er å registrere deg i vårt system Mitt Røde Kors. Her
            følger vi deg videre gjennom prosessen for å bli frivillig i Røde
            Kors.
          </Paragraph>
          <Paragraph className={styles.steps}>
            Registrer deg → Introduksjonskurs → Bli kjent med din lokalforening
          </Paragraph>
        </div>
        <div className={styles.fields}>
          <Textfield label="Navn*" name="fornavn" placeholder="Navn" autoComplete="given-name" required />
          <Textfield label="Etternavn*" name="etternavn" placeholder="Etternavn" autoComplete="family-name" required />
          <Textfield label="Epost*" name="epost" type="email" placeholder="Epost" autoComplete="email" required />
        </div>
        <Button
          type="submit"
          data-size="lg"
          data-color="primary-color-red"
          className={styles.submit}
        >
          Registrer deg
          <ChevronRightIcon aria-hidden />
        </Button>
      </StepForm>
    </div>
  );
}
