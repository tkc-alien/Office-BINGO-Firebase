import {
  DocumentData,
  FirestoreDataConverter,
  getFirestore,
} from "firebase-admin/firestore";

import { UID } from "@/alias";
import { LotteryNumberEntity } from "@/entity/lottery-number.entity";

const firestore = getFirestore();

const converter: FirestoreDataConverter<LotteryNumberEntity> = {
  toFirestore(doc): DocumentData {
    return JSON.parse(JSON.stringify(doc));
  },
  fromFirestore(snapshot): LotteryNumberEntity {
    const data = snapshot.data() as Readonly<LotteryNumberEntity>;
    return new LotteryNumberEntity(data);
  },
};

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
      .withConverter(converter);
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
