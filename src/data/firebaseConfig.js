// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCezjSz1hBZ8h7S0NK_iuMcI9VRrnSVTp8",
  authDomain: "homey-22f07.firebaseapp.com",
  projectId: "homey-22f07",
  storageBucket: "homey-22f07.appspot.com",
  messagingSenderId: "717705071667",
  appId: "1:717705071667:web:694778f061ade8b02ea746",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
