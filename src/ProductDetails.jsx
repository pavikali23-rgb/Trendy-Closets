import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {

  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {

    async function getProduct() {

      const response = await fetch(
        `https://dummyjson.com/products/${id}`
      );

      const data = await response.json();

      setProduct(data);
    }

    getProduct();

  }, [id]);


  if (!product) {
    return <h2>Loading...</h2>;
  }


  return (
    <div className="product-details">

      <img
        src={product.thumbnail}
        alt={product.title}
      />

      <div>

        <h1>{product.title}</h1>

        <h2>${product.price}</h2>

        <p>{product.description}</p>

        <p>⭐ {product.rating}</p>

        <p>Brand: {product.brand}</p>

        <button className="cart-btn">
          Add to Cart
        </button>

      </div>

    </div>
  );
}

export default ProductDetails;