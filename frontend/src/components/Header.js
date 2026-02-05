import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <div className="logo-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
            </svg>
          </div>
          <div className="logo-text">
            <h1 className="logo-title">MediAI</h1>
            <p className="logo-subtitle">Pneumonia Detection</p>
          </div>
        </div>
        <nav className="nav-section">
          <button className="nav-button">About</button>
          <button className="nav-button">How it Works</button>
          <button className="nav-button nav-button-primary">Contact</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
