import "./App.css";
import { useState, useEffect } from 'react';
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Details from "./components/product/Details";
import Login from "./components/forms/login/Login";
import Signup from "./components/forms/signup/Signup";
import { Routes, Route } from "react-router-dom";
import { getStorageValues } from './utils/localStorage';

export default function App() {
  const [searchResults, setSearchResults] = useState([]);
  // const [searchErrorProducts, setsearchErroProducts] = useState(false);
  const [searchLoadedProduct, setSearchLoadedProduct] = useState(false);
  const [itemsOnCar, setItemsOnCar] = useState(0);
  const [username, setUsername] = useState(getStorageValues("username"));


  return (
    <>
      <Routes>
        <Route
          path="/"
          element={[
            <Header
              searchResults={searchResults}
              setSearchResults={setSearchResults}
              setSearchLoadedProduct={setSearchLoadedProduct}
              setItemsOnCar={setItemsOnCar}
              itemsOnCar={itemsOnCar}
              username={username}
              key="1"
            />,

            <Home
              searchResults={searchResults}
              searchLoadedProduct={searchLoadedProduct}
              setItemsOnCar={setItemsOnCar}
              itemsOnCar={itemsOnCar}
              username={username}
              key="2"
            />,
          ]}
        />

        <Route
          path="/details/:id"
          element={[
            <Header
              searchResults={searchResults}
              setSearchResults={setSearchResults}
              setSearchLoadedProduct={setSearchLoadedProduct}
              setItemsOnCar={setItemsOnCar}
              itemsOnCar={itemsOnCar}
              username={username}
              key="1"
            />,
            <Details
              searchResults={searchResults}
              searchLoadedProduct={searchLoadedProduct}
              setItemsOnCar={setItemsOnCar}
              itemsOnCar={itemsOnCar}
              username={username}
              key="2"
            />
          ]}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}
