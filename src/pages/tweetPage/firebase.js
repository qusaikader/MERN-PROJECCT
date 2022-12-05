import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC_ofo9eyIMiWCFsYL9leTCB4CzsRnBfEk",
  authDomain: "twitter-a5a44.firebaseapp.com",
  projectId: "twitter-a5a44",
  storageBucket: "twitter-a5a44.appspot.com",
  messagingSenderId: "8911394484",
  appId: "1:8911394484:web:f4a7d5935f7ad0997829e1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

export default db;


