// import { db, auth } from "../firebaseConfig";
// import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

// // ✅ Save user score
// export const saveScore = async (game, score) => {
//   const user = auth.currentUser;
//   if (!user) return;

//   try {
//     await addDoc(collection(db, "scores"), {
//       userId: user.uid,
//       game: game,
//       score: score,
//       timestamp: new Date(),
//     });
//     console.log("Score saved successfully!");
//   } catch (error) {
//     console.error("Error saving score:", error);
//   }
// };

// // ✅ Retrieve scores for the logged-in user
// export const getUserScores = async () => {
//   const user = auth.currentUser;
//   if (!user) return [];

//   try {
//     const q = query(collection(db, "scores"), where("userId", "==", user.uid));
//     const querySnapshot = await getDocs(q);
//     return querySnapshot.docs.map((doc) => doc.data());
//   } catch (error) {
//     console.error("Error fetching scores:", error);
//     return [];
//   }
// };


import axios from "axios";
// import { auth } from "../firebaseConfig"; // Only for getting currentUser

// ✅ Save user score to MongoDB
export const saveScore = async (game, score) => {
  const user = auth.currentUser;
  if (!user) return;

  try {
    await axios.post("http://localhost:5000/api/games/save", {
      name: user.displayName || "Anonymous",
      email: user.email,
      userId: user.uid,
      gameType: game,   // passing the game name (example: "math-quiz")
      score: score,
    });
    console.log("✅ Score saved successfully to MongoDB!");
  } catch (error) {
    console.error("❌ Error saving score to MongoDB:", error);
  }
};

// ✅ Retrieve scores for the logged-in user from MongoDB
export const getUserScores = async () => {
  const user = auth.currentUser;
  if (!user) return [];

  try {
    const response = await axios.get(`http://localhost:5000/api/games/user/${user.uid}`);
    return response.data; // Assuming backend returns array of scores
  } catch (error) {
    console.error("❌ Error fetching user scores from MongoDB:", error);
    return [];
  }
};
