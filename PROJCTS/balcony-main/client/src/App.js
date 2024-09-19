import "./App.css";
import Home from "./components/Home";
import { Navigate, Redirect } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./components/Shop";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import SingleProduct from "./components/SingleProduct";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Register from "./components/Register";
import PaymentStatus from "./components/PaymentStatus";
import { useState } from "react";
import Blog from "./components/Blog";
import Account from "./components/Account";
import Types from "./components/Types";

function App() {
  const [user, setLoginUser] = useState({});
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Routes>
          <Route path="/types/:type" element={<Types />} />
        </Routes>
        <Routes>
          <Route path="/product/:id" element={<SingleProduct />} />
        </Routes>
        {/* <Routes>
          <Route path="/cl" element={<CommonLayout />} />
        </Routes> */}
        <Routes>
          <Route path="/cart" element={<Cart />} />

          {/* <Route
            exact
            path="/"
            element={
              user && user._id ? (
                <Home setLoginUser={setLoginUser} />
              ) : (
                <Login setLoginUser={setLoginUser} />
              )
            }
          ></Route> */}
          <Route
            path="/login"
            element={<Login setLoginUser={setLoginUser} />}
          ></Route>
          <Route path="/register" element={<Register />}></Route>

          {/* <Route path="/login" element={<Login />}></Route>
          <Route
            path="/register"
            element={user ? <Navigate replace to="/" /> : <Register />}
          ></Route> */}
          {/* <Route path="/payment" element={<PaymentSuccess />} /> */}
          <Route
            exact
            path="/payment/status/:paymentId"
            element={<PaymentStatus />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
