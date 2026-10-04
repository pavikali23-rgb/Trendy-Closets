
import React from 'react'
import './App.css'
import { Link } from "react-router-dom";
import TrendyCloset from './assets/TrendyCloset.png'

export default function Navbar({ search, setSearch }) {
  return (
    <div>
      <div className='Navbar'>
        <img src={TrendyCloset} alt="Trendy Closet Logo" />
        <h2>Trendy Closet</h2>

        <div className="search">
          <input
            type="text"
            placeholder="Search dresses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>🔍</button>
        </div>
<div className="list">

  <Link to="/">Home</Link>

  <Link to="/Shop">Shop</Link>

  <Link to="/Collections">Collections</Link>

  <Link to="/">New Arrivals</Link>

  <Link to="/contact">Contact</Link>

</div>
      </div>
    </div>
  )
}