import { useState, useEffect } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Start exit animation after delay
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        onLoadingComplete();
      }, 800);
    }, 1800);

    return () => {
      clearTimeout(exitTimer);
    };
  }, [onLoadingComplete]);

  return (
    <div className={`loading-screen ${isExiting ? 'exiting' : ''}`}>
      <div className="loading-background"></div>
      <div className="loading-content">
        <div className="loading-text">
          <span className="typed-name">Vivian Ni</span>
          <span className="cursor">|</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
