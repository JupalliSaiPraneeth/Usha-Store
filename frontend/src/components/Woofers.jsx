import React from "react";
import { FaPlus, FaHeart } from "react-icons/fa";
// ❌ No axios needed

const woofersData = [
  { id: 1, name: "boAt Airdopes 800", img: "https://m.media-amazon.com/images/I/71cfqGWqgoL._SX522_.jpg", price: "1,632/-" },
  { id: 2, name: "OnePlus Nord Buds 2r", img: "https://m.media-amazon.com/images/I/51oMWaW7tKL._SX679_.jpg", price: "1,791/-" },
  { id: 3, name: "Noise  Buds VS601", img: "https://m.media-amazon.com/images/I/71g5FSQQl-L._SX522_.jpg", price: "1,002/-" },
  { id: 4, name: "Redmi Buds 6", img: "https://m.media-amazon.com/images/I/612h6+YrqQL._SX679_.jpg", price: "1,523/-" },
  { id: 5, name: "Apple AirPods 4", img: "https://m.media-amazon.com/images/I/61oCISLE+PL._AC_CR0%2C0%2C0%2C0_SX615_SY462_.jpg", price: "Currently Unavailable!" },
  { id: 6, name: "soundcore by Anker Q20i", img: "https://m.media-amazon.com/images/I/41-LcaT-aKL._SY300_SX300_QL70_FMwebp_.jpg", price: "4,023/-" },
  { id: 7, name: "boAt Rockerz 450", img: "https://m.media-amazon.com/images/I/71PBWIL5H3L._SX522_.jpg", price: "Currently Unavailable!" },
  { id: 8, name: "AILIHEN Kids Wired", img: "https://m.media-amazon.com/images/I/61nrH96ZbdL._SX522_.jpg", price: "1,799/-" },
  { id: 9, name: "pTron Studio Sports", img: "https://m.media-amazon.com/images/I/51zn3KXM94L._SX522_.jpg", price: "1,373/-" },
  { id: 10, name: "JBL Tune 510BT", img: "https://m.media-amazon.com/images/I/31SNd2tQupS._SY300_SX300_QL70_FMwebp_.jpg", price: "2,834/-" },
];

// ✅ FIXED: Uses props from App.jsx
const Woofers = ({ addToCart, addToFavourites, openDetails }) => {
  return (
    <div className="woofers-container">
      <h2 className="speak-tag">Aww Woofers!</h2>
      <div className="woofers-layer">
        {woofersData.map((product) => (
          <div className="speak" key={product.id}>
            <div onClick={() => openDetails(product)} style={{ cursor: "pointer" }}>
              <img src={product.img} alt={product.name} className="speak-image" />
              <h3 className="speak-info">{product.name}</h3>
              <hr />
              <h3 className="speak-cost">{product.price}</h3>
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

export default Woofers;