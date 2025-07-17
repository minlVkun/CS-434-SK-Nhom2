
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();


app.use(cors());
app.use(bodyParser.json());


mongoose.connect('mongodb://127.0.0.1:27017/shop-cart', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Đã kết nối MongoDB'))
.catch(err => console.error('❌ Lỗi kết nối MongoDB:', err));

const Product = require('./models/Product');


app.get('/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.post('/products', async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.json({ message: 'Đã thêm sản phẩm', product: newProduct });
});


const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Backend đang chạy tại http://localhost:${PORT}`));
