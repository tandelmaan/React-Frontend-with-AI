import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div class="navbar">
        <div class="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/technology">Technology</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
        </div>
        <NavLink to="/login" class="login">Login</NavLink>
    </div>
    </div>
  );
};

export default Navbar;
