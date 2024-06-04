import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";

export type AttendanceWhereInput = {
  event?: EventWhereUniqueInput;
  id?: StringFilter;
  player?: PlayerWhereUniqueInput;
  status?: "Option1";
};
