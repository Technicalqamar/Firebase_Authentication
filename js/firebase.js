
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-analytics.js";
 import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
 import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword } from
  "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";  


  const firebaseConfig = {
    apiKey: "AIzaSyDE-NMpSpbIUl30On1hOGmVhAMy-epyJUM",
    authDomain: "authentication-form-f87f1.firebaseapp.com",
    projectId: "authentication-form-f87f1",
    storageBucket: "authentication-form-f87f1.firebasestorage.app",
    messagingSenderId: "401577286747",
    appId: "1:401577286747:web:b8f8c2c88122240edeb37e",
    measurementId: "G-VBEB1106R5"
  };

  // Initialize Firebase
    // const analytics = getAnalytics(app);

  const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    export { auth, createUserWithEmailAndPassword , signInWithEmailAndPassword};
