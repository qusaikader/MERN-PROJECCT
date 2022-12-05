import firebase from 'firebase';
import { getFirestore, collection, addDoc, where, query, getDocs} from "firebase/firebase-firestore"
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_ofo9eyIMiWCFsYL9leTCB4CzsRnBfEk",
  authDomain: "twitter-a5a44.firebaseapp.com",
  projectId: "twitter-a5a44",
  storageBucket: "twitter-a5a44.appspot.com",
  messagingSenderId: "8911394484",
  appId: "1:8911394484:web:f4a7d5935f7ad0997829e1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = getFirestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const auth = firebase.auth();
export default firebase;
export const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(provider);
    const user = res.user;
    const userRef = collection(db, "users");
    const result = await getDocs(query(userRef, where("uid", "==", user.uid)));
    if (result.empty) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    alert(err.message);
  }
};

export const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    alert(err.message);
  }
};

export const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    alert(err.message);
  }
};