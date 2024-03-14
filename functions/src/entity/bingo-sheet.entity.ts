import { Timestamp } from "firebase-admin/firestore";

import { LotteryNumberEntity } from "@/entity/lottery-number.entity";

export type BingoSheetEntity = {
  createdAt: Timestamp;
  sheet: LotteryNumberEntity[];
};
