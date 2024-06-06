// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAe1x36iaLVM4CUSGA6Y8ww4isW1wKekaM",
  authDomain: "netflixgpt-b482d.firebaseapp.com",
  projectId: "netflixgpt-b482d",
  storageBucket: "netflixgpt-b482d.appspot.com",
  messagingSenderId: "990434844530",
  appId: "1:990434844530:web:eb24439cdefbe4c054c7eb",
  measurementId: "G-VNPPCJ00TY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();