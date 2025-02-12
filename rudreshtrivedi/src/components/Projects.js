import React from "react";

const Projects = () => {
  return (
    <div style={styles.container}>
      <h1>My Projects</h1>

      <div id="proj1" style={styles.projectItem}>
        <h2>E-commerce Website</h2>
        <p>Developed a full-fledged e-commerce platform with Stripe integration.</p>
      </div>

      <div id="proj2" style={styles.projectItem}>
        <h2>AI Chatbot</h2>
        <p>Built a chatbot using OpenAI's GPT model to automate customer support.</p>
      </div>

      <div id="proj3" style={styles.projectItem}>
        <h2>Personal Portfolio</h2>
        <p>Designed and developed a portfolio website using React and AWS.</p>
      </div>
    </div>
  );
};

const styles = {
  container: { textAlign: "center", padding: "20px" },
  projectItem: { marginBottom: "30px" },
};

export default Projects;
