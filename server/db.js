const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin123",       // ← điền mật khẩu nếu có
  database: "checkoutdb",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("✅ Kết nối MySQL thành công!");
});

module.exports = connection;
