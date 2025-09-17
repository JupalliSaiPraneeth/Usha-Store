import React from "react";
import { FaTrash } from 'react-icons/fa'; // Import a trash icon

const CartDrawer = ({ isOpen, onClose, items, title, onRemoveItem }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target.className === "drawer-overlay show") {
      onClose();
    }
  };

  return (
    <div className={`drawer-overlay ${isOpen ? "show" : ""}`} onClick={handleOverlayClick}>
      <div className={`drawer ${isOpen ? "show" : ""}`}>
        <button className="drawer-close-btn" onClick={onClose}>&times;</button>
        <h2>{title}</h2>
        
        {items.length === 0 ? (
          <p className="drawer-empty">No items added yet</p>
        ) : (
          <ul className="drawer-list">
            {items.map((item, idx) => (
              <li key={idx} className="drawer-item">
                <img src={item.img} alt={item.name} className="drawer-img" />
                <div className="drawer-item-info">
                  <p className="drawer-item-name">{item.name}</p>
                  <p className="drawer-item-price">{item.price}</p>
                </div>
                
                {/* ✅ The new remove button */}
                {onRemoveItem && (
                  <button 
                    className="drawer-remove-btn" 
                    onClick={() => onRemoveItem(item)}
                    title="Remove item"
                  >
                    <FaTrash />
                  </button>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;