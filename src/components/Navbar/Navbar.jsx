import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">MyPortfolio</div>
      <div className="nav-links">
        <a href="#home" className="active">Home</a>
        <a href="#about">About</a>
        <a href="#academics">Academics</a>
        <a href="#projects">Projects</a>
        <a href="#certificates">Certificates</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
