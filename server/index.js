const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const checkoutRoutes = require("./routes/checkout");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route API
app.use("/api/checkout", checkoutRoutes);

// Route test: kiểm tra backend
app.get("/", (req, res) => {
  res.send("✅ Backend đang chạy!");
});

// Khởi động server
app.listen(PORT, () => {
  console.log(`🚀 Server đang chạy tại http://localhost:${PORT}`);
});
