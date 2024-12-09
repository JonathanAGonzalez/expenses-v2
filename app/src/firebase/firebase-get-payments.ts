import { collection, getDocs } from "firebase/firestore";

import { db } from ".";

export interface Payment {
  date: string;
  id: string;
  name: string;
  price: string;
  category: {
    id: string;
    image: string;
    key: string;
    label: string;
  };
}

export const getPayments = async () => {
  const collectionRef = collection(db, "payments");
  const querySnapshot = await getDocs(collectionRef);

  const data = querySnapshot.docs.map((doc) => ({
    ...(doc.data() as Payment),
    id: doc.id,
  }));

  const formattedPayment: Payment[] = data.map(
    ({ category, date, name, price, id }) => ({
      price,
      date,
      category,
      name,
      id,
    }),
  );

  return formattedPayment;
};
