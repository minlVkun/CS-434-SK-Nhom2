import { useState } from 'react';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import CartConfirmation from './components/CartConfirmation';
import './App.css';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [cartConfirmation, setCartConfirmation] = useState(null); // Thêm state cho trang xác nhận

  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1></h1>

      {cartConfirmation ? (
        // Hiện trang xác nhận giỏ hàng
        <CartConfirmation 
          item={cartConfirmation} 
          onBack={() => setCartConfirmation(null)}
          onConfirm={() => {
            // Xử lý thêm vào giỏ hàng thật sự
            alert('✅ Đã thêm vào giỏ hàng!');
            setCartConfirmation(null);
            setSelectedProduct(null); // Quay về trang chủ
          }}
        />
      ) : selectedProduct ? (
        // Hiện chi tiết sản phẩm
        <ProductDetail 
          productId={selectedProduct.id} // ✅ Truyền đúng productId
          onBack={() => setSelectedProduct(null)}
          onAddToCart={(item) => setCartConfirmation(item)} // ✅ Callback khi thêm vào giỏ
        />
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