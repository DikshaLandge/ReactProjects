import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import sliderItems from "../data";
import Footer from "./Footer";
import "./Home.css";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import FullScreenPopUp from './FullScreenPopUp.js';

function Home() {
  const [items, setItems] = useState(sliderItems);

  //slider/ carousel state
  const [imgs,setImgs]=useState(0);
  const [imgs1,setImgs1]=useState(1);
  const [imgs2,setImgs2]=useState(2);
  const[slide]=useState([
    'Images/IMG_2189 1.png',
    'Images/IMG_3688 1.png',
    'Images/IMG_9051 1.png'
  ]);

  const [showPopup, setShowPopup] = useState(false);
  const [button1, setButton1] = useState({ background: "white",color:"#62ccbb" });
  const [button2, setButton2] = useState({ background: "white",color:"#62ccbb" });
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  // new arrivals button toggle

  const [active, setActive] = useState("all");

  const handleClick = (buttonName) => {
    setActive(buttonName);
    setItems(sliderItems);
  };

  const handleButton1Click = () => {
    setButton1({ background: "#62ccb6",color:"white" });
    setButton2({ background: "white",color:"#62ccbb" });
    setShowLogin(true);
    setShowRegister(false);
  };

  const handleButton2Click = () => {
    setButton1({ background: "white",color:"#62ccbb" });
    setButton2({ background: "#62ccb6",color:"white" });
    setShowLogin(false);
    setShowRegister(true);
  };

  const filterItem = (buttonName,categItem) => {
    setActive(buttonName);
    const updatedItems = sliderItems.filter((e) => {
      return e.category === categItem;
    });
    setItems(updatedItems);
  };

//   var img_data=[
//     'Images/IMG_2189 1.png',
//     'Images/IMG_3688 1.png',
//     'Images/IMG_9051 1.png'
// ]

  var u1=useEffect(()=>{
    setInterval(()=>{
      setImgs(imgs=>imgs<2?imgs+1:0)
    },5000)
  },[u2,u3])

  var u2=useEffect(()=>{
    setInterval(()=>{
      setImgs1(imgs1=>imgs1<2?imgs1+1:0)
    },5000)
  },[u3,u1])

  var u3=useEffect(()=>{
    setInterval(()=>{
      setImgs2(imgs2=>imgs2<2?imgs2+1:0)
    },5000)
  },[u1,u2])

  // full screen popup
  const [showPopUp, setShowPopUp] = useState(false);

  return (
    <div id="scrol-top">
      <FullScreenPopUp showPopUp={showPopUp} setShowPopUp={setShowPopUp} />
      {/* header */}

      <div className="header">
        <div className="header-of-nav-div">
          <nav className="menu-nav">
            <MenuIcon onClick={() => setShowPopUp(true)} ></MenuIcon>
          </nav>
          <nav className="nav1">
            <a href="#">
              <img src="images/vector-3.svg" alt=""/>
            </a>
            <a href="#">
              <img src="images/Group 1.svg" alt=""/>
            </a>
            <a href="#">
              <img src="images/vector-4.svg" alt=""/>
            </a>
            <a href="#">
              <img src="images/vector-5.svg" alt=""/>
            </a>
          </nav>
          <picture className="green-logo">
            <img src="images/Green logo.svg" alt="logo"/>
          </picture>
          <nav className="nav2">
            {/* update line:115-120 */}
            <a href="#"
            style={{
              display:"none"/* note: display:login?'block':'none'  --- login=true*/ 
            }}
            >
              <p id="logout" >Logout</p>
            </a>
            {/* update line:122-127 */}
            <a href="#"
              style={{
                display:"block" /* note: display:logout?'block':'none'  */
              }}
            >
              <img onClick={() => setShowPopup(true)} src="images/Vector.svg" alt=""/>
              
              {/* login page popup */}
              
              {showPopup && (
                <div className="popup-container">
                  <div className="popup">
                    <button
                      onClick={() => setShowPopup(false)}
                      className="close-button"
                    >
                      &times;
                    </button>
                    <div className="toggle-button">
                      <button style={{ background: button1.background,color:button1.color }} onClick={handleButton1Click} type="submit" >Login</button>
                      <button style={{ background: button2.background,color:button2.color }} onClick={handleButton2Click} type="submit" >Register</button>

                      {/* register */}

                      {showRegister && (
                          <div>
                              <input id="popup-name" type="text" placeholder="Name" />
                              <input id="popup-mail" type="email" placeholder="Email" />
                              <input id="popup-num" type="number" placeholder="Number"/>
                              <input id="popup-psd" type="password" placeholder="Password" />
                              <button id="popup-btn" type="submit">Proceed</button>
                          </div>
                        )}
                    </div>

                        {/* login */}
                    {showLogin && (
                      <form>
                        <input id="popup-name" type="text" placeholder="Email/Number" />
                        <input id="popup-psd" type="password" placeholder="Password" />
                        <button id="popup-btn" type="submit">Proceed</button>
                      </form>
                    )}

                  </div>
                </div>
              )}

            </a>
            <a id="bag-icon" href="#">
              <img src="images/vector-2.svg" alt=""/>
            </a>
          </nav>
        </div>
        
        <nav className="header-elements">
            <Link to="/">Home</Link>
            <Link to="/types/shop">Shop</Link>
            <Link to="/types/gallery">Gallery</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/types/contact">Contact Us</Link>
        </nav>
      </div>

      {/* slider/ carousel */}
        <div className="carousel-inner">
          <div className="txt-and-slider-div">
            <div className="slidre-txt">
              <img src="images/the behind TBL font.svg" alt="The Balcony life img"/>
            </div>
            <div className="all-imgs">
              <div className="slider-img1">
                <img id="slider-img1" src={slide[imgs]} />
              </div>
              <div className="slider-img2">
                <img id="slider-img2" src={slide[imgs1]} alt="" />
              </div>
              <div className="slider-img3">
                <img id="slider-img3" src={slide[imgs2]} alt="" />
              </div>
            </div>
          </div>
        </div>

      {/* new arrival */}

      <div className="new-arrivals">
        <div className="arrivals-text">
          <h4>NEW ARRIVALS</h4>
          <small>Nice top trendy plants and flowers</small>
        </div>
        <div className="options">
          <button 
          style={{
            backgroundColor: active === "All" ? "#62ccbb" : "white",
            color: active === "All" ? "white" : "#62ccbb",
          }}
          onClick={()=>handleClick("All")}>
            All
          </button>
          <button 
          style={{
            backgroundColor: active === "Customised" ? "#62ccbb" : "white",
            color: active === "Customised" ? "white" : "#62ccbb",
          }}
          onClick={() => filterItem("Customised","indoor")}>
            Customised
          </button>
          <button 
          style={{
            backgroundColor: active === "Corporate" ? "#62ccbb" : "white",
            color: active === "Corporate" ? "white" : "#62ccbb",
          }}
          onClick={() => filterItem("Corporate","outdoor")}>Corporate</button>
        </div>

        {/* product card */}

        <div className="arrival-main">
          {items.map((e) => {
            const { id, title, img, mrp } = e;
            return (
              <div className="card-container">
                <div className="card-img-container">
                  <a href={`/product/${id}`}>
                    <img id="pro-img" src={img} alt="" />
                  </a>
                  {/* update  line:251-255*/}
                  <div className="colors-container">
                    <p>Available Colors</p>
                    <button id="color" ></button>
                  </div>
                </div>
                <div className="pro-details-container">
                  <h6>{title}</h6>
                  <h5>RS {mrp}</h5>
                </div> 
              </div>
            );
          })}
        </div>
      </div>

      {/* view more section */}
      
      <div className="view-more">
        <hr id="hr1" />
        <button>View More</button>
        <hr id="hr2" />
      </div>
      <div className="view-more-card">
          <div className="vm-card">
            <div className="vm-info">
              <h6>NEW ARRIVALS</h6>
              <h1>NEW SEASON</h1>
              <small>Starts from <b>RS 500</b></small>
              <p>WE ARE ON SALE ONLY THIS WEEK</p>
            </div>
            <div className="vm-img">
              <img src="images/5309 1.png" />
            </div>
          </div>

          <div className="vm-card">
            <div className="vm-info">
              <h6>NEW ARRIVALS</h6>
              <h1>NEW COLLECTION</h1>
              <small>Starts from <b>RS 500</b></small>
              <p>WE ARE ON SALE ONLY THIS WEEK</p>
            </div>
            <div className="vm-img">
              <img src="images/5309 1.png" />
            </div>
          </div>

          
      </div>
      

      {/* <!-- Best Sellers section --> */}


      <div className="outer-card-div">  
        <div className="main-card-div">
          <section>
            <h4>
              BEST SELLERS
            </h4>
            <small>
              Exclusive best sellers from the Calcony Life
            </small>
          </section>
          <a href="" alt="">
            <div className="img-div">
              <picture className="card1">
                  <img src="images/15351 1.png" alt="Avatar" />
              </picture>
            
              <div className="available-color">
                Available Colors
                <nav>
                  color
                </nav>
              </div>
              <div className="product-details">
                <small>
                  Money Plant
                </small>
                <p>RS 350</p>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default Home;
