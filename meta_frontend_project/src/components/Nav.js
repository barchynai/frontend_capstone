import React, {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';

import headerLogo from '../images/header_logo.png'
function Nav (){
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () =>{
    setIsOpen(!isOpen);
  };

  useEffect(()=>{
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)){
        setIsOpen(false)
      }
    }
  document.addEventListener('mousedown', handleClickOutside)
  return () =>{
  document.removeEventListener('mousedown', handleClickOutside);
  }
  }, []);

  return (
    <nav className="nav-bar" ref={navRef}>
      <img src={headerLogo} alt="Logo" className="header-logo" />
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to='/' onClick={()=>setIsOpen(false)}>Home</Link>
        <Link to='/about' onClick={()=>setIsOpen(false)}>About</Link>
        <Link to='/menu' onClick={()=>setIsOpen(false)}>Menu</Link>
        <Link to='/reservation' onClick={()=>setIsOpen(false)}>Reservation</Link>
        <Link to='/order-online' onClick={()=>setIsOpen(false)}>Order Online</Link>
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