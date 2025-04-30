// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import useSpeechRecognition from "../hooks/useSpeechRecognition";
// import useTextToSpeech from "../hooks/useTextToSpeech";
// import { useAppContext } from "../context/AppContext";  // Correct import
// import axios from "axios";
// import { motion } from "framer-motion";
// import { Mic, Volume2 } from "lucide-react";
// import { toast } from 'react-toastify';


// const QuizGame = () => {
//   const questions = [
//     { question: "What is the capital of France?", answer: "Paris" },
//     { question: "What is 2 plus 2?", answer: "Four" },
//   ];

//   const navigate = useNavigate();

//   const [score, setScore] = useState(0);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [feedback, setFeedback] = useState("");

//   const { transcript, isListening, startListening, stopListening } = useSpeechRecognition();
//   const { speak } = useTextToSpeech();

//   // Access context data (user status and data)
//   const { isLogin, userData, setUserData } = useAppContext();

//   useEffect(() => {
//     speak(questions[currentQuestion].question);
//   }, [currentQuestion, speak]);

//   const checkAnswer = () => {
//     const userAnswer = transcript.trim();

//     if (!userAnswer) {
//       setFeedback("❌ No answer detected. Try again.");
//       return;
//     }

//     if (userAnswer.toLowerCase() === questions[currentQuestion].answer.toLowerCase()) {
//       setScore((prev) => prev + 1);
//       setFeedback("✅ Correct!");
//     } else {
//       setFeedback(`❌ Incorrect! The correct answer was "${questions[currentQuestion].answer}".`);
//     }

//     if (currentQuestion + 1 === questions.length) {
//       handleEndGame();
//     } else {
//       setTimeout(() => {
//         setCurrentQuestion((prev) => prev + 1);
//         setFeedback("");
//       }, 2000);
//     }
//   };

//   const handleEndGame = async () => {
//     try {
//       // Check if user is logged in
//       if (!isLogin || !userData) {
//         toast.error("Please log in to save your score");
//         return;
//       }

//       // Log user data for debugging
//       console.log("Full user data:", userData);

//       // Prepare the data to send
//       const gameData = {
//         name: userData.name || "Anonymous",
//         score: score,
//         userId: userData.id,
//         gameType: "quiz",
//         timestamp: new Date().toISOString()
//       };

//       // Validate required fields
//       if (!gameData.userId) {
//         toast.error("User ID is missing. Please log in again.");
//         return;
//       }

//       // Log the data being sent
//       console.log("Sending game data:", gameData);

//       // Send data to backend API
//       const response = await axios.post('http://localhost:5000/api/games/save', gameData, {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });

//       if (response.status === 200) {
//         toast.success("Score saved successfully!");
//         // Navigate to leaderboard after successful save
//         navigate("/leaderboard");
//       }
//     } catch (error) {
//       console.error("Error saving score:", error);
//       if (error.response) {
//         console.error("Error response data:", error.response.data);
//         console.error("Error response status:", error.response.status);
//       }
//       toast.error(error.response?.data?.message || "Failed to save score");
//     }
//   };
  
  
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-8">
//       <motion.div className="bg-white text-gray-900 p-6 rounded-2xl shadow-lg w-full max-w-lg text-center">
//         <h1 className="text-2xl font-bold mb-4">Voice-Based Quiz Game</h1>
//         <motion.p key={currentQuestion} className="text-lg font-medium mb-4">
//           {questions[currentQuestion].question}
//         </motion.p>

//         <button
//           onClick={() => speak(questions[currentQuestion].question)}
//           className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 w-full mb-4"
//         >
//           <Volume2 className="w-5 h-5" /> Repeat Question
//         </button>

//         <button
//           onClick={isListening ? stopListening : startListening}
//           className={`mt-4 px-4 py-2 rounded-lg text-white flex items-center justify-center gap-2 w-full transition-all ${
//             isListening ? "bg-red-500" : "bg-green-500 hover:bg-green-600"
//           }`}
//         >
//           <Mic className="w-5 h-5" /> {isListening ? "Stop Listening" : "Start Listening"}
//         </button>

//         <p className="mt-4 text-lg">🎙 {transcript}</p>

//         <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg w-full" onClick={checkAnswer}>
//           Submit Answer
//         </button>

//         <p className="mt-4 text-2xl font-bold">{feedback}</p>

//         <button className="mt-6 px-4 py-2 bg-red-600 text-white rounded-lg w-full" onClick={handleEndGame}>
//           End Game
//         </button>
//       </motion.div>
//     </div>
//   );
// };

// export default QuizGame;



// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import useSpeechRecognition from "../hooks/useSpeechRecognition";
// import useTextToSpeech from "../hooks/useTextToSpeech";
// import { useAppContext } from "../context/AppContext";
// import axios from "axios";
// import { motion } from "framer-motion";
// import { Mic, Volume2 } from "lucide-react";
// import { toast } from 'react-toastify';

// const QuizGame = () => {
//   const questions = [
//     { question: "What is the capital of France?", answer: "Paris" },
//     { question: "What is 2 plus 2?", answer: "Four" },
//   ];

//   const navigate = useNavigate();
//   const [score, setScore] = useState(0);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [feedback, setFeedback] = useState("");
//   const [gameEnded, setGameEnded] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const { transcript, isListening, startListening, stopListening } = useSpeechRecognition();
//   const { speak } = useTextToSpeech();
//   const { isLogin, userData } = useAppContext();

//   useEffect(() => {
//     if (!gameEnded) {
//       speak(questions[currentQuestion].question);
//     }
//   }, [currentQuestion, speak, gameEnded]);

//   const checkAnswer = () => {
//     if (gameEnded) return;

//     const userAnswer = transcript.trim();
//     if (!userAnswer) {
//       setFeedback("❌ No answer detected. Try again.");
//       return;
//     }

//     if (userAnswer.toLowerCase() === questions[currentQuestion].answer.toLowerCase()) {
//       setScore(prev => prev + 1);
//       setFeedback("✅ Correct!");
//     } else {
//       setFeedback(`❌ Incorrect! The correct answer was "${questions[currentQuestion].answer}".`);
//     }

//     // Move to next question or end game if last question
//     if (currentQuestion + 1 === questions.length) {
//       handleEndGame();
//     } else {
//       setTimeout(() => {
//         setCurrentQuestion(prev => prev + 1);
//         setFeedback("");
//       }, 2000);
//     }
//   };

//   const handleEndGame = async () => {
//     if (gameEnded || isSubmitting) return;
    
//     setGameEnded(true);
//     setIsSubmitting(true);
    
//     try {
//       // Verify user is logged in
//       if (!isLogin || !userData) {
//         toast.error("Please log in to save your score");
//         navigate("/login");
//         return;
//       }

//       // Get JWT token from storage
//       const token = localStorage.getItem('token');
//       if (!token) {
//         toast.error("Session expired. Please log in again.");
//         navigate("/login");
//         return;
//       }

//       const gameData = {
//         score: score,
//         userId: userData.id,
//         gameType: "quiz",
//         totalQuestions: questions.length
//       };

//       const response = await axios.post(
//         'http://localhost:5000/api/games/save', 
//         gameData,
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${token}`
//           }
//         }
//       );

//       if (response.status === 200) {
//         toast.success(`Score saved! Your final score: ${score}/${questions.length}`);
//         navigate("/leaderboard");
//       }
//     } catch (error) {
//       console.error("Score save error:", error);
      
//       if (error.response?.status === 401) {
//         toast.error("Session expired. Please log in again.");
//         navigate("/login");
//       } else {
//         toast.error(error.response?.data?.message || "Failed to save score");
//       }
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // Allow ending game at any point
//   const handleEarlyEnd = () => {
//     if (window.confirm("Are you sure you want to end the game? Your current score will be saved.")) {
//       handleEndGame();
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-8">
//       <motion.div className="bg-white text-gray-900 p-6 rounded-2xl shadow-lg w-full max-w-lg text-center">
//         <h1 className="text-2xl font-bold mb-4">Voice-Based Quiz Game</h1>
        
//         {gameEnded ? (
//           <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg">
//             <h2 className="text-xl font-bold">Game Over!</h2>
//             <p>Your final score: {score}/{questions.length}</p>
//             {isSubmitting && <p>Saving your score...</p>}
//           </div>
//         ) : (
//           <>
//             <motion.p key={currentQuestion} className="text-lg font-medium mb-4">
//               Question {currentQuestion + 1}: {questions[currentQuestion].question}
//             </motion.p>

//             <div className="flex gap-2 mb-4">
//               <button
//                 onClick={() => speak(questions[currentQuestion].question)}
//                 className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 flex-1"
//               >
//                 <Volume2 className="w-5 h-5" /> Repeat
//               </button>

//               <button
//                 onClick={isListening ? stopListening : startListening}
//                 className={`px-4 py-2 rounded-lg text-white flex items-center justify-center gap-2 flex-1 ${
//                   isListening ? "bg-red-500" : "bg-green-500 hover:bg-green-600"
//                 }`}
//               >
//                 <Mic className="w-5 h-5" /> {isListening ? "Stop" : "Speak"}
//               </button>
//             </div>

//             <p className="mt-2 text-lg min-h-8">🎙 {transcript}</p>

//             <button 
//               className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg w-full hover:bg-blue-700"
//               onClick={checkAnswer}
//               disabled={gameEnded}
//             >
//               Submit Answer
//             </button>
//           </>
//         )}

//         <p className="mt-4 text-xl font-bold min-h-8">{feedback}</p>

//         <div className="flex gap-2 mt-6">
//           <button
//             className="px-4 py-2 bg-gray-600 text-white rounded-lg flex-1 hover:bg-gray-700"
//             onClick={() => navigate("/")}
//           >
//             Main Menu
//           </button>
//           <button
//             className="px-4 py-2 bg-red-600 text-white rounded-lg flex-1 hover:bg-red-700"
//             onClick={handleEarlyEnd}
//             disabled={gameEnded || isSubmitting}
//           >
//             {gameEnded ? "Game Ended" : "End Game"}
//           </button>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default QuizGame;





// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import useSpeechRecognition from "../hooks/useSpeechRecognition";
// import useTextToSpeech from "../hooks/useTextToSpeech";
// import { useAppContext } from "../context/AppContext";
// import axios from "axios";
// import { motion } from "framer-motion";
// import { Mic, Volume2 } from "lucide-react";
// import { toast } from 'react-toastify';

// const QuizGame = () => {
//   const questions = [
//     { question: "What is the capital of France?", answer: "Paris" },
//     { question: "What is 2 plus 2?", answer: "Four" },
//   ];

//   const navigate = useNavigate();

//   const [score, setScore] = useState(0);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [feedback, setFeedback] = useState("");

//   const { transcript, isListening, startListening, stopListening } = useSpeechRecognition();
//   const { speak } = useTextToSpeech();

//   const { isLogin, userData } = useAppContext();

//   useEffect(() => {
//     speak(questions[currentQuestion].question);
//   }, [currentQuestion, speak]);

//   const checkAnswer = () => {
//     const userAnswer = transcript.trim();

//     if (!userAnswer) {
//       setFeedback("❌ No answer detected. Try again.");
//       return;
//     }

//     if (userAnswer.toLowerCase() === questions[currentQuestion].answer.toLowerCase()) {
//       setScore((prev) => prev + 1);
//       setFeedback("✅ Correct!");
//     } else {
//       setFeedback(`❌ Incorrect! The correct answer was "${questions[currentQuestion].answer}".`);
//     }

//     if (currentQuestion + 1 === questions.length) {
//       handleEndGame();
//     } else {
//       setTimeout(() => {
//         setCurrentQuestion((prev) => prev + 1);
//         setFeedback("");
//       }, 2000);
//     }
//   };

//   const handleEndGame = async () => {
//     try {
//       if (!isLogin || !userData) {
//         toast.error("Please log in to save your score");
//       } else {
//         const gameData = {
//           name: userData.name || "Anonymous",
//           score: score,
//           userId: userData.id,
//           gameType: "quiz",
//           timestamp: new Date().toISOString()
//         };

//         if (!gameData.userId) {
//           toast.error("User ID is missing. Please log in again.");
//         } else {
//           const response = await axios.post('http://localhost:5000/api/games/save', gameData, {
//             headers: {
//               'Content-Type': 'application/json'
//             }
//           });

//           if (response.status === 200) {
//             toast.success("Score saved successfully!");
//           }
//         }
//       }
//     } catch (error) {
//       console.error("Error saving score:", error);
//       if (error.response) {
//         console.error("Error response data:", error.response.data);
//         console.error("Error response status:", error.response.status);
//       }
//       toast.error(error.response?.data?.message || "Failed to save score");
//     } finally {
//       // ✅ Always navigate to leaderboard
//       navigate("/leaderboard");
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-8">
//       <motion.div className="bg-white text-gray-900 p-6 rounded-2xl shadow-lg w-full max-w-lg text-center">
//         <h1 className="text-2xl font-bold mb-4">Voice-Based Quiz Game</h1>
//         <motion.p key={currentQuestion} className="text-lg font-medium mb-4">
//           {questions[currentQuestion].question}
//         </motion.p>

//         <button
//           onClick={() => speak(questions[currentQuestion].question)}
//           className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 w-full mb-4"
//         >
//           <Volume2 className="w-5 h-5" /> Repeat Question
//         </button>

//         <button
//           onClick={isListening ? stopListening : startListening}
//           className={`mt-4 px-4 py-2 rounded-lg text-white flex items-center justify-center gap-2 w-full transition-all ${
//             isListening ? "bg-red-500" : "bg-green-500 hover:bg-green-600"
//           }`}
//         >
//           <Mic className="w-5 h-5" /> {isListening ? "Stop Listening" : "Start Listening"}
//         </button>

//         <p className="mt-4 text-lg">🎙 {transcript}</p>

//         <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg w-full" onClick={checkAnswer}>
//           Submit Answer
//         </button>

//         <p className="mt-4 text-2xl font-bold">{feedback}</p>

//         <button className="mt-6 px-4 py-2 bg-red-600 text-white rounded-lg w-full" onClick={handleEndGame}>
//           End Game
//         </button>
//       </motion.div>
//     </div>
//   );
// };

// export default QuizGame;




// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import useSpeechRecognition from "../hooks/useSpeechRecognition";
// import useTextToSpeech from "../hooks/useTextToSpeech";
// import { useAppContext } from "../context/AppContext";
// import axios from "axios";
// import { motion } from "framer-motion";
// import { Mic, Volume2 } from "lucide-react";
// import { toast } from 'react-toastify';

// const QuizGame = () => {
//   const questions = [
//     { question: "What is the capital of France?", answer: "Paris" },
//     { question: "What is 2 plus 2?", answer: "Four" },
//   ];

//   const navigate = useNavigate();

//   const [score, setScore] = useState(0);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [feedback, setFeedback] = useState("");

//   const { transcript, isListening, startListening, stopListening } = useSpeechRecognition();
//   const { speak } = useTextToSpeech();

//   const { isLogin, userData } = useAppContext();

//   useEffect(() => {
//     speak(questions[currentQuestion].question);
//   }, [currentQuestion, speak]);

//   const checkAnswer = () => {
//     const userAnswer = transcript.trim();

//     if (!userAnswer) {
//       setFeedback("❌ No answer detected. Try again.");
//       return;
//     }

//     if (userAnswer.toLowerCase() === questions[currentQuestion].answer.toLowerCase()) {
//       setScore((prev) => prev + 1);
//       setFeedback("✅ Correct!");
//     } else {
//       setFeedback(`❌ Incorrect! The correct answer was "${questions[currentQuestion].answer}".`);
//     }

//     if (currentQuestion + 1 === questions.length) {
//       handleEndGame();
//     } else {
//       setTimeout(() => {
//         setCurrentQuestion((prev) => prev + 1);
//         setFeedback("");
//       }, 2000);
//     }
//   };

//   const handleEndGame = async () => {
//     try {
//       if (!isLogin || !userData) {
//         toast.error("Please log in to save your score");
//       } else {
//         const gameData = {
//           name: userData.name || "Anonymous",
//           score: score,
//           userId: userData.id,
//           gameType: "quiz",
//           timestamp: new Date().toISOString()
//         };

//         if (!gameData.userId) {
//           toast.error("User ID is missing. Please log in again.");
//         } else {
//           const response = await axios.post('http://localhost:5000/api/games/save', gameData, {
//             headers: {
//               'Content-Type': 'application/json'
//             }
//           });

//           if (response.status === 200) {
//             toast.success("Score saved successfully!");
//           }
//         }
//       }
//     } catch (error) {
//       console.error("Error saving score:", error);
//       if (error.response) {
//         console.error("Error response data:", error.response.data);
//         console.error("Error response status:", error.response.status);
//       }
//       toast.error(error.response?.data?.message || "Failed to save score");
//     } finally {
//       // ✅ Always navigate to leaderboard
//       navigate("/leaderboard");
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-8">
//       <motion.div className="bg-white text-gray-900 p-6 rounded-2xl shadow-lg w-full max-w-lg text-center">
//         <h1 className="text-2xl font-bold mb-4">Voice-Based Quiz Game</h1>
//         <motion.p key={currentQuestion} className="text-lg font-medium mb-4">
//           {questions[currentQuestion].question}
//         </motion.p>

//         <button
//           onClick={() => speak(questions[currentQuestion].question)}
//           className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 w-full mb-4"
//         >
//           <Volume2 className="w-5 h-5" /> Repeat Question
//         </button>

//         <button
//           onClick={isListening ? stopListening : startListening}
//           className={`mt-4 px-4 py-2 rounded-lg text-white flex items-center justify-center gap-2 w-full transition-all ${
//             isListening ? "bg-red-500" : "bg-green-500 hover:bg-green-600"
//           }`}
//         >
//           <Mic className="w-5 h-5" /> {isListening ? "Stop Listening" : "Start Listening"}
//         </button>

//         <p className="mt-4 text-lg">🎙 {transcript}</p>

//         <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg w-full" onClick={checkAnswer}>
//           Submit Answer
//         </button>

//         <p className="mt-4 text-2xl font-bold">{feedback}</p>

//         <button className="mt-6 px-4 py-2 bg-red-600 text-white rounded-lg w-full" onClick={handleEndGame}>
//           End Game
//         </button>
//       </motion.div>
//     </div>
//   );
// };

// export default QuizGame;





// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import useSpeechRecognition from "../hooks/useSpeechRecognition";
// import useTextToSpeech from "../hooks/useTextToSpeech";
// import { useAppContext } from "../context/AppContext";
// import axios from "axios";
// import { motion } from "framer-motion";
// import { Mic, Volume2 } from "lucide-react";
// import { toast } from 'react-toastify';

// const QuizGame = () => {
//   const questions = [
//     { question: "What is the capital of France?", answer: "Paris" },
//     { question: "What is 2 plus 2?", answer: "Four" },
//   ];

//   const navigate = useNavigate();

//   const [score, setScore] = useState(0);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [feedback, setFeedback] = useState("");

//   const { transcript, isListening, startListening, stopListening } = useSpeechRecognition();
//   const { speak } = useTextToSpeech();

//   const { isLogin, userData } = useAppContext();

//   useEffect(() => {
//     speak(questions[currentQuestion].question);
//   }, [currentQuestion, speak]);

//   // Check if user is logged in, if not, redirect to login page
//   useEffect(() => {
//     if (!isLogin) {
//       toast.error("Please log in to play the game");
//       navigate("/login");
//     }
//   }, [isLogin, navigate]);

//   const checkAnswer = () => {
//     const userAnswer = transcript.trim();

//     if (!userAnswer) {
//       setFeedback("❌ No answer detected. Try again.");
//       return;
//     }

//     if (userAnswer.toLowerCase() === questions[currentQuestion].answer.toLowerCase()) {
//       setScore((prev) => prev + 1);
//       setFeedback("✅ Correct!");
//     } else {
//       setFeedback(`❌ Incorrect! The correct answer was "${questions[currentQuestion].answer}".`);
//     }

//     if (currentQuestion + 1 === questions.length) {
//       handleEndGame();
//     } else {
//       setTimeout(() => {
//         setCurrentQuestion((prev) => prev + 1);
//         setFeedback("");
//       }, 2000);
//     }
//   };

//   const handleEndGame = async () => {
//     try {
//       if (!isLogin || !userData) {
//         toast.error("Please log in to save your score");
//       } else {
//         const gameData = {
//           name: userData.name || "Anonymous",
//           score: score,
//           userId: userData.id,  // Ensure `userData.id` is correctly set
//           gameType: "quiz",
//           timestamp: new Date().toISOString()
//         };

//         if (!gameData.userId) {
//           toast.error("User ID is missing. Please log in again.");
//         } else {
//           const response = await axios.post('http://localhost:5000/api/games/save', gameData, {
//             headers: {
//               'Content-Type': 'application/json'
//             }
//           });

//           if (response.status === 200) {
//             toast.success("Score saved successfully!");
//           }
//         }
//       }
//     } catch (error) {
//       console.error("Error saving score:", error);
//       toast.error(error.response?.data?.message || "Failed to save score");
//     } finally {
//       // Navigate to leaderboard after saving the score
//       navigate("/leaderboard");
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-8">
//       <motion.div className="bg-white text-gray-900 p-6 rounded-2xl shadow-lg w-full max-w-lg text-center">
//         <h1 className="text-2xl font-bold mb-4">Voice-Based Quiz Game</h1>
//         <motion.p key={currentQuestion} className="text-lg font-medium mb-4">
//           {questions[currentQuestion].question}
//         </motion.p>

//         <button
//           onClick={() => speak(questions[currentQuestion].question)}
//           className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 w-full mb-4"
//         >
//           <Volume2 className="w-5 h-5" /> Repeat Question
//         </button>

//         <button
//           onClick={isListening ? stopListening : startListening}
//           className={`mt-4 px-4 py-2 rounded-lg text-white flex items-center justify-center gap-2 w-full transition-all ${isListening ? "bg-red-500" : "bg-green-500 hover:bg-green-600"}`}
//         >
//           <Mic className="w-5 h-5" /> {isListening ? "Stop Listening" : "Start Listening"}
//         </button>

//         <p className="mt-4 text-lg">🎙 {transcript}</p>

//         <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg w-full" onClick={checkAnswer}>
//           Submit Answer
//         </button>

//         <p className="mt-4 text-2xl font-bold">{feedback}</p>

//         <button className="mt-6 px-4 py-2 bg-red-600 text-white rounded-lg w-full" onClick={handleEndGame}>
//           End Game
//         </button>
//       </motion.div>
//     </div>
//   );
// };

// export default QuizGame;




import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useSpeechRecognition from "../hooks/useSpeechRecognition";
import useTextToSpeech from "../hooks/useTextToSpeech";
import { useAppContext } from "../context/AppContext";
import axios from "axios";
import { motion } from "framer-motion";
import { Mic, Volume2 } from "lucide-react";
import { toast } from "react-toastify";

const QuizGame = () => {
  const questions = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is 2 plus 2?", answer: "Four" },
  ];

  const { transcript, isListening, startListening, stopListening } = useSpeechRecognition();
  const { speak } = useTextToSpeech();
  const { isLogin, userData, backendUrl } = useAppContext();
  const navigate = useNavigate();

  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    speak(questions[currentQuestion]?.question);
  }, [currentQuestion, speak]);

  useEffect(() => {
    if (!isLogin) {
      toast.error("Please log in to play the game!");
      navigate("/login");
    }
  }, [isLogin, navigate]);

  const checkAnswer = () => {
    const userAnswer = transcript.trim();
    if (!userAnswer) {
      setFeedback("❌ No answer detected. Try again.");
      return;
    }

    if (userAnswer.toLowerCase() === questions[currentQuestion].answer.toLowerCase()) {
      setScore((prev) => prev + 1);
      setFeedback("✅ Correct!");
    } else {
      setFeedback(`❌ Incorrect! The correct answer was "${questions[currentQuestion].answer}".`);
    }

    if (currentQuestion + 1 === questions.length) {
      setTimeout(() => handleEndGame(), 2000);
    } else {
      setTimeout(() => {
        setCurrentQuestion((prev) => prev + 1);
        setFeedback("");
      }, 2000);
    }
  };

  const handleEndGame = async () => {
    console.log(userData)
    try {
      if (!userData?.id) {
        toast.error("User ID missing. Please log in again.");
        navigate("/login");
        return;
      }

      const gameData = {
        name: userData.name,
        score,
        userId: userData.id,
        gameType: "quiz",
        timestamp: new Date().toISOString(),
      };

      await axios.post(`${backendUrl}/api/games/save`, gameData, {
        headers: { "Content-Type": "application/json" },
      });

      toast.success("Score saved successfully!");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to save score.");
    } finally {
      navigate("/leaderboard");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-8">
      <motion.div className="bg-white text-gray-900 p-6 rounded-2xl shadow-lg w-full max-w-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Voice-Based Quiz Game</h1>
        <motion.p key={currentQuestion} className="text-lg font-medium mb-4">
          {questions[currentQuestion]?.question}
        </motion.p>

        <button
          onClick={() => speak(questions[currentQuestion]?.question)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 w-full mb-4"
        >
          <Volume2 className="w-5 h-5" /> Repeat Question
        </button>

        <button
          onClick={isListening ? stopListening : startListening}
          className={`mt-4 px-4 py-2 rounded-lg text-white flex items-center justify-center gap-2 w-full ${isListening ? "bg-red-500" : "bg-green-500 hover:bg-green-600"}`}
        >
          <Mic className="w-5 h-5" /> {isListening ? "Stop Listening" : "Start Listening"}
        </button>

        <p className="mt-4 text-lg">🎙 {transcript}</p>

        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg w-full" onClick={checkAnswer}>
          Submit Answer
        </button>

        <p className="mt-4 text-2xl font-bold">{feedback}</p>

        <button className="mt-6 px-4 py-2 bg-red-600 text-white rounded-lg w-full" onClick={handleEndGame}>
          End Game
        </button>
      </motion.div>
    </div>
  );
};

export default QuizGame;
