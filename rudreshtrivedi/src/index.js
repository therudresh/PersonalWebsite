import React from "react";
import ReactDOM from "react-dom/client"; // Updated import for React 18+
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Home Page (Resume and Personal Stuff)
const Home = () => (
  <div style={{ padding: "20px" }}>
    <h1>My Resume</h1>
    <p>Hello! I'm Rudresh Trivedi, a passionate software developer specializing in building scalable products.</p>
    <h2>Skills</h2>
    <ul>
      <li>JavaScript / React</li>
      <li>Python / Django</li>
      <li>Cloud Computing (AWS, Azure)</li>
    </ul>
    <h2>Experience</h2>
    <p>[Company Name], [Role], [Years]</p>
    <h2>Education</h2>
    <p>[Your University], [Degree]</p>
  </div>
);

// Blog Page
const Blog = () => (
  <div style={{ padding: "20px" }}>
    <h1>Blog</h1>
    <ul>
      <li>
        <h2>How to Learn React</h2>
        <p>A beginner's guide to understanding React.js and building modern web applications.</p>
      </li>
      <li>
        <h2>Why TypeScript is Worth Learning</h2>
        <p>An overview of TypeScript and why it can make your code safer and more maintainable.</p>
      </li>
    </ul>
  </div>
);

// App Component
const App = () => (
  <Router>
    <nav style={{ padding: "10px", background: "#f5f5f5" }}>
      <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
      <Link to="/blog">Blog</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  </Router>
);

// Updated Render Method for React 18+
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
