import React, { useEffect } from "react";
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
import "aos/dist/aos.css"; // Import AOS styles
import Footer from "./components/footer";

// Initialize AOS when the app loads
function InitializeAOS() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (ms)
      easing: "ease-in-out", // Easing type
      once: false, // Animate only once
      disable: "mobile", // Disable on mobile (optional)
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
  return (
    <div className="px-20 py-5 max-sm:px-5 max-sm:py-2">
      <BrowserRouter>
        <InitializeAOS />
        <AOSWrapper>
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
        </AOSWrapper>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
