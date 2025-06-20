import React, {useState} from 'react';

import headerLogo from '../images/header_logo.png'
function Nav (){
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () =>{
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav-bar">
      <img src={headerLogo} alt="Logo" className="header-logo" />
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Menu</a>
        <a href="#contact">Reservation</a>
        <a href="#contact">Order Online</a>
        <a href="#contact">Login</a>
      </div>

        {/* humberger icon */}
      <div className="hamburger" onClick={toggleMenu}>
      <span></span>
      <span></span>
      <span></span>
      </div>
    </nav>
  );
}
export default Nav;