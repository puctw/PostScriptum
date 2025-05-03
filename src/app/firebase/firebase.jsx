// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5te-Bs8PCPHnx3AUHej16Vw5ZyIto1ME",
  authDomain: "postscriptum-ef420.firebaseapp.com",
  projectId: "postscriptum-ef420",
  storageBucket: "postscriptum-ef420.firebasestorage.app",
  messagingSenderId: "6012470780",
  appId: "1:6012470780:web:097840983d09a945205e79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };