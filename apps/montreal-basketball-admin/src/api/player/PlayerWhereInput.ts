import { IntNullableFilter } from "../../util/IntNullableFilter";
import { AttendanceListRelationFilter } from "../attendance/AttendanceListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type PlayerWhereInput = {
  age?: IntNullableFilter;
  attendances?: AttendanceListRelationFilter;
  currentStatus?: "Option1";
  email?: StringNullableFilter;
  id?: StringFilter;
  location?: JsonFilter;
  name?: StringNullableFilter;
  skillLevel?: "Option1";
};
