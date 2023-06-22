import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import numeral from 'numeral';
import Rating from '@mui/material/Rating';

import '@fontsource/roboto/400.css';

export default function MediaCard(props) {
  const data = { ...props.data };

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (!isClicked) {
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
    <Card sx={{ width: '100%', padding: '24px' }} className="flex flex-col">
      <div className="w-full flex flex-col items-center justify-center h-64">
        <CardMedia
          sx={{ width: 150, height: 'auto' }}
          className="w-full"
          component="img"
          image={data.image}
          title={data.title}
        />
      </div>

      <CardContent>
        <div className="flex flex-col items-center w-full h-[100px]">
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ textAlign: 'center', height: 48, display: 'flex', color: 'black' }}
          >
            <span className="w-full text-sm grow">{data.title}</span>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <span className="text-xl font-bold text-black">
              {numeral(data.price).format('0,0[.]00 $')}
            </span>
          </Typography>
          <div className="flex flex-row items-center justify-center w-full">
            <Rating
              name="half-rating-read"
              value={data.rating.rate}
              precision={0.1}
              readOnly
            />
            <Typography variant="body2">
              <span className="text-black">{data.rating.count}</span>
            </Typography>
          </div>
        </div>
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
