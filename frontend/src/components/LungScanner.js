import React from 'react';
import './LungScanner.css';
import blueLung from './assets/bluleungok.png';
import redLung from './assets/redlungok.png';

function LungScanner() {
  return (
    <div className="lung-scanner">
      <div className="scanner-container">
        {/* Base Blue Lung */}
        <img src={blueLung} alt="Lung scan" className="lung-image lung-blue" />
        
        {/* Red Lung revealed by scan */}
        <div className="scan-reveal">
          <img src={redLung} alt="Lung detected" className="lung-image lung-red" />
        </div>
        
        {/* Scan Line */}
        <div className="scan-line"></div>
      </div>
      
      <div className="scanner-status">
        <span className="status-dot"></span>
        <span className="status-text">Ready to analyze</span>
      </div>
    </div>
  );
}

export default LungScanner;
