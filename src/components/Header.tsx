import { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
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
           <NavLink to="/" className="nav-link">
    Home
  </NavLink>

  <NavLink to="/shop" className="nav-link">
    Shop
  </NavLink>

  <NavLink to="/contact" className="contact-btn">
    Contact
  </NavLink>
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
