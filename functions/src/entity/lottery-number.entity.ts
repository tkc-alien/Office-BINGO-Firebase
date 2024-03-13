import { Timestamp } from "firebase-admin/firestore";

export class LotteryNumberEntity {
  number: number;
  gotAt?: Timestamp;

  constructor(init: { number: number; gotAt?: Timestamp }) {
    this.number = init.number;
    this.gotAt = init.gotAt;
  }
}
