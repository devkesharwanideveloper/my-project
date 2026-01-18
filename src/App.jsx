import React from "react";
import Navbar from "./components/Navbar";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductDetail from "./pages/ProductDetail";
import Footer from "./components/Footer";
import OrderConfirmetion from "./pages/OrderConfirmetion";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="  ">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<ProductList />} />

          <Route path="/product/:id" element={<ProductDetail />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
