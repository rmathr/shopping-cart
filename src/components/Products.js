import React, { useState, useEffect, Suspense } from 'react';
// import MediaCard from './MediaCard';
const MediaCard = React.lazy(() => import('./MediaCard'));
import FadeMenu from './FadeMenu';

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
  const [category, setCategory] = useState('all');

  const increaseCount = () => {
    setCount(count + 1);
  };

  const changeCategory = (category) => {
    console.log(category);
    typeof category === 'object' ? setCategory('all') : setCategory(category);
  };

  let filteredProducts = [];

  switch (category) {
    case 'all':
      filteredProducts = products.filter((product) => product.category != 'electronics');
      break;
    case "men's clothing":
      filteredProducts = products.filter(
        (product) => product.category == "men's clothing"
      );
      break;
    case 'jewelery':
      filteredProducts = products.filter((product) => product.category == 'jewelery');
      break;
    case "women's clothing":
      filteredProducts = products.filter(
        (product) => product.category == "women's clothing"
      );
      break;
  }

  let cards = filteredProducts.map((product) => (
    <MediaCard key={product.id} data={product} addToCart={props.addToCart} />
  ));

  return (
    <div className="w-full h-[90dvh] flex flex-col items-center overflow-auto">
      <div className="w-[90%] border flex flex-col items-center">
        <Suspense fallback={<p>Loading...</p>}>
          <h1>Shop</h1>
          <FadeMenu changeCategory={changeCategory} />

          <section className="grid grid-cols-3 gap-3 justify-items-center">
            {cards}
            {/* <MediaCard
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
              image={products[14].image}
              data={products[14]}
              addToCart={props.addToCart}
            />
            <MediaCard
              increaseCount={increaseCount}
              image={products[15].image}
              data={products[15]}
              addToCart={props.addToCart}
            />
            <MediaCard
              increaseCount={increaseCount}
              image={products[16].image}
              data={products[16]}
              addToCart={props.addToCart}
            />
            <MediaCard
              increaseCount={increaseCount}
              image={products[17].image}
              data={products[17]}
              addToCart={props.addToCart}
            />
            <MediaCard
              increaseCount={increaseCount}
              image={products[18].image}
              data={products[18]}
              addToCart={props.addToCart}
            />
            <MediaCard
              increaseCount={increaseCount}
              image={products[19].image}
              data={products[19]}
              addToCart={props.addToCart}
            /> */}
          </section>
        </Suspense>
      </div>
    </div>
  );
};

export default Products;
