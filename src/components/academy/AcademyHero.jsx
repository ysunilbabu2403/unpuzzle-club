// function AcademyHero() {
//     return (
//       <section id="home" className="academy-hero">
  
//         <div className="academy-hero-overlay"></div>
  
//         <div className="academy-hero-content">
  
//           <p className="academy-hero-small">
//             PLAY • THINK • IMPROVE
//           </p>
  
//           <h1>
//             VISHAL
//             <span>CHESS ACADEMY</span>
//           </h1>
  
//           <p className="academy-hero-description">
//             Building stronger players through structured training,
//             practical games and a passion for chess.
//           </p>
  
//         </div>
  
//       </section>
//     );
//   }
  
//   export default AcademyHero;


import AcademyNavbar from "./AcademyNavbar";

function AcademyHero() {
  return (
    <section id="home" className="academy-hero">

      <AcademyNavbar />

      <div className="academy-hero-overlay"></div>

      <div className="academy-hero-content">
        <p className="academy-hero-small">
          PLAY • THINK • IMPROVE
        </p>

        <h1>
          VISHAL
          <span>CHESS ACADEMY</span>
        </h1>

        <p className="academy-hero-description">
          Building stronger players through structured training,
          practical games and a passion for chess.
        </p>
      </div>

    </section>
  );
}

export default AcademyHero;