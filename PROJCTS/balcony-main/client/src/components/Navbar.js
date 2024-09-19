import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import "./Navbar.css";
import FullScreenPopUp from "./FullScreenPopUp";
import MenuIcon from '@mui/icons-material/Menu';

function Navbar({pathname}) {
  const quantity = useSelector((state) => state.cart.quantity);

  // full screen popup
  const [showPopUp, setShowPopUp] = useState(false);

  return (
    <div className="header-component" 
    style={{
      position: pathname==='blog' || pathname==='contact'?'absolute':'static',
      width:pathname==='blog' || pathname==='contact'?'98%':'98%',
      width:pathname==='contact'?'83%':'98%'
    }} >
      <FullScreenPopUp showPopUp={showPopUp} setShowPopUp={setShowPopUp} />
      <nav className="menu-nav">
        <MenuIcon onClick={() => setShowPopUp(true)} ></MenuIcon>
      </nav>
      <nav className="header-navigation">
        <Link to="/">Home</Link>
        <Link to="/types/shop"
          style={{
            borderBottom: pathname==='shop'?'1px solid #62ccbb':'none',
          }}>
          Shop
        </Link>
        <Link to="/blog"
          style={{
            borderBottom: pathname==='blog'?'1px solid #62ccbb':'none',
          }}>
          Blog
        </Link>
        <Link to="/types/gallery"
          style={{
            borderBottom: pathname==='gallery'?'1px solid #62ccbb':'none',
          }}>
          Gallery
        </Link>
        <Link to="/types/contact"
          style={{
            borderBottom: pathname==='contact'?'1px solid #62ccbb':'none',
          }}>
          Contact us
        </Link>
      </nav>
      <div className="search">
        <input type="text" placeholder="Search products" />
        <SearchIcon />
      </div>
    </div>
  );
}

export default Navbar;
