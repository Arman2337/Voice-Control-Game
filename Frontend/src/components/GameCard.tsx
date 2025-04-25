
// import React from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { ArrowRight } from 'lucide-react';

// interface GameCardProps {
//   title: string;
//   description: string;
//   icon: React.ReactNode;
//   to: string;
//   iconBg?: string;
//   delay?: number;
// }

// const GameCard: React.FC<GameCardProps> = ({ 
//   title, 
//   description, 
//   icon, 
//   to, 
//   iconBg = 'bg-primary',
//   delay = 0 
// }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay }}
//       whileHover={{ y: -5, transition: { duration: 0.2 } }}
//       className="glass-panel rounded-2xl overflow-hidden relative group"
//     >
//       <Link to={to} className="block p-6 focus-ring rounded-2xl">
//         <div className={`${iconBg} rounded-xl w-12 h-12 flex items-center justify-center mb-4 shadow-lg`}>
//           {icon}
//         </div>
        
//         <h3 className="text-xl font-semibold mb-2">{title}</h3>
//         <p className="text-muted-foreground mb-4">{description}</p>
        
//         <div className="flex items-center text-primary text-sm font-medium">
//           <span>Start Game</span>
//           <motion.div
//             initial={{ x: 0 }}
//             animate={{ x: 5 }}
//             transition={{ repeat: Infinity, repeatType: "mirror", duration: 0.8 }}
//           >
//             <ArrowRight className="ml-2 w-4 h-4" />
//           </motion.div>
//         </div>
        
//         <motion.div 
//           className="absolute inset-0 border-2 border-primary/0 rounded-2xl"
//           initial={{ opacity: 0 }}
//           whileHover={{ opacity: 1, borderColor: 'hsl(var(--primary) / 0.2)' }}
//           transition={{ duration: 0.2 }}
//         />
//       </Link>
//     </motion.div>
//   );
// };

// export default GameCard;



import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const GameCard = ({ title, description, icon, to, iconBg = "bg-blue-500", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      className="relative overflow-hidden rounded-2xl shadow-lg bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-700 backdrop-blur-lg"
    >
      <Link to={to} className="block focus:outline-none">
        {/* Icon Section */}
        <div className={`${iconBg} w-14 h-14 flex items-center justify-center rounded-xl shadow-md mb-4`}>
          {icon}
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{description}</p>

        {/* Start Game Button with Animation */}
        <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium">
          <span>Start Game</span>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: 5 }}
            transition={{ repeat: Infinity, repeatType: "mirror", duration: 0.8 }}
          >
            <ArrowRight className="ml-2 w-4 h-4" />
          </motion.div>
        </div>

        {/* Hover Border Animation */}
        <motion.div 
          className="absolute inset-0 border-2 border-transparent rounded-2xl"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1, borderColor: "rgba(59,130,246,0.3)" }}
          transition={{ duration: 0.2 }}
        />
      </Link>
    </motion.div>
  );
};

export default GameCard;
