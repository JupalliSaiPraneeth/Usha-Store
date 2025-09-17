// App.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

import Auth from "./components/Auth";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Products from "./components/Products";
import Products2 from "./components/Products2";
import Electronics from "./components/Electronics";
import Woofers from "./components/Woofers";
import ProductCarousel from "./components/ProductCarousel";
import Womens from "./components/Women";
import ProductDetails from "./components/ProductDetails";
import CartDrawer from "./components/CartDrawer";
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const [cart, setCart] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavOpen, setIsFavOpen] = useState(false);

  const API = "http://localhost:5000"; // Your backend server

  // This will run when the app first loads OR when isAuthenticated changes
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (token && userData) {
      setIsAuthenticated(true);
      setUser(JSON.parse(userData));
      // Fetch initial cart and favourites
      fetchCounts();
    }
  }, [isAuthenticated]); // This fixes the login bug

  // fetch cart & favourites
  const fetchCounts = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const [cartRes, favRes] = await Promise.all([
        axios.get(`${API}/cart`, { headers: { Authorization: `Bearer ${token}` } }),
        axios.get(`${API}/favourites`, { headers: { Authorization: `Bearer ${token}` } }),
      ]);

      setCart(cartRes.data);
      setFavourites(favRes.data);
    } catch (err) {
      console.error("Error fetching cart/favourites:", err);
    }
  };

  // Add to Cart (Toggle)
  const addToCart = async (product) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return alert("Please login first!");

      const res = await axios.post(
        `${API}/cart`, 
        { product }, 
        { headers: { Authorization: `Bearer ${token}` } }
      );
      
      setCart(res.data); // Update state from server response

      const isInCart = res.data.some(p => p.name === product.name);
      
      if (isInCart) {
        alert(`${product.name} added to Cart!`);
      } else {
        alert(`${product.name} removed from Cart.`);
      }

    } catch (err) {
      console.error("Add to cart error", err);
      alert("Error managing cart");
    }
  };

  // Add to Favourites (Toggle)
  const addToFavourites = async (product) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return alert("Please login first!");

      const res = await axios.post(
        `${API}/favourites`, 
        { product }, 
        { headers: { Authorization: `Bearer ${token}` } }
      );
      
      setFavourites(res.data); // Update state from server response

      const isFavourited = res.data.some(p => p.name === product.name);
      
      if (isFavourited) {
        alert(`${product.name} added to Favourites!`);
      } else {
        alert(`${product.name} removed from Favourites.`);
      }

    } catch (err) {
      console.error("Favourites error", err);
      alert("Error managing favourites");
    }
  };

  const openDetails = (product) => setSelectedProduct(product);
  const closeDetails = () => setSelectedProduct(null);

  if (!isAuthenticated) {
    return <Auth setIsAuthenticated={setIsAuthenticated} setUser={setUser} />;
  }

  return (
    <>
      <Header
        setIsAuthenticated={setIsAuthenticated}
        user={user}
        cartCount={cart.length}
        favCount={favourites.length}
        onCartClick={() => setIsCartOpen(true)}
        onFavClick={() => setIsFavOpen(true)}
      />

      <div className="top-page" />

      <Slider />
      <Products />
      <Products2 />

      <Electronics 
        addToCart={addToCart} 
        addToFavourites={addToFavourites} 
        openDetails={openDetails} 
      />
      <Woofers 
        addToCart={addToCart} 
        addToFavourites={addToFavourites} 
        openDetails={openDetails} 
      />
      <ProductCarousel 
        addToCart={addToCart} 
        addToFavourites={addToFavourites} 
        openDetails={openDetails} 
      />
      <Womens 
        addToCart={addToCart} 
        addToFavourites={addToFavourites} 
        openDetails={openDetails} 
      />

      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onClose={closeDetails}
        />
      )}

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart} 
        title="Your Cart"
        onRemoveItem={addToCart} 
      />
      
      <CartDrawer 
        isOpen={isFavOpen} 
        onClose={() => setIsFavOpen(false)} 
        items={favourites} 
        title="Your Favourites"
        onRemoveItem={addToFavourites} 
      />
    </>
  );
}

export default App;