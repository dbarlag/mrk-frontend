"use client";

import { useMemo, useState } from "react";
import {
  CalendarIcon,
  TasklistIcon,
  TasklistStartIcon,
} from "@navikt/aksel-icons";
import {
  Button,
  Pagination,
  PaginationButton,
  PaginationItem,
  PaginationList,
  Paragraph,
  Suggestion,
  Tabs,
  TabsList,
  TabsPanel,
  TabsTab,
  usePagination,
} from "@norwegianredcross/designsystem";
import { currentWeek, eventTypes, events, weeks, type EventType } from "../data";
import { EventCard } from "./EventCard";
import styles from "./TimeplanView.module.css";

type Tab = "kommende" | "mine";

type Item = { value: string; label: string };

const allTypes: Item[] = eventTypes.map((t) => ({ value: t.value, label: t.filterLabel }));

export function TimeplanView() {
  const [tab, setTab] = useState<Tab>("kommende");
  const [week, setWeek] = useState(currentWeek);
  const [selectedTypes, setSelectedTypes] = useState<Item[]>(allTypes);

  const { pages, prevButtonProps, nextButtonProps } = usePagination({
    currentPage: week,
    totalPages: weeks.length,
    setCurrentPage: setWeek,
  });

  const visible = useMemo(() => {
    const types = new Set(selectedTypes.map((t) => t.value as EventType));
    return events.filter(
      (e) =>
        e.week === week &&
        (types.size === 0 || types.has(e.type)) &&
        (tab === "kommende" || e.registered),
    );
  }, [selectedTypes, week, tab]);

  const list = (
    <div className={styles.list}>
      {visible.length > 0 ? (
        visible.map((event) => <EventCard key={event.id} event={event} />)
      ) : (
        <Paragraph>Ingen aktiviteter denne uken.</Paragraph>
      )}
    </div>
  );

  return (
    <>
      <Tabs value={tab} onChange={(v) => setTab(v as Tab)} className={styles.controls}>
          <TabsList>
            <TabsTab value="kommende">
              <TasklistIcon aria-hidden />
              Kommende
            </TabsTab>
            <TabsTab value="mine">
              <TasklistStartIcon aria-hidden />
              Mine påmeldinger
            </TabsTab>
          </TabsList>
        <div className={styles.filterRow}>
          <Button
            icon
            variant="secondary"
            data-color="neutral"
            aria-label="Gå til denne uken"
            onClick={() => setWeek(currentWeek)}
          >
            <CalendarIcon aria-hidden />
          </Button>
          <Suggestion
            multiple
            selected={selectedTypes}
            onSelectedChange={(items: Item[]) => setSelectedTypes(items)}
            className={styles.suggestion}
          >
            <Suggestion.Input aria-label="Filtrer på type" placeholder="Filter" />
            <Suggestion.Toggle aria-label="Vis typer" />
            <Suggestion.List>
              <Suggestion.Empty>Ingen treff</Suggestion.Empty>
              {allTypes.map((t) => (
                <Suggestion.Option key={t.value} value={t.value} label={t.label}>
                  {t.label}
                </Suggestion.Option>
              ))}
            </Suggestion.List>
          </Suggestion>
        </div>
        <TabsPanel value="kommende" className={styles.panel}>{tab === "kommende" && list}</TabsPanel>
        <TabsPanel value="mine" className={styles.panel}>{tab === "mine" && list}</TabsPanel>
      </Tabs>

      <Pagination aria-label="Velg uke" data-size="sm" className={styles.pagination}>
        <PaginationList>
          <PaginationItem>
            <PaginationButton {...prevButtonProps} aria-label="Forrige uke" />
          </PaginationItem>
          {pages.map(({ page, itemKey, buttonProps }) => (
            <PaginationItem key={itemKey}>
              {typeof page === "number" && (
                <PaginationButton {...buttonProps}>{weeks[page - 1]}</PaginationButton>
              )}
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationButton {...nextButtonProps} aria-label="Neste uke" />
          </PaginationItem>
        </PaginationList>
      </Pagination>
    </>
  );
}
