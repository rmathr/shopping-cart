import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Products from './Products';
import About from './About';

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        {/* <BrowserRouter> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {/* </BrowserRouter> */}
      </>
    );
  }
}

export default App;
