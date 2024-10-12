// Firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDZFIJp703KFmQK30oK09YkQRHbjL249qo",
  authDomain: "todo-app-c9bda.firebaseapp.com",
  databaseURL: "https://todo-app-c9bda-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "todo-app-c9bda",
  storageBucket: "todo-app-c9bda.appspot.com",
  messagingSenderId: "355509739692",
  appId: "1:355509739692:web:dce5ec6e08cfade89eff09"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };

