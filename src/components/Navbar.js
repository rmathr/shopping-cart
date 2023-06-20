import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const Navbar = () => {
  return (
    // <BrowserRouter>
    <nav className={`${styles.navbar} pl-5 pr-5`}>
      <div className="brand">
        <p>MyBrandName</p>
      </div>
      <div className={styles.navbar_links}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/cart">
          {/* <IconButton color="primary" aria-label="view shopping cart">
            <ShoppingBagIcon />
          </IconButton> */}

          <button>cart</button>
        </NavLink>
      </div>
    </nav>
    // </BrowserRouter>
  );
};

export default Navbar;
