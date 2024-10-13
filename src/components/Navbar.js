import React from 'react';
import './Navbar.css';  // Import the updated CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1 className="logo-text">MatchX</h1>
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/matches">Matches</a></li>
        <li><a href="/settings">Settings</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

