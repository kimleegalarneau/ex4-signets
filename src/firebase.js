import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebase/firestore';

// Configuration (mettez-y les vôtres !)
const firebaseConfig = {
  apiKey: "AIzaSyB4hT4OAlt2GkN2t9yi8UXk6YZUgJ8tbuQ",
  authDomain: "veille-technologique-b83cd.firebaseapp.com",
  databaseURL: "https://veille-technologique-b83cd-default-rtdb.firebaseio.com",
  projectId: "veille-technologique-b83cd",
  storageBucket: "veille-technologique-b83cd.appspot.com",
  messagingSenderId: "262670044254",
  appId: "1:262670044254:web:8fb0cb2a8693b74a5038cf"
};

// Initialiser Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialiser FirebaseUI
export const instanceFirebaseUI = new firebaseui.auth.AuthUI(firebase.auth());

// Initialiser Firestore
export const firestore = firebase.firestore();
