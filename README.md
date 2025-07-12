# FASCO - Fashion E-commerce Website

## Mô tả dự án

FASCO là một website thời trang hiện đại được xây dựng bằng React TypeScript, mang phong cách sang trọng và chuyên nghiệp. Website bao gồm các tính năng chính của một cửa hàng thời trang trực tuyến.

## Tính năng chính

### 🏪 Header Navigation
- Logo FASCO nổi bật
- Menu điều hướng: Trang chủ, Giảm giá sản phẩm mới, Cửa hàng, Đăng nhập
- Nút đăng ký và giỏ hàng với số lượng sản phẩm
- Responsive design cho mobile

### 🎯 Hero Section
- Banner chính với slogan "ULTIMATE SALE"
- Kêu gọi hành động "NEW COLLECTION"
- Nút "Mua ngay" có hiệu ứng hover
- Hình ảnh sản phẩm với thiết kế độc đáo

### 🏷️ Brands Section
- Hiển thị các thương hiệu nổi tiếng: CHANEL, LOUIS VUITTON, PRADA, Calvin Klein, DENIM
- Mỗi brand có font chữ và style riêng biệt
- Hiệu ứng hover interactive

### ⏰ Countdown Section
- Đếm ngược "Ưu đãi của tháng" với timer realtime
- Hiển thị ngày, giờ, phút, giây
- Mô tả chi tiết về khuyến mãi
- Gallery sản phẩm nổi bật

### 🛍️ Products Section
- Grid layout hiển thị sản phẩm
- Widget giỏ hàng floating với counter
- Pagination dots để điều hướng
- Hover effects cho trải nghiệm tốt hơn

## Công nghệ sử dụng

- **React 18** - Library UI chính
- **TypeScript** - Type safety và better development experience
- **CSS3** - Styling với modern features (Grid, Flexbox, Gradients)
- **Responsive Design** - Tương thích mobile và desktop

## Cấu trúc thư mục

```
fasco-fashion/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.tsx & Header.css
│   │   ├── Hero.tsx & Hero.css
│   │   ├── Brands.tsx & Brands.css
│   │   ├── Countdown.tsx & Countdown.css
│   │   └── Products.tsx & Products.css
│   ├── App.tsx
│   ├── App.css
│   └── index.tsx
├── package.json
└── README.md
```

## Cài đặt và chạy dự án

### Yêu cầu hệ thống
- Node.js 14+ 
- npm hoặc yarn

### Các bước cài đặt

1. **Clone repository**
```bash
git clone <repository-url>
cd fasco-fashion
```

2. **Cài đặt dependencies**
```bash
npm install
```

3. **Chạy development server**
```bash
npm start
```

4. **Truy cập website**
```
http://localhost:3000
```

### Build cho production

```bash
npm run build
```

## Tính năng responsive

Website được thiết kế responsive với các breakpoints:
- **Desktop**: > 1200px
- **Tablet**: 768px - 1200px  
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## Tùy chỉnh

### Colors
Bạn có thể thay đổi màu sắc chính trong các file CSS:
- Primary: #333
- Secondary: #007bff
- Background: #f5f5f5

### Fonts
Website sử dụng system fonts với fallbacks tốt cho performance.

### Components
Mỗi component được thiết kế modular, dễ dàng customize và extend.

## Performance Features

- **CSS optimized** với modern properties
- **Hover effects** mượt mà
- **Animation** với CSS keyframes
- **Image optimization** với placeholder
- **Semantic HTML** cho SEO tốt

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Email: developer@fasco.com
Website: https://fasco.com

---

**Cảm ơn bạn đã sử dụng FASCO Fashion Website!** 🚀
