// src/components/EditProduct.jsx
import { useState } from 'react';
import axios from 'axios';

function EditProduct({ product, onUpdated }) {
  const [price, setPrice] = useState(product.price);
  const [saving, setSaving] = useState(false);

  const handleUpdate = async () => {
    try {
      setSaving(true);
      await axios.put(`http://localhost:5000/api/products/${product.id}`, {
        price: parseFloat(price),
      });
      alert('✅ Cập nhật thành công');
      onUpdated(); // gọi lại để reload dữ liệu
    } catch (err) {
      console.error(err);
      alert('❌ Có lỗi xảy ra');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div style={{ marginTop: '24px' }}>
      <h3>Sửa giá sản phẩm</h3>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        style={{ padding: '8px', marginRight: '10px', width: '120px' }}
      />
      <button onClick={handleUpdate} disabled={saving}>
        {saving ? 'Đang lưu...' : 'Lưu'}
      </button>
    </div>
  );
}

export default EditProduct;
