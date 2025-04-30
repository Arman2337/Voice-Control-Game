// import mongoose from 'mongoose';

// const gameScoreSchema = new mongoose.Schema({
//   name: { type: String },
//   // email: { type: String, required: true },
//   userId: { type: String, required: true },
//   gameType: { type: String, required: true },
//   score: { type: Number, required: true },
//   timestamp: { type: Date, default: Date.now },
// });

// const GameScore = mongoose.model('GameScore', gameScoreSchema);

// export default GameScore;


// models/GameScore.js
import mongoose from 'mongoose';

const GameScoreSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    required: true
  },
  gameType: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now,
  }
});

const GameScore = mongoose.model('GameScore', GameScoreSchema);

export default GameScore;
