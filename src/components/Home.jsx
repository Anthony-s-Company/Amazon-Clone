import { useState, useEffect } from 'react';

import {
  MDBContainer,
  MDBRow
} from 'mdb-react-ui-kit';

import { Link } from "react-router-dom";

import SubNav from '../components/SubNav'
import Carousel from '../components/Carousel'
import Card from '../components/Card'
import Navbar from '../components/Navbar'

import { fetchAllProducts, fetchAllCategories } from '../services/Products';

export default function Home() {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [errorProducts, setErroProducts] = useState(false);
  const [loadedProduct, setLoadedProduct] = useState(false);

  const [errorCategories, setErroCategories] = useState(false);
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
      <Navbar />
      {
        loadedCategories && !errorCategories && (
          <SubNav categories={categories} />
        )
      }
      <MDBContainer className="mt-3">
        <MDBRow className='row-cols-1 row-cols-md-4 g-4'>
          {
            loadedProduct && !errorProducts && (
              products.map((product) => <Card key={product.id} item={product} /> )
            )
          }
        </MDBRow>
      </MDBContainer>
      <Carousel />
    </>
  );
}