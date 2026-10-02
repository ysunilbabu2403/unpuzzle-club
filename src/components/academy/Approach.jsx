// function Approach() {
//     return (
//       <section className="academy-approach-section" id="coaches">
  
//         <div className="academy-info-card">
  
//           <p className="academy-section-label">
//             OUR METHOD
//           </p>
  
//           <h2>Our Approach</h2>
  
//           <p>
//             Chess development goes beyond simply learning openings
//             and moves. Our approach focuses on building strong
//             fundamentals, calculation, decision-making and
//             practical game experience.
//           </p>
  
//           <ul>
//             <li>Structured and progressive training</li>
//             <li>Concept-based learning</li>
//             <li>Practical game analysis</li>
//             <li>Individual player development</li>
//           </ul>
  
//         </div>
  
//         <div className="academy-info-card">
  
//           <p className="academy-section-label">
//             FIND YOUR PLACE
//           </p>
  
//           <h2>Who Would Join Us?</h2>
  
//           <p>
//             Our programs are designed for players at different
//             stages of their chess journey.
//           </p>
  
//           <ul>
//             <li>Children beginning their chess journey</li>
//             <li>School-level players</li>
//             <li>Intermediate players</li>
//             <li>Players preparing for tournaments</li>
//           </ul>
  
//         </div>
  
//       </section>
//     );
//   }
  
//   export default Approach;



function Approach() {
  return (
    <section className="academy-approach-section" id="approach">

      {/* OUR APPROACH */}
      <div className="academy-info-card">

        <p className="academy-section-label">
          OUR METHOD
        </p>

        <h2>Our Approach</h2>

        <p>
          We combine structured curriculum, regular practice games,
          and personalized feedback to help every student progress
          at their own pace. Our focus is on understanding,
          not just memorization.
        </p>

        <ul>
          <li>Step-by-step curriculum from basics to advanced</li>
          <li>Regular tactical puzzles and endgame training</li>
          <li>Practice games with analysis</li>
          <li>Tournament preparation and mindset coaching</li>
          <li>Small batch sizes for individual attention</li>
        </ul>

      </div>

      {/* WHO CAN JOIN */}
      <div className="academy-info-card">

        <p className="academy-section-label">
          FIND YOUR PLACE
        </p>

        <h2>Who Can Join?</h2>

        <p>
          Our chess programs welcome learners of different ages
          and skill levels, from first-time players to those
          preparing for competitive tournaments.
        </p>

        <ul>
          <li>Kids (age 5+) – beginner to advanced</li>
          <li>Teens preparing for school & state tournaments</li>
          <li>Adults learning chess for the first time</li>
          <li>Intermediate players aiming for rating improvement</li>
        </ul>

        <p className="academy-approach-location">
          Classes are conducted offline at our centers and
          selected societies in Sarjapura Road and Banasavadi.
        </p>

      </div>

    </section>
  );
}

export default Approach;