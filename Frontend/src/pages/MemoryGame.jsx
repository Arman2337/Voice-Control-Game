

// import React, { useState, useEffect } from "react";
// import useSpeechRecognition from "../hooks/useSpeechRecognition";
// import useTextToSpeech from "../hooks/useTextToSpeech";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { auth } from "../firebaseConfig"; // ✅ Import Firebase auth

// const colors = ["red", "blue", "green", "yellow"];

// // ✅ Function to generate a random pattern
// const generatePattern = () => {
//   return Array.from({ length: 3 }, () => colors[Math.floor(Math.random() * colors.length)]);
// };

// const MemoryGame = () => {
//   const { transcript, isListening, startListening, stopListening } = useSpeechRecognition();
//   const { speak } = useTextToSpeech();
//   const [pattern, setPattern] = useState(generatePattern());
//   const [feedback, setFeedback] = useState("");
//   const [score, setScore] = useState(0);
//   const [gameComplete, setGameComplete] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     speak(`Memorize this pattern: ${pattern.join(", ")}`);
//   }, [pattern, speak]);

//   const checkPattern = () => {
//     const cleanedTranscript = transcript.toLowerCase().trim();
//     const correctPattern = pattern.join(" ").toLowerCase();

//     if (!cleanedTranscript) {
//       setFeedback("❌ No response detected. Try again.");
//       return;
//     }

//     if (cleanedTranscript === correctPattern) {
//       setScore((prevScore) => prevScore + 1);
//       setFeedback("✅ Correct Sequence!");
//     } else {
//       setFeedback(`❌ Wrong Sequence! The correct pattern was "${correctPattern}".`);
//     }

//     setGameComplete(true); // ✅ Enable "End Game" button
//   };

//   const handleEndGame = async () => {
//     if (!gameComplete) return; // Prevent saving mid-game

//     const user = auth.currentUser; // ✅ Get logged-in user
//     if (!user) {
//       alert("Please log in to save your score.");
//       return;
//     }

//     try {
//       await axios.post("http://localhost:5000/api/games/save", {
//         user: user.uid, // ✅ Save with authenticated user ID
//         gameType: "Memory",
//         score,
//         timestamp: new Date().toISOString(),
//       });
//       alert(`Game Ended! Your Score: ${score}`);
//       navigate("/dashboard"); // ✅ Redirect to Dashboard
//     } catch (error) {
//       console.error("Error saving game data:", error);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-indigo-200 p-6">
//       <h1 className="text-3xl font-bold">Memory & Pattern Recall Game</h1>
//       <p className="text-xl mt-4">Repeat this sequence:</p>
//       <div className="flex gap-4 mt-2">
//         {pattern.map((color, index) => (
//           <div key={index} className={`w-16 h-16 rounded-full bg-${color}-500`} />
//         ))}
//       </div>

//       <button 
//         onClick={() => speak(`Memorize this pattern: ${pattern.join(", ")}`)} 
//         className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
//         🔊 Repeat Pattern
//       </button>

//       <button 
//         className={`mt-4 px-4 py-2 rounded-lg text-white ${isListening ? "bg-red-500" : "bg-green-500"}`} 
//         onClick={isListening ? stopListening : startListening}>
//         {isListening ? "Stop Listening" : "Start Listening"}
//       </button>

//       <p className="mt-4 text-lg">🎙 {transcript}</p>

//       <button 
//         className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg" 
//         onClick={checkPattern}>
//         Submit Answer
//       </button>

//       <p className="mt-4 text-2xl font-bold">{feedback}</p>

//       <button 
//         className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg" 
//         onClick={() => setPattern(generatePattern())}>
//         New Pattern
//       </button>

//       <button 
//         className={`mt-4 px-4 py-2 ${gameComplete ? "bg-red-600 text-white" : "bg-gray-400 text-gray-700 cursor-not-allowed"} rounded-lg`} 
//         onClick={handleEndGame} 
//         disabled={!gameComplete}>
//         End Game
//       </button>

//       <h2 className="mt-6 text-2xl font-bold">Your Score: {score}</h2>
//     </div>
//   );
// };

// export default MemoryGame;



// import React, { useState, useEffect } from "react";
// import useSpeechRecognition from "../hooks/useSpeechRecognition";
// import useTextToSpeech from "../hooks/useTextToSpeech";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { auth } from "../firebaseConfig";
// import { useAuth } from "../context/AuthContext";
// import { collection, addDoc } from "firebase/firestore";
// import { db } from "../firebaseConfig";
// // import { collection, addDoc } from "firebase/firestore";


// const colors = ["red", "blue", "green", "yellow"];
// const generatePattern = () => {
//   return Array.from({ length: 3 }, () => colors[Math.floor(Math.random() * colors.length)]);
// };

// const MemoryGame = () => {
//   const { transcript, isListening, startListening, stopListening } = useSpeechRecognition();
//   const { speak } = useTextToSpeech();
//   const [pattern, setPattern] = useState(generatePattern());
//   const [feedback, setFeedback] = useState("");
//   const [score, setScore] = useState(0);
//   const [gameComplete, setGameComplete] = useState(false);
//   const navigate = useNavigate();
//   const { user } = useAuth();

//   useEffect(() => {
//     speak(`Memorize this pattern: ${pattern.join(", ")}`);
//   }, [pattern, speak]);

//   const checkPattern = () => {
//     const cleanedTranscript = transcript.toLowerCase().trim();
//     const correctPattern = pattern.join(" ").toLowerCase();
//     // const { user } = useAuth();

//     if (!cleanedTranscript) {
//       setFeedback("❌ No response detected. Try again.");
//       return;
//     }

//     if (cleanedTranscript === correctPattern) {
//       setScore((prevScore) => prevScore + 1);
//       setFeedback("✅ Correct Sequence!");
//     } else {
//       setFeedback(`❌ Wrong Sequence! The correct pattern was "${correctPattern}".`);
//     }

//     setGameComplete(true);
//   };

//   // const handleEndGame = async () => {
//   //   if (!gameComplete) return;

//   //   const user = auth.currentUser;
//   //   if (!user) {
//   //     alert("Please log in to save your score.");
//   //     return;
//   //   }

//   //   try {
//   //     await axios.post("http://localhost:5000/api/games/save", {
//   //       user: user.uid,
//   //       gameType: "Memory",
//   //       score,
//   //       timestamp: new Date().toISOString(),
//   //     });
//   //     alert(`Game Ended! Your Score: ${score}`);
//   //     navigate("/dashboard");
//   //   } catch (error) {
//   //     console.error("Error saving game data:", error);
//   //   }
//   // };


//   const handleEndGame = async () => {
//       try {
//         // ✅ Check if user is logged in
//         if (!user) {
//           alert("Please log in to save scores.");
//           return;
//         }
  
//         // ✅ Add new document to 'leaderboard' collection
//         await addDoc(collection(db, "leaderboard"), {
//           uid: user.uid,
//           gameType: "Memory",
//           score: score,
//           timestamp: new Date().toISOString(),
//         });
  
//         alert(`Game Ended! Your Score: ${score}`);
//         navigate("/leaderboard"); // Navigate to leaderboard page
//       } catch (error) {
//         console.error("Error saving game data:", error);
//       }
//     };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-6">
//       <h1 className="text-4xl font-bold mb-4 text-yellow-400">Memory & Pattern Recall Game</h1>
//       <p className="text-lg mb-4">Repeat this sequence:</p>
//       <div className="flex gap-4 mt-2">
//         {pattern.map((color, index) => (
//           <div key={index} className={`w-16 h-16 rounded-lg shadow-lg bg-${color}-500`} />
//         ))}
//       </div>
      
//       <button onClick={() => speak(`Memorize this pattern: ${pattern.join(", ")}`)}
//         className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg shadow-lg transition duration-300">
//         🔊 Repeat Pattern
//       </button>
      
//       <button onClick={isListening ? stopListening : startListening}
//         className={`mt-4 px-6 py-2 font-semibold rounded-lg transition duration-300 ${isListening ? "bg-red-600 hover:bg-red-700" : "bg-green-600 hover:bg-green-700"} text-white shadow-lg`}>
//         {isListening ? "Stop Listening" : "Start Listening"}
//       </button>
      
//       <p className="mt-4 text-lg bg-gray-700 px-4 py-2 rounded-lg shadow-md">🎙 {transcript}</p>
      
//       <button onClick={checkPattern}
//         className="mt-4 px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-lg transition duration-300">
//         Submit Answer
//       </button>
      
//       <p className="mt-4 text-xl font-bold text-center text-gray-300">{feedback}</p>
      
//       <button onClick={() => setPattern(generatePattern())}
//         className="mt-4 px-6 py-2 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg shadow-lg transition duration-300">
//         New Pattern
//       </button>
      
//       <button onClick={handleEndGame} disabled={!gameComplete}
//         className={`mt-4 px-6 py-2 font-semibold rounded-lg transition duration-300 shadow-lg ${gameComplete ? "bg-red-500 hover:bg-red-600 text-white" : "bg-gray-500 text-gray-300 cursor-not-allowed"}`}>
//         End Game
//       </button>
      
//       <h2 className="mt-6 text-2xl font-bold text-yellow-400">Your Score: {score}</h2>
//     </div>
//   );
// };

// export default MemoryGame;



// import React, { useState, useEffect } from "react";
// import useSpeechRecognition from "../hooks/useSpeechRecognition";
// import useTextToSpeech from "../hooks/useTextToSpeech";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useAuth } from "../context/AuthContext";

// const colors = ["red", "blue", "green", "yellow"];
// const generatePattern = () => {
//   return Array.from({ length: 3 }, () => colors[Math.floor(Math.random() * colors.length)]);
// };

// const MemoryGame = () => {
//   const { transcript, isListening, startListening, stopListening } = useSpeechRecognition();
//   const { speak } = useTextToSpeech();
//   const [pattern, setPattern] = useState(generatePattern());
//   const [feedback, setFeedback] = useState("");
//   const [score, setScore] = useState(0);
//   const [gameComplete, setGameComplete] = useState(false);
//   const navigate = useNavigate();
//   const { user } = useAuth(); // from your AuthContext

//   useEffect(() => {
//     speak(`Memorize this pattern: ${pattern.join(", ")}`);
//   }, [pattern, speak]);

//   const checkPattern = () => {
//     const cleanedTranscript = transcript.toLowerCase().trim();
//     const correctPattern = pattern.join(" ").toLowerCase();

//     if (!cleanedTranscript) {
//       setFeedback("❌ No response detected. Try again.");
//       return;
//     }

//     if (cleanedTranscript === correctPattern) {
//       setScore((prevScore) => prevScore + 1);
//       setFeedback("✅ Correct Sequence!");
//     } else {
//       setFeedback(`❌ Wrong Sequence! The correct pattern was "${correctPattern}".`);
//     }

//     setGameComplete(true);
//   };

//   const handleEndGame = async () => {
//     if (!gameComplete) return;

//     if (!user) {
//       alert("Please log in to save your score.");
//       return;
//     }

//     try {
//       await axios.post("http://localhost:5000/api/games/submit-score", {
//         name: user.displayName || user.email,
//         email: user.email,
//         userId: user.uid,
//         gameType: "Memory",
//         score: score,
//       });

//       alert(`Game Ended! Your Score: ${score}`);
//       navigate("/leaderboard");
//     } catch (error) {
//       console.error("Error saving score:", error.response?.data || error.message);
//       alert("Failed to save score. Try again later.");
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-6">
//       <h1 className="text-4xl font-bold mb-4 text-yellow-400">Memory & Pattern Recall Game</h1>
//       <p className="text-lg mb-4">Repeat this sequence:</p>
//       <div className="flex gap-4 mt-2">
//         {pattern.map((color, index) => (
//           <div key={index} className={`w-16 h-16 rounded-lg shadow-lg bg-${color}-500`} />
//         ))}
//       </div>

//       <button onClick={() => speak(`Memorize this pattern: ${pattern.join(", ")}`)}
//         className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg shadow-lg transition duration-300">
//         🔊 Repeat Pattern
//       </button>

//       <button onClick={isListening ? stopListening : startListening}
//         className={`mt-4 px-6 py-2 font-semibold rounded-lg transition duration-300 ${isListening ? "bg-red-600 hover:bg-red-700" : "bg-green-600 hover:bg-green-700"} text-white shadow-lg`}>
//         {isListening ? "Stop Listening" : "Start Listening"}
//       </button>

//       <p className="mt-4 text-lg bg-gray-700 px-4 py-2 rounded-lg shadow-md">🎙 {transcript}</p>

//       <button onClick={checkPattern}
//         className="mt-4 px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-lg transition duration-300">
//         Submit Answer
//       </button>

//       <p className="mt-4 text-xl font-bold text-center text-gray-300">{feedback}</p>

//       <button onClick={() => setPattern(generatePattern())}
//         className="mt-4 px-6 py-2 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg shadow-lg transition duration-300">
//         New Pattern
//       </button>

//       <button onClick={handleEndGame} disabled={!gameComplete}
//         className={`mt-4 px-6 py-2 font-semibold rounded-lg transition duration-300 shadow-lg ${gameComplete ? "bg-red-500 hover:bg-red-600 text-white" : "bg-gray-500 text-gray-300 cursor-not-allowed"}`}>
//         End Game
//       </button>

//       <h2 className="mt-6 text-2xl font-bold text-yellow-400">Your Score: {score}</h2>
//     </div>
//   );
// };

// export default MemoryGame;



import React, { useState, useEffect, useContext } from "react";
import useSpeechRecognition from "../hooks/useSpeechRecognition";
import useTextToSpeech from "../hooks/useTextToSpeech";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../context/AppContext"; // ✅ Use AppContext, not AuthContext

const colors = ["red", "blue", "green", "yellow"];
const generatePattern = () => {
  return Array.from({ length: 3 }, () => colors[Math.floor(Math.random() * colors.length)]);
};

const MemoryGame = () => {
  const { transcript, isListening, startListening, stopListening } = useSpeechRecognition();
  const { speak } = useTextToSpeech();
  const [pattern, setPattern] = useState(generatePattern());
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);
  const navigate = useNavigate();
  const { userData } = useContext(AppContext); // ✅ Correct: getting user data from AppContext

  useEffect(() => {
    speak(`Memorize this pattern: ${pattern.join(", ")}`);
  }, [pattern, speak]);

  const checkPattern = () => {
    const cleanedTranscript = transcript.toLowerCase().trim();
    const correctPattern = pattern.join(" ").toLowerCase();

    if (!cleanedTranscript) {
      setFeedback("❌ No response detected. Try again.");
      return;
    }

    if (cleanedTranscript === correctPattern) {
      setScore((prevScore) => prevScore + 1);
      setFeedback("✅ Correct Sequence!");
    } else {
      setFeedback(`❌ Wrong Sequence! The correct pattern was "${correctPattern}".`);
    }

    setGameComplete(true);
  };

  const handleEndGame = async () => {
    if (!gameComplete) return;

    if (!userData) {
      alert("Please log in to save your score.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/games/save", {
        name: userData.name,
        email: userData.email,
        userId: userData._id,
        gameType: "Memory",
        score: score,
        timestamp: Date.now(),
      });

      alert(`Game Ended! Your Score: ${score}`);
      navigate("/leaderboard");
    } catch (error) {
      console.error("Error saving score:", error.response?.data || error.message);
      alert("Failed to save score. Try again later.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-4 text-yellow-400">Memory & Pattern Recall Game</h1>
      <p className="text-lg mb-4">Repeat this sequence:</p>
      <div className="flex gap-4 mt-2">
        {pattern.map((color, index) => (
          <div key={index} className={`w-16 h-16 rounded-lg shadow-lg bg-${color}-500`} />
        ))}
      </div>

      <button onClick={() => speak(`Memorize this pattern: ${pattern.join(", ")}`)}
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg shadow-lg transition duration-300">
        🔊 Repeat Pattern
      </button>

      <button onClick={isListening ? stopListening : startListening}
        className={`mt-4 px-6 py-2 font-semibold rounded-lg transition duration-300 ${isListening ? "bg-red-600 hover:bg-red-700" : "bg-green-600 hover:bg-green-700"} text-white shadow-lg`}>
        {isListening ? "Stop Listening" : "Start Listening"}
      </button>

      <p className="mt-4 text-lg bg-gray-700 px-4 py-2 rounded-lg shadow-md">🎙 {transcript}</p>

      <button onClick={checkPattern}
        className="mt-4 px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-lg transition duration-300">
        Submit Answer
      </button>

      <p className="mt-4 text-xl font-bold text-center text-gray-300">{feedback}</p>

      <button onClick={() => setPattern(generatePattern())}
        className="mt-4 px-6 py-2 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg shadow-lg transition duration-300">
        New Pattern
      </button>

      <button onClick={handleEndGame} disabled={!gameComplete}
        className={`mt-4 px-6 py-2 font-semibold rounded-lg transition duration-300 shadow-lg ${gameComplete ? "bg-red-500 hover:bg-red-600 text-white" : "bg-gray-500 text-gray-300 cursor-not-allowed"}`}>
        End Game
      </button>

      <h2 className="mt-6 text-2xl font-bold text-yellow-400">Your Score: {score}</h2>
    </div>
  );
};

export default MemoryGame;
