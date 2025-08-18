import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";

const Welcome = () => {
  const fullText = "Welcome to Bus Route Planner";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.substring(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="welcome-page">
      <div className="overlay"></div>
      <div className="content">
        <h1 className="typing-text">{displayedText}</h1>
        <p className="tagline">Plan your trip, explore routes, travel smart.</p>
        <div className="button-row">
          <Link to="/signup" className="glow-button">
            Sign Up
          </Link>
          <Link to="/login" className="glow-button-outline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
