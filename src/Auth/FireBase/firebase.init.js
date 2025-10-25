// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzsySvvZUsaZg06KaM75HCMyw3lQCYHSM",
  authDomain: "shadhin-ac8ec.firebaseapp.com",
  projectId: "shadhin-ac8ec",
  storageBucket: "shadhin-ac8ec.firebasestorage.app",
  messagingSenderId: "1045340085445",
  appId: "1:1045340085445:web:969633585d164144d024ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
