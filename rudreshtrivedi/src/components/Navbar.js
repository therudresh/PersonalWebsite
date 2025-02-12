import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/experience" style={styles.link}>Experience</Link>
      <Link to="/projects" style={styles.link}>Projects</Link>
      <Link to="/resume" style={styles.link}>Resume</Link>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-around",
    padding: "10px",
    background: "#333",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
  },
};

export default Navbar;