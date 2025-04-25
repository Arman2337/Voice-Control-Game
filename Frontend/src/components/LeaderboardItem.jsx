import React from "react";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const LeaderboardItem = ({ rank, name, score, game, index }) => {
  const isTop3 = rank <= 3;
  const medalColors = ["from-yellow-400 to-yellow-300", "from-gray-400 to-gray-300", "from-amber-700 to-amber-600"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className={`glass-panel rounded-lg p-4 flex items-center space-x-4 ${isTop3 ? "border-l-4 border-primary/50" : ""}`}
    >
      {isTop3 ? (
        <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-b ${medalColors[rank - 1]} shadow-inner`}>
          <Trophy className="w-5 h-5 text-white" />
        </div>
      ) : (
        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
          <span className="text-secondary-foreground font-medium">{rank}</span>
        </div>
      )}
      
      <div className="flex-grow min-w-0">
        <p className="font-semibold truncate">{name}</p>
        <p className="text-xs text-muted-foreground">{game}</p>
      </div>
      
      <div className="text-right">
        <span className="text-lg font-semibold">{score}</span>
        <p className="text-xs text-muted-foreground">points</p>
      </div>
    </motion.div>
  );
};

export default LeaderboardItem;
