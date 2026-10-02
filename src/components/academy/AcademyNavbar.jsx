// import { useState } from "react";

// function AcademyNavbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   return (
//     <header className="academy-navbar">
//       <div className="academy-nav-container">

//         <a href="#home" className="academy-nav-logo">
//           Vishal Chess Academy
//         </a>

//         <button
//           className={`academy-menu-button ${menuOpen ? "active" : ""}`}
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="Toggle navigation"
//           aria-expanded={menuOpen}
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </button>

//         <nav className={`academy-nav-links ${menuOpen ? "open" : ""}`}>
//           <a href="#home" onClick={closeMenu}>
//             Home
//           </a>

//           <a href="#coaches" onClick={closeMenu}>
//             Coaches
//           </a>

//           <a href="#tournaments" onClick={closeMenu}>
//             Tournaments
//           </a>

//           <a href="/student-registration" onClick={closeMenu}>
//             Register
//           </a>
//         </nav>

//       </div>
//     </header>
//   );
// }

// export default AcademyNavbar;


import { useState } from "react";

function AcademyNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="academy-navbar">
      <div className="academy-nav-container">

        <a href="#home" className="academy-nav-logo">
          VISHAL CHESS ACADEMY
        </a>

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

          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="/coaches" onClick={closeMenu}>
            Coaches
          </a>
          
          <a href="/tournament-registration" onClick={closeMenu}>
            Tournaments
          </a>

          <a href="/student-registration" onClick={closeMenu}>
            Students
          </a> 
          </nav>
      </div>
    </header>
  );
}

export default AcademyNavbar;