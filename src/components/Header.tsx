import { useState } from "react";
import "./Header.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <div className="navbar-logo">
          <div className="beam_header"> MEDBEAM <span>CARE</span></div>
          <div className="till_now">Since 1988</div>
         
        </div>

        {/* Menu */}
        <nav className={`navbar-menu ${menuOpen ? "active" : ""}`}>
          <a href="/">Home</a>
          <a href="/products">Shop</a>
          <a href="/contact" className="contact-btn">Contact</a>
        </nav>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
