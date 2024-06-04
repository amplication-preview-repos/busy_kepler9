import { SortOrder } from "../../util/SortOrder";

export type PlayerOrderByInput = {
  age?: SortOrder;
  createdAt?: SortOrder;
  currentStatus?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  name?: SortOrder;
  skillLevel?: SortOrder;
  updatedAt?: SortOrder;
};
