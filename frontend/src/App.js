import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import UploadSection from './components/UploadSection';
import ResultsSection from './components/ResultsSection';
import InfoSection from './components/InfoSection';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [showUpload, setShowUpload] = useState(false);

  const handlePrediction = (predictionResult, imageUrl) => {
    setResult(predictionResult);
    setUploadedImage(imageUrl);
  };

  const handleReset = () => {
    setResult(null);
    setUploadedImage(null);
    setLoading(false);
    setShowUpload(false);
  };

  const handleGetStarted = () => {
    setShowUpload(true);
  };

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        {!result ? (
          <>
            {!showUpload ? (
              <>
                <HeroSection onGetStarted={handleGetStarted} />
                <AboutSection />
              </>
            ) : (
              <div className="container">
                <div className="upload-page">
                  <button className="back-button" onClick={() => setShowUpload(false)}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Back to Home
                  </button>
                  <UploadSection 
                    onPrediction={handlePrediction}
                    loading={loading}
                    setLoading={setLoading}
                  />
                </div>
              </div>
            )}
            <InfoSection />
            <FeaturesSection />
            <TestimonialsSection />
            <ContactSection />
          </>
        ) : (
          <div className="container">
            <ResultsSection 
              result={result}
              imageUrl={uploadedImage}
              onReset={handleReset}
            />
          </div>
        )}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
