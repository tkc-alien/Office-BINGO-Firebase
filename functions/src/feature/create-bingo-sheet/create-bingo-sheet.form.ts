import { BingoSheetEntity } from "@/entity/bingo-sheet.entity";

export type CreateBingoSheetRequest = NonNullable<unknown>;

export type CreateBingoSheetResponse = {
  data: BingoSheetEntity;
};
