import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0fFVmdIfWOt8iIHi-QjjQZ6CRCGvE9Bw",
  authDomain: "crossy-a310a.firebaseapp.com",
  projectId: "crossy-a310a",
  storageBucket: "crossy-a310a.firebasestorage.app",
  messagingSenderId: "596645941180",
  appId: "1:596645941180:web:93a7cc91e755ac26f025b9"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
