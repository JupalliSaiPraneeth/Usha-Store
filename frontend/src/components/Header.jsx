/* eslint-disable no-undef */
import React, { useState, useEffect, useRef } from "react";
import {
  FaHome,
  FaStar,
  FaHeart,
  FaShoppingCart,
  FaUser,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Header = ({
  setIsAuthenticated,
  user,
  cartCount,
  favCount,
  onCartClick,
  onFavClick,
  setUser,
}) => {
  const [showFull, setShowFull] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef();

  // Animate logo
  useEffect(() => {
    const timer = setTimeout(() => setShowFull(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    if (setUser) setUser(null);
  };

  return (
    <div className="top-page">
      <header>
        {/* Logo */}
        <h2 className={`logo ${showFull ? "colors" : ""}`}>
          {!showFull ? (
            <b className="high">US</b>
          ) : (
            <>
              <b className="high">U</b>sha <b className="high">S</b>tore
            </>
          )}
        </h2>

        {/* Search */}
        <div className="search-box">
          <input className="Search-bar" type="search" placeholder="Search" />
          <FaSearch className="search-icon" />
        </div>

        {/* 🔹 Hamburger (mobile only) */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(true)}
        >
          <FaBars />
        </button>

        {/* 🔹 Desktop Nav */}
        <nav className="desktop-nav">
          <ul><a href="#"><FaHome /> Home</a></ul>
          <ul><a href="#"><FaStar /> Best Selling</a></ul>
          <ul>
            <a href="#" onClick={(e) => { e.preventDefault(); onFavClick(); }}>
              <FaHeart /> Favourites ({favCount})
            </a>
          </ul>
          <ul>
            <a href="#" onClick={(e) => { e.preventDefault(); onCartClick(); }}>
              <FaShoppingCart /> Cart ({cartCount})
            </a>
          </ul>
          <ul className="user-icon" ref={dropdownRef}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setDropdownOpen(!dropdownOpen);
              }}
              style={{ display: "flex", alignItems: "center", gap: "6px" }}
            >
              <FaUser /> {user ? user.name : "Guest"}
            </a>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </ul>
        </nav>

        {/* 🔹 Mobile Fullscreen Menu */}
        {menuOpen && (
          <div className="mobile-menu">
            <button className="close-btn" onClick={() => setMenuOpen(false)}>
              <FaTimes />
            </button>
            <ul><a href="#"><FaHome /> Home</a></ul>
            <ul><a href="#"><FaStar /> Best Selling</a></ul>
            <ul>
              <a href="#" onClick={(e) => { e.preventDefault(); onFavClick(); setMenuOpen(false); }}>
                <FaHeart /> Favourites ({favCount})
              </a>
            </ul>
            <ul>
              <a href="#" onClick={(e) => { e.preventDefault(); onCartClick(); setMenuOpen(false); }}>
                <FaShoppingCart /> Cart ({cartCount})
              </a>
            </ul>
            <ul>
              <a href="#"><FaUser /> {user ? user.name : "Guest"}</a>
            </ul>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
