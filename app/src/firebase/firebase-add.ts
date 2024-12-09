import {
  collection,
  Firestore,
  addDoc as firebaseAddDoc,
} from "firebase/firestore";

interface AddDocParams {
  db: Firestore;
  nameCollection: string;
  data: Record<string, any>;
}

export const addDocument = async ({
  db,
  nameCollection,
  data,
}: AddDocParams) => {
  try {
    const result = await firebaseAddDoc(collection(db, nameCollection), data);

    console.log(result.id, "IDDD");
  } catch (error) {
    console.log(error);
  }
};
