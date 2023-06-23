import React, { useState, useEffect, Suspense } from 'react';
// import MediaCard from './MediaCard';
const MediaCard = React.lazy(() => import('./MediaCard'));
import FadeMenu from './FadeMenu';
import CustomBreadcrumb from './CustomBreadcrumb';

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
  //   const products = [...props.products];

  const increaseCount = () => {
    setCount(count + 1);
  };

  const changeCategory = (selectedCategory) => {
    console.log(selectedCategory);
    typeof selectedCategory === 'object'
      ? setCategory(category)
      : setCategory(selectedCategory);
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
    <MediaCard
      key={product.id}
      data={product}
      addToCart={props.addToCart}
      changeQty={props.changeQty}
      cart={props.cart}
      clickProduct={props.clickProduct}
      className="justify-stretch"
    />
  ));

  return (
    <div className="w-full h-[90dvh] flex flex-col items-center overflow-auto">
      <div className="w-[90%] flex flex-col items-center py-[24px]">
        <Suspense fallback={<p>Loading...</p>}>
          <div className="flex flex-col w-full items-start justify-start">
            <h1 className="text-4xl py-6 text-black">Shop</h1>
            <CustomBreadcrumb changeCategory={changeCategory} />
          </div>

          {/* <FadeMenu changeCategory={changeCategory} /> */}

          <section className="grid grid-cols-3 w-full gap-6 justify-stretch pt-6">
            {cards}
          </section>
        </Suspense>
      </div>
    </div>
  );
};

export default Products;
