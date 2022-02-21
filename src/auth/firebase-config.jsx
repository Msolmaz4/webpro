// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUrNKStS1yFiTKXbwXydaMkwHMb7aiGsk",
  authDomain: "webpro-865e8.firebaseapp.com",
  projectId: "webpro-865e8",
  storageBucket: "webpro-865e8.appspot.com",
  messagingSenderId: "884355599185",
  appId: "1:884355599185:web:0ceed525ec0341f410e170",
  measurementId: "G-XGX5CY424N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
