import express from 'express';
import GameScore from '../models/GameScore.js';
import userAuth from '../middleware/userAuth.js';

const router = express.Router();

// Test MongoDB connection
router.get('/testMongo', async (req, res) => {
  try {
    const count = await GameScore.countDocuments();
    res.json({ message: 'MongoDB is connected!', count });
  } catch (error) {
    res.status(500).json({ error: 'MongoDB connection failed', details: error.message });
  }
});

// Save a new score
router.post('/save', userAuth ,async (req, res) => {
  try {
    const { name, score, userId, gameType } = req.body;
    console.log('Received score data:', req.body);

    if (typeof score !== 'number' || !gameType || !userId) {
      return res.status(400).json({ error: 'userId, gameType, and numeric score are required' });
    }

    const newScore = new GameScore({
      name: name || "Anonymous",
      score,
      userId,
      gameType,
      timestamp: Date.now()
    });

    await newScore.save();
    res.status(201).json({ message: 'Score saved successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to save score', details: error.message });
  }
});

// Get leaderboard (top scores)
router.get('/leaderboard', async (req, res) => {
  try {
    const scores = await GameScore.find()
      .sort({ score: -1 })
      .limit(10)
      .select('name score gameType timestamp');

    res.json({ scores });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch leaderboard', details: error.message });
  }
});

// Get user's scores
router.get('/scores/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const scores = await GameScore.find({ userId })
      .sort({ timestamp: -1 })
      .select('name score gameType timestamp');

    res.json({ scores });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch user scores', details: error.message });
  }
});

export default router;
