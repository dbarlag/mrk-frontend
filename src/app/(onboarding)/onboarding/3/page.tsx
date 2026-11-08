import type { Metadata } from "next";
import { ExternalLinkIcon } from "@navikt/aksel-icons";
import {
  Checkbox,
  Fieldset,
  FieldsetDescription,
  FieldsetLegend,
  Link,
  Paragraph,
  Radio,
} from "@norwegianredcross/designsystem";
import { OnboardingIntro } from "../_components/OnboardingIntro";
import { StepActions } from "../_components/StepActions";
import { StepForm } from "../_components/StepForm";
import styles from "../_components/onboarding.module.css";

export const metadata: Metadata = { title: "Medlemskap – Mitt Røde Kors" };

// Placeholder targets until the real declaration pages exist.
const declarations = [
  { name: "etikkerklaering", legend: "Etikkerklæringen*", href: "#" },
  { name: "taushetserklaering", legend: "Taushetserklæringen*", href: "#" },
];

const memberships = [
  { value: "medlemskap", label: "Medlemskap (300 kr pr. år)" },
  { value: "familiemedlemskap", label: "Familiemedlemskap (600 kr pr. år)" },
  { value: "ikke-na", label: "Ikke nå" },
];

export default function OnboardingStep3() {
  return (
    <StepForm next="/" className={styles.body}>
      <OnboardingIntro section="Medlemskap" />
      <div className={styles.cards}>
        <div className={styles.card}>
          {declarations.map(({ name, legend, href }) => (
            <Fieldset
              key={name}
              className={`${styles.fieldset} ${styles.declaration}`}
            >
              <FieldsetLegend className={styles.legend}>
                {legend}
              </FieldsetLegend>
              <Checkbox
                name={name}
                value="bekreftet"
                label="Les og bekreft"
                required
              />
              <Link
                href={href}
                target="_blank"
                rel="noreferrer"
                className={styles.externalLink}
              >
                <ExternalLinkIcon aria-hidden fontSize="1.5rem" />
                Les mer
              </Link>
            </Fieldset>
          ))}
        </div>
        <div className={styles.card}>
          <Fieldset className={styles.fieldset}>
            <FieldsetLegend className={styles.legend}>
              Medlemskap
            </FieldsetLegend>
            <FieldsetDescription>
              Som medlem støtter du vårt humanitære arbeid gjennom
              medlemskontingenten. Du får også stemmerett på lokalforeningens
              årsmøte og kan være med å sette retning for det humanitære
              arbeidet.
            </FieldsetDescription>
            {memberships.map(({ value, label }) => (
              <Radio
                key={value}
                name="medlemskap"
                value={value}
                label={label}
                required
              />
            ))}
            <Paragraph data-size="sm">
              Spørsmål om medlemskap?
              <br />
              Ta gjerne kontakt med oss på{" "}
              <Link href="mailto:medlem@redcross.no">medlem@redcross.no</Link>
            </Paragraph>
          </Fieldset>
        </div>
      </div>
      <StepActions previous="/onboarding/2" />
    </StepForm>
  );
}
