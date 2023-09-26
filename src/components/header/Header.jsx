/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Header.css";
import Spinner from '../Spinner'
import { Link, useNavigate } from "react-router-dom";
import { getStorageValues, cleanStorageValues } from '../../utils/localStorage';
import { getToken } from '../../utils/token'
import Search from './Search';
import Filter from './Filter';

let redirectTimer;

export default function Header({ setSearchResults, setSearchLoadedProduct, itemsOnCar }) {

  const navigate = useNavigate();
  const [logged, setLogged] = useState(false);
  const [username, setUsername] = useState("")
  const [loading, setLoading] = useState(false);

  function handleShoopingCar() {
    console.log("cosa")
  }

  const handleAuth = () => {
    setLoading(true)
    if (logged) {
      cleanStorageValues('token')
      cleanStorageValues('username')
      setUsername("")
      setLogged(false)
    }
    redirectTimer = setTimeout(() => {
      setLoading(false)
      navigate("/login/");
    }, 1000);
  };

  useEffect(() => {
    if (getToken()) {
      setUsername(getStorageValues("username"))
      setLogged(true)
    }
    return () => {
      clearTimeout(redirectTimer);
    }
  }, []);

  return (
    <>
      {
        loading && (
          <Spinner />)
      }
      <div className="header">
        <Link to="/">
          <img className="header__logo" src='src\assets\logo.png' alt="" />
        </Link>

        <div className="header__option">
          <div className="header__filter">
            <Filter setSearchResults={setSearchResults} setSearchLoadedProduct={setSearchLoadedProduct} />
          </div>
        </div>

        <div className="header__search">
          <Search setSearchResults={setSearchResults} setSearchLoadedProduct={setSearchLoadedProduct} />
        </div>

        <SearchIcon className="header__searchIcon" />

        <div className="header__nav">
          <Link to={!logged && "/login"}>
            <div onClick={handleAuth} className="header__option">
              <span className="header__optionLineOne">
                Hello, {logged ? username : "Guest"}
              </span>
              <span className="header__optionLineTwo">
                {logged ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>

          <Link to="/orders">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>

          <div className="header__optionBasket">
            <Link to="/shoopingCar">
              <div className="header__option">
                <ShoppingCartIcon
                  onClick={handleShoopingCar}
                />
              </div>
            </Link>

            <span className="header__optionLineTwo header__basketCount">
              {itemsOnCar}
            </span>
          </div>

        </div>
      </div>
    </>
  );
}