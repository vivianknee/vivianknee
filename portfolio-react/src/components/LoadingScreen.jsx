import { useState, useEffect } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [stage, setStage] = useState('entering'); // entering, revealing, exiting

  useEffect(() => {
    // Start revealing after initial entrance
    const revealTimer = setTimeout(() => {
      setStage('revealing');
    }, 1000);

    // Complete loading
    const exitTimer = setTimeout(() => {
      setStage('exiting');
      setTimeout(() => {
        onLoadingComplete();
      }, 800);
    }, 2500);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(exitTimer);
    };
  }, [onLoadingComplete]);

  return (
    <div className={`loading-screen ${stage}`}>
      <div className="loading-curtain left">
        <div className="curtain-pattern"></div>
      </div>
      <div className="loading-curtain right">
        <div className="curtain-pattern"></div>
      </div>
      <div className="loading-content">
        <div className="loading-text">
          <span className="name-initial">V</span>
          <span className="name-rest">ivian Ni</span>
        </div>
        <div className="loading-subtitle">Portfolio 2024</div>
        <div className="loading-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
