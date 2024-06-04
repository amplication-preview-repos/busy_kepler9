import { ParkWhereInput } from "./ParkWhereInput";
import { ParkOrderByInput } from "./ParkOrderByInput";

export type ParkFindManyArgs = {
  where?: ParkWhereInput;
  orderBy?: Array<ParkOrderByInput>;
  skip?: number;
  take?: number;
};
