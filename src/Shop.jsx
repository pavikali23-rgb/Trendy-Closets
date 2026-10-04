import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Shop() {

  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

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

    <div className="shop-page">

      <h1>Shop</h1>

      <p className="shop-intro">
        Explore our latest women's fashion collection.
      </p>

      <div className="shop-products">

        {products.map((item) => (

          <div
            className="product-card"
            key={item.id}
            onClick={() => navigate(`/product/${item.id}`)}
          >

            <img
              src={item.thumbnail}
              alt={item.title}
            />

            <h3>{item.title}</h3>

            <p className="price">
              ${item.price}
            </p>

            <button
              className="cart-btn"
              onClick={(e) => e.stopPropagation()}
            >
              Add to Cart
            </button>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Shop;