import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import snowball from '../assets/images/snowball.PNG';

export default function MediaCard(props) {
  const data = { ...props.data };

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (!isClicked) {
      props.increaseCount();
      setIsClicked(true);
    }
  };

  useEffect(() => {
    if (isClicked) {
      let cartObj = { ...data, isClicked: isClicked, qty: 1 };
      props.addToCart(cartObj);
      console.log(cartObj);
    }
  }, [isClicked]);

  return (
    <Card sx={{ maxWidth: 345 }} className="flex flex-col">
      <div className="w-full flex flex-col items-center">
        <CardMedia
          sx={{ width: 150, height: 'auto' }}
          className="w-full justify-self-center"
          component="img"
          image={data.image}
          title="green iguana"
        />
      </div>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species,
          ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions className="flex justify-center">
        <Button
          size="small"
          variant="contained"
          startIcon={<ShoppingCartIcon />}
          color="success"
          onClick={handleClick}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
