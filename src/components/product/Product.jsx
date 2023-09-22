/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link } from "react-router-dom";
import './Product.css'
import StarsRating from '../StarsRating'
import "bootstrap/dist/css/bootstrap.min.css";
import { getStorageValues, setStorageValues } from '../../utils/localStorage';
import { ToastContainer, toast } from 'react-toastify';

export default function Product({ id, title, category, price, image, rating, description, setItemsOnCar, username }) {
  const [hasPrime] = useState(Math.random() < 0.5)

  const handleAddClick = () => {
    let dictCart = {}
    let updatedValue = {};
    let items = 0
    let dictTmp = {}

    getStorageValues(username) ? dictCart = getStorageValues(username) : dictCart = {}
    updatedValue = {
      "user": username,
      "title": title,
      "qty": 1,
      "price": price,
      'image': image,
      'description': description,
      'id': id,
      'category': category,
      'rating': rating
    };

    if (updatedValue.id in dictCart) {
      dictTmp = dictCart[updatedValue.id]
      dictTmp.qty += updatedValue.qty
      dictCart[dictTmp]
    } else {
      dictCart[updatedValue.id] = updatedValue
    }

    setStorageValues(username, dictCart)

    for (let k in dictCart) {
      items += dictCart[k].qty
    }

    setItemsOnCar(items)
    toast.success('Items added successfully ', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
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