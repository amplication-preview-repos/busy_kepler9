import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TeamWhereInput = {
  captain?: StringNullableFilter;
  id?: StringFilter;
  members?: StringNullableFilter;
  name?: StringNullableFilter;
};
