import React from "react";
import logoImage from "./flip_logo.png";
import account from "./accountt.jpg";
import Cart from "./cart.png";
import "./App.css";

function Header() {
  return (
    <div className="nav">
      <img src={logoImage} className="flogo" />
      <input
        type="text"
        placeholder=" Search for Products, Brands and More"
        className="text"
      />
      <div className="login">
        {/* <img src={account} alt="person" className="person" /> */}

        <h1 className="loginn">Login</h1>
        <select type="dropdown" className="drop">
          <option value=""></option>
        </select>
      </div>

      <div className="cart">
        <img src={Cart} className="Cart" />
        <h2 className="cart_text">Cart</h2>
      </div>

      <div className="seller">
        {/* <img src={} className="Sell"/> */}
        <h2 className="become_seller">become a Seller</h2>
      </div>
    </div>
  );
}

export default Header;
