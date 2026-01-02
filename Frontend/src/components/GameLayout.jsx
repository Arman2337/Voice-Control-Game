import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const GameLayout = ({ children, title, backLink = "/" }) => {
    return (
        <div className="min-h-screen w-full bg-[#020817] text-white overflow-x-hidden relative flex flex-col items-center py-8">
            {/* Background Ambience */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] mix-blend-screen animate-pulse delay-700" />
            </div>

            {/* Header/Nav */}
            <div className="relative z-10 w-full max-w-5xl px-4 mb-8 flex items-center justify-between">
                <Link to={backLink}>
                    <Button variant="ghost" className="gap-2 text-gray-400 hover:text-white hover:bg-white/10">
                        <ChevronLeft className="w-4 h-4" /> Back to Base
                    </Button>
                </Link>
                {title && <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 hidden md:block">{title}</h1>}
                <div className="w-24" /> {/* Spacer for centering */}
            </div>

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 w-full max-w-4xl px-4 flex flex-col items-center"
            >
                {children}
            </motion.div>
        </div>
    );
};

export default GameLayout;
