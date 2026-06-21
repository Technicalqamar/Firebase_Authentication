import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut,
    updateEmail,
    updatePassword
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDE-NMpSpbIUl30On1hOGmVhAMy-epyJUM",
    authDomain: "authentication-form-f87f1.firebaseapp.com",
    projectId: "authentication-form-f87f1",
    storageBucket: "authentication-form-f87f1.firebasestorage.app",
    messagingSenderId: "401577286747",
    appId: "1:401577286747:web:b8f8c2c88122240edeb37e",
    measurementId: "G-VBEB1106R5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
    auth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut,
    updateEmail,
    updatePassword
};
