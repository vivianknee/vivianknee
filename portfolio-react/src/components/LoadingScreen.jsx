import { useState, useEffect } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [displayText, setDisplayText] = useState('');
  const [isExiting, setIsExiting] = useState(false);
  const fullText = "vivian ni";

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        // Start exit animation after typing completes
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            onLoadingComplete();
          }, 800);
        }, 500);
      }
    }, 100);

    return () => {
      clearInterval(typingInterval);
    };
  }, [onLoadingComplete]);

  return (
    <div className={`loading-screen ${isExiting ? 'exiting' : ''}`}>
      <div className="loading-background"></div>
      <div className="loading-content">
        <div className="loading-text">
          <span className="typed-text">{displayText}</span>
          <span className="cursor">|</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
