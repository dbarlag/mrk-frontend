import { Suspense } from "react";
import {
  Buildings3Icon,
  HardHatIcon,
  PersonGroupIcon,
  TimerPauseIcon,
  TimerStartIcon,
} from "@navikt/aksel-icons";
import { SectionHeader } from "@/components/SectionHeader";
import { InfoCard, type InfoRow } from "../_components/InfoCard";
import { MembershipSection } from "../_components/MembershipSection";
import styles from "../_components/sections.module.css";
import { activities, association, positions, roles } from "../_data";

const endDateTone = (status: string): InfoRow["tone"] =>
  status === "Pågående" ? "success" : undefined;

export default function EngasjementPage() {
  return (
    <>
      <section className={styles.section}>
        <SectionHeader>Medlemskap</SectionHeader>
        {/* Reads ?demo=ikke-medlem, so it renders on the client. */}
        <Suspense>
          <MembershipSection />
        </Suspense>
      </section>

      <section className={styles.section}>
        <SectionHeader>Aktiviteter</SectionHeader>
        {activities.map((a, i) => (
          <InfoCard
            key={`${a.title}-${i}`}
            title={a.title}
            status={a.status}
            rows={[
              { icon: Buildings3Icon, label: "Førening:", value: association },
              { icon: TimerStartIcon, label: "Startdato:", value: a.startDate },
              { icon: TimerPauseIcon, label: "Sluttdato", value: a.endDate, tone: endDateTone(a.status) },
              { icon: PersonGroupIcon, label: "Gruppe:", value: a.group },
            ]}
          />
        ))}
      </section>

      <section className={styles.section}>
        <SectionHeader>Roller</SectionHeader>
        {roles.map((r) => (
          <InfoCard
            key={r.title}
            title={r.title}
            status={r.status}
            rows={[
              { icon: Buildings3Icon, label: "Førening:", value: association },
              { icon: HardHatIcon, label: "Aktivitet:", value: r.activity },
              { icon: TimerStartIcon, label: "Startdato:", value: r.startDate },
              { icon: TimerPauseIcon, label: "Sluttdato", value: r.endDate, tone: endDateTone(r.status) },
              { icon: PersonGroupIcon, label: "Gruppe:", value: r.group },
            ]}
          />
        ))}
      </section>

      <section className={styles.section}>
        <SectionHeader>Verv</SectionHeader>
        {positions.map((p) => (
          <InfoCard
            key={p.title}
            title={p.title}
            status={p.status}
            rows={[
              { icon: Buildings3Icon, label: "Førening:", value: association },
              { icon: TimerStartIcon, label: "Startdato:", value: p.startDate },
              { icon: TimerPauseIcon, label: "Sluttdato", value: p.endDate, tone: endDateTone(p.status) },
            ]}
          />
        ))}
      </section>
    </>
  );
}
