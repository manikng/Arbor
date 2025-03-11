import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAS6SmDT21sDYh2kSYgI5QOpd_U9HZjZGM",
    authDomain: "rentit-b4555.firebaseapp.com",
    databaseURL: "https://rentit-b4555-default-rtdb.firebaseio.com",
    projectId: "rentit-b4555",
    storageBucket: "rentit-b4555.firebasestorage.app",
    messagingSenderId: "866324838598",
    appId: "1:866324838598:web:0f618cb51aa1a9e227bfc7",
    measurementId: "G-PLNG6E31P1"
  };

  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
console.log(app);
console.log("the db is :",db);

export  { app};