import { EventListRelationFilter } from "../event/EventListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ParkWhereInput = {
  events?: EventListRelationFilter;
  id?: StringFilter;
  location?: JsonFilter;
  name?: StringNullableFilter;
  numberOfCourts?: IntNullableFilter;
  numberOfPlayers?: IntNullableFilter;
};
