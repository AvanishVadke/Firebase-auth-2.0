// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh5CilVgSq9MVRKCozfCIe2_q_aQ82gl0",
  authDomain: "email-and-auth-app.firebaseapp.com",
  projectId: "email-and-auth-app",
  storageBucket: "email-and-auth-app.firebasestorage.app",
  messagingSenderId: "326755469157",
  appId: "1:326755469157:web:c9b0b1e17d415727e3438c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;