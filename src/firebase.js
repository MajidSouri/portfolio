
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyD9TBKbDncCU8WRPZF8UbZfhz6BCLh5snc",
  authDomain: "portfolio-7d1af.firebaseapp.com",
  projectId: "portfolio-7d1af",
  storageBucket: "portfolio-7d1af.appspot.com",
  messagingSenderId: "1012751269920",
  appId: "1:1012751269920:web:5f1235cca1e0da19123c45",
  measurementId: "G-0RQQM4T4MZ"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);