// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOfMsQPJlMuSv514C1riQ0K3Gt6LWE6bA",
  authDomain: "dragon-news-auth-8196d.firebaseapp.com",
  projectId: "dragon-news-auth-8196d",
  storageBucket: "dragon-news-auth-8196d.appspot.com",
  messagingSenderId: "737022692973",
  appId: "1:737022692973:web:566d1394f9164ca9513964"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;