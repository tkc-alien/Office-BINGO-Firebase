import { getFirestore } from "firebase-admin/firestore";

import { UID } from "@/alias";
import { BingoSheetEntity } from "@/entity/bingo-sheet.entity";
import { LotteryNumberEntity } from "@/entity/lottery-number.entity";

const firestore = getFirestore();

/**
 * ビンゴシートに抽選番号を反映するUseCase
 */
export class UpdateBingoSheetUseCase {
  /**
   * 抽選番号をビンゴシートに反映する
   * @param uid
   * @param sheetId
   * @param lotteryNumber
   * @returns 更新されたか
   */
  public async execute(
    uid: UID,
    sheetId: string,
    applying: LotteryNumberEntity
  ): Promise<boolean> {
    // ビンゴシートを取得する
    const sheetDoc = await firestore
      .collection("users")
      .doc(uid)
      .collection("sheets")
      .doc(sheetId)
      .get();

    // 取得したドキュメントのデータが存在しなければ処理を抜ける
    const data = sheetDoc.data();
    if (!data) return false;

    // ビンゴシートにキャスト
    const bingoSheet: BingoSheetEntity = data as BingoSheetEntity;

    // 取得したビンゴシートの番号を走査して値を更新する
    for (let i = 0; i < bingoSheet.sheet.length; i++) {
      // 番号が一致する & 未取得 であることを判定
      if (
        bingoSheet.sheet[i].number === applying.number &&
        bingoSheet.sheet[i].gotAt === undefined
      ) {
        // 更新用のEntityを作成
        const newSheet: BingoSheetEntity = { ...bingoSheet };
        // 該当の番号を更新
        newSheet.sheet[i] = applying;
        // 書き込み
        sheetDoc.ref.set(newSheet);
        // 更新フラグを返して処理を抜ける
        return true;
      }
    }
    // 最後まで該当番号がなければ、非更新フラグを返して処理を抜ける
    return false;
  }
}
