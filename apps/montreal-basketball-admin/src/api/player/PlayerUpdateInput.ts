import { AttendanceUpdateManyWithoutPlayersInput } from "./AttendanceUpdateManyWithoutPlayersInput";
import { InputJsonValue } from "../../types";

export type PlayerUpdateInput = {
  age?: number | null;
  attendances?: AttendanceUpdateManyWithoutPlayersInput;
  currentStatus?: "Option1" | null;
  email?: string | null;
  location?: InputJsonValue;
  name?: string | null;
  skillLevel?: "Option1" | null;
};
