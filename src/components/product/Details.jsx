import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { fetchSingleProduct } from '../../services/Products';
import StarsRating from '../StarsRating'
import "bootstrap/dist/css/bootstrap.min.css";

import './Details.css'

export default function Details() {

  const { id } = useParams()
  const [product, setProduct] = useState();
  const [countCart, setCountCart] = useState(0);
  const [errorProducts, setErrorProducts] = useState(false);
  const [loadedProduct, setLoadedProduct] = useState(false);

  function countCartDown(){
    if(countCart > 0){
      setCountCart((countCart) => countCart - 1)
    }
  }

  useEffect(() => {
    async function getProduct() {
      try {
        const response = await fetchSingleProduct(id)
        setProduct(response)
        setLoadedProduct(true)
      } catch (error) {
        setLoadedProduct(false)
        setErrorProducts(error)
      }
    }
    getProduct();
  }, []);

  return (
    <>
      {
        loadedProduct && !errorProducts && (
          <div className="container container-fluid">
            <div className="row f-flex justify-content-around">
              <div className="col-12 col-lg-5 img-fluid" id="product_image">
                <img src={product.image} alt="" className="imgDetails" />
              </div>
              <div className="col-12 col-lg-5 mt-5">
                <h3>{product.title}</h3>
                <p id="product_id">Product # sklfjdk35fsdf5090</p>
                <hr/>

                <StarsRating rating={product.rating}/>
                <hr/>

                <p id="product_price">${product.price}</p>
                <div className="stockCounter d-inline">
                    <button onClick={countCartDown} className="btn btn-danger minus">-</button>
                    <input type="number" className="form-control count d-inline" value={countCart} readOnly />
                    <button onClick={() => setCountCart((countCart) => countCart + 1)} className="btn btn-primary plus">+</button>
                </div>
                 <button type="button" id="cart_btn" className="btn btn-primary d-inline ms-4">Add to Cart</button>
                <hr/>

                <p>Status: <span id="stock_status">In Stock</span></p>
                <hr/>

                <h4 className="mt-2">Description:</h4>
                <p>{product.description}.</p>
                <hr/>

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
