import { CallableRequest } from "firebase-functions/v2/https";

import { UID } from "@/alias";

/**
 * バリデーションエラー
 */
export type ValidateError = {
  param: string;
  message: string;
};

/**
 * バリデータクラスの共通インターフェース
 */
export abstract class Validator<Request> {
  /**
   * リクエストの正当性をチェックする
   * @param request
   * @returns 認証ユーザのUID と 正当なリクエスト
   */
  public verify(request: CallableRequest<Request>): [UID, Request] {
    // ユーザ認証
    const uid = request.auth?.uid;
    if (!uid) throw Error("ユーザを取得できません");

    // バリデーション
    const validateResult = this.validate(request.data);
    if (validateResult.length) {
      throw Error(validateResult.join(","));
    }

    // 返却
    return [uid, request.data];
  }

  /**
   * リクエストパラメータの正当性をチェックする
   * @param request 確認されたバリデーションエラー（空であれば正当として扱う）
   */
  public abstract validate(request: Request): ValidateError[];
}
