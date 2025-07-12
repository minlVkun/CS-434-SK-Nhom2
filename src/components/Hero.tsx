import React, { useState } from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const [showSingleImage, setShowSingleImage] = useState(false);

  const handleButtonClick = () => {
    setShowSingleImage(!showSingleImage);
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-image">
              <div className="image-placeholder">
                <div className="image-frame">
                  <div className="image-content">
                    🏔️
                    <div className="sun-icon">☀️</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hero-center">
            <div className="hero-text">
              <h1 className="hero-title">
                ULTIMATE
                <span className="sale-text">SALE</span>
              </h1>
              <p className="hero-subtitle">NEW COLLECTION</p>
              <button className="shop-now-btn" >
                Nhấn Vào
              </button>
            </div>
            
            {showSingleImage ? (
              <div className="hero-images-stack">
                <div className="image-stack single-image-display">
                  <div className="stacked-image single">
                    <div className="small-image">
                      🏔️
                      <div className="small-sun">☀️</div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          
          <div className="hero-right">
            <div className="hero-image">
              <div className="image-placeholder">
                <div className="image-frame">
                  <div className="image-content">
                    🏔️
                    <div className="sun-icon">☀️</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;