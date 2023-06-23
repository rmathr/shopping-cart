import React from 'react';
import { NavLink } from 'react-router-dom';
import Card from '@mui/joy/Card';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';

const EmptyCart = () => {
  return (
    <div className="w-[50%] py-[24px]">
      <div>
        <Card
          variant="outlined"
          orientation="horizontal"
          sx={{
            '&:hover': {
              boxShadow: 'md',
              borderColor: 'neutral.outlinedHoverBorder',
            },
          }}
        >
          <div className="w-full h-[45dvh] flex flex-col items-center justify-around">
            <div className="w-full flex flex-row items-center justify-center">
              <Typography
                level="h2"
                fontSize="xl"
                id="card-description"
                mb={0.5}
                sx={{ textAlign: 'center', height: 48, display: 'flex' }}
              >
                <span className="w-full text-2xl grow">
                  Your cart is empty! Click below to start shopping.
                </span>
              </Typography>
            </div>
            <Button
              size="md"
              color="primary"
              variant="solid"
              sx={{ '--Button-radius': '30px', textTransform: 'uppercase' }}
            >
              <span className="font-bold">
                <NavLink to="/products">Shop now</NavLink>
              </span>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default EmptyCart;
