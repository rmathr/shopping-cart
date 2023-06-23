import React from 'react';
import CartCards from './CartCards';
import Checkout from './Checkout';
import EmptyCart from './EmptyCart';

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
      {cart.length === 0 && <EmptyCart />}
      <div className="w-[90%] flex flex-row items-center justify-between py-[24px]">
        <div className="w-[55%]">
          {cart.length > 0 && (
            <div className="">
              <div className="pb-[48px] font-bold flex flex-row justify-between text-2xl">
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
            <Checkout
              totalCartPrice={totalCartPrice}
              handleCheckout={props.handleCheckout}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
