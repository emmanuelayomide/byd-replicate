import React from "react";
import "./Footer.css";
import Logo from "../assets/logo.jpg"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>BYD</h2>
        </div>
        <ul className="footer-menu">
          <li>Home</li>
          <li>About</li>
          <li>Products</li>
          <li>Reviews</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>© {currentYear} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
