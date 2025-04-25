

// // import React, { useState, useEffect } from "react";
// // import useSpeechRecognition from "../hooks/useSpeechRecognition";
// // import useTextToSpeech from "../hooks/useTextToSpeech";
// // import { useNavigate } from "react-router-dom";
// // import { auth, db } from "../firebaseConfig";
// // import { addDoc, collection, serverTimestamp } from "firebase/firestore";
// // import { Mic, Volume2, CheckCircle, XCircle } from "lucide-react";

// // const QuizGame = () => {
// //   const questions = [
// //     { question: "What is the capital of France?", answer: "Paris" },
// //     { question: "What is 2 plus 2?", answer: "Four" },
// //   ];

// //   const navigate = useNavigate();
// //   const [score, setScore] = useState(0);
// //   const [currentQuestion, setCurrentQuestion] = useState(0);
// //   const [feedback, setFeedback] = useState("");
// //   const [gameFinished, setGameFinished] = useState(false);

// //   const { transcript, isListening, startListening, stopListening } = useSpeechRecognition();
// //   const { speak } = useTextToSpeech();

// //   useEffect(() => {
// //     speak(questions[currentQuestion].question);
// //   }, [currentQuestion, speak]);

// //   const checkAnswer = () => {
// //     const userAnswer = transcript.trim();
// //     if (!userAnswer) {
// //       setFeedback("❌ No answer detected. Try again.");
// //       return;
// //     }
// //     if (userAnswer.toLowerCase() === questions[currentQuestion].answer.toLowerCase()) {
// //       setScore((prev) => prev + 1);
// //       setFeedback("✅ Correct!");
// //     } else {
// //       setFeedback(`❌ Incorrect! The correct answer was "${questions[currentQuestion].answer}".`);
// //     }
// //     if (currentQuestion + 1 === questions.length) {
// //       setGameFinished(true);
// //     } else {
// //       setTimeout(() => {
// //         setCurrentQuestion((prev) => prev + 1);
// //         setFeedback("");
// //       }, 1500);
// //     }
// //   };

// //   const handleEndGame = async () => {
// //     if (!auth.currentUser) {
// //       alert("You must be logged in to save your score.");
// //       return;
// //     }
// //     try {
// //       await addDoc(collection(db, "scores"), {
// //         userId: auth.currentUser.uid,
// //         score,
// //         gameType: "Quiz",
// //         timestamp: serverTimestamp(),
// //       });
// //       alert(`Game Ended! Your Score: ${score}`);
// //       navigate("/dashboard");
// //     } catch (error) {
// //       console.error("Error saving game data:", error);
// //     }
// //   };

// //   return (
// //     <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-indigo-600 p-6 text-white">
// //       <div className="bg-white text-gray-900 p-6 rounded-lg shadow-xl max-w-lg w-full text-center">
// //         <h1 className="text-3xl font-bold mb-4">🎤 Voice-Based Quiz Game</h1>
// //         <p className="text-xl font-semibold">{questions[currentQuestion].question}</p>

// //         <div className="flex justify-center gap-4 mt-4">
// //           <button onClick={() => speak(questions[currentQuestion].question)} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2">
// //             <Volume2 className="w-5 h-5" /> Repeat Question
// //           </button>
// //           <button
// //             className={`px-4 py-2 rounded flex items-center gap-2 text-white ${isListening ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"}`}
// //             onClick={isListening ? stopListening : startListening}
// //           >
// //             <Mic className="w-5 h-5" /> {isListening ? "Stop Listening" : "Start Listening"}
// //           </button>
// //         </div>

// //         <p className="mt-4 text-lg bg-gray-200 p-3 rounded text-gray-900">🎙 {transcript}</p>

// //         <button className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center gap-2" onClick={checkAnswer}>
// //           <CheckCircle className="w-5 h-5" /> Submit Answer
// //         </button>

// //         <p className="mt-4 text-2xl font-bold flex items-center gap-2">
// //           {feedback.startsWith("✅") ? <CheckCircle className="text-green-500 w-6 h-6" /> : feedback.startsWith("❌") ? <XCircle className="text-red-500 w-6 h-6" /> : null}
// //           {feedback}
// //         </p>

// //         <button
// //           className={`mt-4 px-4 py-2 rounded-lg text-white flex items-center gap-2 ${gameFinished ? "bg-red-600 hover:bg-red-700" : "bg-gray-400 cursor-not-allowed"}`}
// //           onClick={handleEndGame}
// //           disabled={!gameFinished}
// //         >
// //           End Game
// //         </button>
// //       </div>
// //     </div>
// //   );
// // 




// // import React, { useState, useEffect } from "react";
// // import useSpeechRecognition from "../hooks/useSpeechRecognition";
// // import useTextToSpeech from "../hooks/useTextToSpeech";
// // import { useNavigate } from "react-router-dom";
// // import { auth, db } from "../firebaseConfig";
// // import { addDoc, collection, serverTimestamp } from "firebase/firestore";
// // import { motion } from "framer-motion";
// // import { Mic, Volume2, CheckCircle, XCircle } from "lucide-react";

// // const QuizGame = () => {
// //   const [questions, setQuestions] = useState([]);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [score, setScore] = useState(0);
// //   const [currentQuestion, setCurrentQuestion] = useState(0);
// //   const [selectedAnswer, setSelectedAnswer] = useState(null);
// //   const [feedback, setFeedback] = useState("");
// //   const [gameFinished, setGameFinished] = useState(false);

// //   const navigate = useNavigate();
// //   const { transcript, isListening, startListening, stopListening } = useSpeechRecognition();
// //   const { speak } = useTextToSpeech();

// //   // Fetch questions from API
// //   const fetchQuestions = async () => {
// //     setIsLoading(true);
// //     try {
// //       const response = await fetch('https://opentdb.com/api.php?amount=10&type=multiple');
// //       const data = await response.json();

// //       if (data.results && data.results.length > 0) {
// //         const formattedQuestions = data.results.map(q => ({
// //           question: q.question.replace(/&quot;/g, '"').replace(/&#039;/g, "'").replace(/&amp;/g, '&'),
// //           answer: q.correct_answer.replace(/&quot;/g, '"').replace(/&#039;/g, "'").replace(/&amp;/g, '&'),
// //           options: [...q.incorrect_answers, q.correct_answer]
// //             .map(a => a.replace(/&quot;/g, '"').replace(/&#039;/g, "'").replace(/&amp;/g, '&'))
// //             .sort(() => Math.random() - 0.5)
// //         }));

// //         setQuestions(formattedQuestions);
// //         setIsLoading(false);
// //         return formattedQuestions;
// //       }
// //     } catch (error) {
// //       console.error('Error fetching questions:', error);
// //       alert("Error fetching questions. Please try again later.");
// //     }
// //     setIsLoading(false);
// //     return [];
// //   };

// //   useEffect(() => {
// //     fetchQuestions();
// //   }, []);

// //   useEffect(() => {
// //     if (questions.length > 0) {
// //       speak(questions[currentQuestion].question);
// //     }
// //   }, [currentQuestion, questions, speak]);

// //   useEffect(() => {
// //     if (transcript) {
// //       const spokenAnswer = transcript.trim().toLowerCase();
// //       const matchedOption = questions[currentQuestion]?.options.find(
// //         (option) => option.toLowerCase() === spokenAnswer
// //       );
// //       if (matchedOption) {
// //         setSelectedAnswer(matchedOption);
// //       }
// //     }
// //   }, [transcript, questions, currentQuestion]);

// //   const checkAnswer = (userAnswer) => {
// //     setSelectedAnswer(userAnswer);

// //     if (userAnswer.toLowerCase() === questions[currentQuestion].answer.toLowerCase()) {
// //       setScore((prev) => prev + 1);
// //       setFeedback("✅ Correct!");
// //     } else {
// //       setFeedback(`❌ Incorrect! The correct answer was "${questions[currentQuestion].answer}".`);
// //     }

// //     setTimeout(() => {
// //       if (currentQuestion + 1 === questions.length) {
// //         setGameFinished(true);
// //         setFeedback("Game Finished! Click 'End Game' to save your score.");
// //       } else {
// //         setCurrentQuestion((prev) => prev + 1);
// //         setSelectedAnswer(null);
// //         setFeedback("");
// //       }
// //     }, 1500);
// //   };

// //   const handleEndGame = async () => {
// //     if (!auth.currentUser) {
// //       alert("You must be logged in to save your score.");
// //       return;
// //     }
// //     try {
// //       await addDoc(collection(db, "scores"), {
// //         userId: auth.currentUser.uid,
// //         score,
// //         gameType: "Quiz",
// //         timestamp: serverTimestamp(),
// //       });
// //       alert(`Game Ended! Your Score: ${score}`);
// //       navigate("/dashboard");
// //     } catch (error) {
// //       console.error("Error saving game data:", error);
// //     }
// //   };

// //   if (isLoading) {
// //     return (
// //       <div className="flex items-center justify-center min-h-screen bg-gray-200">
// //         <h1 className="text-2xl font-bold">Loading Questions...</h1>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-8">
// //       <motion.div 
// //         className="bg-white text-gray-900 p-6 rounded-2xl shadow-lg w-full max-w-lg text-center"
// //         initial={{ opacity: 0, scale: 0.9 }}
// //         animate={{ opacity: 1, scale: 1 }}
// //         transition={{ duration: 0.5 }}
// //       >
// //         <h1 className="text-2xl font-bold mb-4">Voice-Based Quiz Game</h1>
        
// //         {questions.length > 0 && (
// //           <>
// //             <motion.p 
// //               key={currentQuestion} 
// //               initial={{ opacity: 0, y: 10 }} 
// //               animate={{ opacity: 1, y: 0 }} 
// //               className="text-lg font-medium mb-4"
// //             >
// //               {questions[currentQuestion].question}
// //             </motion.p>

// //             <button 
// //               onClick={() => speak(questions[currentQuestion].question)} 
// //               className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 w-full mb-4"
// //             >
// //               <Volume2 className="w-5 h-5" /> Repeat Question
// //             </button>

// //             <div className="grid grid-cols-2 gap-4">
// //               {questions[currentQuestion].options.map((option, index) => (
// //                 <motion.button
// //                   key={index}
// //                   onClick={() => checkAnswer(option)}
// //                   className={`p-3 rounded-lg text-lg font-semibold transition-all
// //                     ${selectedAnswer === option ? 
// //                     (option === questions[currentQuestion].answer ? "bg-green-500" : "bg-red-500") 
// //                     : "bg-gray-200 text-white hover:bg-gray-300"}`}
// //                   whileTap={{ scale: 0.95 }}
// //                 >
// //                   {option}
// //                 </motion.button>
// //               ))}
// //             </div>

// //             <button
// //               className={`mt-4 px-4 py-2 rounded-lg text-white flex items-center justify-center gap-2 w-full transition-all 
// //                 ${isListening ? "bg-red-500" : "bg-green-500 hover:bg-green-600"}`}
// //               onClick={isListening ? stopListening : startListening}
// //             >
// //               <Mic className="w-5 h-5" /> {isListening ? "Stop Listening" : "Start Listening"}
// //             </button>

// //             <motion.p 
// //               className="mt-4 text-lg font-bold flex items-center justify-center gap-2"
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: feedback ? 1 : 0 }}
// //             >
// //               {feedback.startsWith("✅") ? <CheckCircle className="w-6 h-6 text-green-500" /> 
// //               : <XCircle className="w-6 h-6 text-red-500" />}
// //               {feedback}
// //             </motion.p>
// //             {gameFinished ? (
// //               <button
// //                 className="mt-6 px-4 py-2 bg-red-600 text-white rounded-lg w-full transition-all hover:bg-red-700"
// //                 onClick={handleEndGame}
// //               >
// //                 End Game
// //               </button>
// //             ) : (
// //               <p className="mt-6 text-lg font-bold">Answer all questions to finish the game.</p>
// //             )}
            
// //           </>
// //         )}
// //       </motion.div>
// //     </div>
// //   );
// // };

// // export default QuizGame;






// // import React, { useState, useEffect } from "react";
// // import useSpeechRecognition from "../hooks/useSpeechRecognition";
// // import useTextToSpeech from "../hooks/useTextToSpeech";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";
// // import { motion } from "framer-motion";
// // import { Mic, Volume2, CheckCircle, XCircle } from "lucide-react";

// // const QuizGame = () => {
// //   const questions = [
// //     { question: "What is the capital of France?", answer: "Paris" },
// //     { question: "What is 2 plus 2?", answer: "Four" },
// //   ];
// //   const navigate = useNavigate();

// //   const [score, setScore] = useState(0);
// //   const [currentQuestion, setCurrentQuestion] = useState(0);
// //   const [feedback, setFeedback] = useState("");

// //   const { transcript, isListening, startListening, stopListening } = useSpeechRecognition();
// //   const { speak } = useTextToSpeech();

// //   useEffect(() => {
// //     speak(questions[currentQuestion].question);
// //   }, [currentQuestion, speak]);

// //   const checkAnswer = () => {
// //     const userAnswer = transcript.trim();

// //     if (!userAnswer) {
// //       setFeedback("❌ No answer detected. Try again.");
// //       return;
// //     }

// //     if (userAnswer.toLowerCase() === questions[currentQuestion].answer.toLowerCase()) {
// //       setScore((prev) => prev + 1);
// //       setFeedback("✅ Correct!");
// //     } else {
// //       setFeedback(`❌ Incorrect! The correct answer was "${questions[currentQuestion].answer}".`);
// //     }

// //     if (currentQuestion + 1 === questions.length) {
// //       handleEndGame();
// //     } else {
// //       setTimeout(() => {
// //         setCurrentQuestion((prev) => prev + 1);
// //         setFeedback("");
// //       }, 2000);
// //     }
// //   };

// //   // const handleEndGame = async () => {
// //   //   try {
// //   //     await axios.post("http://localhost:5000/api/games/save", {
// //   //       user: "testUser",
// //   //       gameType: "Quiz",
// //   //       score,
// //   //       timestamp: new Date().toISOString(),
// //   //     });
// //   //     alert(`Game Ended! Your Score: ${score}`);
// //   //     navigate("/dashboard");
// //   //   } catch (error) {
// //   //     console.error("Error saving game data:", error);
// //   //   }
// //   // };

// //   const handleEndGame = async () => {
// //     try {
// //       if (!user) {
// //         alert("Please log in to save scores.");
// //         return;
// //       }
  
// //       await addDoc(collection(db, "leaderboard"), {
// //         uid: user.uid,
// //         gameType: "Quiz",
// //         score: score,
// //         timestamp: new Date().toISOString(),
// //       });
  
// //       alert(`Game Ended! Your Score: ${score}`);
// //       navigate("/dashboard");
// //     } catch (error) {
// //       console.error("Error saving game data:", error);
// //     }
// //   };
  

// //   return (
// //     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-8">
// //       <motion.div className="bg-white text-gray-900 p-6 rounded-2xl shadow-lg w-full max-w-lg text-center">
// //         <h1 className="text-2xl font-bold mb-4">Voice-Based Quiz Game</h1>
// //         <motion.p key={currentQuestion} className="text-lg font-medium mb-4">
// //           {questions[currentQuestion].question}
// //         </motion.p>
// //         <button onClick={() => speak(questions[currentQuestion].question)} className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 w-full mb-4">
// //           <Volume2 className="w-5 h-5" /> Repeat Question
// //         </button>
// //         <button className={`mt-4 px-4 py-2 rounded-lg text-white flex items-center justify-center gap-2 w-full transition-all ${isListening ? "bg-red-500" : "bg-green-500 hover:bg-green-600"}`} onClick={isListening ? stopListening : startListening}>
// //           <Mic className="w-5 h-5" /> {isListening ? "Stop Listening" : "Start Listening"}
// //         </button>
// //         <p className="mt-4 text-lg">🎙 {transcript}</p>
// //         <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg w-full" onClick={checkAnswer}>
// //           Submit Answer
// //         </button>
// //         <p className="mt-4 text-2xl font-bold">{feedback}</p>
// //         <button className="mt-6 px-4 py-2 bg-red-600 text-white rounded-lg w-full" onClick={handleEndGame}>
// //           End Game
// //         </button>
// //       </motion.div>
// //     </div>
// //   );
// // };

// // export default QuizGame;




import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useSpeechRecognition from "../hooks/useSpeechRecognition";
import useTextToSpeech from "../hooks/useTextToSpeech";

// ✅ Import from Firebase
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";


// ✅ Import user from AuthContext
import { useAuth } from "../context/AuthContext";

import { motion } from "framer-motion";
import { Mic, Volume2 } from "lucide-react";

const QuizGame = () => {
  const questions = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is 2 plus 2?", answer: "Four" },
  ];

  const navigate = useNavigate();

  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [feedback, setFeedback] = useState("");

  // ✅ Hooks for speech recognition & TTS
  const { transcript, isListening, startListening, stopListening } = useSpeechRecognition();
  const { speak } = useTextToSpeech();

  // ✅ Get logged-in user from AuthContext
  const { user } = useAuth();

  // Speak the current question on mount or question change
  useEffect(() => {
    speak(questions[currentQuestion].question);
  }, [currentQuestion, speak]);

  // Check user's answer
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
      handleEndGame();
    } else {
      setTimeout(() => {
        setCurrentQuestion((prev) => prev + 1);
        setFeedback("");
      }, 2000);
    }
  };

  // Handle end of game
  const handleEndGame = async () => {
    try {
      // ✅ Check if user is logged in
      if (!user) {
        alert("Please log in to save scores.");
        return;
      }

      // ✅ Add new document to 'leaderboard' collection
      await addDoc(collection(db, "leaderboard"), {
        uid: user.uid,
        gameType: "Quiz",
        score: score,
        timestamp: new Date().toISOString(),
      });

      alert(`Game Ended! Your Score: ${score}`);
      navigate("/leaderboard"); // Navigate to leaderboard page
    } catch (error) {
      console.error("Error saving game data:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-8">
      <motion.div className="bg-white text-gray-900 p-6 rounded-2xl shadow-lg w-full max-w-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Voice-Based Quiz Game</h1>
        <motion.p key={currentQuestion} className="text-lg font-medium mb-4">
          {questions[currentQuestion].question}
        </motion.p>
        <button
          onClick={() => speak(questions[currentQuestion].question)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 w-full mb-4"
        >
          <Volume2 className="w-5 h-5" /> Repeat Question
        </button>
        <button
          className={`mt-4 px-4 py-2 rounded-lg text-white flex items-center justify-center gap-2 w-full transition-all ${
            isListening ? "bg-red-500" : "bg-green-500 hover:bg-green-600"
          }`}
          onClick={isListening ? stopListening : startListening}
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


