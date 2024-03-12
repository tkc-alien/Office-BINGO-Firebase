import { ValidateError, Validator } from "@/common/validator";
import { GetLotteryNumberRequest } from "@/feature/get-lottery-number/get-lottery-number.form";

export class GetLotteryNumberValidator extends Validator<GetLotteryNumberRequest> {
  public override validate(request: GetLotteryNumberRequest): ValidateError[] {
    const errors: ValidateError[] = [];

    // シートIDをバリデーション
    const sheetId = request.sheetId;
    if (!sheetId) {
      errors.push({
        param: "sheetId",
        message: "値は必須です",
      });
    }

    // 返却
    return errors;
  }
}
