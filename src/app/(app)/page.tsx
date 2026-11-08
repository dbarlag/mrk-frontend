import {
  CalendarIcon,
  HatSchoolIcon,
  MegaphoneSpeakingIcon,
  PersonIcon,
} from "@navikt/aksel-icons";
import { Heading, Paragraph } from "@norwegianredcross/designsystem";
import { SectionHeader } from "@/components/SectionHeader";
import pageStyles from "@/components/Page.module.css";
import { ContentCard } from "./_home/ContentCard";
import { LinkCard } from "./_home/LinkCard";
import { ServiceCard, type ServiceGroup } from "./_home/ServiceCard";
import styles from "./page.module.css";

const shortcuts = [
  { href: "/min-side", title: "Min profil", Icon: PersonIcon },
  { href: "/timeplan", title: "Min timeplan", Icon: CalendarIcon },
  { href: "/min-side/engasjement", title: "Nytting", Icon: MegaphoneSpeakingIcon },
  { href: "/min-side/kompetanse", title: "Læring", Icon: HatSchoolIcon },
];

// Placeholder content from the design.
const articles = [1, 2].map((id) => ({
  id,
  image: "/demo/card-placeholder.png",
  subtitle: "Subtitle top",
  title: "Card title",
  text: "Most provide as with carried business are much better more the perfected designer. Writing slightly explain desk unable at supposedly about this",
}));

// TODO: replace "#" with the real service URLs.
const serviceCards: ServiceGroup[][] = [
  [
    {
      title: "Administrasjon",
      links: [
        { label: "Korsveien", href: "#", description: "Intranett / Sharepoint / Office 360." },
      ],
    },
    {
      title: "Planlegging og rapportering",
      links: [
        { label: "Kova", href: "#", description: "Vaktplanlegging og påmelding." },
        { label: "ID-kort for Hjelpekorpset", href: "#", description: "Bestilling av ID-kort." },
        { label: "Bestill reise", href: "#", description: "Informasjon om bestilling av reiser som frivillig." },
      ],
    },
  ],
  [
    {
      title: "Varsling",
      links: [
        {
          label: "Varsling av kritikkverdige forhold",
          href: "#",
          description: "Meld forhold som anses som uetiske, skadelige, eller i strid med forskrifter.",
        },
      ],
    },
    {
      title: "Kurs og læring",
      links: [
        {
          label: "E-læring (Didac)",
          href: "#",
          description: "E-læringsplattform for opplæring innen førstehjelp, beredskap og andre ferdigheter.",
        },
        { label: "Ressurssystemet", href: "#", description: "Kursadministrasjon og påmelding." },
      ],
    },
  ],
];

export default function Home() {
  return (
    <div className={pageStyles.body}>
      <Heading level={1} data-size="lg" className={styles.greeting}>
        Hei Ola Norman
      </Heading>

      <section className={styles.welcome}>
        <Heading level={2} data-size="sm" className={styles.welcomeTitle}>
          Velkommen til Mitt Røde Kors
        </Heading>
        <Paragraph data-size="sm">
          Her vil du etter hvert finne alt du trenger for å være frivillig i
          Røde Kors. Tjenestene er under utvikling og vi jobber kontinuerlig med
          å lage nytt og forbedret innhold for våre frivillige.
        </Paragraph>
        <Paragraph data-size="sm">
          Har du lyst til å hjelpe oss med å forbedre Mitt Røde Kors? Gi oss
          gjerne en tilbakemelding om hva du synes om tjenesten.
        </Paragraph>
      </section>

      <nav aria-label="Snarveier" className={styles.shortcuts}>
        {shortcuts.map((s) => (
          <LinkCard key={s.href} {...s} description="Opplysninger om deg" />
        ))}
      </nav>

      <section className={styles.section}>
        <SectionHeader>Nytting</SectionHeader>
        <div className={styles.stack}>
          {articles.map(({ id, ...article }) => (
            <ContentCard key={id} {...article} />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <SectionHeader>Andre tjenester</SectionHeader>
        <div className={styles.stack}>
          {serviceCards.map((groups) => (
            <ServiceCard key={groups[0].title} groups={groups} />
          ))}
        </div>
      </section>
    </div>
  );
}
