import { SortOrder } from "../../util/SortOrder";

export type AttendanceOrderByInput = {
  createdAt?: SortOrder;
  eventId?: SortOrder;
  id?: SortOrder;
  playerId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
