import type { Metadata } from "next";
import {
  Checkbox,
  Fieldset,
  FieldsetLegend,
} from "@norwegianredcross/designsystem";
import { OnboardingIntro } from "../_components/OnboardingIntro";
import { StepActions } from "../_components/StepActions";
import { StepForm } from "../_components/StepForm";
import styles from "../_components/onboarding.module.css";

export const metadata: Metadata = { title: "Kompetanse – Mitt Røde Kors" };

const languages = [
  { value: "norsk", label: "Norsk" },
  { value: "engelsk", label: "Engelsk" },
  { value: "arabisk", label: "Arabisk" },
  { value: "tysk", label: "Tysk" },
];

const licences = [
  { value: "S", label: "Snøscooter (S)" },
  { value: "T", label: "Traktor (T)" },
  { value: "B", label: "Personbil og varebil (B)" },
  { value: "C1", label: "Lett Lastebil (C1)" },
  { value: "C", label: "Lastebil (C)" },
  { value: "D1", label: "Minibuss (D1)" },
  { value: "D", label: "Buss (D)" },
];

export default function OnboardingStep2() {
  return (
    <StepForm next="/onboarding/3" className={styles.body}>
      <OnboardingIntro section="Kompetanse" />
      <div className={styles.cards}>
        <div className={styles.card}>
          <Fieldset className={styles.fieldset}>
            <FieldsetLegend className={styles.legend}>Språk</FieldsetLegend>
            {languages.map(({ value, label }) => (
              <Checkbox key={value} name="sprak" value={value} label={label} />
            ))}
          </Fieldset>
        </div>
        <div className={styles.card}>
          <Fieldset className={styles.fieldset}>
            <FieldsetLegend className={styles.legend}>
              Kjøretøy sertifikater
            </FieldsetLegend>
            {licences.map(({ value, label }) => (
              <Checkbox
                key={value}
                name="sertifikater"
                value={value}
                label={label}
              />
            ))}
          </Fieldset>
        </div>
      </div>
      <StepActions previous="/onboarding/1" />
    </StepForm>
  );
}
