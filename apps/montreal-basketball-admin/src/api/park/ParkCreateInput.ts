import { EventCreateNestedManyWithoutParksInput } from "./EventCreateNestedManyWithoutParksInput";
import { InputJsonValue } from "../../types";

export type ParkCreateInput = {
  events?: EventCreateNestedManyWithoutParksInput;
  location?: InputJsonValue;
  name?: string | null;
  numberOfCourts?: number | null;
  numberOfPlayers?: number | null;
};
