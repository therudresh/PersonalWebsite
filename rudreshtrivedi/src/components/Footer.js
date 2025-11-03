import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">© {new Date().getFullYear()} Rudresh Trivedi. All rights reserved.</p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/rudresht" target="_blank" rel="noopener noreferrer" className="icon-button">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
