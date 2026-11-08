"use client";

import {
  Buildings3Icon,
  CurrencyExchangeIcon,
  PencilIcon,
  TimerStartIcon,
} from "@navikt/aksel-icons";
import { Button } from "@norwegianredcross/designsystem";
import { association, recurringDonation } from "../_data";
import { InfoCard } from "./InfoCard";
import { OfferDialog } from "./OfferDialog";
import { useDemoState } from "./useDemoState";

const intro = (
  <>
    Som fastgiver hjelper du <strong>hver måned</strong> mennesker i Norge og
    i andre land rammet av kriser.
  </>
);

const shared = {
  association,
  intro,
  question: "Spørsmål om donasjoner?",
  contactEmail: "giver@redcross.no",
};

/** "Fast giver": the active agreement, or an invitation to become one. */
export function FastGiverSection() {
  const demoNoAgreement = useDemoState("ingen-avtale");

  if (demoNoAgreement || !recurringDonation) {
    return (
      <InfoCard
        title="Ingen fast giver avtale"
        status="Inaktiv"
        rows={[{ icon: Buildings3Icon, label: "Førening", value: association }]}
        actions={
          <OfferDialog
            {...shared}
            trigger={<Button>Bli fast giver</Button>}
            title="Ikke fast giver?"
            status="Inaktiv"
            tagColor="danger"
            legend="Velg betalingsmåte"
            options={[
              { value: "vipps", label: "Vipps" },
              { value: "avtalegiro", label: "AvtaleGiro" },
              { value: "bedrift", label: "Gi som bedrift" },
            ]}
            defaultOption="vipps"
            outro="Du vil motta giro, AvtaleGiro, blankett og medlemskort i posten kort tid etter innmelding."
            submitLabel="Bli Fast giver"
          />
        }
      />
    );
  }

  return (
    <InfoCard
      title="Fast giver avtale"
      status={recurringDonation.status}
      rows={[
        { icon: Buildings3Icon, label: "Førening", value: association },
        { icon: TimerStartIcon, label: "Startdato:", value: recurringDonation.startDate },
        { icon: CurrencyExchangeIcon, label: "Beløp:", value: recurringDonation.amount },
      ]}
      actions={
        <OfferDialog
          {...shared}
          trigger={
            <Button>
              Endre <PencilIcon aria-hidden />
            </Button>
          }
          title="Endre fast giver avtale"
          status={recurringDonation.status}
          legend="Hva vil du gjøre med avtalen?"
          options={[
            { value: "pause", label: "Pause avtalen" },
            { value: "slett", label: "Slett avtalen din" },
            { value: "belop", label: "Endre Beløp", withAmount: true },
          ]}
          defaultOption="belop"
          submitLabel="Endre"
        />
      }
    />
  );
}
