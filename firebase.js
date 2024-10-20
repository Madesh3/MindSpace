// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBo3B71BGTiJHUejy87gyCJd-lz7u8-mKI",
  authDomain: "mind-ca2e7.firebaseapp.com",
  databaseURL: "https://mind-ca2e7-default-rtdb.firebaseio.com",
  projectId: "mind-ca2e7",
  storageBucket: "mind-ca2e7.appspot.com",
  messagingSenderId: "587207354354",
  appId: "1:587207354354:web:03a15f540600cdf6616d6b",
  measurementId: "G-BBHLNYCS4C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Initialize the Realtime Database
const database = getDatabase(app);
