import { useState } from 'react';
import './App.css';

function App() {
  const thumbs = ['/images.png', '/images.png', '/images.png'];
  const [selectedImage, setSelectedImage] = useState('/images.png'); // State ảnh chính

  const [rating, setRating] = useState(3);
  const [variant, setVariant] = useState(1);
  const [quantity, setQuantity] = useState(1);

  const handleRatingClick = (val) => setRating(val);
  const handleQuantityChange = (amount) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  return (
    <div className="product-container">
      {/* LEFT COLUMN */}
      <div className="left-column">
        <div className="thumbnail-list">
          {thumbs.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`thumb-${i}`}
              className={`thumb ${selectedImage === src ? 'active' : ''}`}
              onClick={() => setSelectedImage(src)}
            />
          ))}
        </div>
        <img src={selectedImage} alt="main" className="main-image" />
      </div>

      {/* RIGHT COLUMN */}
      <div className="right-column">
        <div className="title-row">
          <h1 className="product-title">Tên mặt hàng</h1>
        </div>

        <div className="rating-stars">
          {[1, 2, 3, 4, 5].map((i) => (
            <span
              key={i}
              onClick={() => handleRatingClick(i)}
              style={{ cursor: 'pointer', color: i <= rating ? '#000000' : '#ccc' }}
            >
              ★
            </span>
          ))}
        </div>

        <div className="price-row">
          <span className="price">49.000đ</span>
          <span className="old-price">79.000đ</span>
        </div>

        <p className="info-row">24 người đã mua</p>
        <div className="discount-timer">Thời gian giảm giá còn: 00 : 05 : 59 : 47</div>
        <div className="stock">Chỉ còn 9 sản phẩm</div>

        <div className="variant-section">
          <label>Phiên bản:</label>
          <div className="variant-buttons">
            <button
              className={variant === 1 ? 'variant selected' : 'variant'}
              onClick={() => setVariant(1)}
            >
              1
            </button>
            <button
              className={variant === 2 ? 'variant selected' : 'variant'}
              onClick={() => setVariant(2)}
            >
              2
            </button>
          </div>
        </div>

        <div className="quantity-section">
          <label>Số lượng:</label>
          <div className="quantity-control">
            <button onClick={() => handleQuantityChange(-1)}>-</button>
            <input type="number" value={quantity} readOnly />
            <button onClick={() => handleQuantityChange(1)}>+</button>
          </div>
        </div>

        <button className="add-to-cart">Thêm vào giỏ hàng</button>
        <p className="shipping">🚚 Giao hàng trong: 25 tháng 7 - 1 tháng 8</p>
        <p className="promo">🎁 Giảm giá và miễn phí vận chuyển: cho các đơn hàng hơn 100,000đ</p>
      </div>
    </div>
  );
}

export default App;
