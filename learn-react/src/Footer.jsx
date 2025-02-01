import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Contact Us</h3>
        <ul className="contact-list">
          <li>Phone: +1234567890</li>
          <li>Email: example@gmail.com</li>
          <li>
            GitHub: <a href="https://github.com/vishalrathod8788">GitHub</a>
          </li>
          <li>
            Twitter: <a href="https://twitter.com/VishalRathod_88">Twitter</a>
          </li>
          <li>
            LinkedIn:{" "}
            <a href="https://linkedin.com/in/rathod-vishal">LinkedIn</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
