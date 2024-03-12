import { ValidateError, Validator } from "@/common/validator";
import { CreateBingoSheetRequest } from "@/feature/create-bingo-sheet/create-bingo-sheet.form";

export class CreateBingoSheetValidator extends Validator<CreateBingoSheetRequest> {
  public override validate(_request: CreateBingoSheetRequest): ValidateError[] {
    // 常にOK
    return [];
  }
}
