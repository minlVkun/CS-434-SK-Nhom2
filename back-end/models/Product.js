const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image: String // URL ảnh sản phẩm nếu có
});

module.exports = mongoose.model('Product', productSchema);
