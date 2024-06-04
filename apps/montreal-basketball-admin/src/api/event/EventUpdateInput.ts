import { AttendanceUpdateManyWithoutEventsInput } from "./AttendanceUpdateManyWithoutEventsInput";
import { ParkWhereUniqueInput } from "../park/ParkWhereUniqueInput";

export type EventUpdateInput = {
  attendances?: AttendanceUpdateManyWithoutEventsInput;
  date?: Date | null;
  description?: string | null;
  organizer?: string | null;
  park?: ParkWhereUniqueInput | null;
  title?: string | null;
};
