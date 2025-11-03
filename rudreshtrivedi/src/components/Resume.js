import React from "react";

const Resume = () => {
  const resumeURL = "/resume.pdf";

  return (
    <div className="resume-container">
      <h1 className="resume-title">My Resume</h1>
      <div className="resume-viewer">
        <iframe
          src={resumeURL}
          title="Resume"
          className="resume-iframe"
        />
      </div>
      <a href={resumeURL} target="_blank" rel="noopener noreferrer" className="resume-button">
        Open Resume in New Tab
      </a>
    </div>
  );
};

export default Resume;