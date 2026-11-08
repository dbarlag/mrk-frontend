import type { Metadata } from "next";
import { CalendarIcon } from "@navikt/aksel-icons";
import { DateInput, Paragraph, Textfield } from "@norwegianredcross/designsystem";
import { OnboardingIntro } from "../_components/OnboardingIntro";
import { ProfilePhotoField } from "../_components/ProfilePhotoField";
import { StepActions } from "../_components/StepActions";
import { StepForm } from "../_components/StepForm";
import styles from "../_components/onboarding.module.css";

export const metadata: Metadata = { title: "Om deg – Mitt Røde Kors" };

export default function OnboardingStep1() {
  return (
    <StepForm next="/onboarding/2" className={styles.body}>
      <OnboardingIntro section="Medlemskap" />
      <div className={styles.card}>
        <ProfilePhotoField />
        <div className={styles.fields}>
          <Textfield label="Navn*" name="fornavn" placeholder="Navn" autoComplete="given-name" required />
          <Textfield label="Etternavn*" name="etternavn" placeholder="Etternavn" autoComplete="family-name" required />
          <Textfield label="Epost*" name="epost" type="email" placeholder="Epost" autoComplete="email" required />
          <Textfield label="Telefon Nummer*" name="telefon" type="tel" placeholder="Telefon" autoComplete="tel" required />
          <DateInput
            label="Fødselsdato*"
            name="fodselsdato"
            placeholder="Velg dato"
            autoComplete="bday"
            required
            suffixIcon={<CalendarIcon aria-hidden />}
          />
          <Paragraph data-size="xs">* Obligatorisk</Paragraph>
        </div>
      </div>
      <StepActions />
    </StepForm>
  );
}
