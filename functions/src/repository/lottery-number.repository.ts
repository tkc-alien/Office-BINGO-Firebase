import { getFirestore } from "firebase-admin/firestore";

import { UID } from "@/alias";
import { converter } from "@/common/firestore-converter";
import { LotteryNumberEntity } from "@/entity/lottery-number.entity";

const firestore = getFirestore();

export class LotteryNumberRepository {
  /**
   * コレクションリファレンスを取得する
   * @param uid
   * @returns
   */
  public collection(uid: UID) {
    return firestore
      .collection("users")
      .doc(uid)
      .collection("lotteryLogs")
      .withConverter(converter<LotteryNumberEntity>());
  }

  /**
   * ドキュメントリファレンスを取得する
   * @param uid
   * @param id
   * @returns
   */
  public document(uid: UID, id: string) {
    return this.collection(uid).doc(id);
  }
}
