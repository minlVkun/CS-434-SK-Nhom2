import { useState } from 'react';
import '../App.css';
import './CartConfirmation.css';
function CartConfirmation({ item, onBack, onConfirm }) {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (amount) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  const totalPrice = item.price * quantity;

  return (
    <div className="cart-confirmation">
      <div className="confirmation-container">
        
        {/* LEFT SIDE - Product Images */}
        <div className="left-side">
          <div className="thumbnail-list">
            {[item.image, item.image, item.image].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`thumb-${i}`}
                className="thumb"
              />
            ))}
          </div>
          <img src={item.image} alt="main" className="main-image" />
        </div>

        {/* RIGHT SIDE - Confirmation Details */}
        <div className="right-side">
          <h2>Tên mặt hàng</h2>
          <h3>{item.name}</h3>
          
          <div className="rating-stars">
            {[1, 2, 3, 4, 5].map((i) => (
              <span key={i} style={{ color: i <= 4 ? '#000000' : '#ccc' }}>★</span>
            ))}
            <span>(3)</span>
          </div>
          
          <div className="price-display">
            <span className="current-price">{item.price.toLocaleString()} đ</span>
          </div>

          <div className="viewers">
            <span>👁 24 người</span>
          </div>

          <div className="time-left">
            <span>Thời gian</span>
            <span>Chỉ còn 9 sản phẩm</span>
          </div>

          <div className="variant-section">
            <label>Phiên bản</label>
            <div className="variant-buttons">
              <button className="variant selected">1</button>
              <button className="variant">2</button>
            </div>
          </div>

          <div className="quantity-section">
            <label>Số lượng</label>
            <div className="quantity-control">
              <button onClick={() => handleQuantityChange(-1)}>-</button>
              <input type="number" value={quantity} readOnly />
              <button onClick={() => handleQuantityChange(1)}>+</button>
            </div>
          </div>

          <div className="action-buttons">
            <button className="delivery-btn">📦 Giao hàng trong ngày</button>
            <button className="discount-btn">💰 Giảm giá và miễn phí vận chuyển</button>
          </div>

          <div className="total-section">
            <div className="total-row">
              <span>Tổng:</span>
              <span className="total-price">{totalPrice.toLocaleString()} đ</span>
            </div>
            <div className="quantity-summary">
              <span>Phiên bản: {item.version}</span>
              <span>Số lượng: {quantity}</span>
            </div>
          </div>

          <button 
            className="confirm-add-to-cart"
            onClick={() => onConfirm({ ...item, quantity, totalPrice })}
          >
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartConfirmation;