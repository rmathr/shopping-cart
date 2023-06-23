import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Products from './Products';
import About from './About';
import Cart from './Cart';

async function getShopData() {
  let url = 'https://fakestoreapi.com/products';
  let response = await fetch(url);
  let data = await response.json();
  return data;
}

const products = await getShopData();

const App = () => {
  const [cart, setCart] = useState([]);
  const [storeProducts, setStoreProducts] = useState(
    products.map((product) => {
      return { ...product, isClicked: false, qty: null };
    })
  );

  //   let storeProducts = products.map((product) => {
  //     return { ...product, isClicked: false, qty: null };
  //   });
  //   console.log(storeProducts);

  const cartItem = {
    item: {},
    qty: null,
  };

  const clickProduct = (id) => {
    setStoreProducts(
      storeProducts.map((element) => {
        if (element.id === id) {
          element.isClicked = true;
        }
        return element;
      })
    );
  };

  //   const addToCart = () => {
  //     storeProducts.map((item) => {
  //       if (item.isClicked && cart.map()) {
  //         setCart(cart.concat(item));
  //       }
  //     });
  //   };

  const addToCart = (obj) => {
    const searchArray = cart?.filter((item) => {
      if (item.id === obj.id) {
        return item;
      }
    });
    if (obj.isClicked && searchArray.length === 0) {
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
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={
            <Products
              addToCart={addToCart}
              changeQty={changeQty}
              cart={cart}
              products={storeProducts}
              clickProduct={clickProduct}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/cart"
          element={
            <Cart cart={cart} changeQty={changeQty} removeProduct={removeProduct} />
          }
        />
      </Routes>
    </>
  );
};

export default App;
