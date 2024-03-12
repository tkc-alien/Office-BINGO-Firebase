import { LotteryNumberEntity } from "@/entity/lottery-number.entity";

export type GetLotteryNumberRequest = {
  sheetId: string;
};

export type GetLotteryNumberResponse = {
  data: LotteryNumberEntity;
};
