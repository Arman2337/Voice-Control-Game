// const express = require("express");
// const router = express.Router();

// // Dummy database (Replace with real DB)
// const gameResults = [];

// router.post("/save", (req, res) => {
//     const { user, gameType, score, timestamp } = req.body;

//     if (!user || !gameType || score === undefined || !timestamp) {
//         return res.status(400).json({ error: "Missing required fields" });
//     }

//     const gameData = { user, gameType, score, timestamp };
//     gameResults.push(gameData);

//     res.json({ message: "Game data saved successfully", data: gameData });
// });

// router.get("/scores", (req, res) => {
//     res.json({ scores: gameResults });
// });

// module.exports = router;


const express = require("express");
const { db } = require("../firebase");

const router = express.Router();

router.get("/testFirebase", async (req, res) => {
  try {
    const snapshot = await db.collection("test").get();
    res.json({ message: "Firebase is connected!", count: snapshot.size });
  } catch (error) {
    res.status(500).json({ error: "Firebase connection failed", details: error.message });
  }
});

module.exports = router;
