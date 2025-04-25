
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Types
export interface LogEntry {
  id: string;
  timestamp: Date;
  type: 'speech_recognition' | 'speech_synthesis' | 'user_interaction' | 'system_event' | 'error';
  message: string;
  details?: Record<string, any>;
}

interface LogsContextProps {
  logs: LogEntry[];
  addLog: (type: LogEntry['type'], message: string, details?: Record<string, any>) => void;
  clearLogs: () => void;
  exportLogs: () => void;
}

interface LogsProviderProps {
  children: ReactNode;
}

// Create context
const LogsContext = createContext<LogsContextProps | undefined>(undefined);

// Context provider
export const LogsProvider: React.FC<LogsProviderProps> = ({ children }) => {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  
  // Load logs from localStorage on mount
  useEffect(() => {
    const savedLogs = localStorage.getItem('voicequest_logs');
    if (savedLogs) {
      try {
        const parsedLogs = JSON.parse(savedLogs);
        // Convert date strings back to Date objects
        const processedLogs = parsedLogs.map((log: any) => ({
          ...log,
          timestamp: new Date(log.timestamp)
        }));
        setLogs(processedLogs);
      } catch (error) {
        console.error('Failed to parse saved logs:', error);
      }
    }
  }, []);
  
  // Save logs to localStorage when they change
  useEffect(() => {
    if (logs.length > 0) {
      // Limit to last 1000 logs to prevent localStorage overflow
      const logsToSave = logs.slice(-1000);
      localStorage.setItem('voicequest_logs', JSON.stringify(logsToSave));
    }
  }, [logs]);
  
  // Add a new log
  const addLog = (type: LogEntry['type'], message: string, details?: Record<string, any>) => {
    const newLog: LogEntry = {
      id: Date.now().toString(),
      timestamp: new Date(),
      type,
      message,
      details
    };
    
    setLogs(prevLogs => [...prevLogs, newLog]);
    console.log(`[${type.toUpperCase()}]`, message, details || '');
  };
  
  // Clear all logs
  const clearLogs = () => {
    setLogs([]);
    localStorage.removeItem('voicequest_logs');
  };
  
  // Export logs as JSON file
  const exportLogs = () => {
    const dataStr = JSON.stringify(logs, null, 2);
    const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(dataStr)}`;
    
    const exportFileName = `voicequest_logs_${new Date().toISOString()}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileName);
    linkElement.click();
  };
  
  return (
    <LogsContext.Provider value={{ 
      logs, 
      addLog, 
      clearLogs,
      exportLogs
    }}>
      {children}
    </LogsContext.Provider>
  );
};

// Hook for using the logs context
export const useLogs = () => {
  const context = useContext(LogsContext);
  if (context === undefined) {
    throw new Error('useLogs must be used within a LogsProvider');
  }
  return context;
};
