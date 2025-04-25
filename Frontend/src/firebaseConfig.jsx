


// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// // import { collection, doc, setDoc, getDocs, query, orderBy } from "firebase/firestore";
// import { collection, getDocs, query, where, addDoc } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyDMe2nRq8e9s9V8PXn58OaS64--Z7S3BMY",
//   authDomain: "voice-control-1779.firebaseapp.com",
//   projectId: "voice-control-1779",
//   storageBucket: "voice-control-1779.appspot.com",
//   messagingSenderId: "233270751313",
//   appId: "1:233270751313:web:3f831807ec13d35cd04870",
//   measurementId: "G-9ENSQMFZ9X"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// // export { auth, db };
// export { db, auth, collection, getDocs, query, where, addDoc };


// firebaseConfig.jsx

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, getDocs, query, where, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMe2nRq8e9s9V8PXn58OaS64--Z7S3BMY",
  authDomain: "voice-control-1779.firebaseapp.com",
  projectId: "voice-control-1779",
  storageBucket: "voice-control-1779.appspot.com",
  messagingSenderId: "233270751313",
  appId: "1:233270751313:web:3f831807ec13d35cd04870",
  measurementId: "G-9ENSQMFZ9X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export {
  auth,
  app,
  db,
  GoogleAuthProvider, // exported so we can import it in AuthContext
  collection,
  getDocs,
  query,
  where,
  addDoc
};
