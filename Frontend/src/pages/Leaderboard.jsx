// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { db, collection, getDocs } from '../firebaseConfig'; // Import Firebase
// import { Trophy } from 'lucide-react';

// const Leaderboard = () => {
//   const [scores, setScores] = useState([]);
//   const [activeTab, setActiveTab] = useState('all');
//   const [loading, setLoading] = useState(true);

//   // Fetch Scores from Firebase Firestore
//   useEffect(() => {
//     const fetchScores = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, 'leaderboard'));
//         const scoresData = querySnapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data()
//         }));
        
//         // Sort scores in descending order
//         const sortedScores = scoresData.sort((a, b) => b.score - a.score);
//         setScores(sortedScores);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching scores:", error);
//         setLoading(false);
//       }
//     };

//     fetchScores();
//   }, []);

//   // Filter Scores by Game Type
//   const filteredScores = scores.filter(score => activeTab === 'all' || score.game === activeTab);

//   // Format Date
//   const formatDate = (date) => new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(date));

//   return (
//     <div className="leaderboard-container">
//       <motion.h1 className="leaderboard-header" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
//         Leaderboard
//       </motion.h1>

//       {/* Tabs for filtering */}
//       <div className="tabs">
//         <button className={activeTab === 'all' ? 'active' : ''} onClick={() => setActiveTab('all')}>All Games</button>
//         <button className={activeTab === 'quiz' ? 'active' : ''} onClick={() => setActiveTab('quiz')}>Quiz</button>
//         <button className={activeTab === 'memory' ? 'active' : ''} onClick={() => setActiveTab('memory')}>Memory</button>
//       </div>

//       {/* Loading State */}
//       {loading ? (
//         <motion.p className="text-center text-gray-500 py-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//           Loading scores...
//         </motion.p>
//       ) : filteredScores.length > 0 ? (
//         <div className="space-y-4">
//           {filteredScores.map((score, index) => (
//             <motion.div key={score.id} className={`leaderboard-card ${index === 0 ? 'rank-1' : index === 1 ? 'rank-2' : index === 2 ? 'rank-3' : ''}`}
//               initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              
//               <div>
//                 <p className="card-title">{score.name}</p>
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
//     </div>
//   );
// };


// export default Leaderboard;






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

