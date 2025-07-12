import React from 'react';
import './Brands.css';

const Brands: React.FC = () => {
  const brands = [
    'CHANEL',
    'LOUIS VUITTON', 
    'PRADA',
    'Calvin Klein',
    'DENIM'
  ];

  return (
    <section className="brands">
      <div className="container">
        <div className="brands-content">
          <div className="brands-list">
            {brands.map((brand, index) => (
              <div key={index} className="brand-item">
                <span className="brand-name">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;