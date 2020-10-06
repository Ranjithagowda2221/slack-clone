import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMDrc50ACWy12hzpExAQfh2QUso6yXjcs",
  authDomain: "slack-clone-7525f.firebaseapp.com",
  databaseURL: "https://slack-clone-7525f.firebaseio.com",
  projectId: "slack-clone-7525f",
  storageBucket: "slack-clone-7525f.appspot.com",
  messagingSenderId: "657244707906",
  appId: "1:657244707906:web:e541ed6db8f5568ea621db",
  measurementId: "G-Y8FPSF0NL3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig); // to connect to firebase
const db = firebaseApp.firestore(); // to access database from any other file
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db; // insted od import {db} we can do import db
