/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { getStorageValues, setStorageValues } from '../../utils/localStorage';
import Button from '@mui/material/Button';
import './Checkout.css'
import shopImg from '../../assets/shop.png'

function Checkout() {

  useEffect(() => {


  }, []);

  return (
    <>
      <div className="Cart">
        <div className="price-card flex ">
          <img src={shopImg} alt="" className="img" />
          <div>
            <h1>Thanks for buy on SkyGlobe </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout; 