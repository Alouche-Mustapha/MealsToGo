import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

/*The app Firebase configuration*/
const firebaseConfig = {
  apiKey: "AIzaSyBWBIX1plxBtzZw8V3a8LfYtJrKp-0iaBU",
  authDomain: "mealstogo-ad73f.firebaseapp.com",
  projectId: "mealstogo-ad73f",
  storageBucket: "mealstogo-ad73f.appspot.com",
  messagingSenderId: "431728924451",
  appId: "1:431728924451:web:3cd1a2c7b1cbba0a231e96",
};

/*Initialize Firebase*/
initializeApp(firebaseConfig);

/*Aythentication instance*/
const auth = getAuth();

/*The login function with email and password*/
export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);
