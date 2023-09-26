/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link } from "react-router-dom";
import './Product.css'
import StarsRating from '../StarsRating'
import "bootstrap/dist/css/bootstrap.min.css";
import { setStorageValues } from '../../utils/localStorage';
import { ToastContainer, toast } from 'react-toastify';
import { countItemOnCar, updateItemOnCar } from '../../utils/helper';

export default function Product({ id, title, category, price, image, rating, description, setItemsOnCar, username }) {
  const [hasPrime] = useState(Math.random() < 0.5)

  const handleAddClick = () => {
    let dictCart = {}

    dictCart = updateItemOnCar(username, title, 1, price, image, description, id, category, rating)
    setStorageValues(username, dictCart)
    setItemsOnCar(countItemOnCar(dictCart))

    toast.success('Items added successfully ', {
      position: "top-center",
      autoClose: 1500,
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