import "../styles/style.css";

export function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="brand">
        <h4>jose dias</h4>
        <p>software engineer</p>
      </a>
      <div className="nav-links">
        <a href="#work" className="nav-link">
          work
        </a>
        <a href="#about" className="nav-link">
          about
        </a>
        <a href="#contacts" className="nav-link">
          contacts
        </a>
      </div>
    </nav>
  );
}