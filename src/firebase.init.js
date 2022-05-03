import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCQIMgZTuG-1CISerMuf0q8PS2qfU444iw",
  authDomain: "paratronics-2213d.firebaseapp.com",
  projectId: "paratronics-2213d",
  storageBucket: "paratronics-2213d.appspot.com",
  messagingSenderId: "423397072694",
  appId: "1:423397072694:web:ff18abab172fe853925d97",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
