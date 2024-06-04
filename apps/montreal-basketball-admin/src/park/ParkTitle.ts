import { Park as TPark } from "../api/park/Park";

export const PARK_TITLE_FIELD = "id";

export const ParkTitle = (record: TPark): string => {
  return record.id?.toString() || String(record.id);
};
