import React, { useState, useEffect } from "react";
import "./Header.css";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <header className="header">
      <div className="header-container">

        {/* LOGO */}
        <div className="header-logo">
          <img src={Logo} alt="logo" />
        </div>

        {/* HAMBURGER */}
        <div className="mobile-menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </div>

        {/* NAVIGATION */}
        <nav className={`nav-menu ${isOpen ? "open" : ""}`}>
          <ul>

            <li><a href="/" onClick={closeMenu}>Home</a></li>

            <li><a href="/aboutus" onClick={closeMenu}>About Us</a></li>
 <li><a href="/ourpeople" onClick={closeMenu}>Our People</a></li>

  {/* <li className="dropdown">
              <a href="/aboutus" onClick={closeMenu}>About Us</a>

              <ul className="dropdown-menu">
                <li><a href="/ourpeople" onClick={closeMenu}>Our People</a></li>
                
              </ul>
            </li> */}
            {/* ⭐ OUR WORK WITH DROPDOWN */}

            <li className="dropdown">
              <a href="/ourwork" onClick={closeMenu}>Our Work</a>

              <ul className="dropdown-menu">
                <li><a href="/healthcare" onClick={closeMenu}>Healthcare Development</a></li>
                <li><a href="/educationdevelopment" onClick={closeMenu}>Education & Knowledge Enhancement</a></li>
                <li><a href="/skilldevelopment" onClick={closeMenu}>Skill Development</a></li>
                <li><a href="/ruralhealthdevelopment" onClick={closeMenu}>Rural Health Development</a></li>
              </ul>
            </li>

            <li><a href="/blogs" onClick={closeMenu}>Blog</a></li>
            <li><a href="/impact" onClick={closeMenu}>Impact</a></li>
            <li><a href="/getinvolved" onClick={closeMenu}>Get Involved</a></li>
            <li><a href="/contact" onClick={closeMenu}>Contact</a></li>
          </ul>

          {/* MOBILE DONATE BUTTON */}
          <a href="https://pmny.in/KI4pIX0tZoST" target="_blank">
            <button className="join-btn mobile-join-btn">
              <span className="circle">»</span> Become a Contributor
            </button>
          </a>
        </nav>

        {/* DESKTOP BUTTON */}
        <div className="header-right">
          <a href="https://pmny.in/KI4pIX0tZoST" target="_blank">
            <button className="join-btn">
              <span className="circle">»</span> Become a Contributor
            </button>
          </a>
        </div>
      </div>

      {isOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </header>
  );
};

export default Header;
