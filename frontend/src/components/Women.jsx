// src/components/Women.jsx
import React from "react";
import { FaPlus, FaHeart } from "react-icons/fa";
// ❌ No axios needed

const Dresses = [
  {
    id: 1,
    name: "Angoori Fashion Women Polka Dot Casual Shirt",
    img: "https://m.media-amazon.com/images/I/714oJHbmTZL._SY741_.jpg",
    price: "₹699",
  },
  {
    id: 2,
    name: "GoSriKi Women's Rayon Viscose Anarkali Printed Kurta",
    img: "https://m.media-amazon.com/images/I/71jF7678loL._SX569_.jpg",
    price: "₹899",
  },
  {
    id: 3,
    name: "GoSriKi Women's Rayon Viscose Straight Bandhej Printed Kurta",
    img: "https://m.media-amazon.com/images/I/61yF2fVlE6L._SX569_.jpg",
    price: "Currently Unavailable",
  },
  {
    id: 4,
    name: "Honky Tonky Women's Fit and Flare Floral Print Crepe Puff Sleeves Casual Dress",
    img: "https://m.media-amazon.com/images/I/812n+ulyy8L._SY741_.jpg",
    price: "₹1,299",
  },
  {
    id: 5,
    name: "KZULLY | Women A-line Dress with Pleats",
    img: "https://m.media-amazon.com/images/I/51Lk+TigaOL._SY741_.jpg",
    price: "₹1,499",
  },
  {
    id: 6,
    name: "SEVENQUEEN Women's Western Gown High Low One Piece",
    img: "https://m.media-amazon.com/images/I/51wP5nEnoAL._SY741_.jpg",
    price: "₹1,499",
  },
  {
    id: 7,
    name: "C J Enterprise Women's Banarasi Saree",
    img: "https://m.media-amazon.com/images/I/51NbyetaNFL._SY741_.jpg",
    price: "₹1,499",
  },
  {
    id: 8,
    name: "Yashika Women's Trendy Banarasi Kanjivaram Navy Color Art Silk Saree",
    img: "https://m.media-amazon.com/images/I/71zD6LNDRdL._SX679_.jpg",
    price: "₹1,499",
  },
  {
    id: 9,
    name: "VJ Fashion Women Kerala Silk Blend Saree With Blouse Piece",
    img: "https://m.media-amazon.com/images/I/71UMFGwZ7YL._SY741_.jpg",
    price: "₹1,499",
  },
  {
    id: 10,
    name: "Kicha Gorgette Women's One Piece Dress",
    img: "https://m.media-amazon.com/images/I/41qf7TVkL2L._SY741_.jpg",
    price: "₹1,499",
  },
  {
    id: 11,
    name: "Madhuram Women's Georgette Lehenga",
    img: "https://m.media-amazon.com/images/I/61WEWDgTpxL._SY741_.jpg",
    price: "₹1,499",
  },
  {
    id: 12,
    name: "Leriya Fashion Stylish Korean Tops for Women – Oversized T-Shirts",
    img: "https://m.media-amazon.com/images/I/611bctArLKL._AC_UL480_FMwebp_QL65_.jpg",
    price: "₹1,499",
  },
];

// ✅ FIXED: Uses props from App.jsx
const Womens = ({ addToCart, addToFavourites, openDetails }) => {
  return (
    <div className="carousel-container">
      <div className="carousel">
        {Dresses.map((product) => (
          <div className="product-card" key={product.id}>
            <div
              onClick={() => openDetails(product)}
              style={{ cursor: "pointer" }}
            >
              <img src={product.img} alt={product.name} />
              <h4>{product.name}</h4>
              <p>{product.price}</p>
            </div>

            <div className="product-actions">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(product); // ✅ Uses prop
                }}
                className="add-btn"
                title="Add to Cart"
              >
                <FaPlus />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  addToFavourites(product); // ✅ Uses prop
                }}
                className="fav-btn"
                title="Add to Favourites"
              >
                <FaHeart />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Womens;