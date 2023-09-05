import { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Header.css";
import { Link } from "react-router-dom";
import {getStorageValues, cleanStorageValues} from '../../utils/localStorage';
import {getToken} from '../../utils/token'


export default function Navbar() {

  const [logged, setLogged] = useState(false);
  const [username, setUsername] = useState("")

  const handleAuth = () => {
    if (logged) {
      cleanStorageValues('token')
      cleanStorageValues('username')
      setUsername("")
      setLogged(false)
    }
  };

  useEffect(() => {
    if(getToken()){
      setUsername(getStorageValues("username"))
      setLogged(true)
    }
  }, []);

  return (
    <>
    <div className="header">
        <img className="header__logo" src='' alt="" />
      <div className="header__search">
        <input
          className="header__searchInput"
          type="search"
          placeholder="Search Amazon..."
        />
        <SearchIcon className="header__searchIcon" />
      </div>
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
            <ShoppingCartIcon />
            <span className="header__optionLineTwo header__basketCount">
              2
            </span>
          </div>

      </div>
    </div>
    </>
  );
}