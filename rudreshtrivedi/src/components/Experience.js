import React from "react";

const Experience = () => {
  return (
    <div style={styles.container}>
      <h1>My Experience</h1>

      <div id="exp1" style={styles.experienceItem}>
        <h2>Software Engineer at XYZ Corp</h2>
        <p>Worked on full-stack development and cloud infrastructure.</p>
      </div>

      <div id="exp2" style={styles.experienceItem}>
        <h2>Frontend Developer at ABC Ltd</h2>
        <p>Built scalable UI components using React.</p>
      </div>

      <div id="exp3" style={styles.experienceItem}>
        <h2>Intern at Startup Inc</h2>
        <p>Worked on mobile app development with React Native.</p>
      </div>
    </div>
  );
};

const styles = {
  container: { textAlign: "center", padding: "20px" },
  experienceItem: { marginBottom: "30px" },
};

export default Experience;
