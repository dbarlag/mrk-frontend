"use client";

import { useState, type ReactNode } from "react";
import { Buildings3Icon, ChevronRightIcon, XMarkIcon } from "@navikt/aksel-icons";
import {
  Button,
  Dialog,
  DialogTrigger,
  DialogTriggerContext,
  Divider,
  Fieldset,
  FieldsetLegend,
  Heading,
  Link,
  Paragraph,
  Radio,
  Tag,
  Textfield,
} from "@norwegianredcross/designsystem";
import type { Status } from "../_data";
import styles from "./OfferDialog.module.css";

export type OfferOption = {
  value: string;
  label: string;
  /** Show an amount field under this option when it is selected. */
  withAmount?: boolean;
};

type OfferDialogProps = {
  /** The button that opens the dialog. */
  trigger: ReactNode;
  title: string;
  status: Status;
  association: string;
  intro: ReactNode;
  legend: string;
  options: OfferOption[];
  defaultOption: string;
  /** Text after the options (e.g. what happens next). */
  outro?: ReactNode;
  question: string;
  contactEmail: string;
  submitLabel: string;
  /** Overrides the tag colour derived from the status. */
  tagColor?: "warning" | "danger" | "success";
};

const statusColor: Record<Status, "success" | "info" | "warning"> = {
  Pågående: "success",
  Fullført: "info",
  Inaktiv: "warning",
};

/**
 * Popup used for membership and recurring-donation sign-up/changes
 * ([Page.Popup:medlemskap], [Page.Popup:donasjoner], [Page.Popup:donasjoner-endre]).
 */
export function OfferDialog({
  trigger,
  title,
  status,
  association,
  intro,
  legend,
  options,
  defaultOption,
  outro,
  question,
  contactEmail,
  submitLabel,
  tagColor,
}: OfferDialogProps) {
  const [selected, setSelected] = useState(defaultOption);

  return (
    <DialogTriggerContext>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <Dialog
        closedby="any"
        closeButton={false}
        className={styles.dialog}
        data-color="neutral"
      >
        {/* method="dialog" closes the dialog on submit; the API call goes here later. */}
        <form method="dialog" className={styles.form}>
          <div className={styles.top}>
            <Heading level={2} data-size="xs" className={styles.title}>
              {title}
            </Heading>
            <Tag data-color={tagColor ?? statusColor[status]}>{status}</Tag>
            {/* Submitting a method="dialog" form without a value just closes it. */}
            <Button
              type="submit"
              formNoValidate
              value="cancel"
              icon
              variant="tertiary"
              data-size="sm"
              aria-label="Lukk"
            >
              <XMarkIcon aria-hidden />
            </Button>
          </div>

          <div className={styles.row}>
            <Buildings3Icon aria-hidden className={styles.icon} />
            <Paragraph data-size="sm" className={styles.label}>
              Førening
            </Paragraph>
            <Paragraph data-size="sm">{association}</Paragraph>
          </div>

          <Paragraph data-size="sm">{intro}</Paragraph>

          <Fieldset data-color="primary-color-red">
            <FieldsetLegend className={styles.srOnly}>{legend}</FieldsetLegend>
            {options.map((o) => (
              <div key={o.value} className={styles.option}>
                <Radio
                  name="option"
                  value={o.value}
                  label={o.label}
                  checked={selected === o.value}
                  onChange={() => setSelected(o.value)}
                />
                {o.withAmount && selected === o.value && (
                  <Textfield
                    className={styles.amount}
                    aria-label="Nytt beløp i kroner"
                    placeholder="ny beløp"
                    inputMode="numeric"
                    name="amount"
                  />
                )}
              </div>
            ))}
          </Fieldset>

          {outro && <Paragraph data-size="sm">{outro}</Paragraph>}

          <div className={styles.contact}>
            <Paragraph data-size="sm" className={styles.label}>
              {question}
            </Paragraph>
            <Paragraph data-size="sm">Ta gjerne kontakt med oss på</Paragraph>
            <Link href={`mailto:${contactEmail}`}>{contactEmail}</Link>
          </div>

          <Divider />
          <div className={styles.actions} data-color="primary-color-red">
            <Button type="submit">
              {submitLabel} <ChevronRightIcon aria-hidden />
            </Button>
          </div>
        </form>
      </Dialog>
    </DialogTriggerContext>
  );
}
