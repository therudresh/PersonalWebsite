import React from "react";

const projects = [
  {
    id: "proj1",
    title: "Game Development [Power Racing Arena on PlayStore]",
    description: [
      "As a lifelong fan of video games, I always dreamed of creating and publishing my own. That dream became reality when I built an interactive math-learning game, blending fun animations and high-speed sports car driving to make learning engaging. The goal was simple: turn an essential skill—math—into an exciting experience that kids and learners would actually enjoy.",
      "Building this game from scratch was an incredible learning experience. Game development isn't just about writing code—it's about designing intuitive mechanics, creating 3D models, and implementing physics to make everything feel natural. I handled everything from development and animations to user experience, ensuring that the game was both fun and educational.",
      "After months of effort, I launched it on the Play Store, where it reached 1,000+ downloads across 10+ countries. More than just a project, this game represents my lifelong passion for teaching, learning, and having fun all at once. It reinforced my ability to combine creativity with engineering and proved that impactful learning experiences can be both engaging and scalable."
    ],
    tools: ["Unity", "3dBlender", "C#", "Python", "Google analytics"],
  },
  {
    id: "proj2",
    title: "eBay on Blockchain: A Deep Dive into Decentralized Commerce",
    description: [
      "With blockchain technology rapidly evolving, I wanted to gain hands-on experience in this space. The best way to learn? Build something real. That's how I ended up creating a decentralized marketplace—an \"eBay on Blockchain\"—powered by Ethereum to enable secure and transparent transactions.",
      "This project was a deep dive into the blockchain ecosystem, where I learned everything from smart contract development in Solidity to integrating IPFS for decentralized data storage. The system was built as a full-stack application, combining Spring Boot (Java) for the backend, MySQL for data persistence, and a JavaScript-based frontend for a seamless user experience.",
      "Through this experience, I didn't just write smart contracts—I understood the challenges of decentralization, transaction efficiency, and security in blockchain-powered e-commerce. More than just a project, it was an eye-opening journey into the future of technology, proving that the best way to master a new field is to build something tangible from the ground up."
    ],
    tools: ["SpringBoot", "Java", "JavaScript", "Solidity", "IPFS"],
  },
];

const Projects = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Projects</h1>
      {projects.map((proj) => (
        <div key={proj.id} id={proj.id} className="project-row">
          <div className="text-container">
            <h2 className="project-title">{proj.title}</h2>
            <div className="description">
              {proj.description.map((line, index) => (
                <p key={index} className="description-text">{line}</p>
              ))}
            </div>
            <div className="tools-container">
              {proj.tools.map((tool, index) => (
                <span key={index} className="tool-item">{tool}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
