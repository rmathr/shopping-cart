import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Home.module.css';
import Button from '@mui/material/Button';
import Card from '@mui/joy/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/joy/Typography';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className="flex flex-col items-center text-center h-[50dvh] justify-evenly">
        <section className={styles.box}>
          <h1 className="text-5xl pb-3">Welcome to TrendyHaven!</h1>
          <p>
            Discover the ultimate online shopping experience where style meets technology,
            and elegance merges with innovation. TrendyHaven is your one-stop destination
            for fashion-forward clothing and exquisite jewelry for both men and women.
            Step into a world of endless possibilities and let us redefine your shopping
            journey.
          </p>
        </section>
        <Button variant="contained" sx={{ borderRadius: 16 }}>
          {/* <NavLink to="/products" className="rounded-full bg-white p-2 pl-6 pr-6"> */}
          <NavLink to="/products">Shop now</NavLink>
        </Button>
      </div>
    </div>
  );
};

export default Home;
