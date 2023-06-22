import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import FadeMenu from './FadeMenu';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CustomBreadcrumb(props) {
  const breadcrumbs = [
    <NavLink underline="hover" key="1" color="black" to="/" className="text-black">
      Home
    </NavLink>,
    <Typography key="2" color="inherit">
      <span className="text-black">Products</span>
    </Typography>,
    <FadeMenu key="3" changeCategory={props.changeCategory} />,
  ];

  return (
    <Breadcrumbs separator="›" aria-label="breadcrumb">
      {breadcrumbs}
    </Breadcrumbs>
  );
}
