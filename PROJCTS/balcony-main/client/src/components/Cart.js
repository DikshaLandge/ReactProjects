import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import "./Shop.css";
import "./Cart.css";
import Icons from "./Icons";
import CommonLayout from "./CommanLayout";

function Cart() {
  const [quantity, setQuantity] = useState(1);
  const cart = useSelector((state) => state.cart);

  const RAZORPAY_API_KEY = "rzp_test_JNTvSMBC0ZwXzC";
  const RAZORPAY_APT_SECRET = "f1TcfHN3OC1Ji1EBwt6pD1xy";

  const [values, setValues] = useState({
    amount: 0,
    orderId: "",
    error: "",
    success: false,
  });
  const { amount, orderId, success, error } = values;

  const getOrder = async () => {
    return await fetch(`http://localhost:5500/api/createOrder`, {
      method: "GET",
    })
      .then((response) => response.json())
      .catch((err) => console.log(err));
  };

  const grabStatus = async (paymentId) => {
    return await fetch(`http://localhost:5500/api/payments/${paymentId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .catch((err) => console.log(err));
  };

  const createOrder = () => {
    getOrder().then((response) => {
      if (response.error) {
        setValues({ ...values, error: response.error, success: false });
      } else {
        setValues({
          ...values,
          error: "",
          success: true,
          orderId: response.id,
          amount: response.amount,
        });
      }
    });
  };

  const showRazoryPay = () => {
    const form = document.createElement("form");
    form.setAttribute("action", `http://localhost:5500/api/payment/callback`);
    form.setAttribute("method", "POST");
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.setAttribute("data-key", "rzp_test_JNTvSMBC0ZwXzC"); //const use
    script.setAttribute("data-amount", amount);
    script.setAttribute("data-name", "The Balcony Life");
    script.setAttribute("data-order_id", orderId);
    script.setAttribute("data-buttontext", "Buy NOW!!!");
    document.body.appendChild(form);
    form.appendChild(script);
    const input = document.createElement("input");
    input.type = "hidden";
    input.custom = "Hidden Element";
    input.name = "hidden";
    form.appendChild(input);
  };

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  useEffect(() => {
    createOrder();
  }, []);

  useEffect(() => {
    if (amount > 0 && orderId != "") {
      showRazoryPay();
    }
  }, [amount]);

  return (
    // <div>
    //   <Navbar />
    //   <h1>Cart</h1>
    //   <div>
    //     <img src="" alt="" />
    //     <p></p>
    //     <div>
    //       <button onClick={() => handleQuantity("dec")}>-</button>
    //       <p>{quantity}</p>
    //       <button onClick={() => handleQuantity("inc")}>+</button>
    //     </div>
    //     <div>delete</div>
    //     <div>price</div>
    //   </div>
    //   <div>
    //     <Link>
    //       <button onClick={showRazoryPay}>Proceed</button>
    //     </Link>
    //     <div>{amount === 0 && orderId == "" && <h1>Loading...</h1>}</div>
    //   </div>

    //   <div>
    //     {cart.products.map((product) => (
    //       <>
    //         <img src={product.img} />
    //         <p>Product: </p>
    //         {product.title}

    //         <p>$ {product.price * product.quantity}</p>
    //         <p>ORDER SUMMARY</p>

    //         <p>Total</p>
    //         <p>$ {cart.total}</p>
    //       </>
    //     ))}
    //   </div>
    // </div>
          <div className="cart-middle">
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
          </div>
  );
}

export default Cart;
