const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/apply-coupon", (req, res) => {
  const { coupon } = req.body;
  if (coupon === "DISCOUNT10") {
    return res.json({ success: true, discount: 10000 });
  } else {
    return res.json({ success: false, message: "Mã không hợp lệ" });
  }
});

router.post("/submit", (req, res) => {
  const data = req.body;
  const query = `
    INSERT INTO orders
    (email, country, firstName, lastName, address, city, postalCode, cardNumber, expiryDate, securityCode, totalAmount)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [
    data.email,
    data.country,
    data.firstName,
    data.lastName,
    data.address,
    data.city,
    data.postalCode,
    data.cardNumber,
    data.expiryDate,
    data.securityCode,
    data.total,
  ];
  db.query(query, values, (err, result) => {
    if (err) return res.status(500).json({ message: "Lỗi lưu đơn hàng" });
    res.json({ message: "Đặt hàng thành công!" });
  });
});

module.exports = router;
