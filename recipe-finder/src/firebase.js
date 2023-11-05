import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUZJjwMIvf3mNjlaQON83YckU2Mzkkpm0",
  authDomain: "recipes-website-28032.firebaseapp.com",
  projectId: "recipes-website-28032",
  storageBucket: "recipes-website-28032.appspot.com",
  messagingSenderId: "355509448789",
  appId: "1:355509448789:web:cca889bfaae9aeb09a64dc",
  measurementId: "G-Y0HCRB2V74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);