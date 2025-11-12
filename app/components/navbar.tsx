import "../styles/style.css";

export function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="brand">
        jose dias
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