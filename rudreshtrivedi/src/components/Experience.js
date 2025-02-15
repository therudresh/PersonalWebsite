import React from "react";
import CSlogo from "../assets/chaossearch_logo.jpeg";

const experiences = [
  {
    id: "exp1",
    title: "Senior Software Engineer",
    company: "ChaosSearch",
    description: [
      "At ChaosSearch Company, I had the privilege of working on some of the most critical and performance-driven aspects of the query execution engine. From building IP and geo-point field support to optimizing the query execution and scheduling system, I was at the heart of designing and scaling solutions that powered complex data analytics. Leading the query execution team, I not only mentored engineers but also championed customer-driven development, ensuring our innovations aligned with real-world needs.",
      "Beyond code, I thrived in an environment that pushed both hard work and smart work, constantly picking up new skills while delivering high-impact solutions—whether it was securing a patent for our query caching infrastructure or optimizing cloud compute management across AWS and Databricks. Releases were stable, queries ran faster, and every challenge was a chance to level up.",
      "And when I wasn't optimizing execution engines, I was training mine—running a half marathon with the team! ChaosSearch wasn't just a workplace; it was a playground for both technical growth and endurance, on and off the track. 🚀🏃‍♂️"
    ],
    companyLogo: CSlogo,
    companyUrl: "https://www.chaossearch.io/",
    tools: ["Scala", "Akka", "Python", "Spark", "Databricks", "AWS", "Docker"],
  },
  {
    id: "exp2",
    title: "Software Engineer Intern",
    company: "AtSign",
    description: [
      "At AtSign Company, I played a key role in developing a Python SDK for atProtocol, enabling seamless integration for application developers. Working closely with the team, we identified a crucial market gap—Python’s widespread adoption made this SDK essential for broader accessibility. Despite tight time constraints, I successfully delivered a well-structured and efficient solution.",
      "To ensure reliability and maintainability, I designed a comprehensive testing infrastructure, validating functionality across various use cases. Additionally, I created detailed documentation and illustrative examples, making adoption seamless for developers. This project not only met critical deadlines but also reinforced the importance of scalability, precision, and user-focused development in delivering impactful software solutions.",
    ],
    companyLogo: "https://atsign.com/wp-content/uploads/2022/05/atsign-logo-horizontal-color2022.svg",
    companyUrl: "https://atsign.com/",
    tools: ["Python"],
  },
  {
    id: "exp3",
    title: "Software Engineer Intern",
    company: "DeepCure",
    description: [
      "At XYZ Company, I developed an internal web application for hyperparameter optimization, streamlining ML model training and pharmaceutical research. Collaborating closely with the CTO and head chemist, I gathered requirements to ensure the solution addressed key challenges in data experimentation and model evaluation.",
      "I led the development of an analytical web application, enabling seamless data integration and model experimentation. This tool was rapidly adopted by the chemist team and became a daily-use platform, significantly enhancing productivity. Working alongside other interns, I ensured that the final product met stakeholder expectations while maintaining scalability and ease of use.",
      "To ensure data integrity, I also designed a robust testing infrastructure, validating high-volume data flows and applied configurations. This project reinforced my ability to deliver impactful solutions under real-world constraints, bridging the gap between machine learning and scientific research through well-engineered software."
    ],
    companyLogo: "https://images.squarespace-cdn.com/content/v1/66a251b1eb4d1a40617e8f78/c5154c54-d49d-4485-907f-5c7b2154181f/DeepCure-Logo-0824.png?format=1500w",
    companyUrl: "https://deepcure.com/",
    tools: ["JavaScript", "Python", "VueJs"],
  },
];

const Experience = () => {
  return (
    <div style={styles.container}>
      <h1>Experience</h1>
      {experiences.map((exp) => (
        <div key={exp.id} style={styles.experienceRow}>
          {/* Left Side: Title and Description */}
          <div style={styles.textContainer}>
            <h2 style={styles.title}>{exp.title} at {exp.company}</h2>
            <div style={styles.description}>
              {exp.description.map((line, index) => (
                <p key={index} style={styles.descriptionText}>{line}</p>
              ))}
            </div>
            <div style={styles.toolsContainer}>
              {exp.tools.map((tool, index) => (
                <span key={index} style={styles.toolItem}>{tool}</span>
              ))}
            </div>
          </div>

          {/* Right Side: Company Logo Box (Clickable) */}
          <div style={styles.logoContainer}>
            <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer">
              <img src={exp.companyLogo} alt={`${exp.company} Logo`} style={styles.logo} />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: { padding: "40px", maxWidth: "900px", margin: "auto" },
  experienceRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "40px",
  },
  textContainer: { flex: 2, textAlign: "left" },
  title: { fontSize: "22px", fontWeight: "bold", marginBottom: "8px" },
  description: { marginTop: "10px" },
  descriptionText: { fontSize: "16px", color: "#555", lineHeight: "1.5", margin: "5px 0" },
  toolsContainer: { marginTop: "10px" },
  toolItem: {
    display: "inline-block",
    background: "#e0e0e0",
    padding: "5px 12px",
    borderRadius: "20px",
    fontSize: "14px",
    marginRight: "8px",
  },
  logoContainer: { flex: 1, textAlign: "center" },
  logo: { width: "100px", height: "100px", objectFit: "contain" },
};

export default Experience;
