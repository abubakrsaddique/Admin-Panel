import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFrIR2yLo2jttjXtplBnzamLWWwIBdY1k",
  authDomain: "adminpanel-bffd6.firebaseapp.com",
  projectId: "adminpanel-bffd6",
  storageBucket: "adminpanel-bffd6.appspot.com",
  messagingSenderId: "555480011248",
  appId: "1:555480011248:web:f178bb922452ef376f8d35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();