// Demo data for Min side until the backend is wired up.

export type Status = "Pågående" | "Fullført" | "Inaktiv";

export const profile = {
  name: "Ola Norman",
  initials: "ON",
  birthDate: "21.12.1990",
  redCrossEmail: "kari.hansen@rodekors.org",
  memberNumber: "34734758",
  phone: "+47 47 12 12 12",
  email: "kari.hansen@gmail.com",
  address: "Solveien 45c, 1256 Oslo",
};

export const declarations = [
  { title: "Etikkerklæringen", confirmed: "21.12.2025", href: "#etikkerklaeringen" },
  { title: "Taushetserklæringen", confirmed: "21.12.2025", href: "#taushetserklaeringen" },
];

export const policeCertificate = { issued: "21.12.2025", status: "Gyldig" };

export const nextOfKin = [
  {
    title: "Pårørende 1",
    name: "Petter Kalsen",
    relation: "Far",
    phone: "+47 47 12 23 14",
    email: "petter.karlsen@gmail.com",
  },
];

export const association = "Volda Røde Kors";

/** Set to null to see the "Ikke fast giver?" state. */
export const recurringDonation: {
  startDate: string;
  amount: string;
  status: Status;
} | null = {
  startDate: "05.05.2025",
  amount: "300 nok per måned",
  status: "Pågående",
};

export const singleDonations = [
  { id: "1", title: "Kampanje 1", date: "21.12.2025", amount: "500 nok", receiptHref: "#kvittering-1" },
  { id: "2", title: "Kampanje 1", date: "21.12.2025", amount: "500 nok", receiptHref: "#kvittering-2" },
  { id: "3", title: "Kampanje 1", date: "21.12.2025", amount: "500 nok", receiptHref: "#kvittering-3" },
];

/** Set to null to see the "Ikke medlem" state. */
export const membership: {
  title: string;
  status: Status;
  startDate: string;
  endDate: string;
  type: string;
} | null = {
  title: "Medlem",
  status: "Pågående",
  startDate: "05.05.2025",
  endDate: "05.05.2026",
  type: "Voksen",
};

export const activities = [
  { title: "Besøkstjenesten", status: "Pågående", startDate: "05.05.2024", endDate: "pågående", group: "Torsdagsgruppen" },
  { title: "Fellesverket", status: "Fullført", startDate: "05.05.2022", endDate: "05.05.2024", group: "Gruppe2" },
  { title: "Fellesverket", status: "Fullført", startDate: "05.05.2022", endDate: "05.05.2024", group: "Gruppe2" },
] satisfies { title: string; status: Status; startDate: string; endDate: string; group: string }[];

export const roles = [
  {
    title: "Gruppeleder",
    status: "Pågående",
    activity: "Besøkstjenesten",
    startDate: "05.05.2024",
    endDate: "pågående",
    group: "Torsdagsgruppen",
  },
] satisfies { title: string; status: Status; activity: string; startDate: string; endDate: string; group: string }[];

export const positions = [
  { title: "Leder i lokalråd omsorg", status: "Pågående", startDate: "05.05.2024", endDate: "pågående" },
] satisfies { title: string; status: Status; startDate: string; endDate: string }[];

export const courses = [
  { title: "Startkurs", status: "Fullført", date: "05.05.2025", type: "Base" },
  { title: "Omsorg", status: "Fullført", date: "05.05.2025", type: "Temakurs" },
] satisfies { title: string; status: Status; date: string; type: string }[];

export const languages = [
  { label: "Norsk", value: "morsmål" },
  { label: "Engelsk", value: "bra" },
  { label: "Arabisk", value: "nybegynner" },
];

export const certificates = [
  { label: "Personbil", value: "B" },
  { label: "Snøscooter", value: "S" },
];
