// src/Cart.js
import React, { useState } from 'react';
import './Cart.css';

function Cart() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Tên Sản Phẩm',
      price: 599000,
      quantity: 1,
      selected: true,
      image: 'https://via.placeholder.com/100', 
    },
  ]);

  const handleQuantityChange = (id, amount) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const handleSelect = (id) => {
     setItems(prev =>
             prev.map(item =>
               item.id === id ? { ...item, selected: !item.selected } : item
             )
         );
    };
  return (
    

    <div className="cart-container">
      <h2>🛒 Giỏ Hàng</h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th></th>
            <th>Sản Phẩm</th>
            <th>Giá</th>
            <th>Số Lượng</th>
            <th>Tổng</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>
                <input
                    type="checkbox"
                    checked={item.selected}
                    onChange={() => handleSelect(item.id)}
                />
              </td>
              <td className="product-cell">
                <img src={item.image} alt="Product" />
                <div>
                  <div>{item.name}</div>
                  <button className="remove-btn" onClick={() => handleRemove(item.id)}>Remove</button>
                </div>
              </td>
              <td>{item.price.toLocaleString()} VNĐ</td>
              <td>
                <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
              </td>
              <td>{(item.price * item.quantity).toLocaleString()} VNĐ</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="checkout-section">
        <div className="subtotal">Tạm Tính: {subtotal.toLocaleString()} VNĐ</div>
        <button className="checkout-btn">Thanh Toán</button>
      </div>
    </div>
  );
}

export default Cart;
