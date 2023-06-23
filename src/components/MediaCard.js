import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import numeral from 'numeral';
import Rating from '@mui/material/Rating';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import '@fontsource/roboto/400.css';

export default function MediaCard(props) {
  const data = { ...props.data };
  const productCart = props.cart.filter((product) => product.id == data.id);
  const isClicked = props.data.isClicked;

  const handleClick = () => {
    props.addToCart(data);
    if (!isClicked) {
      props.clickProduct(data.id, false);
    }
  };

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
              {numeral(data.price).format('$ 0,0[.]00')}
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
        {!isClicked && (
          <Button
            size="small"
            variant="contained"
            startIcon={<ShoppingCartIcon />}
            color="success"
            onClick={handleClick}
          >
            Add to Cart
          </Button>
        )}
        {isClicked && (
          <ButtonGroup aria-label="outlined button group">
            <Button
              onClick={() => props.changeQty(productCart[0]?.id, false)}
              disabled={productCart[0]?.qty < 2}
              color="success"
            >
              <RemoveIcon />
            </Button>
            <Button
              variant="outlined"
              color="success"
              sx={{ cursor: 'default', pointerEvents: 'none' }}
            >
              {productCart[0]?.qty}
            </Button>
            <Button
              color="success"
              onClick={() => props.changeQty(productCart[0]?.id, true)}
            >
              <AddIcon />
            </Button>
          </ButtonGroup>
        )}
      </CardActions>
    </Card>
  );
}
