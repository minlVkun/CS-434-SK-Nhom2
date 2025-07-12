import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>FASCO</h1>
          </div>
          
          <nav className="main-nav">
            <ul className="nav-list">
              <li><a href="#home">Trang chủ</a></li>
              <li><a href="#products">Giảm giá sản phẩm mới</a></li>
              <li><a href="#store">Cửa hàng</a></li>
              <li><a href="#login">Đăng nhập</a></li>
            </ul>
          </nav>
          
          <div className="header-actions">
            <button className="login-btn">Đăng ký</button>
            <div className="cart-icon">
              <span className="cart-count">0</span>
              🛒
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;