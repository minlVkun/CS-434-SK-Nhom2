import { useState } from 'react';
import axios from 'axios';

function AddProduct() {
  const [form, setForm] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
    rating: 0,
    variant: 1,
    quantity: 1
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/products', {
        ...form,
        price: parseFloat(form.price),
        rating: parseInt(form.rating),
        variant: parseInt(form.variant),
        quantity: parseInt(form.quantity)
      });
      alert('✔️ Thêm sản phẩm thành công!');
    } catch (err) {
      console.error(err);
      alert('❌ Lỗi khi thêm sản phẩm');
    }
  };

  return (
    <div style={{ padding: 24 }}>
      <h2>➕ Thêm sản phẩm</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 400 }}>
        <input type="text" name="name" placeholder="Tên sản phẩm" onChange={handleChange} required />
        <input type="number" name="price" placeholder="Giá" onChange={handleChange} required />
        <input type="text" name="description" placeholder="Mô tả" onChange={handleChange} />
        <input type="text" name="image" placeholder="Link ảnh (ví dụ /images.png)" onChange={handleChange} />
        <input type="number" name="rating" placeholder="Đánh giá (sao)" onChange={handleChange} min="0" max="5" />
        <input type="number" name="variant" placeholder="Phiên bản" onChange={handleChange} min="1" />
        <input type="number" name="quantity" placeholder="Số lượng" onChange={handleChange} min="1" />

        <button type="submit">Thêm sản phẩm</button>
      </form>
    </div>
  );
}

export default AddProduct;
