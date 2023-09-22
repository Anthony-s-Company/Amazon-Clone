/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { fetchSingleProduct } from '../../services/Products';
import StarsRating from '../StarsRating'
import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from '../Spinner';
import BasicModal from '../BasicModal';
import { setStorageValues, getStorageValues } from '../../utils/localStorage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Details.css'

export default function Details({ setItemsOnCar, username }) {

  const { id } = useParams()
  const [product, setProduct] = useState();
  const [countCart, setCountCart] = useState(0);
  const [loadedProduct, setLoadedProduct] = useState(false);
  const [error, setError] = useState({ is: false, title: '', text: '' });
  const [listItemsCar, setListItemsCar] = useState(getStorageValues(username));

  function countCartDown() {
    if (countCart > 0) {
      setCountCart((countCart) => countCart - 1)
    }
  }

  function addToCar() {

    let listCart = []
    let updatedValue = {};
    let items = 0

    getStorageValues(username) ? listCart = getStorageValues(username) : listCart = []
    updatedValue = { "user": username, "item": product.title, "qty": countCart, "unitPrice": product.price };
    listCart = [...listCart, updatedValue]
    setStorageValues(username, listCart)

    for (const item of listCart) {
      items += item['qty']

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

    setCountCart(0)
  }

  useEffect(() => {
    async function getProduct() {
      try {
        const response = await fetchSingleProduct(id)
        setProduct(response)
        setLoadedProduct(true)
      } catch (err) {
        setLoadedProduct(false)
        setError({ is: true, title: 'Registration error', text: err.message });
      }
    }
    getProduct();
    getStorageValues(username) ? setListItemsCar(getStorageValues(username)) : setListItemsCar([])
    let items = 0
    for (const item of listItemsCar) {
      items += item['qty']

    }
    setItemsOnCar(items)
  }, []);

  return (
    <>
      {!loadedProduct && (<Spinner />)}
      {error.is && (<BasicModal isVisible={error.is} title={error.title} message={error.text} />)}
      {
        loadedProduct && !error.is && (
          <div className="container container-fluid">
            <div className="row f-flex justify-content-around">
              <div className="col-12 col-lg-5 img-fluid" id="product_image">
                <img src={product.image} alt="" className="imgDetails" />
              </div>
              <div className="col-12 col-lg-5 mt-5">
                <h3>{product.title}</h3>
                <p id="product_id">Product # sklfjdk35fsdf5090</p>
                <hr />

                <StarsRating rating={product.rating} />
                <hr />

                <p id="product_price">${product.price}</p>
                <div className="stockCounter d-inline">
                  <button onClick={countCartDown} className="btn btn-danger minus">-</button>
                  <input type="number" className="form-control count d-inline" value={countCart} readOnly />
                  <button onClick={() => setCountCart((countCart) => countCart + 1)} className="btn btn-primary plus">+</button>
                </div>
                <button type="button" onClick={addToCar} id="cart_btn" className="btn btn-primary d-inline ms-4">Add to Cart</button>
                <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="colored"
                />
                <hr />

                <p>Status: <span id="stock_status">In Stock</span></p>
                <hr />

                <h4 className="mt-2">Description:</h4>
                <p>{product.description}.</p>
                <hr />

                <p id="product_seller mb-3">Sold by: <strong>Orinoco</strong></p>

                <button id="review_btn" type="button" className="btn btn-primary mt-4" data-toggle="modal" data-target="#ratingModal">Buy Now</button>

              </div>
            </div>
          </div>
        )
      }
    </>
  );
}
