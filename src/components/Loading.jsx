import React, { useState, useEffect } from 'react';

const translations = [
  "Catching Pokémon...", // English
  "ポケモンを捕まえています...", // Japanese
  "पोकेमॉन पकड़ रहे हैं...",      // Hindi
  "पोकेमॉन पकडत आहे...",        // Marathi
];

const Loading = () => {
  const [currentTranslation, setCurrentTranslation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTranslation(prev => (prev + 1) % translations.length);
    }, 1000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B6B] via-[#FF9A00] to-[#FFD93D] text-center">
        {translations[currentTranslation]}
      </div>
    </div>
  );
};

export default Loading;
