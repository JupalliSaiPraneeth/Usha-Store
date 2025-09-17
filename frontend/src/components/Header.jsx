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
  setUser, // ✅ added so handleLogout clears App state
}) => {
  const [showFull, setShowFull] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // ✅ mobile toggle
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

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    if (setUser) setUser(null); // ✅ clear user in App state
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

        {/* 🔹 Mobile toggle button */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Nav links */}
        <nav className={menuOpen ? "nav-open" : ""}>
          <ul>
            <a href="#">
              <FaHome /> Home
            </a>
          </ul>
          <ul>
            <a href="#">
              <FaStar /> Best Selling
            </a>
          </ul>
          <ul>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onFavClick();
              }}
            >
              <FaHeart /> Favourites ({favCount})
            </a>
          </ul>
          <ul>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onCartClick();
              }}
            >
              <FaShoppingCart /> Cart ({cartCount})
            </a>
          </ul>

          {/* User dropdown */}
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
      </header>
    </div>
  );
};

export default Header;
