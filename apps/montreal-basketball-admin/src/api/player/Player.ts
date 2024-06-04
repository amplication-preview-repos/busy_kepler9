import { Attendance } from "../attendance/Attendance";
import { JsonValue } from "type-fest";

export type Player = {
  age: number | null;
  attendances?: Array<Attendance>;
  createdAt: Date;
  currentStatus?: "Option1" | null;
  email: string | null;
  id: string;
  location: JsonValue;
  name: string | null;
  skillLevel?: "Option1" | null;
  updatedAt: Date;
};
