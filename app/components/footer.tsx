import "../styles/style.css";

import linkedinIcon from "../assets/linkedin-icon.png";
import githubIcon from "../assets/github-icon.png";
import { Link } from "react-router";
export function Footer() {
  return (
    <nav className="footer">
      <div className="footer-links">
        <Link to="https://www.linkedin.com/in/josediogodias/" target="_blank" rel="noopener noreferrer" className="footer-link">
          <img src={linkedinIcon} alt="LinkedIn" className="icon" />
        </Link>
        <Link to="https://github.com/djouse" target="_blank" rel="noopener noreferrer" className="footer-link">
          <img src={githubIcon} alt="GitHub" className="icon" />
        </Link>
      </div>
    </nav>
  );
}