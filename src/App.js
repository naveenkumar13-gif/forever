import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
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
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/footer";
import SearchBar from "./components/searchBar";


function InitializeAOS() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-in-out", 
      once: false, 
      disable: "mobile", 
    });
  }, []);

  return null;
}

// Refresh AOS on route change
function AOSWrapper({ children }) {
  const location = useLocation();

  useEffect(() => {
    AOS.refresh(); // Refresh AOS when route changes
  }, [location.pathname]);

  return children;
}

function App() {
  const [showSearch, setShowSearch] = useState(false);
    const [search, setSearch] = useState("");
  
  return (
    <div className="px-20  max-sm:px-5 max-sm:py-2">
      <BrowserRouter>
        <InitializeAOS />
        <AOSWrapper>
          <Navbar showSearch={showSearch} setShowSearch={setShowSearch} />
          <SearchBar showSearch={showSearch} setShowSearch={setShowSearch} search={search} setSearch={setSearch} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/collection"
              element={
                <Collection
                  showSearch={showSearch}
                  setShowSearch={setShowSearch}
                  search={search}
                  setSearch={setSearch}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/place-order" element={<PlaceOrder />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </AOSWrapper>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
