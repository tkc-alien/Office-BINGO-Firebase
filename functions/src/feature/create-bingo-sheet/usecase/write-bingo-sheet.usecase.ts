import { getFirestore } from "firebase-admin/firestore";

import { UID } from "@/alias";
import { BingoSheetEntity } from "@/entity/bingo-sheet.entity";

const firestore = getFirestore();

/**
 * ビンゴシート書き込みUseCase
 */
export class WriteBingoSheetUseCase {
  /**
   * ビンゴシートをデータベースに書き込む
   * @param uid シートを保有するユーザのUID
   * @param bingoSheet 書き込むビンゴシート
   * @returns 書き込まれたドキュメントのID
   */
  public async execute(
    uid: UID,
    bingoSheet: BingoSheetEntity
  ): Promise<string> {
    // 書き込み
    const doc = await firestore
      .collection("users")
      .doc(uid)
      .collection("sheets")
      .add(bingoSheet);
    // ドキュメントIDを返却
    return doc.id;
  }
}
