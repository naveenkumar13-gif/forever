import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/index";
import Collection from "./pages/collection/index";
import About from "./pages/about/index";
import Contact from "./pages/contact/index";
import Cart from "./pages/cart/index";
import Product from "./pages/product/index";
import Login from "./pages/login/index";
import PlaceOrder from "./pages/placeOrder/index";
import Orders from "./pages/orders/index";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="px-20 py-5 max-sm:px-5 max-sm:py-2">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
