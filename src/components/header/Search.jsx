/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { fetchAllProducts } from '../../services/Products';
import "./Header.css";

function Search({ setSearchResults, setSearchLoadedProduct }) {

  const [input, setInput] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      // console.log('fetching')
      try {
        setSearchLoadedProduct(false)
        const response = await fetchAllProducts()
        setProducts(response)
        setSearchLoadedProduct(true)
      } catch (error) {
        console.log("error searching")
      }
    }

    getProducts();

  }, []);

  const filterProducts = (value) => {
    setSearchLoadedProduct(false)
    const results = products.filter((product) => {
      return (
        product &&
        product.title.toLowerCase().includes(value) ||
        product.category.toLowerCase().includes(value)
      );
    });
    setSearchLoadedProduct(true)
    setSearchResults(results);
  }

  const handleChange = (value) => {
    const realInput = value.trim()
    filterProducts(realInput)
    setInput(realInput);

    if (realInput.length === 0 && realInput === "") {
      setInput("")
      setSearchResults([])
    }
  };

  return (
    <>
      <input
        className="header__searchInput"
        type="search"
        placeholder="Search the Sky..."
        value={input}
        pattern="^\S+$"
        onChange={(e) => handleChange(e.target.value)}
      />
    </>
  );
}

export default Search;
