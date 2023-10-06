// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMzXYTpLIWYsRKiW1I2uqF5MdlP2IdgzY",
  authDomain: "assignment-event-management.firebaseapp.com",
  projectId: "assignment-event-management",
  storageBucket: "assignment-event-management.appspot.com",
  messagingSenderId: "280744689894",
  appId: "1:280744689894:web:50ecc71922ded332f17b27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;