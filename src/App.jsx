import "./App.css";
import { useState } from 'react';
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Details from "./components/product/Details";
import Login from "./components/forms/login/Login";
import Signup from "./components/forms/signup/Signup";
import ShoppingCar from "./components/car/ShoppingCar";
import { Routes, Route } from "react-router-dom";
import { getStorageValues } from './utils/localStorage';
import Checkout from "./components/checkout/Checkout";

export default function App() {
  const [searchResults, setSearchResults] = useState([]);
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
              setUsername={setUsername}
              key="1"
            />,

            <Home
              searchResults={searchResults}
              searchLoadedProduct={searchLoadedProduct}
              setItemsOnCar={setItemsOnCar}
              itemsOnCar={itemsOnCar}
              username={username}
              setUsername={setUsername}
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
              setUsername={setUsername}
              key="1"
            />,
            <Details
              searchResults={searchResults}
              searchLoadedProduct={searchLoadedProduct}
              setItemsOnCar={setItemsOnCar}
              itemsOnCar={itemsOnCar}
              username={username}
              setUsername={setUsername}
              key="2"
            />
          ]}
        />
        <Route path="/shoopingCar" element={[
          <Header
            searchResults={searchResults}
            setSearchResults={setSearchResults}
            setSearchLoadedProduct={setSearchLoadedProduct}
            setItemsOnCar={setItemsOnCar}
            itemsOnCar={itemsOnCar}
            username={username}
            setUsername={setUsername}
            key="1"
          />,
          <ShoppingCar
            searchResults={searchResults}
            setSearchResults={setSearchResults}
            setSearchLoadedProduct={setSearchLoadedProduct}
            setItemsOnCar={setItemsOnCar}
            itemsOnCar={itemsOnCar}
            username={username}
            setUsername={setUsername}
            key="2"
          />
        ]} />

        <Route path="/checkout" element={[
          <Header
            searchResults={searchResults}
            setSearchResults={setSearchResults}
            setSearchLoadedProduct={setSearchLoadedProduct}
            setItemsOnCar={setItemsOnCar}
            itemsOnCar={itemsOnCar}
            username={username}
            setUsername={setUsername}
            key="1"
          />,
          <Checkout
            key="2"
          />
        ]} />

        <Route path="/login" element={<Login user={username} setUser={setUsername} />} />
        <Route path="/signup" element={<Signup user={username} setUser={setUsername} />} />
      </Routes>
    </>
  );
}
