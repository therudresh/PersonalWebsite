import React from "react";

const Resume = () => {
  const resumeURL = "/resume.pdf"; // Ensure this file is in the public folder

  return (
    <div style={styles.container}>
      <h1>My Resume</h1>
      <a href={resumeURL} target="_blank" rel="noopener noreferrer" style={styles.button}>
        Open Resume in New Tab
      </a>
    </div>
  );
};

const styles = {
  container: { textAlign: "center", padding: "20px" },
  button: { padding: "10px", background: "#007BFF", color: "#fff", textDecoration: "none", borderRadius: "5px" },
};

export default Resume;