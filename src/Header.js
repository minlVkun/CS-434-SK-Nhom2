// src/Header.js
import React from 'react';
import './Header.css';
import { FaSearch, FaUser, FaStar, FaShoppingCart } from 'react-icons/fa';

function Header() {
  return (
    <header className="header">
      <div className="logo">S2KWS</div>
      <nav className="nav-menu">
        <a href="#">Trang chủ</a>
        <a href="#">Cửa hàng</a>
        <a href="#">Sản phẩm</a>
        <a href="#">Trang ▾</a>
      </nav>
      <div className="nav-icons">
        <FaSearch className="icon" />
        <FaUser className="icon" />
        <FaStar className="icon" />
        <div className="cart-icon">
          <FaShoppingCart className="icon" />
          <span className="cart-count">1</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
