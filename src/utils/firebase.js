// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCfMX-xCnXJSZbSOUnU6xgW7gjiuBl5_E",
  authDomain: "netflixgpt-529bf.firebaseapp.com",
  projectId: "netflixgpt-529bf",
  storageBucket: "netflixgpt-529bf.appspot.com",
  messagingSenderId: "241921250698",
  appId: "1:241921250698:web:e0ba02ef69cbeb5c8c6473",
  measurementId: "G-02BJVY2WZ3",
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();