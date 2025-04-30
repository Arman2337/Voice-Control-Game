import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/games";

export const saveGame = async (userId, gameType, score,name) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/save`, {
      userId,
      gameType,
      score,
      name,
      timestamp: new Date().toISOString(),
    });
    return response.data;
  } catch (error) {
    console.error("Error saving game data:", error);
  }
};

export const getUserScores = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/scores/${userId}`);
    return response.data.scores;
  } catch (error) {
    console.error("Error fetching scores:", error);
    return [];
  }
};


export const getLeaderboard = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/leaderboard`);
    return response.data;
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    return [];
  }
};