import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB4xd0DDFMNya4WYjEhjsKUUNmC8xuzpSI",
  authDomain: "fir-frontend-33ada.firebaseapp.com",
  projectId: "fir-frontend-33ada",
  storageBucket: "fir-frontend-33ada.appspot.com",
  messagingSenderId: "42334799513",
  appId: "1:42334799513:web:a9201fecda715da1a51a08",
  databaseURL:
    "https://fir-frontend-33ada-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

// function writeUserData(userId, item) {
//   set(ref(database, "users/" + userId), {
//     gamesFromCart: item,
//   });
// }
function writeUserData(userId, item) {
  set(ref(database, "users/" + userId), item);
}
export default auth;
export { writeUserData, database, ref, set, onValue };
