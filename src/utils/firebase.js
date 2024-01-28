import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDSNLAe4jdilNZLQbFz81QmnCiaFtDEI80",
  authDomain: "netflixgpt-cfee7.firebaseapp.com",
  projectId: "netflixgpt-cfee7",
  storageBucket: "netflixgpt-cfee7.appspot.com",
  messagingSenderId: "671261167075",
  appId: "1:671261167075:web:7f763909dcdd27d26d64d6",
  measurementId: "G-0V7861L6DE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const auth = getAuth();
export  {auth}
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed up
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });