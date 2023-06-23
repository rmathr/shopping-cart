import React, { useState, useEffect } from 'react';
import CartCards from './CartCards';
import numeral from 'numeral';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Checkout from './Checkout';

const Cart = (props) => {
  const cart = [...props.cart];
  let productsOnCart = cart.map((item) => (
    <CartCards
      key={item.id}
      cart={item}
      changeQty={props.changeQty}
      removeProduct={props.removeProduct}
    />
  ));

  let totalCartPrice = cart.reduce((prev, curr) => prev + curr.price * curr.qty, 0);
  let totalItems = cart.reduce((prev, curr) => prev + curr.qty, 0);
  return (
    <div className="w-full h-[90dvh] flex flex-col items-center overflow-auto">
      <div className="w-[90%] flex flex-row items-center justify-between py-[24px]">
        <div className="w-[55%]">
          {cart.length > 0 && (
            <div className=" pr-5">
              <div className="pb-[48px] font-bold flex flex-row justify-between">
                <p>Your shopping Cart</p>
                <p>
                  {totalItems} {totalItems < 2 ? 'item' : 'items'}
                </p>
              </div>

              {productsOnCart}
            </div>
          )}
        </div>
        <div className="w-[40%]  self-start">
          {cart.length > 0 && (
            <Checkout totalCartPrice={totalCartPrice} />
            // <Card
            //   variant="outlined"
            //   orientation="horizontal"
            //   sx={{
            //     '&:hover': {
            //       boxShadow: 'md',
            //       borderColor: 'neutral.outlinedHoverBorder',
            //     },
            //   }}
            // >
            //   <div className="w-full h-[40dvh] flex flex-col items-center">
            //     {/* {border border-black} */}
            //     <p>Total: {numeral(totalCartPrice).format('0,0[.]00 $')}</p>
            //   </div>
            // </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
