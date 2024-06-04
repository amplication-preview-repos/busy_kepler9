import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";

export type AttendanceUpdateInput = {
  event?: EventWhereUniqueInput | null;
  player?: PlayerWhereUniqueInput | null;
  status?: "Option1" | null;
};
