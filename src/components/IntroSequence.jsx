import React, { useEffect, useState } from 'react';
import './IntroSequence.css';

const IntroSequence = ({ onComplete }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleFinish = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      if (onComplete) {
        onComplete();
      }
    }, 800);
  };

  useEffect(() => {
    // Automatically transition to main website after 4 seconds
    const timer = setTimeout(() => {
      handleFinish();
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`intro-container ${isFadingOut ? 'fade-out' : ''}`}>
      <div className="intro-overlay">
        <img
          src="/images/introsequence/new-intro-image.jpg"
          alt="TM_WAYz Intro"
          className="intro-image"
        />
      </div>

      <button className="skip-button" onClick={handleFinish} aria-label="Skip Intro">
        Skip <span className="skip-icon">➔</span>
      </button>
    </div>
  );
};

export default IntroSequence;
