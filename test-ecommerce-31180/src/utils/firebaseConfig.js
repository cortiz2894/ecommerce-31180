// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDubDXuuFRxJqSbqEpw6a-mTcgmkTlJhlE",
  authDomain: "ecommerce-comision-31180.firebaseapp.com",
  projectId: "ecommerce-comision-31180",
  storageBucket: "ecommerce-comision-31180.appspot.com",
  messagingSenderId: "308833063456",
  appId: "1:308833063456:web:8a9bd9e872c2d8eadba245"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Firestore intialize
const db = getFirestore(app)

export default db