import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <p>Home</p>
      <p className={`text-white ${styles.home_text}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <NavLink to="/products" className="rounded-full bg-white p-2 pl-6 pr-6">
        Shop
      </NavLink>
    </div>
  );
};

export default Home;
