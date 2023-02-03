import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4xd0DDFMNya4WYjEhjsKUUNmC8xuzpSI",
  authDomain: "fir-frontend-33ada.firebaseapp.com",
  projectId: "fir-frontend-33ada",
  storageBucket: "fir-frontend-33ada.appspot.com",
  messagingSenderId: "42334799513",
  appId: "1:42334799513:web:a9201fecda715da1a51a08",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
