import { Timestamp } from "firebase-admin/firestore";

export type LotteryNumberEntity = {
  number: number;
  gotAt?: Timestamp;
};
