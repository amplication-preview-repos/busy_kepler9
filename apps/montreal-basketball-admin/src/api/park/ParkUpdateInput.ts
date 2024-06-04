import { EventUpdateManyWithoutParksInput } from "./EventUpdateManyWithoutParksInput";
import { InputJsonValue } from "../../types";

export type ParkUpdateInput = {
  events?: EventUpdateManyWithoutParksInput;
  location?: InputJsonValue;
  name?: string | null;
  numberOfCourts?: number | null;
  numberOfPlayers?: number | null;
};
