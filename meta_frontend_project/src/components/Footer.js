import React from 'react';
import footerLogo from '../images/footer_logo.png'; // Assuming you have a footer logo image
function Footer() {
  return (
    <footer className="footer-container">
    <img src={footerLogo} alt="Little Lemon Logo" className="footer-logo" />
    <div className="navigation">
      <h4>Navigation</h4>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Reservations</li>
        <li>Order Online</li>
        <li>Login</li>
      </ul>
    </div>
    <div className="social-media">
      <h4>Socials</h4>
      <ul>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Twitter</li>
      </ul>
    </div>
    <div className="contact-info">
      <h4>Contacts</h4>
      <ul>
        <li>123 Main St, Chicago</li>
      <li>Phone: (123) 456-7890</li>
      <li>Email:</li>
      </ul>
    </div>
    </footer>
  );
}
export default Footer;