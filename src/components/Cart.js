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

  let totalCartPrice = cart.reduce((prev, curr) => prev + curr.price * curr.qty, 0);

  return (
    <div>
      {cart.length > 0 && <div>{productsOnCart}</div>}

      <p>Total: {totalCartPrice}</p>
    </div>
  );
};

export default Cart;
