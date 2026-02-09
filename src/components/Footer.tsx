import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-section">
          <h2 className="footer-logo">Medbeam</h2>
          <p className="footer-desc">
            Trusted medical equipment and sleep therapy solutions
            delivered with care and reliability.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Products</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li>Help Center</li>
            <li>Warranty</li>
            <li>Returns</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>📞 +91 8929283292</p>
          <p>✉️ medbeam@gmail.com</p>
          <p>📍 India</p>
        </div>

      </div>
    
      <div className="footer-bottom">
        <h1>Since 1998 </h1>
        © {new Date().getFullYear()} CPAP Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
