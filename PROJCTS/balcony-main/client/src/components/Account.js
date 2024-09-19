import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Shop.css";
import "./Cart.css";
import "./Account.css";

function Account() {

    // underline for button
    const [activeButton, setActiveButton] = useState(null);

    // display orders and buy again
    const [showOrders, setShowOrders] = useState(true);
    const [showBuyAgain, setShowBuyAgain] = useState(false);

    const handleOrdersClick = (button) => {
        setActiveButton(button);
        setShowOrders(true);
        setShowBuyAgain(false);
    };

    const handleBuyAgainClick = (button) => {
        setActiveButton(button);
        setShowOrders(false);
        setShowBuyAgain(true);
    };

  return (
      <div className="main_container">
          <div className="container">
            <h3>Account</h3>
            <div className="toogle-account">
                <button className={`button ${showOrders === true ? 'active' : ''}`} 
                    onClick={() => handleOrdersClick('button1')}>
                    Orders
                </button>
                <button
                    className={`button ${showBuyAgain === true ? 'active' : ''}`}
                    onClick={() => handleBuyAgainClick('button2')}>
                    Buy Again
                </button>
            </div>
          
          <div className="cart-middle">
            {/* orders */}
            {showOrders &&
                <div className="cart-product">
                    <div className="cart-top">
                        <h6>Order Id:12314</h6>
                        <h6>10 feb 2023</h6>
                    </div>
                    <div className="add-to-cart">
                        <div className="left-section">
                            <img src="/images/indoor.png" alt="Product Image"/>
                        </div>
                        <div className="right-section">
                            <div className="product-info">
                                <h5 className="title">Product Title</h5>
                                <h5>Rs. 123</h5>
                            </div>              
                        </div>
                    </div>
                </div>
            }

            {/* buy again structure */}

            {showBuyAgain &&
                <div className="add-to-cart">
                    <div className="left-section">
                    <img src="/images/indoor.png" alt="Product Image"/>
                    </div>
                    <div className="right-section">
                    <div className="product-info">
                        <h5 className="title">Product Title</h5>
                        <h5>Rs. 123</h5>
                    </div>
                    <div className="right-of-right">
                        <div className="quantity-section">
                        <button className="minus-btn">-</button>
                        <input type="number" value="1" className="product-quantity"/>
                        <button className="add-btn">+</button>
                        </div>
                        <button className="buy-btn">Buy</button>
                    </div>
                    </div>
                </div>
            }
          </div>
      </div>
    </div>
  );
}

export default Account;
