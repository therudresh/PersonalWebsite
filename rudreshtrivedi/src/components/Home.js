import React from "react";
import { Link } from "react-router-dom";
import profile from "../assets/profile.jpg";

const Home = () => {
  return (
    <div style={styles.container}>
      <h1>Rudresh Trivedi</h1>
      <img src={profile} alt="Profile" style={styles.profileImage} />
      <p>Senior Software Engineer</p> 
      <p>Passionate about Scalable Systems, Distributed Computing, and High-Performance Architectures. When I'm not optimizing code, you’ll find me running trails, hiking mountains, or building cool side projects.</p>

      {/* Experience Section */}
      <div style={styles.section}>
        <h2>Experience</h2>
        <div style={styles.blockContainer}>
          <Link to="/experience#exp1" style={styles.block}>
            <h3>Senior Software Engineer at ChaosSearch</h3>
            <p>Led the query execution team, driving technical excellence and customer-focused innovation while architecting high-performance systems. Passionate about building scalable, efficient data processing solutions, securing a patent, and optimizing cloud infrastructure for seamless execution.</p>
          </Link>
          <Link to="/experience#exp2" style={styles.block}>
            <h3>Software Engineer Intern at AtSign</h3>
            <p>Developed a robust Python SDK for atProtocol, enabling seamless integration and enhancing developer experience. Focused on reliability, test coverage, and clear documentation to drive adoption and usability.</p>
          </Link>
          <Link to="/experience#exp3" style={styles.block}>
            <h3>Software Engineer Intern at DeepCure</h3>
            <p>Built an internal web app for hyperparameter optimization, accelerating ML research and experimentation. Designed scalable analytics and testing infrastructure, driving adoption and productivity for the chemist team.</p>
          </Link>
        </div>
        <Link to="/experience" style={styles.button}>View All Experiences</Link>
      </div>

      {/* Projects Section */}
      <div style={styles.section}>
        <h2>Selected Projects</h2>
        <div style={styles.blockContainer}>
          <Link to="/projects#proj1" style={styles.block}>
            <h3>Blockchain E-commerce Website</h3>
            <p>Had a blast building 'eBay on Blockchain'—a fully decentralized marketplace powered by Ethereum and IPFS! From crafting smart contracts to architecting a full-stack system, every challenge was a deep dive into secure, trustless commerce.</p>
          </Link>
          <Link to="/projects#proj2" style={styles.block}>
            <h3>Game Development</h3>
            <p>Turning math into a high-speed adventure! Built a fun, interactive learning game with a sports car twist—developing everything from code to design. Launched on the Play Store and watched it race past 1,000 downloads across 10+ countries!</p>
          </Link>
        </div>
        <Link to="/projects" style={styles.button}>View All Projects</Link>
      </div>
    </div>
  );
};

const styles = {
  container: { textAlign: "center", padding: "20px" },
  profileImage: { width: "250px", height: "250px", borderRadius: "50%", margin: "10px 0" },
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
