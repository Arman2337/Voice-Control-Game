import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mic, Brain, Trophy } from 'lucide-react';
import { Card } from '@/components/ui/card';
// import { useAuth } from '../context/AuthContext';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext.jsx';
// import Navbar from '../components/Navbar.jsx'; // Importing your Navbar component

const GameCard = ({ title, description, icon, to, iconBg, delay }) => {
  return (
    <Link to={to} className="block">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
      >
        <Card className="p-6 rounded-2xl shadow-md hover:shadow-lg transition bg-white dark:bg-gray-900 flex flex-col items-center text-center w-full">
          <div className={`w-16 h-16 flex items-center justify-center rounded-full ${iconBg}`}>
            {icon}
          </div>
          <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">{description}</p>
        </Card>
      </motion.div>
    </Link>
  );
};

const Home = () => {
  // const { user } = useAuth();
  const userData = useContext(AppContext);
  console.log(userData);

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center px-6 py-12 w-full min-h-screen bg-gray-100 dark:bg-gray-800"
    >
      {/* Navbar Component */}
      {/* <Navbar /> This adds the Navbar to your Home component */}

      {/* Show welcome message if user is logged in */}
      {userData && (
        <motion.h2 
          className="text-2xl font-bold mb-6 text-gray-900 dark:text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Welcome, {userData.userData.name ? userData.userData.name : 'Developer'}!
        </motion.h2>
      )}

      <div className="text-center max-w-4xl w-full mb-12">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-gray-900 dark:text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="text-blue-600 dark:text-blue-400">VoiceQuest</span> Galaxy
        </motion.h1>
        <motion.p 
          className="text-lg text-gray-700 dark:text-gray-300 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Use your voice to play, learn, and compete. Choose your adventure below.
        </motion.p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 w-full max-w-6xl px-4">
        <GameCard 
          title="Voice Quiz Challenge" 
          description="Answer quiz questions using voice commands. Advance through levels of increasing difficulty."
          icon={<Mic className="w-8 h-8 text-white" />}
          to="/quiz"
          iconBg="bg-blue-500"
          delay={0.5}
        />
        <GameCard 
          title="Memory Pattern Game" 
          description="Improve memory by repeating sequences using voice commands."
          icon={<Brain className="w-8 h-8 text-white" />}
          to="/memory"
          iconBg="bg-green-500"
          delay={0.6}
        />
        <GameCard 
          title="Leaderboard" 
          description="Check your ranking and compete to be the best."
          icon={<Trophy className="w-8 h-8 text-white" />}
          to="/leaderboard"
          iconBg="bg-yellow-500"
          delay={0.7}
        />
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-16 text-center max-w-xl text-gray-500 dark:text-gray-400"
      >
        <p className="text-sm">
          Speak clearly and concisely for the best experience. Have fun exploring VoiceQuest Galaxy!
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Home;
