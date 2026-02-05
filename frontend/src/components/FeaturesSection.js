import React from 'react';
import './FeaturesSection.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

function FeaturesSection() {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [leftRef, leftVisible] = useScrollAnimation({ threshold: 0.1 });
  const [rightRef, rightVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="features-section" id="features">
      <div className="features-container">
        {/* Header */}
        <div 
          className={`features-header scroll-animate fade-up ${headerVisible ? 'visible' : ''}`}
          ref={headerRef}
        >
          <h2 className="features-title">Features that blows mind</h2>
          <p className="features-subtitle">
            End-to-end AI-powered pneumonia detection and analysis in a 
            single solution. Meet the right platform to help healthcare.
          </p>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {/* Left Column - 2 Cards Stacked */}
          <div 
            className={`features-left scroll-animate fade-up ${leftVisible ? 'visible' : ''}`}
            ref={leftRef}
          >
            <div className="feature-card light">
              <div className="feature-icon purple">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 4V16M12 4L8 8M12 4L16 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 17V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Fast Upload & Analysis</h3>
              <p>Upload chest X-ray images instantly and get AI-powered analysis in seconds. Support for JPEG, PNG formats.</p>
            </div>

            <div className="feature-card light delay-200">
              <div className="feature-icon orange">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>High Accuracy Detection</h3>
              <p>Our deep learning model achieves 95%+ accuracy in detecting pneumonia from pediatric chest X-rays.</p>
            </div>
          </div>

          {/* Right Column - 2 Cards Stacked */}
          <div 
            className={`features-right scroll-animate fade-up delay-300 ${rightVisible ? 'visible' : ''}`}
            ref={rightRef}
          >
            <div className="feature-card accent">
              <h3>Instant Results Available</h3>
              <p>Get comprehensive diagnosis results with confidence scores immediately after upload. No waiting required.</p>
            </div>

            <div className="feature-card dark">
              <div className="feature-stat">100+</div>
              <p>X-Rays Analyzed Daily with Powerful AI Integration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
