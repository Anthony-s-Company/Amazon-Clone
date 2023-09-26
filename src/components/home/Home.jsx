/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import Product from '../product/product';
import Banner from '../banner/Banner';
import SearchHome from './SearchHome'
import Spinner from '../Spinner'
import { getStorageValues } from '../../utils/localStorage';
import { countItemOnCar } from '../../utils/helper';

import { fetchAllProducts } from '../../services/Products';

export default function Home({ searchResults, searchLoadedProduct, setItemsOnCar, username, setUsername }) {

  const [products, setProducts] = useState([]);
  const [errorProducts, setErroProducts] = useState(false);
  const [loadedProduct, setLoadedProduct] = useState(false);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetchAllProducts()
        setProducts(response)
        setLoadedProduct(true)
      } catch (error) {
        setErroProducts(error)
        setLoadedProduct(false)
      }
    }

    getProducts();

    setUsername(getStorageValues("username"))

    let dictCart = {}
    if (!username) {
      getStorageValues("GuessUser") ? dictCart = getStorageValues("GuessUser") : dictCart = {}
    } else {
      getStorageValues(username) ? dictCart = getStorageValues(username) : dictCart = {}
    }

    setItemsOnCar(countItemOnCar(dictCart))

  }, []);

  return (
    <>

      {searchResults && searchResults.length > 0
        ?
        <SearchHome searchLoadedProduct={searchLoadedProduct} searchResults={searchResults} />
        :
        <div className="home">
          {!loadedProduct && (
            <Spinner />)}
          <div>
            <Banner />
            <div className="row__container">
              <div className="home__row">
                {
                  loadedProduct && !errorProducts && (
                    products.slice(0, 2).map((product) =>
                      <Product
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                        category={product.category}
                        rating={product.rating}
                        description={product.description}
                        setItemsOnCar={setItemsOnCar}
                        username={username}
                      />)
                  )
                }
              </div>

              <div className="home__row">
                {
                  loadedProduct && !errorProducts && (
                    products.slice(2, 6).map((product) =>
                      <Product
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                        category={product.category}
                        rating={product.rating}
                        description={product.description}
                        setItemsOnCar={setItemsOnCar}
                        username={username}
                      />)
                  )
                }
              </div>

              <div className="home__row">
                {
                  loadedProduct && !errorProducts && (
                    products.slice(6, 8).map((product) =>
                      <Product
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                        category={product.category}
                        rating={product.rating}
                        description={product.description}
                        setItemsOnCar={setItemsOnCar}
                        username={username}
                      />)
                  )
                }
              </div>

              <div className="home__row">
                {
                  loadedProduct && !errorProducts && (
                    products.slice(9, 10).map((product) =>
                      <Product
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                        category={product.category}
                        rating={product.rating}
                        description={product.description}
                        setItemsOnCar={setItemsOnCar}
                        username={username}
                      />)
                  )
                }
              </div>
            </div>
          </div>
        </div>
      }

    </>
  );
}

