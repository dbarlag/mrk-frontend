"use client";

import {
  Buildings3Icon,
  PencilIcon,
  PersonGroupIcon,
  TimerPauseIcon,
  TimerStartIcon,
} from "@navikt/aksel-icons";
import { Button } from "@norwegianredcross/designsystem";
import { association, membership } from "../_data";
import { InfoCard } from "./InfoCard";
import { OfferDialog, type OfferOption } from "./OfferDialog";
import { useDemoState } from "./useDemoState";

const options: OfferOption[] = [
  { value: "medlem", label: "Medlemskap (300 kr pr. år)" },
  { value: "familie", label: "Familiemedlemskap (600 kr pr. år)" },
];

const shared = {
  association,
  intro:
    "Som medlem støtter du vårt humanitære arbeid gjennom medlemskontingenten. Du får også stemmerett på lokalforeningens årsmøte og kan være med å sette retning for det humanitære arbeidet.",
  legend: "Velg medlemskap",
  options,
  outro:
    "Du vil motta giro, AvtaleGiro, blankett og medlemskort i posten kort tid etter innmelding.",
  question: "Spørsmål om medlemskap?",
  contactEmail: "medlem@redcross.no",
};

/** "Medlemskap": the current membership, or an invitation to join. */
export function MembershipSection() {
  const demoNotMember = useDemoState("ikke-medlem");

  if (demoNotMember || !membership) {
    return (
      <InfoCard
        title="Ikke medlem"
        status="Inaktiv"
        rows={[{ icon: Buildings3Icon, label: "Førening", value: association }]}
        actions={
          <OfferDialog
            {...shared}
            trigger={<Button>Bli medlem</Button>}
            title="Ikke Medlem"
            status="Inaktiv"
            defaultOption="medlem"
            submitLabel="Bli medlem"
          />
        }
      />
    );
  }

  return (
    <InfoCard
      title={membership.title}
      status={membership.status}
      rows={[
        { icon: Buildings3Icon, label: "Førening", value: association },
        { icon: TimerStartIcon, label: "Startdato:", value: membership.startDate },
        { icon: TimerPauseIcon, label: "Sluttdato", value: membership.endDate, tone: "success" },
        { icon: PersonGroupIcon, label: "Type:", value: membership.type },
      ]}
      actions={
        <OfferDialog
          {...shared}
          trigger={
            <Button>
              Endre <PencilIcon aria-hidden />
            </Button>
          }
          title="Endre medlemskap"
          status={membership.status}
          defaultOption={membership.type === "Familie" ? "familie" : "medlem"}
          submitLabel="Lagre"
        />
      }
    />
  );
}
