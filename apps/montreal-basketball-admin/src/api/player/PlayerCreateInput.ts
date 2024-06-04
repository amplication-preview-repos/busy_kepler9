import { AttendanceCreateNestedManyWithoutPlayersInput } from "./AttendanceCreateNestedManyWithoutPlayersInput";
import { InputJsonValue } from "../../types";

export type PlayerCreateInput = {
  age?: number | null;
  attendances?: AttendanceCreateNestedManyWithoutPlayersInput;
  currentStatus?: "Option1" | null;
  email?: string | null;
  location?: InputJsonValue;
  name?: string | null;
  skillLevel?: "Option1" | null;
};
