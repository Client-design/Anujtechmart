// src/firebase.js

// Import the core functions needed from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    signOut, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    onAuthStateChanged // Essential for monitoring login status in Context.js
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByG-z3SoQtpQVbTUqDilACQmAu4IozgT0",
  authDomain: "anuj-tech-mart.firebaseapp.com",
  projectId: "anuj-tech-mart",
  storageBucket: "anuj-tech-mart.firebasestorage.app",
  messagingSenderId: "1002969372812",
  appId: "1:1002999372812:web:7628bd2d465526288f43a9",
  measurementId: "G-0L02YGHH89"
};

// 1. Initialize Firebase App
const app = initializeApp(firebaseConfig);

// 2. Initialize Firebase Authentication Service
const auth = getAuth(app);

// 3. Export the auth instance and all required functions
export { 
    auth, 
    signOut, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    onAuthStateChanged
};
