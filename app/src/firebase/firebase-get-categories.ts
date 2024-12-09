import { collection, getDocs } from "firebase/firestore";

import { db } from ".";

export interface CategoryDocument {
  label: string;
  image: string;
  key: string;
  id: string;
}

export const getCategories = async () => {
  const collectionRef = collection(db, "categories-default");
  const querySnapshot = await getDocs(collectionRef);

  const data = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
  }));

  const formattedCategories: CategoryDocument[] = data.map((cat) => ({
    label: cat.label,
    image: cat.imageSrc,
    key: cat.key,
    id: cat.id,
  }));

  return formattedCategories;
};
