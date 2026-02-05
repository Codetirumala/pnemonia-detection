import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import UploadSection from './components/UploadSection';
import ResultsSection from './components/ResultsSection';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handlePrediction = (predictionResult, imageUrl) => {
    setResult(predictionResult);
    setUploadedImage(imageUrl);
  };

  const handleReset = () => {
    setResult(null);
    setUploadedImage(null);
    setLoading(false);
  };

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <div className="container">
          {!result ? (
            <>
              <div className="hero-section">
                <h1 className="hero-title">
                  AI-Powered Pneumonia Detection
                </h1>
                <p className="hero-subtitle">
                  Advanced chest X-ray analysis using deep learning technology
                  for rapid and accurate pneumonia detection
                </p>
              </div>
              <UploadSection 
                onPrediction={handlePrediction}
                loading={loading}
                setLoading={setLoading}
              />
              <InfoSection />
            </>
          ) : (
            <ResultsSection 
              result={result}
              imageUrl={uploadedImage}
              onReset={handleReset}
            />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
