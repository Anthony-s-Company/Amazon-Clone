import { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import Product from '../product/product';
import Banner from '../banner/Banner';

import { fetchAllProducts, fetchAllCategories } from '../../services/Products';

export default function Home() {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [errorProducts, setErroProducts] = useState(false);
  const [errorCategories, setErroCategories] = useState(false);

  const [loadedProduct, setLoadedProduct] = useState(false);
  const [loadedCategories, setLoadedCategories] = useState(false);
  
  
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

    async function getCategories() {
      try {
        const response = await fetchAllCategories()
        setCategories(response)
        setLoadedCategories(true)
      } catch (error) {
        setErroCategories(error)
        setLoadedCategories(false)
      }
    }

    getProducts();
    getCategories();

  }, []);

  return (
    <>
    <div className="home">
      <div className="home__container">
      <Banner />
        <div className="row__container">
          <div className="home__row">

            {
              loadedProduct && !errorProducts && (
                products.slice(0,2).map((product) => 
                <Product 
                  key={product.id} 
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                  category={product.category}
                  rating={product.rating}
                  description={product.description}
                />)
              )
            }
          </div>

          <div className="home__row">
            {
              loadedProduct && !errorProducts && (
                products.slice(2,6).map((product) => 
                <Product 
                  key={product.id} 
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                  category={product.category}
                  rating={product.rating}
                  description={product.description}
                />)
              )
            }
          </div>

          <div className="home__row">
            {
              loadedProduct && !errorProducts && (
                products.slice(6,8).map((product) => 
                <Product 
                  key={product.id} 
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                  category={product.category}
                  rating={product.rating}
                  description={product.description}
                />)
              )
            }
          </div>

          <div className="home__row">
            {
              loadedProduct && !errorProducts && (
                products.slice(9,10).map((product) => 
                <Product 
                  key={product.id} 
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                  category={product.category}
                  rating={product.rating}
                  description={product.description}
                />)
              )
            }
          </div>
        </div>
      </div>
    </div>
    </>
  );
}