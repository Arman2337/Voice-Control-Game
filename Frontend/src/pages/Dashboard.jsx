
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { getUserScores } from "../utils/scoreManager";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [scores, setScores] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      getUserScores().then(setScores);
    }
  }, [user]);

  if (!user) {
    navigate("/login");
    return null;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Welcome, {user.email}</h2>
      <h3 className="text-xl mt-4">Your Scores:</h3>
      <ul>
        {scores.map((score, index) => (
          <li key={index} className="p-2 bg-gray-200 rounded mt-2">
            {score.game}: {score.Quizscore} points
          </li>
        ))}
      </ul>

      <button onClick={() => navigate("/quiz")} className="mt-4 bg-blue-500 text-white p-2 rounded">Play Quiz</button>
      <button onClick={() => navigate("/memory")} className="mt-4 bg-green-500 text-white p-2 rounded">Play Memory Game</button>
      <button onClick={logout} className="mt-4 bg-red-500 text-white p-2 rounded">Logout</button>
    </div>
  );
};

export default Dashboard;


// import { useEffect, useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { getUserScores } from "../utils/api";
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//   const { user, logout } = useAuth();
//   const [scores, setScores] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (user) {
//       getUserScores(user.uid).then(setScores);
//     }
//   }, [user]);

//   if (!user) {
//     navigate("/login");
//     return null;
//   }

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold">Welcome, {user.email}</h2>
//       <h3 className="text-xl mt-4">Your Scores:</h3>
//       <ul>
//         {scores.map((score, index) => (
//           <li key={index} className="p-2 bg-gray-200 rounded mt-2">
//             {score.gameType}: {score.score} points
//           </li>
//         ))}
//       </ul>
//       <button onClick={() => navigate("/quiz")} className="mt-4 bg-blue-500 text-white p-2 rounded">Play Quiz</button>
//       <button onClick={() => navigate("/memory")} className="mt-4 bg-green-500 text-white p-2 rounded">Play Memory Game</button>
//       <button onClick={logout} className="mt-4 bg-red-500 text-white p-2 rounded">Logout</button>
//     </div>
//   );
// };

// export default Dashboard;


// // import { useEffect, useState } from "react";
// // import { useAuth } from "../context/AuthContext";
// // import { getUserScores } from "../utils/scoreManager";
// // import { useNavigate } from "react-router-dom";

// // const Dashboard = () => {
// //   const { user, logout } = useAuth();
// //   const [scores, setScores] = useState([]);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     if (user) {
// //       getUserScores().then(setScores);
// //     }
// //   }, [user]);

// //   if (!user) {
// //     navigate("/login");
// //     return null;
// //   }

// //   return (
// //     <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
// //       <h2 className="text-4xl font-bold text-gray-800">Welcome, {user.email}</h2>
// //       <h3 className="text-2xl mt-4 text-gray-700">Your Scores:</h3>
// //       <ul className="w-full max-w-md bg-white shadow-lg rounded-lg p-4 mt-4">
// //         {scores.map((score, index) => (
// //           <li key={index} className="p-3 bg-gray-200 rounded mt-2 text-center">
// //             {score.game}: <span className="font-bold">{score.score} points</span>
// //           </li>
// //         ))}
// //       </ul>

// //       <div className="flex space-x-4 mt-6">
// //         <button onClick={() => navigate("/quiz")} className="px-5 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">Play Quiz</button>
// //         <button onClick={() => navigate("/memory")} className="px-5 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition">Play Memory Game</button>
// //         <button onClick={logout} className="px-5 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition">Logout</button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Dashboard;



// import { useEffect, useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { getUserScores } from "../utils/scoreManager";
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//   const { user, logout } = useAuth();
//   const [scores, setScores] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (user) {
//       getUserScores(user.uid).then(setScores); // Ensure scores are fetched with user ID
//     }
//   }, [user]);

//   if (!user) {
//     navigate("/login");
//     return null;
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
//       <h2 className="text-4xl font-bold text-gray-800">Welcome, {user.email}</h2>
//       <h3 className="text-2xl mt-4 text-gray-700">Your Scores:</h3>
//       <ul className="w-full max-w-md bg-white shadow-lg rounded-lg p-4 mt-4">
//         {scores.length > 0 ? (
//           scores.map((score, index) => (
//             <li key={index} className="p-3 bg-gray-200 rounded mt-2 text-center">
//               {score.gameType}: <span className="font-bold">{score.score} points</span>
//             </li>
//           ))
//         ) : (
//           <li className="p-3 text-gray-500">No scores available yet.</li>
//         )}
//       </ul>

//       <div className="flex space-x-4 mt-6">
//         <button onClick={() => navigate("/quiz")} className="px-5 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">Play Quiz</button>
//         <button onClick={() => navigate("/memory")} className="px-5 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition">Play Memory Game</button>
//         <button onClick={logout} className="px-5 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition">Logout</button>
//       </div>
//     </div>
//   );
// };





// Removed unused `useAllUserScores` to avoid export warnings.


// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import { db, collection, getDocs } from "../firebaseConfig";
// import { Trophy } from "lucide-react";
// import { useEffect, useState } from "react";

// const Dashboard = () => {
//   const { user, logout } = useAuth();
//   const [scores, setScores] = useState([]);
//   const [activeTab, setActiveTab] = useState("all");
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!user) {
//       navigate("/login");
//       return;
//     }
//     const fetchScores = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, "scores"));
//         const scoresData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//         const userScores = scoresData.filter(score => score.userId === user.uid);
//         const sortedScores = userScores.sort((a, b) => b.score - a.score);
//         setScores(sortedScores);
//       } catch (error) {
//         console.error("Error fetching scores:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchScores();
//   }, [user, navigate]);

//   const filteredScores = scores.filter(score => activeTab === "all" || score.game === activeTab);
  
//   const formatDate = (date) => new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(new Date(date));

//   return (
//     <div className="dashboard-container">
//       <motion.h1 className="dashboard-header" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
//         Welcome, {user?.email}
//       </motion.h1>

//       <div className="tabs">
//         <button className={activeTab === "all" ? "active" : ""} onClick={() => setActiveTab("all")}>All Games</button>
//         <button className={activeTab === "quiz" ? "active" : ""} onClick={() => setActiveTab("quiz")}>Quiz</button>
//         <button className={activeTab === "memory" ? "active" : ""} onClick={() => setActiveTab("memory")}>Memory</button>
//       </div>

//       {loading ? (
//         <motion.p className="text-center text-gray-500 py-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//           Loading scores...
//         </motion.p>
//       ) : filteredScores.length > 0 ? (
//         <div className="space-y-4">
//           {filteredScores.map((score, index) => (
//             <motion.div key={score.id} className={`score-card ${index < 3 ? `rank-${index + 1}` : ""}`}
//               initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
//               <div>
//                 <p className="card-title">{score.game}</p>
//                 <p className="text-sm text-gray-500">{formatDate(score.date)}</p>
//               </div>
//               <div className="text-right">
//                 <p className="text-xl font-bold">{score.score} pts</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       ) : (
//         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-center py-8">
//           <Trophy className="w-12 h-12 text-gray-400 mx-auto mb-2" />
//           <p className="text-lg font-medium">No scores yet</p>
//         </motion.div>
//       )}

//       <div className="dashboard-actions">
//         <button onClick={() => navigate("/quiz")} className="play-button">Play Quiz</button>
//         <button onClick={() => navigate("/memory")} className="play-button">Play Memory Game</button>
//         <button onClick={logout} className="logout-button">Logout</button>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
