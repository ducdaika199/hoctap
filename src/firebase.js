import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "meomeo-7c4b6.firebaseapp.com",
  projectId: "meomeo-7c4b6",
  storageBucket: "meomeo-7c4b6.appspot.com",
  messagingSenderId: "1073028360310",
  appId: "1:1073028360310:web:67af58b42e43dd16fe5757",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
