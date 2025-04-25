const useTextToSpeech = () => {
    const speak = (text) => {
      if ("speechSynthesis" in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = "en-US"; // Set the language
        utterance.rate = 1; // Adjust speed (1 is normal)
        speechSynthesis.speak(utterance);
      } else {
        console.error("Text-to-Speech is not supported in this browser.");
      }
    };
  
    return { speak };
  };
  
  export default useTextToSpeech;
  