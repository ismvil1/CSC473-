import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Cart from './components/Cart';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart(prev => {
      const found = prev.find(i => i.name === item.name);
      if (found) {
        return prev.map(i => i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i);
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (index) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <Router>
      <Header />
      <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Menu addToCart={addToCart} />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu addToCart={addToCart} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
