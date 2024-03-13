import { Timestamp } from "firebase-admin/firestore";

import { LotteryNumberEntity } from "@/entity/lottery-number.entity";

export class BingoSheetEntity {
  createdAt: Timestamp;
  sheet: LotteryNumberEntity[];

  constructor(init: { createdAt: Timestamp; sheet: LotteryNumberEntity[] }) {
    this.createdAt = init.createdAt;
    this.sheet = init.sheet;
  }
}
