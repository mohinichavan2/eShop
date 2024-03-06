import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCae0h4iqf08q1U0kZCymmMPE5wbQEMujQ",
    authDomain: "eshop-40c96.firebaseapp.com",
    projectId: "eshop-40c96",
    storageBucket: "eshop-40c96.appspot.com",
    messagingSenderId: "473591411612",
    appId: "1:473591411612:web:bc843e6b0db276c6cf4e59",
    measurementId: "G-S8VS0F0ZT0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  
  const auth = firebase.auth();

  export {db , auth} ;
  