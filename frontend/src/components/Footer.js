import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-heading">MediAI</h3>
            <p className="footer-text">
              Advanced AI-powered medical imaging analysis for better healthcare outcomes.
            </p>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Contact</h4>
            <ul className="footer-links">
              <li>support@mediai.com</li>
              <li>+1 (555) 123-4567</li>
              <li>24/7 Support Available</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 MediAI Pneumonia Detection. All rights reserved.</p>
          <p className="footer-disclaimer">
            This tool is for educational and informational purposes only.
            Always consult with healthcare professionals for medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
