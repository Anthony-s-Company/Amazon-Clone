/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { fetchAllProducts, fetchAllCategories } from '../../services/Products';
import "./Header.css";
import Form from 'react-bootstrap/Form';

export default function Filter({ setSearchResults, setSearchLoadedProduct }) {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        setSearchLoadedProduct(false)
        const response = await fetchAllProducts()
        setProducts(response)
        setSearchLoadedProduct(true)
      } catch (error) {
        console.log("error searching")
      }
    }
    async function getCategories() {
      try {
        setSearchLoadedProduct(false)
        const response = await fetchAllCategories()
        setCategories(response)
        setSearchLoadedProduct(true)
      } catch (error) {
        console.log("error searching")
      }
    }

    getProducts();
    getCategories();

  }, []);

  function handleChange(category) {
    setSearchLoadedProduct(false)
    let result = []
    let prod = [...products]

    if (category === 'priceLow') {
      prod.sort((a, b) => {
        return (a.price - b.price);
      });
      result = prod

    } else if (category === 'priceHigh') {
      prod.sort((a, b) => {
        return (b.price - a.price);
      });
      result = prod

    } else {
      result = (prod.filter((product) => {
        return (
          product.category.toLowerCase() === category
        );
      }))
    }
    setSearchLoadedProduct(true);
    setSearchResults(result);

  }

  return (
    <>
      <Form.Select
        size="sm"
        className='header__filterSelect'
        onChange={(e) => handleChange(e.target.value)}>
        <option>Filter By</option>
        {
          categories.map((category) =>
            <option key={category} value={category}>{category}</option>
          )
        }
        <option key='priceLow' value="priceLow">Price - Low to High</option>
        <option key='priceHigh' value="priceHigh">Price - High to Low</option>
      </Form.Select>
    </>

  );
}