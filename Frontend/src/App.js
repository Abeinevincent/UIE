import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RequestQuote from "./pages/RequestQuote";
import OrderTracker from "./pages/OderTracker";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Payments from "./pages/Payments";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import MenuItems from "./components/MenuItems";



function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <Topbar />
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MenuItems menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Routes>
        <Route index path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/trackorder" element={<OrderTracker />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="/requestquote" element={<RequestQuote />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/payments" element={<Payments />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
