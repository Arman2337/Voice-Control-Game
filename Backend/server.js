import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import cookieParser from 'cookie-parser'
import { connectDB } from './config/db.js'
import AuthRouter from './routes/AuthRoutes.js'
import UserRouter from './routes/UserRoutes.js'
import gameRoutes from './routes/gameRoutes.js'
import { saveGame, getUserScores } from './controllers/gameController.js'
import userAuth from './middleware/userAuth.js'

// Connect to MongoDB
connectDB()
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/auth', AuthRouter);
app.use('/api/user', UserRouter);
app.use('/api/games', gameRoutes);

// Default route
app.get("/", (req, res) => {
  res.json({ message: "MongoDB-based Game backend is running!" });
});

// Save Game Score
app.post("/api/games/save",userAuth,saveGame);

// Fetch scores
app.get("/api/games/scores/:userId", userAuth,getUserScores);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
