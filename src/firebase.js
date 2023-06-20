// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbZldn-07yNREK3HUvTYwvGxc95f17nag",
  authDomain: "purple-ee988.firebaseapp.com",
  projectId: "purple-ee988",
  storageBucket: "purple-ee988.appspot.com",
  messagingSenderId: "749057354891",
  appId: "1:749057354891:web:ab69c470fa83b4cbaeb88e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);