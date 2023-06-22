import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

export default function FadeMenu(props) {
  const [title, setTitle] = React.useState('All');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    // props.changeCategory('all');
    setAnchorEl(event.currentTarget);
    // console.log(event.currentTarget);
  };
  const handleClose = (category) => {
    props.changeCategory(category);
    setAnchorEl(null);

    typeof category === 'object' ? setTitle('All') : setTitle(category);
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {title}
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={() => handleClose('all')}>All</MenuItem>
        <MenuItem onClick={() => handleClose('jewelery')}>Jewelery</MenuItem>
        <MenuItem onClick={() => handleClose("men's clothing")}>Men's Clothing</MenuItem>
        <MenuItem onClick={() => handleClose("women's clothing")}>
          Women's Clothing
        </MenuItem>
      </Menu>
    </div>
  );
}
