import React from 'react';
import numeral from 'numeral';
import Card from '@mui/joy/Card';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import CardContent from '@mui/joy/CardContent';
import credit_card from '../assets/images/credit-card.png';

const Checkout = (props) => {
  return (
    <>
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
        <div className="w-full h-[45dvh] flex flex-col items-center justify-between">
          <div className="w-full flex flex-row justify-between">
            <Typography
              level="h2"
              fontSize="xl"
              id="card-description"
              mb={0.5}
              sx={{ textAlign: 'center', height: 48, display: 'flex' }}
            >
              <span className="w-full text-2xl grow">Estimated total</span>
            </Typography>
            <Typography
              level="h2"
              fontSize="xl"
              id="card-description"
              mb={0.5}
              sx={{ textAlign: 'center', height: 48, display: 'flex' }}
            >
              <span className="w-full text-2xl grow">
                {numeral(props.totalCartPrice).format('$ 0,0[.]00')}
              </span>
            </Typography>
          </div>
          <Button
            size="md"
            color="success"
            variant="solid"
            sx={{ '--Button-radius': '30px', width: '60%' }}
          >
            <span className="text-lg font-normal">Proceed to checkout</span>
          </Button>
          <div className="w-full flex flex-col items-center">
            <img src={credit_card} className="w-[70%] h-fit" />
          </div>
        </div>
      </Card>
    </>
  );
};

export default Checkout;
