import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.navContainer}>
        <ul style={styles.navLinks}>
          <li><Link to="/" style={styles.link}>Home</Link></li>
          <li><Link to="/experience" style={styles.link}>Experience</Link></li>
          <li><Link to="/projects" style={styles.link}>Projects</Link></li>
          <li><Link to="/resume" style={styles.link}>Resume</Link></li>
        </ul>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    width: "100%",
    background: "#333",
    padding: "10px 20px",
  },
  navContainer: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    color: "#fff",
    marginRight: "20px",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "15px",
    padding: 0,
    margin: 0,
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
  },
};

export default Navbar;
