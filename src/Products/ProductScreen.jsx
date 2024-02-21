import React from 'react';
import "./ProductScreen.css"

const productsArr = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  }
];

const ProductScreen = () => {
  return (
    <div className="product">
      {productsArr.map((product, index) => (
        <div key={index} className="product-item">
          <h3>{product.title}</h3>
          <div className="product-item-content">
            <img src={product.imageUrl} alt={product.title} />
            <div>
              <p>${product.price}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductScreen;
