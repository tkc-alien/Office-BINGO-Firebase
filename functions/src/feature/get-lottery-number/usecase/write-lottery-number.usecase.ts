import { getFirestore } from "firebase-admin/firestore";

import { UID } from "@/alias";
import { LotteryNumberEntity } from "@/entity/lottery-number.entity";

const firestore = getFirestore();

/**
 * 抽選番号書き込みUseCase
 */
export class WriteLotteryNumberUseCase {
  public async execute(
    uid: UID,
    lotteryNumber: LotteryNumberEntity
  ): Promise<string> {
    // 書き込み
    const doc = await firestore
      .collection("users")
      .doc(uid)
      .collection("lotteryLogs")
      .add(lotteryNumber);
    // ドキュメントIDを返却
    return doc.id;
  }
}
