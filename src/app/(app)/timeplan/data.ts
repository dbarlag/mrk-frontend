export type EventType = "arrangement" | "kurs" | "vakt";

export type ScheduleEvent = {
  id: string;
  type: EventType;
  title: string;
  /** ISO date (yyyy-mm-dd). */
  date: string;
  start: string;
  end: string;
  /** ISO date for the registration deadline. */
  deadline: string;
  takenSeats: number;
  totalSeats: number;
  status: "open";
  /** Week in the schedule, 1-based. */
  week: number;
  /** Whether the signed-in volunteer has signed up. */
  registered: boolean;
};

export const eventTypes: { value: EventType; label: string; filterLabel: string }[] = [
  { value: "arrangement", label: "Arrangement", filterLabel: "Arrangementer" },
  { value: "kurs", label: "Kurs", filterLabel: "Kurser" },
  { value: "vakt", label: "Vakt", filterLabel: "Vakter" },
];

export const weeks = ["Uke 1", "Uke 2", "Uke 3"];

/** Week shown first (matches the design's selected "Uke 2"). */
export const currentWeek = 2;

// Demo data until the schedule API is connected.
export const events: ScheduleEvent[] = [
  { id: "1", type: "kurs", title: "Førstehjelpskurs", date: "2024-10-01", start: "18:00", end: "21:00", deadline: "2024-09-27", takenSeats: 12, totalSeats: 20, status: "open", week: 1, registered: true },
  { id: "2", type: "vakt", title: "Vakt", date: "2024-10-03", start: "08:00", end: "16:00", deadline: "2024-09-30", takenSeats: 4, totalSeats: 6, status: "open", week: 1, registered: false },
  { id: "3", type: "kurs", title: "Kurs", date: "2024-10-10", start: "18:00", end: "22:00", deadline: "2024-10-04", takenSeats: 325, totalSeats: 325, status: "open", week: 2, registered: false },
  { id: "4", type: "vakt", title: "Vakt", date: "2024-10-10", start: "18:00", end: "22:00", deadline: "2024-10-04", takenSeats: 325, totalSeats: 325, status: "open", week: 2, registered: true },
  { id: "5", type: "arrangement", title: "Pizzakveld", date: "2024-10-09", start: "18:00", end: "22:00", deadline: "2024-10-04", takenSeats: 325, totalSeats: 325, status: "open", week: 2, registered: false },
  { id: "6", type: "arrangement", title: "Julebord", date: "2024-10-18", start: "19:00", end: "23:00", deadline: "2024-10-11", takenSeats: 40, totalSeats: 80, status: "open", week: 3, registered: true },
  { id: "7", type: "vakt", title: "Sanitetsvakt", date: "2024-10-19", start: "10:00", end: "18:00", deadline: "2024-10-14", takenSeats: 3, totalSeats: 8, status: "open", week: 3, registered: false },
];
