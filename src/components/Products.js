import React, { useState } from 'react';
import MediaCard from './MediaCard';

async function getShopData() {
  let url = 'https://fakestoreapi.com/products';
  let response = await fetch(url);
  let data = await response.json();
  return data;
}

const products = await getShopData();
console.log(products);

const Products = (props) => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="w-full h-[93dvh] flex flex-col items-center">
      <div className="w-[90%]">
        <p>Products {count}</p>
        <section className="grid grid-cols-3 gap-3 justify-items-center">
          <MediaCard
            increaseCount={increaseCount}
            image={products[0].image}
            data={products[0]}
            addToCart={props.addToCart}
          />
          <MediaCard
            increaseCount={increaseCount}
            image={products[1].image}
            data={products[1]}
            addToCart={props.addToCart}
          />
          <MediaCard
            increaseCount={increaseCount}
            image={products[2].image}
            data={products[2]}
            addToCart={props.addToCart}
          />
          <MediaCard
            increaseCount={increaseCount}
            image={products[3].image}
            data={products[3]}
            addToCart={props.addToCart}
          />
          <MediaCard
            increaseCount={increaseCount}
            image={products[4].image}
            data={products[4]}
            addToCart={props.addToCart}
          />
          <MediaCard
            increaseCount={increaseCount}
            image={products[5].image}
            data={products[5]}
            addToCart={props.addToCart}
          />
          <MediaCard
            increaseCount={increaseCount}
            image={products[6].image}
            data={products[6]}
            addToCart={props.addToCart}
          />
          <MediaCard
            increaseCount={increaseCount}
            image={products[7].image}
            data={products[7]}
            addToCart={props.addToCart}
          />
          <MediaCard
            increaseCount={increaseCount}
            image={products[8].image}
            data={products[8]}
            addToCart={props.addToCart}
          />
        </section>
      </div>
    </div>
  );
};

export default Products;
