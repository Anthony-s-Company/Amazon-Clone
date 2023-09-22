import "./App.css";
import { useState } from "react";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Details from "./components/product/Details";
import Login from "./components/forms/login/Login";
import Signup from "./components/forms/signup/Signup";
import { Routes, Route } from "react-router-dom";

export default function App() {
  const [searchResults, setSearchResults] = useState([]);
  // const [searchErrorProducts, setsearchErroProducts] = useState(false);
  const [searchLoadedProduct, setSearchLoadedProduct] = useState(false);
  const [itemsOnCar, setItemsOnCar] = useState(0);
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
              key="1"
            />,

            <Home
              searchResults={searchResults}
              searchLoadedProduct={searchLoadedProduct}
              key="2"
            />,
          ]}
        />

        <Route
          path="/details/:id"
          element={[
            <Header
              setItemsOnCar={setItemsOnCar}
              itemsOnCar={itemsOnCar}
              key="1"
            />,
            <Details
              setItemsOnCar={setItemsOnCar}
              itemsOnCar={itemsOnCar}
              key="2" />]}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}
