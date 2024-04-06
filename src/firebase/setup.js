import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwp63cy6Ga0pRbbWBhXVqvXlvbdO-cc2o",
  authDomain: "meetmiddle-c075e.firebaseapp.com",
  projectId: "meetmiddle-c075e",
  storageBucket: "meetmiddle-c075e.appspot.com",
  messagingSenderId: "91102947089",
  appId: "1:91102947089:web:ba2204a37d9cb9ae050eb0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);