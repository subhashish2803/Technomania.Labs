// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBJb-f2IYk_wItktQo6iPKeZFapGn-eIO8",
  authDomain: "technomanialabs-auth.firebaseapp.com",
  projectId: "technomanialabs-auth",
  storageBucket: "technomanialabs-auth.appspot.com", // ✅ corrected bucket URL
  messagingSenderId: "913754866676",
  appId: "1:913754866676:web:a753ab7b89e38075142fa1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export auth
export const auth = getAuth(app);
