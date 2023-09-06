/* eslint-disable react/prop-types */
import { useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import './Product.css'
import StarsRating from '../StarsRating'
import "bootstrap/dist/css/bootstrap.min.css";

export default function Product({id, title, category, price, image, rating, description}) {
  const [hasPrime] = useState(Math.random() < 0.5)

  const handleAddClick = () => {
    console.log("cosa")
  };

  return (
    <>
      <div className='product'>
        <p className="product_category">{category}</p>
          <img className='img_product' src={image} alt='' />

          <Link title='Details' to={`/details/${id}`}>
            <div className='product__info'>
                <p>{title}</p>
            </div>
          </Link>
    
          <p className='product__price'>
              <small>$</small>
              <strong>{price}</strong>
          </p>
          <div className='product__rating'>
              <StarsRating rating={rating}/>
          </div>
          <span className="descrip_product">{description}</span>

          {hasPrime && (
              <div>
                  <p className="prime">FREE Next-Day Delivery</p>
              </div>
          )}
          <button title='add item to Basket'onClick={handleAddClick}>Add to Basket</button>
      </div>
    </>
  );
}