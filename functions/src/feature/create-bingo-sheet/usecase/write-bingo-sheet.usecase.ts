import { UID } from "@/alias";
import { BingoSheetEntity } from "@/entity/bingo-sheet.entity";
import { BingoSheetRepository } from "@/repository/bingo-sheet.repository";

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
    const doc = await new BingoSheetRepository()
      .collection(uid)
      .add(bingoSheet);
    // ドキュメントIDを返却
    return doc.id;
  }
}
