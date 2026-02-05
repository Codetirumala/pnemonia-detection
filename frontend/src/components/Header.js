import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <div className="logo-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 6V18M6 12H18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="logo-text">PneumoScan</span>
        </div>
        
        <nav className="nav-menu">
          <a href="#home" className="nav-link active">Home</a>
          <a href="#about" className="nav-link">About Us</a>
          <a href="#how-it-works" className="nav-link">How it Works</a>
          <a href="#features" className="nav-link">Features</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
        
        <button className="header-cta">
          Try Now
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
