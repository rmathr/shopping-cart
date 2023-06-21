import React, { useState, useEffect } from 'react';
import CartCards from './CartCards';

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

  return <div>{cart.length > 0 && productsOnCart}</div>;
};

export default Cart;
