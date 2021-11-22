import firebase from "firebase";
import { initializeApp } from "firebase/app";
import React from 'react'

const firebaseConfig = {
    apiKey: "AIzaSyBU6Yi8PTQbwDg94C5FbXEm5r4Q7OnBlp0",
    authDomain: "do-ecommerce.firebaseapp.com",
    projectId: "do-ecommerce",
    storageBucket: "do-ecommerce.appspot.com",
    messagingSenderId: "847981877235",
    appId: "1:847981877235:web:b23a32b7b0fa092c5ee486"
  };

  const app = initializeApp(firebaseConfig);

export const getFirestore = () => {
    return firebase.firestore(app)
}


