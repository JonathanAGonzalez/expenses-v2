import { collection, addDoc } from "firebase/firestore";

import { categoriesObjectToSend } from "../cloudinary";

import { db } from ".";

export const setCategories = async () => {
  const collectionRef = collection(db, "categories-default");

  const promises = categoriesObjectToSend.map(async (category) => {
    await addDoc(collectionRef, category);
  });

  await Promise.all(promises);
};
