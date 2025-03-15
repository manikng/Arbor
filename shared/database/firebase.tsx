import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { createContext, useContext, useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { data } from "react-router";
import { set ,ref, getDatabase } from "firebase/database";

export const FirebaseContext = createContext(null);
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


export const useFirebase = ()=> useContext(FirebaseContext);
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
console.log(app);
// console.log("the db is :",db);

const database = getDatabase(app);

export const putData = (key, data) => set(ref(database,key),data);
console.log("the database is :",putData);
export  { app};