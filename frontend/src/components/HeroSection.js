import React from 'react';
import './HeroSection.css';

function HeroSection({ onGetStarted }) {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
      </div>
      
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            AI-Powered Diagnostic Tool
          </div>
          
          <h1 className="hero-title">
            Detect Pneumonia Instantly,<br />
            <span>Anywhere.</span>
          </h1>
          
          <p className="hero-description">
            Upload chest X-ray images and get instant AI-powered analysis. 
            Our deep learning model provides accurate pneumonia detection 
            to assist healthcare professionals in diagnosis.
          </p>
          
          <div className="hero-buttons">
            <button className="btn-primary" onClick={onGetStarted}>
              Get Started
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="btn-secondary">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <polygon points="10,8 16,12 10,16" fill="currentColor"/>
              </svg>
              Watch Demo
            </button>
          </div>
          
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-value">95%+</div>
              <div className="stat-label">Accuracy Rate</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <div className="stat-value">2-3s</div>
              <div className="stat-label">Analysis Time</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <div className="stat-value">24/7</div>
              <div className="stat-label">Available</div>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="visual-container">
            {/* Main Card */}
            <div className="main-card">
              <div className="card-header">
                <div className="card-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6V18M6 12H18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <span>PneumoScan</span>
              </div>
              <div className="card-preview">
                <div className="xray-placeholder">
                  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100" height="100" rx="8" fill="#1a1a2e"/>
                    <ellipse cx="50" cy="45" rx="35" ry="30" stroke="#4a4a6a" strokeWidth="2" fill="none"/>
                    <ellipse cx="35" cy="45" rx="12" ry="18" stroke="#6366f1" strokeWidth="1.5" fill="rgba(99,102,241,0.1)"/>
                    <ellipse cx="65" cy="45" rx="12" ry="18" stroke="#6366f1" strokeWidth="1.5" fill="rgba(99,102,241,0.1)"/>
                    <path d="M50 55 L50 75" stroke="#4a4a6a" strokeWidth="2"/>
                    <path d="M42 70 L50 75 L58 70" stroke="#4a4a6a" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <div className="scan-line"></div>
              </div>
              <div className="card-status">
                <div className="status-dot"></div>
                Ready to analyze
              </div>
            </div>
            
            {/* Floating Cards */}
            <div className="floating-card card-result">
              <div className="result-icon normal">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="result-text">
                <span className="result-label">Result</span>
                <span className="result-value normal">Normal</span>
              </div>
            </div>
            
            <div className="floating-card card-accuracy">
              <div className="accuracy-circle">
                <svg viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="3"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#8b5cf6"
                    strokeWidth="3"
                    strokeDasharray="95, 100"
                    strokeLinecap="round"
                  />
                </svg>
                <span>95%</span>
              </div>
              <span className="accuracy-label">Confidence</span>
            </div>
            
            <div className="floating-card card-ai">
              <div className="ai-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>Deep Learning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
