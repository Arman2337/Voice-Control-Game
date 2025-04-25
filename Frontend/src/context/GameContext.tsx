
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useLogs } from './LogsContext';

// Types
export interface GameScore {
  id: string;
  name: string;
  score: number;
  game: 'quiz' | 'memory';
  date: Date;
}

interface GameContextProps {
  scores: GameScore[];
  addScore: (name: string, score: number, game: 'quiz' | 'memory') => void;
  highScore: (game: 'quiz' | 'memory') => number;
  speechSupported: boolean;
  hasMicPermission: boolean;
  setHasMicPermission: (value: boolean) => void;
  requestMicPermission: () => Promise<boolean>;
  preferredVoiceLang: string;
  setPreferredVoiceLang: (lang: string) => void;
  availableVoices: SpeechSynthesisVoice[];
  resetSpeechRecognition: () => void;
}

interface GameProviderProps {
  children: ReactNode;
}

// Create context
const GameContext = createContext<GameContextProps | undefined>(undefined);

// Context provider
export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const [scores, setScores] = useState<GameScore[]>([]);
  const [speechSupported, setSpeechSupported] = useState(false);
  const [hasMicPermission, setHasMicPermission] = useState(false);
  const [preferredVoiceLang, setPreferredVoiceLang] = useState('en-US'); // Changed to use US English for better compatibility
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const { addLog } = useLogs();
  
  // For better speech recognition stability
  const resetSpeechRecognition = () => {
    // This function helps restart recognition when it gets stuck
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      addLog('system_event', 'Forcefully resetting speech recognition engine');
      
      try {
        // Force cleanup any existing instances
        // const SpeechRecognition = window.SpeechRecognition || (window as any).webkitSpeechRecognition;
        // const tempRecognition = new SpeechRecognition();
        // tempRecognition.abort();
        // tempRecognition.stop();
        
        // Small delay to ensure proper cleanup
        setTimeout(() => {
          addLog('system_event', 'Speech recognition engine reset complete');
        }, 500);
      } catch (error) {
        addLog('error', 'Error during speech recognition reset', { error: String(error) });
      }
    }
  };
  
  // Check for speech API support on mount
  useEffect(() => {
    const speechRecognitionSupported = 
      'SpeechRecognition' in window || 
      'webkitSpeechRecognition' in window;
    
    const speechSynthesisSupported = 
      'speechSynthesis' in window;
    
    setSpeechSupported(speechRecognitionSupported && speechSynthesisSupported);
    
    addLog('system_event', `Speech APIs support check: Recognition=${speechRecognitionSupported}, Synthesis=${speechSynthesisSupported}`);
    
    // Check for microphone permission
    checkMicrophonePermission();
    
    // Load scores from localStorage
    const savedScores = localStorage.getItem('voicequest_scores');
    if (savedScores) {
      try {
        const parsedScores = JSON.parse(savedScores);
        // Convert date strings back to Date objects
        const processedScores = parsedScores.map((score: any) => ({
          ...score,
          date: new Date(score.date)
        }));
        setScores(processedScores);
        addLog('system_event', `Loaded ${processedScores.length} scores from localStorage`);
      } catch (error) {
        addLog('error', 'Failed to parse saved scores', { error: String(error) });
      }
    }
    
    // Load preferred voice language from localStorage
    const savedVoiceLang = localStorage.getItem('voicequest_preferred_voice');
    if (savedVoiceLang) {
      setPreferredVoiceLang(savedVoiceLang);
      addLog('system_event', `Loaded preferred voice language: ${savedVoiceLang}`);
    }
    
    // Load available voices
    if (speechSynthesisSupported) {
      const loadVoices = () => {
        const voices = window.speechSynthesis.getVoices();
        addLog('system_event', `Loaded ${voices.length} speech synthesis voices`);
        setAvailableVoices(voices);
        
        // Prioritize finding a good English voice
        const findBestVoice = () => {
          // Look for US English voice first
          const usVoice = voices.find(v => v.lang === 'en-US');
          if (usVoice) {
            addLog('system_event', `Found US English voice: ${usVoice.name}`);
            return 'en-US';
          }
          
          // Look for UK English next
          const ukVoice = voices.find(v => v.lang === 'en-GB');
          if (ukVoice) {
            addLog('system_event', `Found UK English voice: ${ukVoice.name}`);
            return 'en-GB';
          }
          
          // Look for any English voice
          const anyEnglishVoice = voices.find(v => v.lang.startsWith('en'));
          if (anyEnglishVoice) {
            addLog('system_event', `Found English voice: ${anyEnglishVoice.name} (${anyEnglishVoice.lang})`);
            return anyEnglishVoice.lang;
          }
          
          return null;
        };
        
        const bestVoiceLang = findBestVoice();
        
        if (bestVoiceLang && preferredVoiceLang !== bestVoiceLang) {
          addLog('system_event', `Better voice found, setting as preferred: ${bestVoiceLang}`);
          setPreferredVoiceLang(bestVoiceLang);
          localStorage.setItem('voicequest_preferred_voice', bestVoiceLang);
        }
      };
      
      // Chrome loads voices asynchronously
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = loadVoices;
      }
      
      loadVoices();
      
      // Sometimes voices load with delay, try multiple times
      setTimeout(loadVoices, 500);
      setTimeout(loadVoices, 1000);
      setTimeout(loadVoices, 2000);
    }
  }, []);
  
  // Save scores to localStorage when they change
  useEffect(() => {
    if (scores.length > 0) {
      localStorage.setItem('voicequest_scores', JSON.stringify(scores));
      addLog('system_event', `Saved ${scores.length} scores to localStorage`);
    }
  }, [scores]);
  
  // Save preferred voice language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('voicequest_preferred_voice', preferredVoiceLang);
    addLog('system_event', `Saved preferred voice language: ${preferredVoiceLang}`);
  }, [preferredVoiceLang]);
  
  // Function to check microphone permission
  const checkMicrophonePermission = async () => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      setHasMicPermission(false);
      addLog('error', 'Microphone API not supported by this browser');
      return false;
    }
    
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setHasMicPermission(true);
      addLog('system_event', 'Microphone permission granted');
      
      // Stop all tracks to release the microphone
      stream.getTracks().forEach(track => track.stop());
      return true;
    } catch (error) {
      addLog('error', 'Microphone permission denied', { error: String(error) });
      setHasMicPermission(false);
      return false;
    }
  };
  
  // Function to request microphone permission
  const requestMicPermission = async (): Promise<boolean> => {
    addLog('user_interaction', 'User requested microphone permission');
    return await checkMicrophonePermission();
  };
  
  // Add a new score
  const addScore = (name: string, score: number, game: 'quiz' | 'memory') => {
    const newScore: GameScore = {
      id: Date.now().toString(),
      name,
      score,
      game,
      date: new Date()
    };
    
    setScores(prevScores => [...prevScores, newScore]);
    addLog('user_interaction', `Added new score for ${game} game`, { name, score });
  };
  
  // Get high score for a specific game
  const highScore = (game: 'quiz' | 'memory') => {
    const gameScores = scores.filter(score => score.game === game);
    if (gameScores.length === 0) return 0;
    
    return Math.max(...gameScores.map(score => score.score));
  };
  
  return (
    <GameContext.Provider value={{ 
      scores, 
      addScore, 
      highScore, 
      speechSupported, 
      hasMicPermission, 
      setHasMicPermission,
      requestMicPermission,
      preferredVoiceLang,
      setPreferredVoiceLang,
      availableVoices,
      resetSpeechRecognition
    }}>
      {children}
    </GameContext.Provider>
  );
};

// Hook for using the game context
export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
