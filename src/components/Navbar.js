import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MyBrand</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/about">Matches</a></li>
        <li><a href="/contact">Settings</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
