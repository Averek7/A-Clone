import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <img
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="logo"
        className="header_logo"
      />
      <div className="header_nav">
        <div className="header_option">
          <span className="header_lineOne">
            Hello
            <LocationOnIcon style={{ fontSize: "15px" }} />
          </span>
          <span className="header_lineTwo">Select your address</span>
        </div>
      </div>
      <div className="header_search">
        <input
          type="search"
          name="seacrh"
          id="search"
          className="header_searchInput"
        />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_lineOne">Hello Guest</span>
          <span className="header_lineTwo">Sign In</span>
        </div>
        <div className="header_option">
          <span className="header_lineOne">Returns</span>
          <span className="header_lineTwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_lineOne">Your</span>
          <span className="header_lineTwo">Prime</span>
        </div>
      </div>
      <div className="header_shopBasket">
        <ShoppingBasketIcon />
        <span className="header_lineTwo header_Count">0</span>
      </div>
    </div>
  );
}

export default Header;
