/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { getStorageValues } from '../../utils/localStorage';
import './ShoppingCar.css'
import Button from '@mui/material/Button';
import shopImg from '../../assets/shop.png'

function ShoppingCar({ username }) {

  const [listItemsCar, setListItemsCar] = useState(getStorageValues(username));

  useEffect(() => {
    let carDict = {}
    let tmp

    for (const item of listItemsCar) {

      if (item.id in carDict) {
        tmp = carDict[item.id]
        tmp.qty += item.qty
        carDict[item.id] = tmp
      } else {
        carDict[item.id] = item
      }
    }

    let newList = []

    for (let k in carDict) {
      newList.push(carDict[k])
    }
    setListItemsCar([])
    setListItemsCar(newList)
  }, []);

  function displayCartItem(item) {
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
                onClick={() => {
                  console.log("eliminando")
                }}
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
        {!listItemsCar ? (
          <div>
            <h2>Your basket is empty</h2>
            <h6>Start Adding Items to your basket</h6>
          </div>
        ) : (
          listItemsCar.map(displayCartItem)
        )}
      </div>
    </>
  );
}

export default ShoppingCar; 