import { SortOrder } from "../../util/SortOrder";

export type ParkOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  name?: SortOrder;
  numberOfCourts?: SortOrder;
  numberOfPlayers?: SortOrder;
  updatedAt?: SortOrder;
};
