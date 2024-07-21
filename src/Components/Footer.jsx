import React from "react";
import './Footer.css'
const Footer = () => {
  return (
    <div>
      <div>
      <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at ipsum lorem.</p>
                </div>
                <div className="footer-section">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h2>Contact Us</h2>
                    <ul>
                        <li>123 Street Name, City, State</li>
                        <li>Email: info@example.com</li>
                        <li>Phone: (123) 456-7890</li>
                    </ul>
                </div>
                
            </div>
            <div className="footer-bottom">
                &copy; 2024 Your Company. All rights reserved.
            </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
