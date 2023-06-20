import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Products from './Products';
import About from './About';
import Cart from './Cart';

const App = () => {
  const [cart, setCart] = useState([]);

  const cartItem = {
    item: {},
    qty: null,
  };

  const addToCart = (obj) => {
    if (obj.isClicked) {
      setCart(cart.concat(obj));
    }
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <>
      <Navbar />
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      {/* </BrowserRouter> */}
    </>
  );
};

export default App;
