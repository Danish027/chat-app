import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBH9JKXPAVG6SPxpL3W_eq7VLncnU7gbc",
  authDomain: "chatapp-ef85b.firebaseapp.com",
  projectId: "chatapp-ef85b",
  storageBucket: "chatapp-ef85b.appspot.com",
  messagingSenderId: "665506518919",
  appId: "1:665506518919:web:1bbe033d37d8067d8d6522",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
