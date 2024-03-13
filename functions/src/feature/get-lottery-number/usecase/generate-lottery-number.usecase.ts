import { Timestamp } from "firebase-admin/firestore";

import { LotteryNumberEntity } from "@/entity/lottery-number.entity";

/**
 * 抽選番号生成UseCase
 */
export class GenerateLotteryNumberUseCase {
  /**
   * ランダムな抽選番号を生成する
   * @returns 生成された抽選番号
   */
  public execute(): LotteryNumberEntity {
    // 1 ~ 99 の範囲で乱数を生成
    const number = Math.floor(Math.random() * 100);
    // 返却
    return new LotteryNumberEntity({
      number: number,
      gotAt: Timestamp.now(),
    });
  }
}
