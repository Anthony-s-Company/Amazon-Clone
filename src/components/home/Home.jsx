/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import Product from '../product/product';
import Banner from '../banner/Banner';
import SearchHome from './SearchHome'
import Spinner from '../Spinner'
import { getStorageValues } from '../../utils/localStorage';

import { fetchAllProducts } from '../../services/Products';

export default function Home({ searchResults, searchLoadedProduct, setItemsOnCar, username }) {

  const [products, setProducts] = useState([]);
  const [errorProducts, setErroProducts] = useState(false);
  const [loadedProduct, setLoadedProduct] = useState(false);
  const [listItemsCar, setListItemsCar] = useState(getStorageValues(username));

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

    getStorageValues(username) ? setListItemsCar(getStorageValues(username)) : setListItemsCar([])
    let items = 0
    for (const item of listItemsCar) {
      items += item['qty']

    }
    setItemsOnCar(items)
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

