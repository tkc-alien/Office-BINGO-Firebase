import { Timestamp } from "firebase-admin/firestore";

import { BingoSheetEntity } from "@/entity/bingo-sheet.entity";
import { LotteryNumberEntity } from "@/entity/lottery-number.entity";

/**
 * ビンゴシート作成UseCase
 */
export class GenerateBingoSheetUseCase {
  /**
   * ランダムなビンゴシートを作成する
   * @returns 作成されたビンゴシート
   */
  public execute(): BingoSheetEntity {
    // 1 ~ 99 の数値をランダムに並べ替えた配列を作成する
    const rand: number[] = [];
    const max = 99;
    const numbers = Array.from({ length: max }, (_, i) => i + 1);
    for (let i = 0; i < max; i++) {
      const index = Math.floor(Math.random() * numbers.length);
      rand.push(numbers[index]);
      numbers.splice(index, 1);
    }

    // 並べ替えた数値の先頭25個を使ってビンゴシートを作成する
    const sliced = rand.slice(0, 25);
    const sheet: LotteryNumberEntity[] = sliced.map<LotteryNumberEntity>(
      (value) => {
        return {
          number: value,
          gotAt: undefined,
        };
      }
    );

    // 返却
    return {
      sheet: sheet,
      createdAt: Timestamp.now(),
    };
  }
}
