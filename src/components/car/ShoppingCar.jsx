/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { getStorageValues, setStorageValues } from '../../utils/localStorage';
import './ShoppingCar.css'
import Button from '@mui/material/Button';
import shopImg from '../../assets/shop.png'
import { objToArray, countItemOnCar } from '../../utils/helper'

function ShoppingCar({ setItemsOnCar, username }) {

  const [dictItemsCar, setDictItemsCar] = useState(getStorageValues(username));
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    setListItems(objToArray(dictItemsCar))
    setItemsOnCar(countItemOnCar(dictItemsCar))

  }, []);

  function displayCartItem(item) {
    // console.log(item)
    return (
      <div key={item.id}>
        <div className="cart-card flex">
          <div className="img">
            <img src={item.image} alt="" />
          </div>
          <div className="detail flex">
            <div className="title">{item.title}</div>
            <div className="detail">{item.description}</div>
            {item.detail}
            <div className="bold">${item.price}</div>
            <div className="title">Qty: {item.qty}</div>

            <div>
              <Button
                className="btn_shopping"
                onClick={() => { removeItem(item) }}
              >
                Remove from Cart
              </Button>
              <Button className="btn_shopping">Buy Now</Button>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }

  function removeItem(item) {

    const tmpDict = dictItemsCar

    // const newArr = listItems;

    if (item.qty > 1) {
      item.qty -= 1
      tmpDict[item.id] = item
    } else {
      delete tmpDict[item.id]
    }
    setDictItemsCar(tmpDict)
    setItemsOnCar(countItemOnCar(dictItemsCar))
    setListItems(objToArray(dictItemsCar))
    setStorageValues(username, dictItemsCar)
  }

  return (
    <>
      <div className="Cart">
        <div className="price-card flex ">
          <img src={shopImg} alt="" className="img" />
          <div>
            <h4>Shop All Items in Your Cart</h4>
            <div>Total Price=152</div>
            <Button className="btn_shopping">Buy Now</Button>
          </div>
        </div>
        {!listItems ? (
          <div>
            <h2>Your basket is empty</h2>
            <h6>Start Adding Items to your basket</h6>
          </div>
        ) : (
          listItems.map(displayCartItem)
        )}
      </div>
    </>
  );
}

export default ShoppingCar; 