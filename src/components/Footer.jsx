import React from "react";
import "../styles/Footer.css"; // Create this CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img
            src="https://cdn.vectopus.com/getillustrations/illustrations/BCF09A00DB3C/3C95AF784386/icons-app-icons-media-netflix-logo-website-movie-series-multimedia-streaming-stream-512.png" // Netflix logo URL
            alt="Logo"
            className="footer-logo-img"
          />
        </div>

        <div className="footer-text">
          <p>© 2024 Neoflix. All rights reserved.</p>
        </div>
        
        <div className="footer-social">
          <a href="https://facebook.com" className="footer-social-icon">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com" className="footer-social-icon">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" className="footer-social-icon">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://youtube.com" className="footer-social-icon">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
