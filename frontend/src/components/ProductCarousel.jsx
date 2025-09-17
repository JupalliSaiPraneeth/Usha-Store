import React from "react";
import { FaPlus, FaHeart } from "react-icons/fa";
// ❌ No axios needed

const Dress = [
  { id: 1, name: "AMERICAN CREW Men's Regular Fit Polos", img: "https://m.media-amazon.com/images/I/41BBw94VSEL._SX679_.jpg", price: "₹699" },
  { id: 2, name: "U.S Polo Shirt", img: "https://m.media-amazon.com/images/I/61174EIQ1NL._SX569_.jpg", price: "₹899" },
  { id: 3, name: "Men's Hoddie", img: "https://m.media-amazon.com/images/I/61Uz4aSs5oL._SX569_.jpg", price: "₹999" },
  { id: 4, name: "Men's Jacket", img: "https://m.media-amazon.com/images/I/612X1NueIHL._AC_CR0%2C0%2C0%2C0_SX615_SY462_.jpg", price: "₹1,299" },
  { id: 5, name: "Party fit", img: "https://m.media-amazon.com/images/I/51RgKA1pC1L._AC_UL480_FMwebp_QL65_.jpg", price: "₹1,499" },
  { id: 6, name: "DEELMO", img: "https://m.media-amazon.com/images/I/71okmF4khEL._AC_UL480_FMwebp_QL65_.jpg", price: "₹1,499" },
  { id: 7, name: "ROYALSCOUT", img: "https://m.media-amazon.com/images/I/61wI+nng-yL._AC_UL480_FMwebp_QL65_.jpg", price: "₹1,499" },
  { id: 8, name: "DIVISIVE", img: "https://m.media-amazon.com/images/I/81fd-ukSKIL._SX679_.jpg", price: "₹1,499" },
  { id: 9, name: "100% pure Jacquard Kurta", img: "https://m.media-amazon.com/images/I/71MYoHK0krL._SY741_.jpg", price: "₹1,499" },
  { id: 10, name: "Color Silk Kurta with Pajama Set", img: "https://m.media-amazon.com/images/I/71fEn6KYojL._SY741_.jpg", price: "₹1,499" },
  { id: 11, name: "Handloom Woven Design Indo-Western Sherwani", img: "https://m.media-amazon.com/images/I/61gFIuw1JRL._SX679_.jpg", price: "₹1,499" },
  { id: 12, name: "Dhingra Mens Slim Fit Peak Lapel Collar Tuxedo 3pcs Suit", img: "https://m.media-amazon.com/images/I/517EG4or+eL.jpg", price: "₹1,499" },
];

// ✅ FIXED: Uses props from App.jsx
const ProductCarousel = ({ addToCart, addToFavourites, openDetails }) => {
  return (
    <div className="carousel-container">
      <div className="carousel">
        {Dress.map((product) => (
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

export default ProductCarousel;