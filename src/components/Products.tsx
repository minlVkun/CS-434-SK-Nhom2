import React from 'react';
import './Products.css';

const Products: React.FC = () => {
  return (
    <section className="products">
      <div className="container">
        <div className="products-content">
          <div className="cart-widget">
            <div className="cart-icon-large">
              🛒
              <span className="cart-number">14</span>
            </div>
            <div className="scroll-indicator">
              ↑
            </div>
          </div>
          
          <div className="products-grid">
            <div className="product-card">
              <div className="product-image-container">
                <div className="product-frame">
                  <div className="product-visual">
                    🏔️
                    <div className="visual-sun">☀️</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="product-card">
              <div className="product-image-container">
                <div className="product-frame">
                  <div className="product-visual">
                    🏔️
                    <div className="visual-sun">☀️</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="product-card large">
              <div className="product-image-container">
                <div className="product-frame">
                  <div className="product-visual">
                    🏔️
                    <div className="visual-sun">☀️</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pagination-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;