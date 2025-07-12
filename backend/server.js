const express = require('express');
const cors = require('cors');
const sequelize = require('./sequelize');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('Backend is running'));
app.use('/api/products', productRoutes);

sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log('✅ Server is running on http://localhost:5000');
  });
});
