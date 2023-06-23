import React, { useState, Suspense } from 'react';
const MediaCard = React.lazy(() => import('./MediaCard'));
import CustomBreadcrumb from './CustomBreadcrumb';
import Loading from './Loading';

const Products = (props) => {
  const [category, setCategory] = useState('all');
  const products = [...props.products];

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
        <Suspense fallback={<Loading />}>
          <div className="flex flex-col w-full items-start justify-start">
            <h1 className="text-4xl py-6 text-black">Shop</h1>
            <CustomBreadcrumb changeCategory={changeCategory} />
          </div>
          <section className="grid grid-cols-3 w-full gap-6 justify-stretch pt-6">
            {cards}
          </section>
        </Suspense>
      </div>
    </div>
  );
};

export default Products;
