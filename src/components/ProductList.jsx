import { useEffect, useState } from 'react';
import axios from 'axios';

function ProductList({ onSelectProduct }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: '24px' }}>
      <h1>Danh sách sản phẩm</h1>
      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => onSelectProduct(product)}
            style={{
              border: '1px solid #ddd',
              borderRadius: 8,
              padding: 16,
              width: 200,
              cursor: 'pointer'
            }}
          >
            <img src={product.image} alt={product.name} style={{ width: '100%' }} />
            <h3>{product.name}</h3>
            <p>{product.price.toLocaleString()} đ</p>
            <p>⭐ {product.rating}</p>
            <p>Còn lại: {product.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
