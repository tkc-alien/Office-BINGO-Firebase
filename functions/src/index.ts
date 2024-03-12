/**
 * パスのエイリアスを解決する
 * これ自体にエイリアスを使用できないため、行単位でeslintを無視する
 */
// eslint-disable-next-line no-restricted-imports
import "./paths";

import { getFirestore } from "firebase-admin/firestore";

// FirebaseAdmin
import admin = require("firebase-admin");

// Firebase初期化
admin.initializeApp();

// Firestore設定
const firestore = getFirestore();
firestore.settings({
  // undefinedパラメータを無視する
  ignoreUndefinedProperties: true,
});

// ビンゴシートを作成する関数
export { createBingoSheet } from "@/feature/create-bingo-sheet/create-bingo-sheet.function";

// 抽選番号を取得する関数
export { getLotteryNumber } from "@/feature/get-lottery-number/get-lottery-number.function";
