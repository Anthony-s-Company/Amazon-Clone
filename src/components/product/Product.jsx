/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link } from "react-router-dom";
import './Product.css'
import StarsRating from '../StarsRating'
import "bootstrap/dist/css/bootstrap.min.css";
import { getStorageValues, setStorageValues } from '../../utils/localStorage';

export default function Product({ id, title, category, price, image, rating, description, setItemsOnCar, username }) {
  const [hasPrime] = useState(Math.random() < 0.5)

  const handleAddClick = () => {
    let listCart = []
    let updatedValue = {};
    let items = 0

    getStorageValues(username) ? listCart = getStorageValues(username) : listCart = []
    updatedValue = {
      "user": username,
      "title": title, 
      "qty": 1,
      "price": price,
      'image': image,
      'description': description,
      'id': id,
      'category': category,
      'rating':rating
    };
    listCart = [...listCart, updatedValue]
    setStorageValues(username, listCart)

    for (const item of listCart) {
      items += item['qty']

    }
    setItemsOnCar(items)
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
          <StarsRating rating={rating} />
        </div>
        <span className="descrip_product">{description}</span>

        {hasPrime && (
          <div>
            <p className="prime">FREE Next-Day Delivery</p>
          </div>
        )}
        <button title='add item to Basket' onClick={handleAddClick}>Add to Basket</button>
      </div>
    </>
  );
}