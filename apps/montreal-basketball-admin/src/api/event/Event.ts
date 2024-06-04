import { Attendance } from "../attendance/Attendance";
import { Park } from "../park/Park";

export type Event = {
  attendances?: Array<Attendance>;
  createdAt: Date;
  date: Date | null;
  description: string | null;
  id: string;
  organizer: string | null;
  park?: Park | null;
  title: string | null;
  updatedAt: Date;
};
