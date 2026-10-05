
import { useState } from "react";
import { Link } from "react-router-dom";

function AcademyNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="academy-navbar">
      <div className="academy-nav-container">

        <button
          className={`academy-menu-button ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`academy-nav-links ${menuOpen ? "open" : ""}`}>

          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <Link to="/coaches" onClick={closeMenu}>
            Coaches
          </Link>

          <Link to="/tournament-registration" onClick={closeMenu}>
            Tournaments
          </Link>

          <Link to="/student-registration" onClick={closeMenu}>
            Students
          </Link>

        </nav>
      </div>
    </header>
  );
}

export default AcademyNavbar;