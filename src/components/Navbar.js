import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    // <BrowserRouter>
    <div className={styles.navbar}>
      <div className="brand">
        <p>MyBrandName</p>
      </div>
      <div className={styles.navbar_links}>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <button>cart</button>
      </div>
    </div>
    // </BrowserRouter>
  );
};

export default Navbar;
