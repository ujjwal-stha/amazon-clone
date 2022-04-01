import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_YOURAPIKEY,
  authDomain: process.env.REACT_APP_YOURAUTHDOAMIN,
  projectId: process.env.REACT_APP_YOURPROJECTID,
  storageBucket: process.env.REACT_APP_YOURSTORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_YOURMESSAGINGSENDERID,
  appId: process.env.REACT_APP_YOURAPPID,
  measurementId: process.env.REACT_APP_YOURMEASUREMENTID,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
