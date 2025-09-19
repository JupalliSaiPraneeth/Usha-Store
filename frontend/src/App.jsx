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

  const [searchResults, setSearchResults] = useState([]); // ✅ new state
  const [allProducts, setAllProducts] = useState([]); // ✅ to store all products

  const API = "https://usha-store.onrender.com"; // replace with your backend (deploy link in prod)

  // This will run when the app first loads OR when isAuthenticated changes
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (token && userData) {
      setIsAuthenticated(true);
      setUser(JSON.parse(userData));
      fetchCounts();
    }

    // ✅ collect all products from static components
    collectAllProducts();
  }, [isAuthenticated]);

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

  // ✅ Collect products from all components
const collectAllProducts = () => {
  const laptops = [
    {
      id: 1,
      name: "HP OmniBook 5 OLED",
      img: "https://m.media-amazon.com/images/I/71fHNU8KnQL._AC_UY327_FMwebp_QL65_.jpg",
      price: "₹71,345",
      desc: "Snapdragon X Processor, 16GB LPDDR5x, 1TB SSD, 2K OLED 14'', Win11, 1.35kg."
    },
    {
      id: 2,
      name: "HP Victus i7",
      img: "https://m.media-amazon.com/images/I/713r9mseXdL._SX679_.jpg",
      price: "₹1,17,341",
      desc: "13th Gen Intel i7, RTX 5060 8GB, 24GB DDR5, 1TB SSD, RGB, 15.6'' FHD 144Hz."
    },
    {
      id: 3,
      name: "Dell DB14255",
      img: "https://m.media-amazon.com/images/I/71CTMPawqzL._SX679_.jpg",
      price: "₹75,233",
      desc: "R5-340 AI Processor, 16GB RAM, 512GB SSD, 14'' FHD+, Radeon Graphics."
    },
    {
      id: 4,
      name: "ASUS Gaming V16",
      img: "https://m.media-amazon.com/images/I/71hrfXUTzML._SX679_.jpg",
      price: "₹73,454",
      desc: "Intel Core 5 210H, RTX 4050, 16GB RAM, 512GB SSD, 16'' 144Hz Gaming Laptop."
    },
    {
      id: 5,
      name: "Apple MacBook Air M4",
      img: "https://m.media-amazon.com/images/I/416e1B8V75L._SY300_SX300_QL70_FMwebp_.jpg",
      price: "₹85,343",
      desc: "Apple M4 chip, 10-core CPU, 8-core GPU, 16GB Memory, 256GB SSD, Midnight."
    },
    {
      id: 6,
      name: "Acer ALG",
      img: "https://m.media-amazon.com/images/I/51JH5OhIx2L.jpg",
      price: "₹59,273",
      desc: "Intel i5 13th Gen, RTX 3050 6GB, 16GB RAM, 512GB SSD, 15.6'' 144Hz Display."
    },
    {
      id: 7,
      name: "Lenovo Yoga Slim 7",
      img: "https://m.media-amazon.com/images/I/71VkbzKU+FL._SX679_.jpg",
      price: "₹80,122",
      desc: "Intel Core Ultra 5, 16GB RAM, 512GB SSD, OLED Display, 1.39Kg, AI PC."
    },
    {
      id: 8,
      name: "Samsung Galaxy Book3 Pro",
      img: "https://m.media-amazon.com/images/I/71B0Gu0Iz1L._SX679_.jpg",
      price: "₹1,05,043",
      desc: "Intel 13th Gen i5 Evo, 14'' AMOLED 3K 120Hz, 16GB RAM, 512GB SSD, 1.17Kg."
    },
    {
      id: 9,
      name: "Microsoft Surface Laptop 4",
      img: "https://m.media-amazon.com/images/I/717wZ9Wh4eL._SX679_.jpg",
      price: "₹98,122",
      desc: "13.5'' Touch, Intel i5-1135G7, 16GB RAM, 512GB SSD, Windows 11 Home."
    },
    {
      id: 10,
      name: "Alienware 16 Aurora",
      img: "https://m.media-amazon.com/images/I/614ni2KSk5L._SX679_.jpg",
      price: "₹1,31,990",
      desc: "Intel Core 7 240H, 16GB DDR5, 1TB SSD, RTX 5060 8GB, Cryo Cooling, 2.57Kg."
    }
  ];

  const woofersData = [
    { id: 11, name: "boAt Airdopes 800", img: "https://m.media-amazon.com/images/I/71cfqGWqgoL._SX522_.jpg", price: "1,632/-" },
    { id: 12, name: "OnePlus Nord Buds 2r", img: "https://m.media-amazon.com/images/I/51oMWaW7tKL._SX679_.jpg", price: "1,791/-" },
    { id: 13, name: "Noise  Buds VS601", img: "https://m.media-amazon.com/images/I/71g5FSQQl-L._SX522_.jpg", price: "1,002/-" },
    { id: 14, name: "Redmi Buds 6", img: "https://m.media-amazon.com/images/I/612h6+YrqQL._SX679_.jpg", price: "1,523/-" },
    { id: 15, name: "Apple AirPods 4", img: "https://m.media-amazon.com/images/I/61oCISLE+PL._AC_CR0%2C0%2C0%2C0_SX615_SY462_.jpg", price: "Currently Unavailable!" },
    { id: 16, name: "soundcore by Anker Q20i", img: "https://m.media-amazon.com/images/I/41-LcaT-aKL._SY300_SX300_QL70_FMwebp_.jpg", price: "4,023/-" },
    { id: 17, name: "boAt Rockerz 450", img: "https://m.media-amazon.com/images/I/71PBWIL5H3L._SX522_.jpg", price: "Currently Unavailable!" },
    { id: 18, name: "AILIHEN Kids Wired", img: "https://m.media-amazon.com/images/I/61nrH96ZbdL._SX522_.jpg", price: "1,799/-" },
    { id: 19, name: "pTron Studio Sports", img: "https://m.media-amazon.com/images/I/51zn3KXM94L._SX522_.jpg", price: "1,373/-" },
    { id: 20, name: "JBL Tune 510BT", img: "https://m.media-amazon.com/images/I/31SNd2tQupS._SY300_SX300_QL70_FMwebp_.jpg", price: "2,834/-" }
  ];

  const Dress = [
    { id: 21, name: "AMERICAN CREW Men's Regular Fit Polos", img: "https://m.media-amazon.com/images/I/41BBw94VSEL._SX679_.jpg", price: "₹699" },
    { id: 22, name: "U.S Polo Shirt", img: "https://m.media-amazon.com/images/I/61174EIQ1NL._SX569_.jpg", price: "₹899" },
    { id: 23, name: "Men's Hoddie", img: "https://m.media-amazon.com/images/I/61Uz4aSs5oL._SX569_.jpg", price: "₹999" },
    { id: 24, name: "Men's Jacket", img: "https://m.media-amazon.com/images/I/612X1NueIHL._SX615_.jpg", price: "₹1,299" },
    { id: 25, name: "Party fit", img: "https://m.media-amazon.com/images/I/51RgKA1pC1L._SX480_.jpg", price: "₹1,499" },
    { id: 26, name: "DEELMO", img: "https://m.media-amazon.com/images/I/71okmF4khEL._SX480_.jpg", price: "₹1,499" },
    { id: 27, name: "ROYALSCOUT", img: "https://m.media-amazon.com/images/I/61wI+nng-yL._SX480_.jpg", price: "₹1,499" },
    { id: 28, name: "DIVISIVE", img: "https://m.media-amazon.com/images/I/81fd-ukSKIL._SX679_.jpg", price: "₹1,499" },
    { id: 29, name: "100% pure Jacquard Kurta", img: "https://m.media-amazon.com/images/I/71MYoHK0krL._SY741_.jpg", price: "₹1,499" },
    { id: 30, name: "Color Silk Kurta with Pajama Set", img: "https://m.media-amazon.com/images/I/71fEn6KYojL._SY741_.jpg", price: "₹1,499" }
  ];

  const Dresses = [
    { id: 31, name: "Angoori Fashion Women Polka Dot Casual Shirt", img: "https://m.media-amazon.com/images/I/714oJHbmTZL._SY741_.jpg", price: "₹699" },
    { id: 32, name: "GoSriKi Women's Rayon Viscose Anarkali Printed Kurta", img: "https://m.media-amazon.com/images/I/71jF7678loL._SX569_.jpg", price: "₹899" },
    { id: 33, name: "GoSriKi Women's Rayon Viscose Straight Bandhej Printed Kurta", img: "https://m.media-amazon.com/images/I/61yF2fVlE6L._SX569_.jpg", price: "Currently Unavailable" },
    { id: 34, name: "Honky Tonky Women's Fit and Flare Dress", img: "https://m.media-amazon.com/images/I/812n+ulyy8L._SY741_.jpg", price: "₹1,299" },
    { id: 35, name: "KZULLY | Women A-line Dress with Pleats", img: "https://m.media-amazon.com/images/I/51Lk+TigaOL._SY741_.jpg", price: "₹1,499" },
    { id: 36, name: "SEVENQUEEN Women's Western Gown", img: "https://m.media-amazon.com/images/I/51wP5nEnoAL._SY741_.jpg", price: "₹1,499" },
    { id: 37, name: "C J Enterprise Women's Banarasi Saree", img: "https://m.media-amazon.com/images/I/51NbyetaNFL._SY741_.jpg", price: "₹1,499" },
    { id: 38, name: "Yashika Banarasi Kanjivaram Saree", img: "https://m.media-amazon.com/images/I/71zD6LNDRdL._SX679_.jpg", price: "₹1,499" },
    { id: 39, name: "VJ Fashion Women Kerala Silk Saree", img: "https://m.media-amazon.com/images/I/71UMFGwZ7YL._SY741_.jpg", price: "₹1,499" },
    { id: 40, name: "Kicha Gorgette Women's One Piece", img: "https://m.media-amazon.com/images/I/41qf7TVkL2L._SY741_.jpg", price: "₹1,499" }
  ];

  // ✅ Merge all arrays into one
  const allProducts = [...laptops, ...woofersData, ...Dress, ...Dresses];

  // ✅ Save to state
  setAllProducts(allProducts);
};


  // ✅ handle search
  const handleSearch = (query) => {
    if (!query) {
      setSearchResults([]);
      return;
    }

    const results = allProducts.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
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

      setCart(res.data);
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

      setFavourites(res.data);
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
        setUser={setUser}
        cartCount={cart.length}
        favCount={favourites.length}
        onCartClick={() => setIsCartOpen(true)}
        onFavClick={() => setIsFavOpen(true)}
        onSearch={handleSearch} // ✅ pass search handler
      />

      <div className="top-page" />

      {/* ✅ Search Results */}
      {searchResults.length > 0 ? (
        <div className="search-results">
          <h3>Search Results:</h3>
          <div className="products-box">
            {searchResults.map((product) => (
              <div
                key={product.id}
                className="product-card"
                onClick={() => openDetails(product)}
              >
                <img src={product.img} alt={product.name} className="product-image" />
                <h4>{product.name}</h4>
                <p>{product.price}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
                <button onClick={() => addToFavourites(product)}>❤</button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          {/* ✅ Normal homepage if no search */}
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
        </>
      )}

      {selectedProduct && (
        <ProductDetails product={selectedProduct} onClose={closeDetails} />
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
