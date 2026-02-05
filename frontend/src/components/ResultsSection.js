import React from 'react';
import './ResultsSection.css';

function ResultsSection({ result, imageUrl, onReset }) {
  const isPneumonia = result.diagnosis === 'PNEUMONIA';
  
  return (
    <div className="results-section">
      <div className="results-header">
        <h2 className="results-title">Analysis Complete</h2>
        <button className="reset-button" onClick={onReset}>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12V12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C9.25022 4 6.82447 5.38734 5.38451 7.5M4 4V8H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Analyze Another
        </button>
      </div>

      <div className="results-grid">
        <div className="image-container">
          <div className="image-wrapper">
            <img src={imageUrl} alt="Analyzed X-ray" className="xray-image" />
          </div>
        </div>

        <div className="diagnosis-container">
          <div className={`diagnosis-badge ${isPneumonia ? 'pneumonia' : 'normal'}`}>
            <div className="badge-icon">
              {isPneumonia ? (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8V12M12 16H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <div className="badge-text">
              <span className="badge-label">Diagnosis</span>
              <h3 className="badge-diagnosis">{result.diagnosis}</h3>
            </div>
          </div>

          <div className="confidence-section">
            <div className="confidence-header">
              <span className="confidence-label">Confidence Level</span>
              <span className="confidence-value">{result.confidence}%</span>
            </div>
            <div className="confidence-bar">
              <div 
                className={`confidence-fill ${isPneumonia ? 'pneumonia' : 'normal'}`}
                style={{ width: `${result.confidence}%` }}
              ></div>
            </div>
          </div>

          <div className="details-section">
            <h4 className="details-title">Detailed Analysis</h4>
            <div className="details-grid">
              <div className="detail-card">
                <div className="detail-icon pneumonia-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6V12M12 12V18M12 12H18M12 12H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="detail-content">
                  <span className="detail-label">Pneumonia</span>
                  <span className="detail-value">{result.details.pneumonia_probability}%</span>
                </div>
              </div>
              <div className="detail-card">
                <div className="detail-icon normal-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="detail-content">
                  <span className="detail-label">Normal</span>
                  <span className="detail-value">{result.details.normal_probability}%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="disclaimer">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 16H12V12H11M12 8H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p>
              <strong>Medical Disclaimer:</strong> This AI analysis is for informational purposes only
              and should not replace professional medical diagnosis. Please consult with a qualified
              healthcare provider for medical advice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultsSection;
