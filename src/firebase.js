import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKBeOp1wP2T9ac0e-tKlq5IU5B2MG5y4M",
  authDomain: "suman-santosh.firebaseapp.com",
  projectId: "suman-santosh",
  storageBucket: "suman-santosh.firebasestorage.app",
  messagingSenderId: "987384625109",
  appId: "1:987384625109:web:da3f823b08761323c5af5c",
  measurementId: "G-D1BH67SLBJ"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const galleryRef = collection(db, "gallery");




