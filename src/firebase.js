import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChliZmjLhsDYQ6sS0FJk5CqxWg45mYaKQ",
  authDomain: "clone-8b5ee.firebaseapp.com",
  projectId: "clone-8b5ee",
  storageBucket: "clone-8b5ee.appspot.com",
  messagingSenderId: "714532890359",
  appId: "1:714532890359:web:dd8a929dbe2db7b54215f2",
  measurementId: "G-XM1M01839B"
};

// initializing the app
const firebaseApp = firebase.initializeApp(firebaseConfig);

// create a real-time db on firebase
const db = firebaseApp.firestore();

// gives us a variable that helps us in signing in and authentication stuff
const auth = firebase.auth();

export { db, auth };