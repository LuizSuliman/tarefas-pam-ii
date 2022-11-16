// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import  "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8ltlc6H3FZL2O6MBQkYCqe88TGu__tHg",
  authDomain: "expo-firebase-29c48.firebaseapp.com",
  projectId: "expo-firebase-29c48",
  storageBucket: "expo-firebase-29c48.appspot.com",
  messagingSenderId: "583308099470",
  appId: "1:583308099470:web:f1ac9353b4e14dbe2caedf"
};

// Initialize Firebase
if (firebase.app.lenght === 0) {
    Firebase = firebase.initializeApp(firebaseConfig);
}

export default Firebase;