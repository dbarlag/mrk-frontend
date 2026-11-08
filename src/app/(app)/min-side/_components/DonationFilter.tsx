"use client";

import { CalendarIcon } from "@navikt/aksel-icons";
import { Button, Suggestion } from "@norwegianredcross/designsystem";
import styles from "./sections.module.css";

type DonationFilterProps = {
  options: string[];
};

/** Calendar button + multi-select filter above "Enkle donasjoner". */
export function DonationFilter({ options }: DonationFilterProps) {
  return (
    <div className={styles.filter}>
      <Button icon variant="secondary" data-color="neutral" aria-label="Velg periode">
        <CalendarIcon aria-hidden />
      </Button>
      <Suggestion multiple className={styles.filterField}>
        <Suggestion.Input aria-label="Filtrer donasjoner" placeholder="Filter" />
        <Suggestion.Clear aria-label="Fjern filter" />
        <Suggestion.List>
          <Suggestion.Empty>Ingen treff</Suggestion.Empty>
          {options.map((o) => (
            <Suggestion.Option key={o} value={o}>
              {o}
            </Suggestion.Option>
          ))}
        </Suggestion.List>
      </Suggestion>
    </div>
  );
}
