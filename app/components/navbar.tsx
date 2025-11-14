import { NavLink } from "react-router";
import "../styles/style.css";

export function Navbar() {
  return (
    <nav className="navbar">            
      <NavLink to="/" end className="brand">
        <h4>jose dias</h4>
        <p>software engineer</p>
      </NavLink>
      <div className="nav-links">
        <NavLink to="/about" className="nav-link">
          about
        </NavLink>
        <NavLink to="/contact" className="nav-link">
          contacts
        </NavLink>
      </div>
    </nav>
  );
}