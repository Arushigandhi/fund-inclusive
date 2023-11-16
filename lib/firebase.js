import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

// console.log("firebaseConfig", firebaseConfig);

let firebaseApp, db, storageRef;

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  db = firebase.firestore();
  const storage = firebase.app().storage("gs://fund-inc.appspot.com");
  storageRef = storage.ref();
}
export default firebase;

export { db, firebase, storageRef };
