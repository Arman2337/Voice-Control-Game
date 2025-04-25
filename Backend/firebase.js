// backend/firebase.js
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json"); // Download from Firebase Console

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://voice-control-1779.firebaseio.com",
});

const db = admin.firestore();

// Test connection
db.collection("test").add({ message: "Firebase connected!" })
  .then(() => console.log("🔥 Firebase is connected successfully!"))
  .catch((error) => console.error("❌ Firebase connection failed:", error));

module.exports = { db };