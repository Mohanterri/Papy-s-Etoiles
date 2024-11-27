import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDx4oqsQowlnGI5ET4irPbk9CPMVaCo1gQ",
  authDomain: "papys-5-etoiles.firebaseapp.com",
  projectId: "papys-5-etoiles",
  storageBucket: "papys-5-etoiles.firebasestorage.app",
  messagingSenderId: "174373290361",
  appId: "1:174373290361:web:2f75d670542f990f332fa8",
  measurementId: "G-KBW87SE46D"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
