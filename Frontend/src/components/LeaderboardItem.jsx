// import React from "react";
// import { motion } from "framer-motion";
// import { Trophy } from "lucide-react";

// const LeaderboardItem = ({ rank, name, score, game, index }) => {
//   const isTop3 = rank <= 3;
//   const medalColors = ["from-yellow-400 to-yellow-300", "from-gray-400 to-gray-300", "from-amber-700 to-amber-600"];

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.3, delay: index * 0.05 }}
//       className={`glass-panel rounded-lg p-4 flex items-center space-x-4 ${isTop3 ? "border-l-4 border-primary/50" : ""}`}
//     >
//       {isTop3 ? (
//         <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-b ${medalColors[rank - 1]} shadow-inner`}>
//           <Trophy className="w-5 h-5 text-white" />
//         </div>
//       ) : (
//         <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
//           <span className="text-secondary-foreground font-medium">{rank}</span>
//         </div>
//       )}
      
//       <div className="flex-grow min-w-0">
//         <p className="font-semibold truncate">{name}</p>
//         <p className="text-xs text-muted-foreground">{game}</p>
//       </div>
      
//       <div className="text-right">
//         <span className="text-lg font-semibold">{score}</span>
//         <p className="text-xs text-muted-foreground">points</p>
//       </div>
//     </motion.div>
//   );
// };

// export default LeaderboardItem;



import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { db } from '../firebaseConfig'; 
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext'; 
import { Trophy } from 'lucide-react';

const Leaderboard = () => {
  const { user } = useAuth();
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const scoresRef = collection(db, 'leaderboard');
        const q = query(scoresRef, orderBy('score', 'desc'));
        const querySnapshot = await getDocs(q);

        const scoresData = querySnapshot.docs.map(doc => {
          const data = doc.data();

          console.log("Raw data from Firestore:", data);

          return {
            id: doc.id,
            name: user.displayName || user.email,  // ✅ Ensure name is always available
            score: data.score || 0, 
            date: data.timestamp ? new Date(data.timestamp) : new Date()  // ✅ Proper date conversion
          };
        });

        setScores(scoresData);
      } catch (error) {
        console.error("Error fetching scores:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchScores();
  }, []);

  return (
    <div className="leaderboard-container">
      <motion.h1 className="leaderboard-header" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        🏆 Leaderboard
      </motion.h1>

      {loading ? (
        <motion.p className="text-center text-gray-500 py-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Loading scores...
        </motion.p>
      ) : scores.length > 0 ? (
        <div className="space-y-4">
          {scores.map((score, index) => (
            <motion.div key={score.id} className="leaderboard-card"
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              
              <div>
                <p className="card-title">{score.name}</p>
                <p className="text-sm text-gray-500">{score.date ? score.date.toLocaleDateString() : "No Date"}</p>
              </div>
              
              <div className="text-right">
                <p className="text-xl font-bold">{score.score} pts</p>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-center py-8">
          <Trophy className="w-12 h-12 text-gray-400 mx-auto mb-2" />
          <p className="text-lg font-medium">No scores yet</p>
        </motion.div>
      )}
    </div>
  );
};

export default Leaderboard;