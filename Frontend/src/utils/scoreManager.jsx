import { db, auth } from "../firebaseConfig";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

// ✅ Save user score
export const saveScore = async (game, score) => {
  const user = auth.currentUser;
  if (!user) return;

  try {
    await addDoc(collection(db, "scores"), {
      userId: user.uid,
      game: game,
      score: score,
      timestamp: new Date(),
    });
    console.log("Score saved successfully!");
  } catch (error) {
    console.error("Error saving score:", error);
  }
};

// ✅ Retrieve scores for the logged-in user
export const getUserScores = async () => {
  const user = auth.currentUser;
  if (!user) return [];

  try {
    const q = query(collection(db, "scores"), where("userId", "==", user.uid));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => doc.data());
  } catch (error) {
    console.error("Error fetching scores:", error);
    return [];
  }
};
