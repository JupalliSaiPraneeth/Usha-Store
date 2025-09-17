import React from "react";
import { FaPlus, FaHeart } from "react-icons/fa";
// ❌ No axios needed


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


// ✅ FIXED: Uses props from App.jsx
const Electronics = ({ addToCart, addToFavourites, openDetails }) => {
  return (
    <div className="laptop-container">
      <h2 className="lapy-tag">New Gen</h2>
      <div className="laptop-layer">
        {laptops.map((lap) => (
          <div key={lap.id} className="lapy" onClick={() => openDetails(lap)}>
            <img src={lap.img} alt={lap.name} className="lapy-image" />
            <p className="lapy-info">{lap.name}</p>
            <hr />
            <h3 className="lapy-cost">{lap.price}</h3>
            <div className="lapy-actions">
              <FaPlus
                className="plus-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(lap); // ✅ Uses prop
                  // ❌ Alert removed, App.jsx handles it
                }}
              />
              <FaHeart
                className="fav-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  addToFavourites(lap); // ✅ Uses prop
                  // ❌ Alert removed, App.jsx handles it
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Electronics;