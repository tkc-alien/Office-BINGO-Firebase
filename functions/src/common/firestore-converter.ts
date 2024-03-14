import { DocumentData, FirestoreDataConverter } from "firebase-admin/firestore";

export const converter = <
  T extends DocumentData,
>(): FirestoreDataConverter<T> => ({
  toFirestore(modelObject) {
    return modelObject;
  },
  fromFirestore(snapshot) {
    return snapshot.data() as T;
  },
});
