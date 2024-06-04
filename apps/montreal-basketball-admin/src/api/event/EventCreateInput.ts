import { AttendanceCreateNestedManyWithoutEventsInput } from "./AttendanceCreateNestedManyWithoutEventsInput";
import { ParkWhereUniqueInput } from "../park/ParkWhereUniqueInput";

export type EventCreateInput = {
  attendances?: AttendanceCreateNestedManyWithoutEventsInput;
  date?: Date | null;
  description?: string | null;
  organizer?: string | null;
  park?: ParkWhereUniqueInput | null;
  title?: string | null;
};
