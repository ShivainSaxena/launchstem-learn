// src/components/RocketMascot.jsx
import React, { useState, useEffect } from "react";
import Mascot from "../assets/mascot.png";

function RocketMascot({ message, isVisible }) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (message) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timer);
    }
  }, [message]);

  if (!isVisible) return null;

  return (
    <div className="fixed -bottom-4 -right-80 flex items-end space-x-3 z-50">
      {message && (
        <div className="relative mb-12 max-w-xs">
          <div className="bg-white rounded-lg p-4 shadow-lg">
            <p className="text-gray-800">{message}</p>
            <div className="absolute -bottom-2 right-4 w-4 h-4 bg-white transform rotate-45" />
          </div>
        </div>
      )}
      <div
        className={`w-24 h-24 transition-transform duration-300 ${
          isAnimating ? "scale-110" : "scale-100"
        }`}
      >
        <img
          src={Mascot}
          alt="Rocket Mascot"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}

export default RocketMascot;
