import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    // <BrowserRouter>
    <nav className={styles.navbar}>
      <div className="brand">
        <p>MyBrandName</p>
      </div>
      <div className={styles.navbar_links}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/about">About</NavLink>
        <button>cart</button>
      </div>
    </nav>
    // </BrowserRouter>
  );
};

export default Navbar;
