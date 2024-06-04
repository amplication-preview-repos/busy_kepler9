import { Event } from "../event/Event";
import { JsonValue } from "type-fest";

export type Park = {
  createdAt: Date;
  events?: Array<Event>;
  id: string;
  location: JsonValue;
  name: string | null;
  numberOfCourts: number | null;
  numberOfPlayers: number | null;
  updatedAt: Date;
};
