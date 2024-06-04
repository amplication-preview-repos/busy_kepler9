import { SortOrder } from "../../util/SortOrder";

export type TeamOrderByInput = {
  captain?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  members?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
