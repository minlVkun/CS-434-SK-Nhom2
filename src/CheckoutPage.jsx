import React, { useState } from "react";
import "./CheckoutPage.css";
import productImage from "./product-image.jpg";

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    email: "",
    country: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    cardNumber: "",
    expiryDate: "",
    securityCode: "",
    coupon: "",
    paymentMethod: "Thẻ tín dụng",
  });

  const [total, setTotal] = useState(140000);
  const [hasCouponApplied, setHasCouponApplied] = useState(false);
  const [couponMessage, setCouponMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Reset khi thay đổi mã giảm giá
    if (name === "coupon") {
      setHasCouponApplied(false);
      setCouponMessage("");
      setTotal(140000);
    }
  };

  const applyCoupon = async () => {
    if (hasCouponApplied) {
      return setCouponMessage("⚠️ Mã đã được áp dụng!");
    }

    try {
      const response = await fetch("http://localhost:5000/api/checkout/apply-coupon", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ coupon: formData.coupon }),
      });

      const result = await response.json();

      if (result.success) {
        setTotal(total - result.discount);
        setHasCouponApplied(true);
        setCouponMessage("✅ Mã giảm giá đã được áp dụng!");
      } else {
        setCouponMessage("❌ " + result.message);
      }
    } catch (error) {
      console.error("Lỗi khi áp mã:", error);
      setCouponMessage("❌ Đã có lỗi xảy ra khi áp dụng mã.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.cardNumber) {
      return alert("Vui lòng điền đầy đủ thông tin!");
    }

    const orderData = {
      ...formData,
      total: total,
    };

    try {
      const response = await fetch("http://localhost:5000/api/checkout/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message);
      } else {
        alert("Đặt hàng thất bại.");
      }
    } catch (error) {
      console.error("Lỗi gửi đơn:", error);
      alert("Đã có lỗi xảy ra khi đặt hàng.");
    }
  };

  return (
    <div className="checkout-container">
      <form onSubmit={handleSubmit} className="checkout-form">
        <div className="section-header">
          <h2 className="section-title">Kết Nối</h2>
          <p className="text-sm">
            Bạn đã có tài khoản chưa? <a href="/register" className="link">Tạo tài khoản</a>
          </p>
        </div>

        <div className="row">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="input"
            required
          />
        </div>

        <div>
          <h2 className="section-title">Giao hàng</h2>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="input"
            required
          >
            <option value="">Quốc gia / Khu vực</option>
            <option value="VN">Việt Nam</option>
          </select>
          <div className="row">
            <input type="text" name="firstName" placeholder="Tên" value={formData.firstName} onChange={handleChange} className="input-half" required />
            <input type="text" name="lastName" placeholder="Họ" value={formData.lastName} onChange={handleChange} className="input-half" required />
          </div>
          <div className="row">
            <input type="text" name="address" placeholder="Địa chỉ" value={formData.address} onChange={handleChange} className="input" required />
          </div>
          <div className="row">
            <input type="text" name="city" placeholder="Thành phố" value={formData.city} onChange={handleChange} className="input-half" required />
            <input type="text" name="postalCode" placeholder="Mã bưu điện" value={formData.postalCode} onChange={handleChange} className="input-half" required />
          </div>
          <label className="checkbox">
            <input type="checkbox" className="mr-2" />
            Lưu Thông Tin Này Để Sử Dụng Sau Này
          </label>
        </div>

        <div>
          <h2 className="section-title">Thanh toán</h2>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="input"
          >
            <option value="Thẻ tín dụng">Thẻ tín dụng</option>
            <option value="Thẻ ghi nợ">Thẻ ghi nợ</option>
            <option value="Chuyển khoản">Chuyển khoản</option>
          </select>
          <div className="row">
            <input type="text" name="cardNumber" placeholder="Số thẻ" value={formData.cardNumber} onChange={handleChange} className="input" required />
          </div>
          <div className="row">
            <input type="text" name="expiryDate" placeholder="Ngày hết hạn" value={formData.expiryDate} onChange={handleChange} className="input-half" required />
            <input type="text" name="securityCode" placeholder="Mã bảo mật" value={formData.securityCode} onChange={handleChange} className="input-half" required />
          </div>
          <label className="checkbox">
            <input type="checkbox" className="mr-2" />
            Lưu Thông Tin Này Để Sử Dụng Sau Này
          </label>
        </div>

        <button type="submit" className="submit-button">Thanh toán ngay</button>
      </form>

      <div className="order-summary">
        <div className="product-header">
          <div className="image-wrapper">
            <img src={productImage} alt="Sản phẩm" className="product-image-large" />
            <span className="badge">1</span>
          </div>
          <div>
            <h2 className="section-title">Sản Phẩm</h2>
            <p className="product-sub">Phiên bản</p>
          </div>
        </div>

        <div className="coupon-row">
          <input
            type="text"
            name="coupon"
            placeholder="Mã giảm giá"
            value={formData.coupon}
            onChange={handleChange}
            className="input"
          />
          <button onClick={applyCoupon} type="button" className="apply-button">Áp dụng</button>
        </div>

        {couponMessage && (
          <div className="coupon-message">{couponMessage}</div>
        )}

        <div className="price-breakdown">
          <div className="summary-item">
            <p>Tổng phụ</p>
            <p>100.000 VND</p>
          </div>
          <div className="summary-item">
            <p>Giao hàng</p>
            <p>40.000 VND</p>
          </div>
          <div className="summary-total">
            <p>Tổng cộng</p>
            <p>{total.toLocaleString()} VND</p>
          </div>
        </div>
      </div>
    </div>
  );
}
