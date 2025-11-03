import React, { useEffect } from "react";

const Resume = () => {
  useEffect(() => {
    // Open resume in a new tab
    window.open("/resume.pdf", "_blank");

    // Optionally, navigate back to home or another page
    window.location.href = "/";
  }, []);

  return null; // This component does not render anything
};

export default Resume;