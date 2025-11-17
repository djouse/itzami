import { Link } from "react-router";
import "../styles/style.css";

export function Navbar() {
  return (
    <nav className="navbar">            
      <Link to="/" className="brand">
        <h4>jose dias</h4>
        <p>software engineer</p>
      </Link>
      <div className="nav-links">
        <Link to="/about" className="nav-link">
          about
        </Link>
        <Link to="/contact" className="nav-link">
          contacts
        </Link>
      </div>
    </nav>
  );
}