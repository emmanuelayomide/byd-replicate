import React, { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import './Header.css';
import Logo from '../assets/logo.jpg';

 function Header() {
  const [open, setOpen] = useState(false);
  const whatsappLink = 'https://wa.me/2349117148123';

  return (
    <header className="header">
      <nav className="nav-container">
        <div className="logo-container">
          <img src={Logo} alt="Logo" className="logo-img" />
        </div>
        <ul className="menu">
          <li>Home</li>
          <li>About</li>
          <li>Products</li>
          <li>Review</li>
          <li>Contact Us</li>
        </ul>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className='personal'>
          <button className="chat-btn">
            <MessageCircle size={18} /> Chat With Us
          </button>
        </a>
        <button className="hamburger" onClick={() => setOpen(true)}>
          <Menu size={28} />
        </button>
      </nav>
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <div></div>
          <button className="close-btn" onClick={() => setOpen(false)}>
            <X size={28} />
          </button>
        </div>
        <ul className="mobile-menu-list">
          <li onClick={() => setOpen(false)}>Home</li>
          <li onClick={() => setOpen(false)}>About</li>
          <li onClick={() => setOpen(false)}>Products</li>
          <li onClick={() => setOpen(false)}>Review</li>
          <li onClick={() => setOpen(false)}>Contact Us</li>
        </ul>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className='personal'>
          <button className="mobile-chat-btn">
            <MessageCircle size={20} /> Chat With Us
          </button>
        </a>
      </div>
      {open && <div className="overlay" onClick={() => setOpen(false)}></div>}
    </header>
  );
}

export default Header;