import { Buildings3Icon, CalendarIcon, PencilIcon, TenancyIcon } from "@navikt/aksel-icons";
import { Button } from "@norwegianredcross/designsystem";
import { SectionHeader } from "@/components/SectionHeader";
import { InfoCard } from "../_components/InfoCard";
import styles from "../_components/sections.module.css";
import { association, certificates, courses, languages } from "../_data";

const editButton = (
  <Button>
    Endre <PencilIcon aria-hidden />
  </Button>
);

const withColon = (rows: { label: string; value: string }[]) =>
  rows.map((r) => ({ label: `${r.label}:`, value: r.value }));

export default function KompetansePage() {
  return (
    <>
      <section className={styles.section}>
        <SectionHeader>Kurser</SectionHeader>
        {courses.map((c) => (
          <InfoCard
            key={c.title}
            title={c.title}
            status={c.status}
            statusColor="success"
            rows={[
              { icon: Buildings3Icon, label: "Førening", value: association },
              { icon: CalendarIcon, label: "Dato", value: c.date },
              { icon: TenancyIcon, label: "Type:", value: c.type },
            ]}
          />
        ))}
      </section>

      <section className={styles.section}>
        <SectionHeader>Språk</SectionHeader>
        <InfoCard rows={withColon(languages)} actions={editButton} />
      </section>

      <section className={styles.section}>
        <SectionHeader>Sertifikater</SectionHeader>
        <InfoCard rows={withColon(certificates)} actions={editButton} />
      </section>
    </>
  );
}
