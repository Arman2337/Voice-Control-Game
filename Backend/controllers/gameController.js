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


const { db } = require("../firebase");

exports.saveGame = async (req, res) => {
  try {
    const { userId, gameType, score, timestamp } = req.body;
    if (!userId || !gameType || score === undefined || !timestamp) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    await db.collection("gameScores").add({ userId, gameType, score, timestamp });
    res.status(201).json({ message: "Game data saved successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error saving game data", details: error.message });
  }
};

exports.getUserScores = async (req, res) => {
  try {
    const { userId } = req.params;
    const scoresSnapshot = await db.collection("gameScores").where("userId", "==", userId).get();
    
    if (scoresSnapshot.empty) {
      return res.status(404).json({ error: "No scores found for this user" });
    }

    const scores = scoresSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json({ scores });
  } catch (error) {
    res.status(500).json({ error: "Error fetching scores", details: error.message });
  }
};
