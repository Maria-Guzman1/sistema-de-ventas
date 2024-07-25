import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { sendPasswordResetEmail, getAuth, updateProfile, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithRedirect, getRedirectResult, signOut, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";//https://cdnjs.cloudflare.com/ajax/libs/firebase/7.14.1-0/firebase-auth.js
//import { getAnalytics } from "/firebase/analytics";
import { updateDoc, doc, setDoc, getFirestore, collection, getDocFromCache, addDoc, Timestamp, onSnapshot, getDoc, query, where, getDocs, orderBy, limit } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js"
//import {getStorage, ref } from"https://cdnjs.cloudflare.com/ajax/libs/firebase/10.2.0/firebase-storage.min.js"
import { getStorage, ref } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-storage.js"

const firebaseConfig = {
  apiKey: "AIzaSyDCGNIt5CGzA_PnOhod38T5XTP7jPzFra0",
  authDomain: "login-58ee8.firebaseapp.com",
  projectId: "login-58ee8",
  storageBucket: "login-58ee8.appspot.com",
  messagingSenderId: "517852384833",
  appId: "1:517852384833:web:770851ab2f559b970c00c0",
  measurementId: "G-J1PMVEV7LB"
};
  const app = initializeApp(firebaseConfig);
  const db = getFirestore();

document.getElementById("iniciar").addEventListener("click", async function(){
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value

    if (email === "" && password === ""){
      
    }


    async function obtenerUsuarios(){
      const q = query(collection(db, "users"));
  
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
      try{

    
      }catch(e){
          console.log(e)
      }
    // doc.data() is never undefined for query doc snapshots
    //crearCard(doc.data().nombre, doc.data().precio, ".")
  });
  }
  
});