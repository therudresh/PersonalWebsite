import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© {new Date().getFullYear()} Rudresh Trivedi. All rights reserved.</p>
      <div style={styles.socialLinks}>
        <a href="https://www.linkedin.com/in/rudresht" target="_blank" rel="noopener noreferrer" style={styles.iconButton}>
          <FontAwesomeIcon icon={faLinkedin} style={styles.icon} />
        </a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: "center",
    padding: "20px",
    background: "#f8f8f8",
    marginTop: "40px",
    borderTop: "1px solid #ddd",
    width: "100%",
    maxWidth: "100vw", // Prevents overflow
    overflow: "hidden", // Ensures no horizontal scrolling
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  text: { fontSize: "14px", color: "#555", marginBottom: "10px" },
  socialLinks: { display: "flex", justifyContent: "center", gap: "15px" },
  iconButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "40px",
    backgroundColor: "#ddd",
    borderRadius: "50%",
    textDecoration: "none",
    transition: "background 0.3s ease",
  },
  icon: { fontSize: "20px", color: "#333" },
};

export default Footer;
