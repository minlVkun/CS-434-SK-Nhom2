import React, { useState, useEffect } from 'react';
import './Countdown.css';

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date (30 days from now)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown">
      <div className="container">
        <div className="countdown-content">
          <div className="countdown-left">
            <h2 className="countdown-title">Ưu đãi của tháng</h2>
            <p className="countdown-subtitle">
              Nhận ưu đãi lên đến 50% cho các sản phẩm 
              thời trang hàng hiệu, cơ hội hiếm hoi trong năm
              <br />
              Nhanh tay, trước khi quá muộn!
            </p>
            <div className="countdown-timer">
              <div className="time-unit">
                <span className="time-number">{String(timeLeft.days).padStart(2, '0')}</span>
                <span className="time-label">Ngày</span>
              </div>
              <div className="time-unit">
                <span className="time-number">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="time-label">Giờ</span>
              </div>
              <div className="time-unit">
                <span className="time-number">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="time-label">Phút</span>
              </div>
              <div className="time-unit">
                <span className="time-number">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="time-label">Giây</span>
              </div>
            </div>
          </div>
          
          <div className="countdown-right">
            <div className="featured-products">
              <div className="product-item">
                <div className="product-image">
                  <div className="product-frame">
                    <div className="product-content">
                      🏔️
                      <div className="product-sun">☀️</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-item">
                <div className="product-image">
                  <div className="product-frame">
                    <div className="product-content">
                      🏔️
                      <div className="product-sun">☀️</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-item">
                <div className="product-image">
                  <div className="product-frame">
                    <div className="product-content">
                      🏔️
                      <div className="product-sun">☀️</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;