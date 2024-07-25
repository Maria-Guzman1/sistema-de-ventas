import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { sendPasswordResetEmail, getAuth, updateProfile, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithRedirect, getRedirectResult, signOut, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";//https://cdnjs.cloudflare.com/ajax/libs/firebase/7.14.1-0/firebase-auth.js
//import { getAnalytics } from "/firebase/analytics";
import { updateDoc, doc, setDoc, getFirestore, collection, getDocFromCache, addDoc, Timestamp, onSnapshot, getDoc, query, where, getDocs, orderBy, limit } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js"
//import {getStorage, ref } from"https://cdnjs.cloudflare.com/ajax/libs/firebase/10.2.0/firebase-storage.min.js"
import { getStorage, ref } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-storage.js"

const firebaseConfig = {
    apiKey: "AIzaSyDJzezVwMK5bOP0SSOmkaOQl6PF2dj0CwY",
    authDomain: "sistema-de-datos-4557b.firebaseapp.com",
    projectId: "sistema-de-datos-4557b",
    storageBucket: "sistema-de-datos-4557b.appspot.com",
    messagingSenderId: "906608088785",
    appId: "1:906608088785:web:4b21a13d2ecf52c29097f0",
    measurementId: "G-GB91D0HPMN"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore();

document.getElementById("buscar").addEventListener("click", async function(){

    var codigo=parseFloat(document.getElementById(codigo).value)
    
})
