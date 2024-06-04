import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  organizer?: SortOrder;
  parkId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
