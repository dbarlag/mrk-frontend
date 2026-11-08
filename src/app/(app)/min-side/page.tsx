import {
  BagdeIcon,
  CalendarIcon,
  CheckmarkCircleIcon,
  EnvelopeClosedIcon,
  ExternalLinkIcon,
  LocationPinIcon,
  PencilIcon,
  PersonGroupIcon,
  PhoneIcon,
  PlusIcon,
  TrashIcon,
  UploadIcon,
} from "@navikt/aksel-icons";
import { Avatar, Button } from "@norwegianredcross/designsystem";
import { SectionHeader } from "@/components/SectionHeader";
import { InfoCard } from "./_components/InfoCard";
import styles from "./_components/sections.module.css";
import { declarations, nextOfKin, policeCertificate, profile } from "./_data";

export default function ProfilPage() {
  return (
    <>
      <InfoCard
        headingLevel={2}
        title={profile.name}
        density="tight"
        layout="split"
        leading={
          <Avatar
            aria-hidden
            initials={profile.initials}
            data-color="info"
            className={styles.avatar}
          />
        }
        rows={[
          { icon: CalendarIcon, label: "Fødselsdato:", value: profile.birthDate },
          { icon: EnvelopeClosedIcon, label: "Røde Kors e-post:", value: profile.redCrossEmail },
          { icon: BagdeIcon, label: "Røde Kors nr.:", value: profile.memberNumber },
          { icon: PhoneIcon, label: "Tel. nummer:", value: profile.phone },
          { icon: EnvelopeClosedIcon, label: "E-post:", value: profile.email, href: `mailto:${profile.email}` },
          { icon: LocationPinIcon, label: "Adresse:", value: profile.address },
        ]}
        actions={
          <Button>
            Endre <PencilIcon aria-hidden />
          </Button>
        }
      />

      <section className={styles.section}>
        <SectionHeader>Erklæringer</SectionHeader>
        {declarations.map((d) => (
          <InfoCard
            key={d.title}
            title={d.title}
            rows={[{ icon: CheckmarkCircleIcon, label: "Lest og bekreftet:", value: d.confirmed }]}
            actions={
              <Button asChild>
                <a href={d.href}>
                  Les <ExternalLinkIcon aria-hidden />
                </a>
              </Button>
            }
          />
        ))}
        <InfoCard
          title="Politiattest"
          density="tight"
          rows={[
            { label: "Utstedt dato:", value: policeCertificate.issued },
            { label: "Status:", value: policeCertificate.status, tone: "success" },
          ]}
          actions={
            <Button>
              Laste opp <UploadIcon aria-hidden />
            </Button>
          }
        />
      </section>

      <section className={styles.section}>
        <SectionHeader

          action={
            <Button data-color="neutral">
              Legge til <PlusIcon aria-hidden />
            </Button>
          }
        >
          Pårørende
        </SectionHeader>
        {nextOfKin.map((p) => (
          <InfoCard
            key={p.title}
            title={p.title}
            density="tight"
            rows={[
              { icon: PersonGroupIcon, label: "Navn:", value: p.name },
              { icon: PersonGroupIcon, label: "Relasjon:", value: p.relation },
              { icon: PhoneIcon, label: "Telefon:", value: p.phone },
              { icon: EnvelopeClosedIcon, label: "E-post:", value: p.email, href: `mailto:${p.email}` },
            ]}
            actions={
              <>
                <Button>
                  Fjern <TrashIcon aria-hidden />
                </Button>
                <Button>
                  Endre <PencilIcon aria-hidden />
                </Button>
              </>
            }
          />
        ))}
      </section>
    </>
  );
}
