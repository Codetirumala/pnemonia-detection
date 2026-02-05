import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-heading">PneumoScan</h3>
            <p className="footer-text">
              AI-powered pneumonia detection from chest X-ray images. 
              Fast, accurate, and reliable diagnostic assistance for healthcare professionals.
            </p>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Contact</h4>
            <ul className="footer-links">
              <li>support@pneumoscan.com</li>
              <li>24/7 Technical Support</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 PneumoScan. All rights reserved.</p>
          <p className="footer-disclaimer">
            For educational purposes only. Always consult healthcare professionals for medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
