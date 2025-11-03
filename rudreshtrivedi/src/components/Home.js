import React from "react";
import { Link } from "react-router-dom";
import profile from "../assets/profile.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Rudresh Trivedi</h1>
      <img src={profile} alt="Profile" className="profile-image" />
      <p className="home-subtitle">Senior Software Engineer</p> 
      <p className="home-description">
        Passionate about Scalable Systems, Distributed Computing, and High-Performance Architectures. 
        When I'm not optimizing code, you'll find me running trails, hiking mountains, or building cool side projects.
      </p>

      {/* Experience Section */}
      <div className="section">
        <h2 className="section-title">Experience</h2>
        <div className="block-container">
          <Link to="/experience#exp1" className="block">
            <h3>Senior Software Engineer at ChaosSearch</h3>
            <p>Led the query execution team, driving technical excellence and customer-focused innovation while architecting high-performance systems. Passionate about building scalable, efficient data processing solutions, securing a patent, and optimizing cloud infrastructure for seamless execution.</p>
          </Link>
          <Link to="/experience#exp2" className="block">
            <h3>Software Engineer Intern at AtSign</h3>
            <p>Developed a robust Python SDK for atProtocol, enabling seamless integration and enhancing developer experience. Focused on reliability, test coverage, and clear documentation to drive adoption and usability.</p>
          </Link>
          <Link to="/experience#exp3" className="block">
            <h3>Software Engineer Intern at DeepCure</h3>
            <p>Built an internal web app for hyperparameter optimization, accelerating ML research and experimentation. Designed scalable analytics and testing infrastructure, driving adoption and productivity for the chemist team.</p>
          </Link>
        </div>
        <Link to="/experience" className="view-button">View All Experiences</Link>
      </div>

      {/* Projects Section */}
      <div className="section">
        <h2 className="section-title">Selected Projects</h2>
        <div className="block-container">
          <Link to="/projects#proj1" className="block">
            <h3>Blockchain E-commerce Website</h3>
            <p>Had a blast building 'eBay on Blockchain'—a fully decentralized marketplace powered by Ethereum and IPFS! From crafting smart contracts to architecting a full-stack system, every challenge was a deep dive into secure, trustless commerce.</p>
          </Link>
          <Link to="/projects#proj2" className="block">
            <h3>Game Development</h3>
            <p>Turning math into a high-speed adventure! Built a fun, interactive learning game with a sports car twist—developing everything from code to design. Launched on the Play Store and watched it race past 1,000 downloads across 10+ countries!</p>
          </Link>
        </div>
        <Link to="/projects" className="view-button">View All Projects</Link>
      </div>
    </div>
  );
};

export default Home;
