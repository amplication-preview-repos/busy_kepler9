import { ParkWhereUniqueInput } from "./ParkWhereUniqueInput";
import { ParkUpdateInput } from "./ParkUpdateInput";

export type UpdateParkArgs = {
  where: ParkWhereUniqueInput;
  data: ParkUpdateInput;
};
