import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAe-m5w5gqzZO5bB6z5RNvMz1Y3bEoqHAE",
  authDomain: "clone-24785.firebaseapp.com",
  projectId: "clone-24785",
  storageBucket: "clone-24785.appspot.com",
  messagingSenderId: "509137579551",
  appId: "1:509137579551:web:8c3292694e6e76c9a8af2a",
  measurementId: "G-3W409YB61L"
};

// initializing the app
const firebaseApp = firebase.initializeApp(firebaseConfig);

// create a real-time db on firebase
const db = firebaseApp.firestore();

// gives us a variable that helps us in signing in and authentication stuff
const auth = firebase.auth();

export { db, auth };