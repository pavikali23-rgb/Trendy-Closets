
import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";
import Mainbar from "./Mainbar.jsx";
import Contact from "./Contact.jsx";
import Shop from "./Shop.jsx";
import ProductDetails from "./ProductDetails.jsx";

function App() {
  const [search, setSearch] = useState("");

  return (
    <BrowserRouter>
      <Navbar
        search={search}
        setSearch={setSearch}
      />

      <div className="content">
        <Sidebar />

        <Routes>
          <Route
            path="/"
            element={<Mainbar search={search} />}
          />

          <Route
            path="/shop"
            element={<Shop />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/product/:id"
            element={<ProductDetails />}
          />

          <Route
            path="*"
            element={<Navigate to="/" />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
