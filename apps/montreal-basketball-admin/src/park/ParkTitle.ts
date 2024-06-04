import { Park as TPark } from "../api/park/Park";

export const PARK_TITLE_FIELD = "name";

export const ParkTitle = (record: TPark): string => {
  return record.name?.toString() || String(record.id);
};
