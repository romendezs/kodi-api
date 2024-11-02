// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVUX7F19Au_saRRMZRJK4812CS57Ok6Rc",
  authDomain: "bootcamp-login.firebaseapp.com",
  projectId: "bootcamp-login",
  storageBucket: "bootcamp-login.appspot.com",
  messagingSenderId: "1019434583543",
  appId: "1:1019434583543:web:f157e59087e7ac6c05daf2",
  measurementId: "G-DJHDVJX4H5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export default app;