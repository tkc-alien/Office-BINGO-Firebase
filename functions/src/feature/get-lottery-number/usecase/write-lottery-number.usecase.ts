import { UID } from "@/alias";
import { LotteryNumberEntity } from "@/entity/lottery-number.entity";
import { LotteryNumberRepository } from "@/repository/lottery-number.repository";

/**
 * 抽選番号書き込みUseCase
 */
export class WriteLotteryNumberUseCase {
  public async execute(
    uid: UID,
    lotteryNumber: LotteryNumberEntity
  ): Promise<string> {
    // 書き込み
    const doc = await new LotteryNumberRepository()
      .collection(uid)
      .add(lotteryNumber);
    // ドキュメントIDを返却
    return doc.id;
  }
}
