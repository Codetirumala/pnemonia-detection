import React from 'react';
import './AboutSection.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

function AboutSection() {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.2 });
  const [contentRef, contentVisible] = useScrollAnimation({ threshold: 0.2 });
  const [statsRef, statsVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      <div className="about-container">
        {/* Left Side - Content */}
        <div 
          className={`about-content scroll-animate fade-left ${contentVisible ? 'visible' : ''}`}
          ref={contentRef}
        >
          <h2 className="about-title">ABOUT US</h2>
          <p className="about-description">
            We provide an AI-powered solution for fast, simple, and reliable pneumonia detection from chest X-rays. 
            Our advanced deep learning model analyzes medical images with high accuracy, helping healthcare professionals 
            make informed decisions quickly. Built with cutting-edge technology to support pediatric care worldwide.
          </p>
          <div className="about-buttons">
            <button className="btn-learn-more">LEARN MORE</button>
            <button className="btn-watch-video">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M8 5v14l11-7L8 5z" fill="currentColor"/>
              </svg>
              WATCH VIDEO
            </button>
          </div>
        </div>

        {/* Right Side - Stats */}
        <div 
          className={`about-stats scroll-animate fade-right ${statsVisible ? 'visible' : ''}`}
          ref={statsRef}
        >
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">1000+</div>
              <div className="stat-label">X-Rays Analyzed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">95%</div>
              <div className="stat-label">Accuracy Rate</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <div className="stat-label">Happy Users</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
