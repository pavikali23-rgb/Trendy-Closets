import React, { useState, useEffect } from "react";

import fashion from "./assets/fashion.png";
import dress1 from "./assets/dress1.jpg";
import dress2 from "./assets/dress2.jpg";
import dress3 from "./assets/dress3.jpg";

function Mainbar() {

  const [products, setProducts] = useState([]);

  // GET API
  useEffect(() => {

    async function getData() {

      const response = await fetch(
        "https://dummyjson.com/products/category/womens-dresses"
      );

      const data = await response.json();

      setProducts(data.products);
    }

    getData();

  }, []);


  return (
    <div className="mainbar-container">


      {/* Hero Section */}

      <div className="main-content">

        <div className="hero-content">

          <h4>NEW COLLECTION</h4>

          <h1>
            Style That
            <br />
            Speaks
          </h1>

          <p>
            Trendy outfits for every mood,
            <br />
            every moment.
          </p>

          <button className="shop-btn">
            Shop Now →
          </button>

        </div>


        <div className="hero-image">

          <img
            src={fashion}
            alt="Fashion Collection"
          />

        </div>

      </div>


      {/* Collection Section */}

      <div className="collection-section">

        <h2>
          Explore Our Collection
        </h2>


        <div className="collection-images">


          {/* Local Product 1 */}

          <div className="product-card">

            <img
              src={dress1}
              alt="Western Wear"
            />

            <h3>
              Western Wear
            </h3>

            <p className="price">
              ₹999
            </p>

            <button className="cart-btn">
              Add to Cart
            </button>

          </div>


          {/* Local Product 2 */}

          <div className="product-card">

            <img
              src={dress2}
              alt="Kurtis Wear"
            />

            <h3>
              Kurtis Wear
            </h3>

            <p className="price">
              ₹799
            </p>

            <button className="cart-btn">
              Add to Cart
            </button>

          </div>


          {/* Local Product 3 */}

          <div className="product-card">

            <img
              src={dress3}
              alt="Wedding Wear"
            />

            <h3>
              Wedding Wear
            </h3>

            <p className="price">
              ₹1,499
            </p>

            <button className="cart-btn">
              Add to Cart
            </button>

          </div>


          {/* GET API Products */}

          {products.map((item) => (

            <div
              className="product-card"
              key={item.id}
            >

              <img
                src={item.thumbnail}
                alt={item.title}
              />

              <h3>
                {item.title}
              </h3>

              <p className="price">
                ${item.price}
              </p>

              <button className="cart-btn">
                Add to Cart
              </button>

            </div>

          ))}


        </div>

      </div>

    </div>
  );
}

export default Mainbar;