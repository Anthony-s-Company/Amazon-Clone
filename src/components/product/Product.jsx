/* eslint-disable react/prop-types */
import { useState } from 'react';
import './Product.css'
import StarsRating from '../StarsRating'
import "bootstrap/dist/css/bootstrap.min.css";

export default function Product({id, title, category, price, image}) {
  const [hasPrime] = useState(Math.random() < 0.5)
  // const addToBasket = () => {
  //   dispatch({
  //     type:"ADD_TO_BASKET",
  //     item: {
  //       id:id,
  //       title:title,
  //       price:price,
  //       image:image,
  //       rating:rating,
  //     }
  //   })
  // }

  return (
    <>
      <div className='product'>
        <p className="product_category">{category}</p>
        <img className='img_product' src={image} alt='' />
          <div className='product__info'>
              <p>{title}</p>
              <p className='product__price'>
                  <small>$</small>
                  <strong>{price}</strong>
              </p>
              <div className='product__rating'>
                  <StarsRating />
              </div>
          </div>
          {hasPrime && (
              <div>
                  <p className="prime">FREE Next-Day Delivery</p>
              </div>
          )}
          <button>Add to Basket</button>
      </div>
    </>
  );
}