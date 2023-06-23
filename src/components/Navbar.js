import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

const Navbar = (props) => {
  return (
    // <BrowserRouter>
    <nav className={`${styles.navbar} pl-5 pr-5`}>
      <NavLink to="/">
        <div className="brand flex flex-row items-center text-3xl">
          <p>TrendyHaven</p>
        </div>
      </NavLink>
      <div className={styles.navbar_links}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? `${styles.active_page}` : '')}
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? `${styles.active_page}` : '')}
        >
          Products
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? `${styles.active_page}` : '')}
        >
          About
        </NavLink>
        <NavLink to="/cart">
          <Badge badgeContent={props.cart.length} color="primary">
            <IconButton
              color="primary"
              aria-label="view shopping cart"
              style={{ padding: 0, color: 'white' }}
            >
              <ShoppingBagIcon style={{ width: 30, height: 'auto' }} />
            </IconButton>
          </Badge>

          {/* <button>cart</button> */}
        </NavLink>
      </div>
    </nav>
    // </BrowserRouter>
  );
};

export default Navbar;
