import { onCall } from "firebase-functions/v2/https";

import {
  GetLotteryNumberRequest,
  GetLotteryNumberResponse,
} from "@/feature/get-lottery-number/get-lottery-number.form";
import { GetLotteryNumberValidator } from "@/feature/get-lottery-number/get-lottery-number.validator";
import { GenerateLotteryNumberUseCase } from "@/feature/get-lottery-number/usecase/generate-lottery-number.usecase";
import { UpdateBingoSheetUseCase } from "@/feature/get-lottery-number/usecase/update-bingo-sheet.usecase";
import { WriteLotteryNumberUseCase } from "@/feature/get-lottery-number/usecase/write-lottery-number.usecase";

/**
 * 抽選番号を取得する関数のエントリポイント
 */
export const getLotteryNumber = onCall<
  GetLotteryNumberRequest,
  GetLotteryNumberResponse
>((_request) => {
  // バリデーション
  const [uid, request] = new GetLotteryNumberValidator().verify(_request);
  // 抽選
  const lotteryNumber = new GenerateLotteryNumberUseCase().execute();
  // 抽選番号を書き込み
  new WriteLotteryNumberUseCase().execute(uid, lotteryNumber);
  // 指定のシートと照合して更新
  new UpdateBingoSheetUseCase().execute(uid, request.sheetId, lotteryNumber);
  // 返却
  return {
    data: lotteryNumber,
  };
});
