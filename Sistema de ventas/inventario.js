import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { sendPasswordResetEmail, getAuth, updateProfile, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithRedirect, getRedirectResult, signOut, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";//https://cdnjs.cloudflare.com/ajax/libs/firebase/7.14.1-0/firebase-auth.js
//import { getAnalytics } from "/firebase/analytics";
import { deleteDoc, updateDoc, doc, setDoc, getFirestore, collection, getDocFromCache, addDoc, Timestamp, onSnapshot, getDoc, query, where, getDocs, orderBy, limit } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js"
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

  async function obtenerProductos(){
    const q = query(collection(db, "Productos"));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
    try{
        console.log(doc.id, " => ", doc.data());
        nuevaFila(doc.id,doc.data().Producto, doc.data().Descripcion, doc.data().Precio, doc.data().Garantia, doc.data().Cantidad)
        
    }catch(e){
        console.log(e)
    }
  // doc.data() is never undefined for query doc snapshots
  //crearCard(doc.data().nombre, doc.data().precio, ".")
});
}
obtenerProductos();


  function nuevaFila(id,Producto, Descripcion, Precio, Garantia, Cantidad) {
   
    var tbody = document.getElementById("tbody");
    var tr = document.createElement("tr");
    var td1 =document.createElement("td")
    td1.className = "td1";
    td1.innerHTML = id;

    var td2 = document.createElement("td");
    td2.className = "td2";
    td2.innerHTML = Producto;

    var td3 = document.createElement("td");
    td3.className = "td3";
    td3.innerHTML = Descripcion;

    var td4 = document.createElement("td");
    td4.className = "td4";
    td4.innerHTML = Precio;

    var td5 = document.createElement("td");
    td5.className = "td5";
    td5.innerHTML = Garantia;

    var td6 = document.createElement("td");
    td6.className = "td6";
    td6.innerHTML = Cantidad;

  
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6)
    tbody.appendChild(tr);


    }

    obtenerProductos();



