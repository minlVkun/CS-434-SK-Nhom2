import { useState } from 'react';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
// import AddProduct from './components/AddProduct'; // <- Có thể giữ lại hoặc comment
import './App.css';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1></h1>

      {selectedProduct ? (
        // Chỉ hiện ProductDetail, nút quay lại nằm bên trong nó
        <ProductDetail productId={selectedProduct.id} onBack={() => setSelectedProduct(null)} />
      ) : (
        <>

          {/* 
          CHỨC NĂNG THÊM SẢN PHẨM
          <button onClick={() => setShowAddForm(!showAddForm)} style={{ marginBottom: 12 }}>
            {showAddForm ? 'Ẩn form thêm sản phẩm' : '➕ Thêm sản phẩm mới'}
          </button>

          {showAddForm && <AddProduct />} 
          */}

          <ProductList onSelectProduct={(product) => setSelectedProduct(product)} />
        </>
      )}
    </div>
  );
}

export default App;
