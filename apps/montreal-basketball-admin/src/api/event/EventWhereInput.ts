import { AttendanceListRelationFilter } from "../attendance/AttendanceListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ParkWhereUniqueInput } from "../park/ParkWhereUniqueInput";

export type EventWhereInput = {
  attendances?: AttendanceListRelationFilter;
  date?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  organizer?: StringNullableFilter;
  park?: ParkWhereUniqueInput;
  title?: StringNullableFilter;
};
