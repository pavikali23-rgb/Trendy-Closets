
import "./App.css";

function Sidebar() {
  return (
   
    <div className="sidebar">
      <h2>Categories</h2>

      <ul className="category-list">
        <li>Sarees</li>
        <li>Kurtis</li>
        <li>Western Dresses</li>
        <li>Tops</li>
        <li>Jeans</li>
        <li>Footwear</li>
        <li>Accessories</li>
      </ul>

      <hr />

      <h3>Price Range</h3>
      <label>
        <input type="checkbox" /> Under ₹500
      </label>
      <label>
        <input type="checkbox" /> ₹500 - ₹1000
      </label>
      <label>
        <input type="checkbox" /> ₹1000 - ₹2000
      </label>

      <hr />

      <h3>Size</h3>
      <label>
        <input type="checkbox" /> S
      </label>
      <label>
        <input type="checkbox" /> M
      </label>
      <label>
        <input type="checkbox" /> L
      </label>
      <label>
        <input type="checkbox" /> XL
      </label>
    <hr />

    <h3>Pattern</h3>

    <label>
    <input type="checkbox" /> Floral
    </label>

    <label>
    <input type="checkbox" /> Printed
    </label>

    <label>
    <input type="checkbox" /> Plain
    </label>

    <label>
    <input type="checkbox" /> Striped
    </label>

    <hr />

    <h3>Availability</h3>

    <label>
    <input type="checkbox" /> In Stock
    </label>

    <label>
    <input type="checkbox" /> Out of Stock
    </label>
    </div>
    
  );
}

export default Sidebar;