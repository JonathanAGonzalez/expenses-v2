import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAi6PQnUKo9vvsklS4C048mYI-Xmq_67oE",
  authDomain: "expenses-v2-bear.firebaseapp.com",
  projectId: "expenses-v2-bear",
  storageBucket: "expenses-v2-bear.firebasestorage.app",
  messagingSenderId: "616516495743",
  appId: "1:616516495743:web:8cef917a1a5ba89502924a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
