import React, { useState } from "react";
import { Link } from "react-router-dom";
import sliderItems from "../data";
import "./Shop.css";

function Shop() {
  const [items, setItems] = useState(sliderItems);
  const filterItem = (categItem) => {
    const updatedItems = sliderItems.filter((e) => {
      return e.category === categItem;
    });
    setItems(updatedItems);
  };

  return (
          <div className="main-middle">
            <div className="content">
              <h1>What would you<br/> like to shop?</h1>
              <p>
                The most customised plants decoration you have ever<br/> 
                seen. Pick up yours in 3 simplae steps.
              </p>
            </div>
            <div className="right">

              {/* note:

                  refer indoore className as all
                  populer->Customised
                  and -> Outdoor->corporate
              
              */}

                <div className="plant_images">
                  <div className="left_image">
                    <div className="indoor">
                    <Link to={{ pathname: '/types/all'}}>
                    <img id="cat-imgs" srcSet='../images/indoor.png' alt="indoor" />
                        <button id="cat-btn" onClick={() => filterItem("indoor")}>All</button>
                      </Link>
                    </div>
                    <div className="popular">
                      <Link to={{ pathname: '/types/customised'}}>
                      <img id="cat-imgs" srcSet='../images/popular.png' alt="popular" />
                        <button id="cat-btn" onClick={() => filterItem("popular")}>
                          Customised
                        </button>
                      </Link>
                    </div>
                  </div>

                  <div className="right_images">
                    <div className="outdoor">
                      <Link to={{ pathname: '/types/corporate'}}>
                      <img id="cat-imgs" srcSet='../images/outdoor.png' alt="outdoor" />
                        <button id="cat-btn" onClick={() => filterItem("outdoor")}>
                          Corporate
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
            </div>
          </div>
  );
}

export default Shop;
