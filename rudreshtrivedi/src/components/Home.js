import React from "react";
import { Link } from "react-router-dom";
import profile from "../assets/profile.jpg";

const Home = () => {
  return (
    <div style={styles.container}>
      <h1>Welcome to My Portfolio</h1>
      <img src={profile} alt="Profile" style={styles.profileImage} />
      <p>Hi, I'm a [Your Job Title]. Check out my work below!</p>

      {/* Experience Section */}
      <div style={styles.section}>
        <h2>Experience</h2>
        <div style={styles.blockContainer}>
          <Link to="/experience#exp1" style={styles.block}>
            <h3>Software Engineer at XYZ Corp</h3>
            <p>Worked on full-stack development and cloud infrastructure.</p>
          </Link>
          <Link to="/experience#exp2" style={styles.block}>
            <h3>Frontend Developer at ABC Ltd</h3>
            <p>Built scalable UI components using React.</p>
          </Link>
          <Link to="/experience#exp3" style={styles.block}>
            <h3>Intern at Startup Inc</h3>
            <p>Worked on mobile app development with React Native.</p>
          </Link>
        </div>
        <Link to="/experience" style={styles.button}>View All Experiences</Link>
      </div>

      {/* Projects Section */}
      <div style={styles.section}>
        <h2>Projects</h2>
        <div style={styles.blockContainer}>
          <Link to="/projects#proj1" style={styles.block}>
            <h3>E-commerce Website</h3>
            <p>Developed an e-commerce platform with Stripe integration.</p>
          </Link>
          <Link to="/projects#proj2" style={styles.block}>
            <h3>AI Chatbot</h3>
            <p>Built an AI chatbot for customer support automation.</p>
          </Link>
          <Link to="/projects#proj3" style={styles.block}>
            <h3>Personal Portfolio</h3>
            <p>Designed and developed my own portfolio website.</p>
          </Link>
        </div>
        <Link to="/projects" style={styles.button}>View All Projects</Link>
      </div>
    </div>
  );
};

const styles = {
  container: { textAlign: "center", padding: "20px" },
  profileImage: { width: "150px", borderRadius: "50%", margin: "10px 0" },
  section: { marginTop: "40px", textAlign: "left", padding: "20px", maxWidth: "1500px", marginLeft: "auto", marginRight: "auto" },
  blockContainer: { display: "flex", flexDirection: "column", gap: "15px" },
  block: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    padding: "15px",
    background: "#f4f4f4",
    borderRadius: "8px",
    textAlign: "left",
    textDecoration: "none",
    color: "black",
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
    transition: "background 0.3s ease",
  },
  blockHover: { background: "#e0e0e0" }, // For hover effect
  button: {
    display: "inline-block",
    padding: "10px",
    background: "#007BFF",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
    marginTop: "20px",
  },
};

export default Home;
