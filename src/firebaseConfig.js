// Import Firebase dependencies
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN2Cljdo-tpKJGMuwUxMEYYoilnYJ4s_4",
  authDomain: "authentications-d5250.firebaseapp.com",
  projectId: "authentications-d5250",
  storageBucket: "authentications-d5250.firebasestorage.app",
  messagingSenderId: "267913341165",
  appId: "1:267913341165:web:76b8c0b86ab1d8c6c144e4",
  measurementId: "G-M9ZWYLSCXV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Setup Google Auth Provider
const provider = new GoogleAuthProvider();

// Export the necessary modules
export { auth, provider };
