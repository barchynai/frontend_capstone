import React from 'react';
import headerLogo from '../images/header_logo.png'
function Nav() {
  return (
    <header className="header-container">
      <img src={headerLogo} alt="Logo" className="header-logo" />
      <nav>
        <ul className="nav-list">
          <li className="nav-item"><a href="#home">Home</a></li>
          <li className="nav-item"><a href="#about">About</a></li>
          <li className="nav-item"><a href="#services">Menu</a></li>
          <li className="nav-item"><a href="#contact">Reservation</a></li>
          <li className="nav-item"><a href="#contact">Order Online</a></li>
          <li className="nav-item"><a href="#contact">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}
export default Nav;