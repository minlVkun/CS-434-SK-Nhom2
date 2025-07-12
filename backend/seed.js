const sequelize = require('./sequelize');
const Product = require('./models/Product');

async function seed() {
  await sequelize.sync({ force: true });
  await Product.bulkCreate([
    {
      name: 'Áo thun tay ngắn',
      price: 49000,
      description: 'Áo thun cotton co giãn thoải mái',
      image: '/images.png',
      rating: 4,
      variant: 1,
      quantity: 9
    },
    {
      name: 'Áo hoodie unisex',
      price: 99000,
      description: 'Hoodie ấm áp cho mùa đông',
      image: '/images.png',
      rating: 5,
      variant: 2,
      quantity: 15
    }
    
  ]);
  console.log('✅ Seed xong!');
  process.exit();
}

seed();
