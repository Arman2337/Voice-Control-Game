// const express = require("express");
// const cors = require("cors");
// const gameRoutes = require("./routes/gameRoutes");

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use("/api/games", gameRoutes);

// app.get("/", (req, res) => {
//   res.json({ message: "Game backend is running!" });
// });

// app.post('/api/games/save', (req, res) => {
//   // Access data from req.body
//   const { user, gameType, score, timestamp } = req.body;
//   // Save to DB (MongoDB, SQL, etc.) or do something with the data
//   console.log('Game data received:', req.body);

//   return res.status(200).json({ message: 'Game saved successfully' });
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




// const express = require("express");
// const cors = require("cors");
// const gameRoutes = require("./routes/gameRoutes");
// const authRoutes = require("./routes/authRoutes"); // ✅ Added

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Game Routes
// app.use("/api/games", gameRoutes);

// // ✅ OTP Auth Routes
// app.use("/api/auth", authRoutes);

// app.get("/", (req, res) => {
//   res.json({ message: "Game backend is running!" });
// });

// app.post("/api/games/save", (req, res) => {
//   const { user, gameType, score, timestamp } = req.body;
//   console.log("Game data received:", req.body);
//   return res.status(200).json({ message: "Game saved successfully" });
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



// backend/server.js

const express = require("express");
const cors = require("cors");
const gameRoutes = require("./routes/gameRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Game Routes
app.use("/api/games", gameRoutes);

// Auth (OTP) Routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Game backend is running!" });
});

app.post("/api/games/save", (req, res) => {
  const { user, gameType, score, timestamp } = req.body;
  console.log("Game data received:", req.body);
  return res.status(200).json({ message: "Game saved successfully" });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
