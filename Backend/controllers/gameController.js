// const { db } = require("../firebase");

// exports.saveGame = async (req, res) => {
//   try {
//     const { userId, gameType, score, timestamp } = req.body;
//     if (!userId || !gameType || score === undefined || !timestamp) {
//       return res.status(400).json({ error: "Missing required fields" });
//     }

//     await db.collection("gameScores").add({ userId, gameType, score, timestamp });
//     res.status(201).json({ message: "Game data saved successfully!" });
//   } catch (error) {
//     res.status(500).json({ error: "Error saving game data", details: error.message });
//   }
// };

// exports.getUserScores = async (req, res) => {
//   try {
//     const { userId } = req.params;
//     const scoresSnapshot = await db.collection("gameScores").where("userId", "==", userId).get();
//     const scores = scoresSnapshot.docs.map(doc => doc.data());

//     res.status(200).json({ scores });
//   } catch (error) {
//     res.status(500).json({ error: "Error fetching scores", details: error.message });
//   }
// };




// controllers/gameController.js
import GameScore from '../models/GameScore.js';

export const saveGame = async (req, res) => {
  const { name, score, userId, gameType } = req.body;

  // Validate the required fields
  if (!userId || !gameType || typeof score !== 'number') {
    return res.status(400).json({ error: "userId, gameType, and score are required" });
  }

  try {
    // Create and save the new score in the database
    const newScore = new GameScore({
      name: name || "Anonymous", // Default name if not provided
      score,
      userId,
      gameType,
    });

    await newScore.save();

    return res.status(201).json({
      success: true,
      message: "Game score saved successfully!",
      data: newScore,
    });
  } catch (error) {
    console.error("Error saving score:", error);
    return res.status(500).json({
      success: false,
      message: "Error saving score",
      details: error.message,
    });
  }
};

// Fetch scores
export const getUserScores = async (req, res) => {
  const { userId } = req.params;

  try {
    const scores = await GameScore.find({ userId });

    if (!scores.length) {
      return res.status(404).json({ error: "No scores found for this user" });
    }

    return res.status(200).json({ success: true, scores });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching scores",
      details: error.message,
    });
  }
};
