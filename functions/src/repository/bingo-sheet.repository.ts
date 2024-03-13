import {
  DocumentData,
  FirestoreDataConverter,
  getFirestore,
} from "firebase-admin/firestore";

import { UID } from "@/alias";
import { BingoSheetEntity } from "@/entity/bingo-sheet.entity";

const firestore = getFirestore();

const converter: FirestoreDataConverter<BingoSheetEntity> = {
  toFirestore(doc): DocumentData {
    return JSON.parse(JSON.stringify(doc));
  },
  fromFirestore(snapshot): BingoSheetEntity {
    const data = snapshot.data() as Readonly<BingoSheetEntity>;
    return new BingoSheetEntity(data);
  },
};

export class BingoSheetRepository {
  /**
   * コレクションリファレンスを取得する
   * @param uid
   * @returns
   */
  public collection(uid: UID) {
    return firestore
      .collection("users")
      .doc(uid)
      .collection("sheets")
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
