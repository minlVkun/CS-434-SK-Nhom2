import { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
//import EditProduct from './EditProduct';

function ProductDetail({ productId, onBack }) {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);

  const fetchProduct = () => {
    axios.get(`http://localhost:5000/api/products`)
      .then((res) => {
        const found = res.data.find((p) => p.id === productId);
        setProduct(found);
        setRating(found?.rating || 0);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  const handleQuantityChange = (amount) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-container">
      {/* LEFT COLUMN */}
      <div className="left-column">
        <div className="thumbnail-list">
          {[product.image, product.image, product.image].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`thumb-${i}`}
              className={`thumb`}
            />
          ))}
        </div>
        <img src={product.image} alt="main" className="main-image" />
      </div>

      {/* RIGHT COLUMN */}
      <div className="right-column">
        <button onClick={onBack} style={{ marginBottom: 10 }}>← Quay lại</button>

        <h1 className="product-title">{product.name}</h1>

        <div className="rating-stars">
          {[1, 2, 3, 4, 5].map((i) => (
            <span
              key={i}
              onClick={() => setRating(i)}
              style={{ cursor: 'pointer', color: i <= rating ? '#000000' : '#ccc' }}
            >
              ★
            </span>
          ))}
        </div>

        <div className="price-row">
          <span className="price">{product.price.toLocaleString()} đ</span>
          <span className="old-price">{(product.price * 1.2).toLocaleString()} đ</span>
        </div>

        <p className="info-row">{Math.floor(Math.random() * 50 + 10)} người đã mua</p>
        <div className="discount-timer">Thời gian giảm giá còn: 00 : 05 : 59 : 47</div>
        <div className="stock">Còn lại: {product.quantity}</div>

        <div className="variant-section">
          <label>Phiên bản:</label>
          <div className="variant-buttons">
            <button className="variant selected">{product.variant}</button>
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
        <p className="promo">🎁 Giảm giá và miễn phí vận chuyển: cho đơn hàng hơn 100,000đ</p>

        {/* CHỨC NĂNG CHỈNH SỬA GIÁ
        <EditProduct
          product={product}
          onUpdated={() => fetchProduct()}
        />
        */}

      </div>
    </div>
  );
}

export default ProductDetail;
