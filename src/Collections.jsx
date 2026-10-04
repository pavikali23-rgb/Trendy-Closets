import React from "react";

function Collections() {
  return (
    <div className="shop-page">

      <h1>Collections</h1>

      <p className="shop-intro">
        Explore our latest fashion collections.
      </p>

      <div className="shop-products">

        <div className="product-card">
          <h2>Saree Collection</h2>
          <p>Beautiful sarees for every occasion.</p>
        </div>

        <div className="product-card">
          <h2>Kurtis Collection</h2>
          <p>Trendy and comfortable kurtis.</p>
        </div>

        <div className="product-card">
          <h2>Western Collection</h2>
          <p>Modern western outfits.</p>
        </div>

      </div>

    </div>
  );
}

export default Collections;