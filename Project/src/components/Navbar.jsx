import React from 'react';
import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>UI Frontend</h1>
        <input type="text" placeholder="Quick Search" />
      </div>
      <div className="navbar-right">
        <FaSearch className="icon" />
        <FaBell className="icon" />
        <FaUserCircle className="icon" />
      </div>
    </nav>
  );
}

export default Navbar;
