import React from "react";

const ProductDetails = ({ product, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>✖</button>
        <img src={product.img} alt={product.name} />
        <h2>{product.name}</h2>
        <p>{product.desc}</p>
        <h3>{product.price}</h3>
      </div>
    </div>
  );
};

export default ProductDetails;
