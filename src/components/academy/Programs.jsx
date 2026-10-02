// const programs = [
//     {
//       number: "01",
//       title: "Beginner",
//       description:
//         "Start with the fundamentals\nChess rules & piece movement\nBasic tactics\nCheckmates\nOpening fundamentals\nPuzzles & practice games",
//     },
//     {
//       number: "02",
//       title: "Development",
//       description:
//         "Improve calculation, strategy, tactics and practical decision-making through structured training.",
//     },
//     {
//       number: "03",
//       title: "Tournament",
//       description:
//         "Focused preparation for competitive players through game analysis, tournament practice and advanced concepts.",
//     },
//   ];
  
//   function Programs() {
//     return (
//       <section
//         className="academy-programs-section"
//         id="tournaments"
//       >
  
//         <div className="academy-programs-overlay"></div>
  
//         <div className="academy-programs-content">
  
//           <div className="academy-section-heading academy-light-heading">
//             <p className="academy-section-label">
//               TRAINING
//             </p>
  
//             <h2>Programs</h2>
  
//             <p>
//               Training pathways designed around the player's
//               current level and goals.
//             </p>
//           </div>
  
//           <div className="academy-programs-wrapper">
  
//             <div className="academy-programs-track">
  
//               {programs.map((program) => (
//                 <article
//                   className="academy-program-card"
//                   key={program.number}
//                 >
  
//                   <span className="academy-program-number">
//                     {program.number}
//                   </span>
  
//                   <h3>{program.title}</h3>
//                   <p>{program.description} </p>
//                   {/* <ul>

//                   <li>Chess rules & piece movement</li>
// <li>Basic tactics</li>
// <li>Checkmates</li>
// <li>Opening fundamentals</li>
// <li>Puzzles & practice games</li>
//                   </ul> */}
//                   <a href="/student-registration">
//                     Join Program →
//                   </a>
  
//                 </article>
//               ))}
  
//             </div>
  
//           </div>
  
//         </div>
  
//       </section>
//     );
//   }
  
//   export default Programs;


import { Link } from "react-router-dom";

const programs = [
  {
    number: "01",
    title: "Beginner Program",
    description:
      "For kids and adults new to chess. Learn piece movement, basic rules, simple checkmates, and fundamental opening ideas.",
    features: [
      "2–3 sessions per week",
      "60–75 minutes per class",
      "Puzzles + practice games",
    ],
  },
  {
    number: "02",
    title: "Intermediate Program",
    description:
      "For players who know the rules and want to improve tactics, strategy, and endgames. Ideal for school tournament aspirants.",
    features: [
      "Tactical motifs & calculation",
      "Opening principles & typical plans",
      "Basic endgames (K+P, K+Q, etc.)",
    ],
  },
  {
    number: "03",
    title: "Advanced / Tournament Program",
    description:
      "For rated and serious players aiming for district, state, and national level events.",
    features: [
      "Deep opening preparation",
      "Middlegame planning & prophylaxis",
      "Complex endgames & game analysis",
    ],
  },
  {
    number: "04",
    title: "Society & School Batches",
    description:
      "Special batches conducted inside partner societies and schools in Sarjapura Road and Banasavadi for convenience.",
    features: [
      "Evening & weekend slots",
      "Group classes with individual attention",
      "Option for intra-society mini-tournaments",
    ],
  },
];

function Programs() {
  return (
    <section
      className="academy-programs-section"
      id="programs"
    >

      <div className="academy-programs-overlay"></div>

      <div className="academy-programs-content">

        <div className="academy-section-heading academy-light-heading">

          <p className="academy-section-label">
            TRAINING
          </p>

          <h2>Our Programs</h2>

          <p>
            Training pathways designed around the player's
            current level and goals.
          </p>

        </div>

        <div className="academy-programs-wrapper">

          <div className="academy-programs-track">

            {programs.map((program) => (
              <article
                className="academy-program-card"
                key={program.number}
              >

                <span className="academy-program-number">
                  {program.number}
                </span>

                <h3>{program.title}</h3>

                <p>{program.description}</p>

                <ul className="academy-program-features">
                  {program.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                <Link to="/student-registration">
                  Join Program →
                </Link>

              </article>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Programs;