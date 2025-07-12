import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Countdown from './components/Countdown';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Brands />
      <Countdown />
      <Products />
    </div>
  );
}

export default App;
