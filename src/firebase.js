import { initializeApp } from "firebase/app";
import { collection, query, doc, getDocs, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDZkuR4HnNYwFum1Z_PX9RmCjym8_DhLbs",
    authDomain: "asodipat.firebaseapp.com",
    projectId: "asodipat",
    storageBucket: "asodipat.appspot.com",
    messagingSenderId: "63327029359",
    appId: "1:63327029359:web:f68d44d5ef417f5b93e59a",
    measurementId: "G-2KMWH5DWDY"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)


