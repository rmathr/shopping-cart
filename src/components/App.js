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

  const changeQty = (id, increment) => {
    setCart(
      cart.map((element) => {
        if (element.id === id) {
          increment ? (element.qty = element.qty + 1) : (element.qty = element.qty - 1);
        }
        return element;
      })
    );
  };

  const removeProduct = (id) => {
    setCart(
      cart.filter((element) => {
        if (element.id != id) {
          return element;
        }
      })
    );
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
        <Route
          path="/cart"
          element={
            <Cart cart={cart} changeQty={changeQty} removeProduct={removeProduct} />
          }
        />
      </Routes>
      {/* </BrowserRouter> */}
    </>
  );
};

export default App;
