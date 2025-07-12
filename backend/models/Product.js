const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');


const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  image: {
    type: DataTypes.STRING // đường dẫn ảnh
  },
  rating: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  variant: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  }
});

module.exports = Product;