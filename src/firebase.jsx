import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwLrQdLG7tpI4MJZFRIpWUa-X8x9hHt9E",
  authDomain: "chattry-69632.firebaseapp.com",
  projectId: "chattry-69632",
  storageBucket: "chattry-69632.appspot.com",
  messagingSenderId: "1007030304536",
  appId: "1:1007030304536:web:a1c1a97a9ed7523ba0e86d",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
