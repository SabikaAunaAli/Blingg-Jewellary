
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyBnQ6orz6c418684EDM5kn0nRUykQb6qDw",
  authDomain: "bling-jewellary.firebaseapp.com",
  projectId: "bling-jewellary",
  storageBucket: "bling-jewellary.appspot.com",
  messagingSenderId: "747439469830",
  appId: "1:747439469830:web:6c6e42e647faba5136da87",
  measurementId: "G-M3JR9Z85F2"
};


const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth }