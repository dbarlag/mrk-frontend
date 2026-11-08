/* eslint-disable @next/next/no-img-element -- small SVG icons from the design at native size */
import { Card, CardBlock, Heading, Paragraph, Tag } from "@norwegianredcross/designsystem";
import type { EventType, ScheduleEvent } from "../data";
import { eventTypes } from "../data";
import styles from "./EventCard.module.css";

const typeStyle: Record<EventType, { color: "success" | "primary-color-red" | "info"; icon: string }> = {
  kurs: { color: "success", icon: "/icons/timeplan/type-kurs.svg" },
  vakt: { color: "primary-color-red", icon: "/icons/timeplan/type-vakt.svg" },
  arrangement: { color: "info", icon: "/icons/timeplan/type-arrangement.svg" },
};

const weekday = new Intl.DateTimeFormat("nb-NO", { weekday: "short", timeZone: "UTC" });
const month = new Intl.DateTimeFormat("nb-NO", { month: "short", timeZone: "UTC" });
const fullDate = new Intl.DateTimeFormat("nb-NO", { dateStyle: "full", timeZone: "UTC" });
const shortDate = new Intl.DateTimeFormat("nb-NO", { day: "2-digit", month: "2-digit", year: "numeric", timeZone: "UTC" });

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
const stripDot = (s: string) => s.replace(".", "");

export function EventCard({ event }: { event: ScheduleEvent }) {
  const date = new Date(event.date);
  const deadline = new Date(event.deadline);
  const type = typeStyle[event.type];
  const typeLabel = eventTypes.find((t) => t.value === event.type)?.label;

  return (
    <Card asChild data-color="neutral" className={styles.card}>
      <article>
        <CardBlock className={styles.top}>
          <time dateTime={event.date} className={styles.date} aria-label={fullDate.format(date)}>
            <span className={styles.small}>{capitalize(stripDot(weekday.format(date)))}</span>
            <span className={styles.day}>{date.getUTCDate()}</span>
            <span className={styles.small}>{stripDot(month.format(date)).toUpperCase()}</span>
          </time>
          <div className={styles.details}>
            <Heading level={2} data-size="sm">
              {event.title}
            </Heading>
            <Paragraph data-size="xs" className={styles.row}>
              <img src="/icons/timeplan/clock.svg" alt="" width={13.3418} height={13.3418} />
              <span>
                {event.start} - {event.end}
              </span>
            </Paragraph>
            <div className={styles.meta}>
              <Tag data-color={type.color} data-size="sm" className={styles.tag}>
                <img src={type.icon} alt="" width={15.995} height={15.995} />
                {typeLabel}
              </Tag>
              <Paragraph data-size="xs" className={`${styles.row} ${styles.deadline}`}>
                <img src="/icons/timeplan/watch.svg" alt="" width={15.995} height={15.995} />
                <strong>Frist:</strong>
                <time dateTime={event.deadline}>{shortDate.format(deadline)}</time>
              </Paragraph>
            </div>
          </div>
        </CardBlock>
        <CardBlock className={styles.footer}>
          <Paragraph data-size="xs" className={styles.row}>
            <img src="/icons/timeplan/user-check.svg" alt="" width={15.995} height={15.995} />
            <span className="ds-sr-only">Påmeldte:</span>
            {event.takenSeats}
            <span className={styles.av}>av</span>
            <img src="/icons/timeplan/users.svg" alt="" width={15.995} height={15.995} />
            <span className="ds-sr-only">plasser:</span>
            {event.totalSeats}
          </Paragraph>
          <Paragraph data-size="xs" className={styles.row}>
            <img src="/icons/timeplan/status-open.svg" alt="" width={16} height={16} />
            Åpent for påmelding
          </Paragraph>
        </CardBlock>
      </article>
    </Card>
  );
}
