import React from 'react';
import './InfoSection.css';
import lungImage from './assets/lung.png';

function InfoSection() {
  return (
    <section className="info-section" id="how-it-works">
      <div className="info-container">
        {/* Section Header */}
        <div className="section-header">
          
          <h2 className="section-title">How it works</h2>
          <p className="section-description">
            No confusion or delays. Just fast and reliable analysis.
          </p>
        </div>

        {/* How It Works Content - Two Column Layout */}
        <div className="how-it-works-content">
          {/* Left Side - Lungs Image */}
          <div className="how-image-side">
            <img 
              src={lungImage} 
              alt="Lungs illustration" 
              className="lungs-image"
            />
          </div>

          {/* Right Side - Steps Timeline */}
          <div className="how-steps-side">
            <div className="timeline-step">
              <div className="step-indicator">
                <div className="step-icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M12 4V16M12 4L8 8M12 4L16 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 17V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="step-line"></div>
              </div>
              <div className="step-content">
                <h3>Upload Your X-Ray</h3>
                <p>Simply drag and drop your chest X-ray image or click to browse. We support JPEG and PNG formats.</p>
              </div>
            </div>

            <div className="timeline-step">
              <div className="step-indicator">
                <div className="step-icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="step-line"></div>
              </div>
              <div className="step-content">
                <h3>AI Analysis</h3>
                <p>Our advanced deep learning model analyzes the X-ray image in seconds with high accuracy detection.</p>
              </div>
            </div>

            <div className="timeline-step">
              <div className="step-indicator">
                <div className="step-icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
              <div className="step-content">
                <h3>Get Instant Results</h3>
                <p>Receive detailed diagnosis results with confidence scores, displayed securely on your screen.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
