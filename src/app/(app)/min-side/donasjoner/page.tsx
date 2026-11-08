import { Suspense } from "react";
import { CalendarIcon, ExternalLinkIcon, KronerIcon } from "@navikt/aksel-icons";
import { Button } from "@norwegianredcross/designsystem";
import { SectionHeader } from "@/components/SectionHeader";
import { DonationFilter } from "../_components/DonationFilter";
import { FastGiverSection } from "../_components/FastGiverSection";
import { InfoCard } from "../_components/InfoCard";
import styles from "../_components/sections.module.css";
import { singleDonations } from "../_data";

export default function DonasjonerPage() {
  const campaigns = [...new Set(singleDonations.map((d) => d.title))];

  return (
    <>
      <section className={styles.section}>
        <SectionHeader>Fast giver</SectionHeader>
        {/* Reads ?demo=ingen-avtale, so it renders on the client. */}
        <Suspense>
          <FastGiverSection />
        </Suspense>
      </section>

      <section className={styles.section}>
        <SectionHeader>Enkle donasjoner</SectionHeader>
        <DonationFilter options={campaigns} />
        {singleDonations.map((d) => (
          <InfoCard
            key={d.id}
            title={d.title}
            density="tight"
            rows={[
              { icon: CalendarIcon, label: "Dato", value: d.date },
              { icon: KronerIcon, label: "Beløp:", value: d.amount },
            ]}
            actions={
              <Button asChild>
                <a href={d.receiptHref}>
                  Kvittering <ExternalLinkIcon aria-hidden />
                </a>
              </Button>
            }
          />
        ))}
      </section>
    </>
  );
}
