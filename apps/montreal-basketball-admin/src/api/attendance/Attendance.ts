import { Event } from "../event/Event";
import { Player } from "../player/Player";

export type Attendance = {
  createdAt: Date;
  event?: Event | null;
  id: string;
  player?: Player | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
