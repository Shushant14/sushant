// Footer.js

import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <ul>
            <li><a href="/about">Our Story</a></li>
            <li><a href="/team">Our Team</a></li>
            <li><a href="/careers">Careers</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Explore</h3>
          <ul>
            <li><a href="/destinations">Destinations</a></li>
            <li><a href="/hotels">Hotels</a></li>
            <li><a href="/flights">Flights</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Help & Support</h3>
          <ul>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/terms">Terms of Use</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} TripPlannerWebsite</p>
      </div>
      
    </footer>
    
  );
}

export default Footer;
