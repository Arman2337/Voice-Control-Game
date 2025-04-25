// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";
// // import { db, auth } from "./firebase"; // Ensure firebase is initialized
// import { collection, doc, setDoc, getDocs, query, orderBy } from "firebase/firestore";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDMe2nRq8e9s9V8PXn58OaS64--Z7S3BMY",
//   authDomain: "voice-control-1779.firebaseapp.com",
//   projectId: "voice-control-1779",
//   storageBucket: "voice-control-1779.firebasestorage.app",
//   messagingSenderId: "233270751313",
//   appId: "1:233270751313:web:3f831807ec13d35cd04870",
//   measurementId: "G-9ENSQMFZ9X"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// // const auth = getAuth(app);

// // export { auth };

// const auth = getAuth(app);
// const db = getFirestore(app);  // ✅ Firestore instance

// const loginWithProvider = async () => {
//   try {
//     const result = await signInWithPopup(auth, provider);
//     const user = result.user;

//     // Store user in Firestore
//     await setDoc(doc(db, "users", user.uid), {
//       name: user.displayName,
//       email: user.email,
//       photoURL: user.photoURL,
//       uid: user.uid,
//     });

//     console.log("User added to Firestore:", user);
//   } catch (error) {
//     console.error("Google Login Error:", error.message);
//   }
// };


// export { auth, db , loginWithProvider ,collection, doc, setDoc, getDocs, query, orderBy };



// // export const saveUserScore = async (game, score) => {
// //   const user = auth.currentUser;
// //   if (!user) return;

// //   try {
// //     const userRef = doc(db, "users", user.uid);
// //     const scoreRef = doc(collection(userRef, "scores"));

// //     await setDoc(scoreRef, { game, score, timestamp: Date.now() });

// //     console.log("Score saved successfully!");
// //   } catch (error) {
// //     console.error("Error saving score:", error);
// //   }
// // };

// // export const fetchLeaderboard = async () => {
// //   try {
// //     const usersSnapshot = await getDocs(collection(db, "users"));
// //     let leaderboardData = [];

// //     for (const userDoc of usersSnapshot.docs) {
// //       const userData = userDoc.data();
// //       const scoresSnapshot = await getDocs(query(collection(userDoc.ref, "scores"), orderBy("score", "desc")));

// //       scoresSnapshot.forEach((scoreDoc) => {
// //         leaderboardData.push({
// //           name: userData.name || "Anonymous",
// //           score: scoreDoc.data().score,
// //           game: scoreDoc.data().game,
// //         });
// //       });
// //     }

// //     return leaderboardData.sort((a, b) => b.score - a.score); // Sort scores highest first
// //   } catch (error) {
// //     console.error("Error fetching leaderboard:", error);
// //     return [];
// //   }
// // };



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
