import "../styles/style.css";

import linkedinIcon from "../assets/linkedin-icon.png";
import githubIcon from "../assets/github-icon.png";

export function Footer() {
  return (
    <nav className="footer">
      <div className="footer-links">
        <a href="#linkedin" className="footer-link">
          <img src={linkedinIcon} alt="LinkedIn" className="icon" />
        </a>
        <a href="#github" className="footer-link">
          <img src={githubIcon} alt="GitHub" className="icon" />
        </a>
      </div>
    </nav>
  );
}