import { onCall } from "firebase-functions/v2/https";

import {
  CreateBingoSheetRequest,
  CreateBingoSheetResponse,
} from "@/feature/create-bingo-sheet/create-bingo-sheet.form";
import { CreateBingoSheetValidator } from "@/feature/create-bingo-sheet/create-bingo-sheet.validator";
import { GenerateBingoSheetUseCase } from "@/feature/create-bingo-sheet/usecase/generate-bingo-sheet.usecase";
import { WriteBingoSheetUseCase } from "@/feature/create-bingo-sheet/usecase/write-bingo-sheet.usecase";

/**
 * ビンゴシートを作成する関数のエントリポイント
 */
export const createBingoSheet = onCall<
  CreateBingoSheetRequest,
  CreateBingoSheetResponse
>((_request) => {
  // バリデーション
  const [uid, _] = new CreateBingoSheetValidator().verify(_request);
  // ビンゴシートを作成する
  const bingoSheet = new GenerateBingoSheetUseCase().execute();
  // ビンゴシートを書き込む
  new WriteBingoSheetUseCase().execute(uid, bingoSheet);
  // レスポンス
  return {
    data: bingoSheet,
  };
});
