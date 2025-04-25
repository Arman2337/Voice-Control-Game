import { Ampersand } from "lucide-react";
import { useState, useEffect } from "react";

const useSpeechRecognition = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [error, setError] = useState(null);

  let recognition = null;

  if ("webkitSpeechRecognition" in window) {
    recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";
  } else {
    console.error("Speech Recognition not supported in this browser");
  }

  const startListening = () => {
    if (recognition) {
      setIsListening(true);
      recognition.start();
      recognition.onresult = (event) => {
        const lastResult = event.results[event.results.length - 1][0].transcript;
        setTranscript(lastResult);
      };
      recognition.onerror = (event) => {
        setError(event.error);
      };
    }
  };

  const stopListening = () => {
    if (recognition) {
      setIsListening(false);
      recognition.stop();
    }
  };

  return { transcript, isListening, startListening, stopListening, error };
};

export default useSpeechRecognition;
