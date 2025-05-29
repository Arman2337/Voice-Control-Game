


// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { getUserScores } from '../utils/api'; // ✅ Import your MongoDB API function
// import { Trophy } from 'lucide-react';
// import { useAppContext } from '../context/AppContext'; // ✅ Use AppContext, not AuthContext

// const Leaderboard = () => {
//   const { userData } = useAppContext(); // ✅ Correct user context
//   const [scores, setScores] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchScores = async () => {
//       if (!userData || !userData.id) {
//         console.error("No user data available");
//         setLoading(false);
//         return;
//       }

//       try {
//         const fetchedScores = await getUserScores(userData.id);
//         console.log("Fetched scores:", fetchedScores);

//         // Sort by score descending (if not already sorted)
//         fetchedScores.sort((a, b) => b.score - a.score);

//         setScores(fetchedScores);
//       } catch (error) {
//         console.error("Error fetching scores:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchScores();
//   }, [userData]);

//   return (
//     <div className="leaderboard-container">
//       <motion.h1 className="leaderboard-header" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
//         🏆 Leaderboard
//       </motion.h1>

//       {loading ? (
//         <motion.p className="text-center text-gray-500 py-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//           Loading scores...
//         </motion.p>
//       ) : scores.length > 0 ? (
//         <div className="space-y-4">
//           {scores.map((score, index) => (
//             <motion.div key={score._id} className="leaderboard-card"
//               initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              
//               <div>
//                 <p className="card-title">{score.name || "Anonymous"}</p>
//                 <p className="text-sm text-gray-500">
//                   {score.timestamp ? new Date(score.timestamp).toLocaleDateString() : "No Date"}
//                 </p>
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
//     </div>
//   );
// };

// export default Leaderboard;






// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { Trophy } from 'lucide-react';
// import { useAppContext } from '../context/AppContext'; // ✅ Use AppContext, not AuthContext
// import axios from 'axios';

// const Leaderboard = () => {
//   const { userData } = useAppContext(); // ✅ Correct user context
//   const [scores, setScores] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchScores = async () => {
//       if (!userData || !userData.id) {
//         console.error("No user data available");
//         setLoading(false);
//         return;
//       }

//       try {
//         const token = localStorage.getItem('token');
//         const { data } = await axios.get(`http://localhost:5000/api/games/scores/${userData.id}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (data.success) {
//           console.log('Scores:', data.scores);
//           // Sort by score descending (if not already sorted)
//           data.scores.sort((a, b) => b.score - a.score);
//           setScores(data.scores);
//         }
//       } catch (error) {
//         console.error('Error fetching scores:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchScores();
//   }, [userData]);

//   return (
//     <div className="leaderboard-container">
//       <motion.h1 className="leaderboard-header" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
//         🏆 Leaderboard
//       </motion.h1>

//       {loading ? (
//         <motion.p className="text-center text-gray-500 py-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//           Loading scores...
//         </motion.p>
//       ) : scores.length > 0 ? (
//         <div className="space-y-4">
//           {scores.map((score, index) => (
//             <motion.div key={score._id} className="leaderboard-card"
//               initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
//               <div>
//                 <p className="card-title">{score.name || "Anonymous"}</p>
//                 <p className="text-sm text-gray-500">
//                   {score.timestamp ? new Date(score.timestamp).toLocaleDateString() : "No Date"}
//                 </p>
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
//     </div>
//   );
// };

// export default Leaderboard;




// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { Trophy } from "lucide-react";
// import { useAppContext } from "../context/AppContext";
// import axios from "axios";

// const Leaderboard = () => {
//   const { userData, backendUrl } = useAppContext();
//   const [scores, setScores] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchScores = async () => {
//       if (!userData?.id) {
//         setLoading(false);
//         return;
//       }
//       try {
//         const { data } = await axios.get(`${backendUrl}/api/games/scores/${userData.id}`);
//         if (data.success) {
//           setScores(data.scores.sort((a, b) => b.score - a.score));
//         }
//       } catch (error) {
//         console.error("Error fetching scores:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchScores();
//   }, [userData, backendUrl]);

//   return (
//     <div className="flex flex-col items-center min-h-screen p-8 bg-gray-100">
//       <motion.h1 className="text-3xl font-bold mb-8" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
//         🏆 Leaderboard
//       </motion.h1>

//       {loading ? (
//         <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//           Loading scores...
//         </motion.p>
//       ) : scores.length > 0 ? (
//         <div className="w-full max-w-md space-y-4">
//           {scores.map((score) => (
//             <motion.div key={score._id} className="p-4 bg-white rounded-lg shadow flex justify-between"
//               initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
//               <div>
//                 <p className="font-semibold">{score.name || "Anonymous"}</p>
//                 <p className="text-sm text-gray-500">{new Date(score.timestamp).toLocaleDateString()}</p>
//               </div>
//               <p className="font-bold text-lg">{score.score} pts</p>
//             </motion.div>
//           ))}
//         </div>
//       ) : (
//         <div className="text-center py-8">
//           <Trophy className="w-12 h-12 text-gray-400 mx-auto mb-2" />
//           <p className="text-lg font-medium">No scores yet</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Leaderboard;







import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { useAppContext } from "../context/AppContext";
import axios from "axios";

const getMedalColor = (index) => {
  if (index === 0) return "text-yellow-500";
  if (index === 1) return "text-gray-400";
  if (index === 2) return "text-orange-400";
  return "text-gray-700";
};

const Leaderboard = () => {
  const { userData, backendUrl } = useAppContext();
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchScores = async () => {
      if (!userData?.id) {
        setLoading(false);
        return;
      }
      try {
        const { data } = await axios.get(`${backendUrl}/api/games/scores/${userData.id}`);
        if (data.scores && Array.isArray(data.scores)) {
          setScores(data.scores.sort((a, b) => b.score - a.score));
        }
      } catch (error) {
        console.error("Error fetching scores:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchScores();
  }, [userData, backendUrl]);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-6">
      <motion.h1
        className="text-4xl font-extrabold text-purple-800 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        🏆 Leaderboard
      </motion.h1>

      {loading ? (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gray-600 text-lg">
          Loading scores...
        </motion.p>
      ) : scores.length > 0 ? (
        <div className="w-full max-w-2xl space-y-4">
          {scores.map((score, index) => (
            <motion.div
              key={score._id}
              className={`flex items-center justify-between bg-white shadow-md rounded-xl p-4 transition transform hover:scale-[1.01]`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center space-x-4">
                <div
                  className={`text-xl font-bold ${getMedalColor(index)}`}
                >
                  #{index + 1}
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{score.name || "Anonymous"}</p>
                  <p className="text-sm text-gray-500">{new Date(score.timestamp).toLocaleString()}</p>
                </div>
              </div>
              <p className="text-lg font-bold text-blue-600">{score.score} pts</p>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center mt-10">
          <Trophy className="w-12 h-12 text-gray-400 mx-auto mb-3" />
          <p className="text-lg font-medium text-gray-600">No scores yet</p>
        </div>
      )}
    </div>
  );
};

export default Leaderboard;
  









// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { Trophy } from 'lucide-react';
// import { useAppContext } from '../context/AppContext'; // ✅ Use AppContext, not AuthContext
// import axios from 'axios';

// const Leaderboard = () => {
//   const { userData, loading: contextLoading } = useAppContext(); // Access userData from context
//   const [scores, setScores] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchScores = async () => {
//       // Check if userData is available and if user ID exists
//       if (!userData || !userData.id) {
//         console.error("No user data available");
//         setLoading(false);
//         return;
//       }

//       try {
//         // Retrieve the token from localStorage or context
//         const token = localStorage.getItem('token');
        
//         if (!token) {
//           console.error("No token found");
//           setLoading(false);
//           return;
//         }

//         // Fetch the scores
//         const { data } = await axios.get(`http://localhost:5000/api/games/scores/${userData.id}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (data.success) {
//           console.log('Scores:', data.scores);
//           // Sort by score descending (if not already sorted)
//           data.scores.sort((a, b) => b.score - a.score);
//           setScores(data.scores);
//         } else {
//           console.error('Failed to fetch scores');
//         }
//       } catch (error) {
//         console.error('Error fetching scores:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     // Only fetch scores if userData is available
//     if (userData && !contextLoading) {
//       fetchScores();
//     }

//   }, [userData, contextLoading]); // Dependencies include userData and contextLoading

//   return (
//     <div className="leaderboard-container">
//       <motion.h1 className="leaderboard-header" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
//         🏆 Leaderboard
//       </motion.h1>

//       {loading ? (
//         <motion.p className="text-center text-gray-500 py-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//           Loading scores...
//         </motion.p>
//       ) : scores.length > 0 ? (
//         <div className="space-y-4">
//           {scores.map((score, index) => (
//             <motion.div key={score._id} className="leaderboard-card"
//               initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
//               <div>
//                 <p className="card-title">{score.name || "Anonymous"}</p>
//                 <p className="text-sm text-gray-500">
//                   {score.timestamp ? new Date(score.timestamp).toLocaleDateString() : "No Date"}
//                 </p>
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
//     </div>
//   );
// };

// export default Leaderboard;




// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { useAuth } from '../context/AuthContext';
// import { Trophy } from 'lucide-react';
// import axios from 'axios';

// const Leaderboard = () => {
//   const { user } = useAuth();
//   const [scores, setScores] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchScores = async () => {
//       try {
//         // Fetch scores from MongoDB backend
//         const response = await axios.get('http://localhost:5000/api/games/leaderboard');
//         console.log('response.data:', response.data);
//         if (!Array.isArray(response.data)) {
//           console.error('Expected an array, received:', response.data);
//           return [];
//         }
//         const scoresData = response.data.map(score => ({
//           id: score._id,
//           name: score.name || 'Anonymous',
//           score: score.score || 0,
//           date: score.timestamp ? new Date(score.timestamp) : new Date()
//         }));

//         setScores(scoresData);
//       } catch (error) {
//         console.error("Error fetching scores:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchScores();
//   }, []);

//   return (
//     <div className="leaderboard-container">
//       <motion.h1 className="leaderboard-header" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
//         🏆 Leaderboard
//       </motion.h1>

//       {loading ? (
//         <motion.p className="text-center text-gray-500 py-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//           Loading scores...
//         </motion.p>
//       ) : scores.length > 0 ? (
//         <div className="space-y-4">
//           {scores.map((score, index) => (
//             <motion.div key={score.id} className="leaderboard-card"
//               initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              
//               <div>
//                 <p className="card-title">{score.name}</p>
//                 <p className="text-sm text-gray-500">{score.date ? score.date.toLocaleDateString() : "No Date"}</p>
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
//     </div>
//   );
// };

// export default Leaderboard;