//import { Link } from "react-router-dom";
import "../styles/coaches.css";
import maheshImg from "../assets/academy/coaches/mahesh.jpg";
import divyanshImg from "../assets/academy/coaches/divyansh.jpg";
import sunilImg from "../assets/academy/coaches/sunil.jpg";
import nitheshImg from "../assets/academy/coaches/nithesh.jpg";

const coaches = [
  {
    id: 1,
    name: "Mahesh",
    role: "Founder & Head Coach",
    rating: "1800+ Elo",
    specialties: ["Tactics", "Chess Knowledge"],
    image: maheshImg,
    imageAlt: "Coach Mahesh portrait",
    description: [
      "As the Founder and Head Coach of Vishal Chess Academy, Mahesh brings experience, vision, and a deep understanding of the game to every training session.",
      "With a sharp eye for tactics and a strong command of chess principles, he guides students to look beyond individual moves and understand the ideas that shape a position.",
      "His coaching focuses on developing strong fundamentals, strategic awareness, and the confidence to approach every challenge with a clear mind.",
    ],
    philosophy:
      "A great player sees the move. A great coach teaches you to see the possibilities behind it.",
  },

  {
    id: 2,
    name: "Divyansh Guptha",
    role: "Chess Coach",
    rating: "1700+ Elo",
    specialties: ["Opening Preparation", "Positional Play"],
    image: divyanshImg,
    imageAlt: "Coach Divyansh portrait",
    description: [
      "Every chess game begins with a story, and Divyansh believes that a strong opening sets the tone for everything that follows.",
      "With a keen interest in opening preparation and positional understanding, he helps students discover the purpose behind their moves rather than simply memorizing variations.",
      "His friendly and approachable teaching style makes learning feel like a journey of exploration, where every position presents a new opportunity to think, experiment, and grow.",
    ],
    philosophy:
      "Chess isn't about finding the right move every time; it's about understanding why a move feels right.",
  },

  {
    id: 3,
    name: "Sunil Babu Y",
    role: "Coach & Partner",
    rating: "1700+ Elo",
    specialties: ["Calculation", "Independent Thinking"],
    image: sunilImg,
     // "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&auto=format&fit=crop&q=85",
    imageAlt: "Coach Sunil portrait",
    description: [
      "Every chess position presents a new challenge, and Sunil believes the real beauty of chess lies in discovering the possibilities hidden within it.",
      "With a strong focus on calculation and practical thinking, he encourages students to explore different ideas, make confident decisions, and understand the purpose behind every move.",
      "His friendly and engaging teaching style creates an environment where curiosity meets competition, helping students develop sharper thinking, resilience, and a genuine love for the game.",
    ],
    philosophy:
      "The beauty of chess lies not just in the moves you make, but in the possibilities you discover.",
  },

  {
    id: 4,
    name: "Nithesh M",
    role: "Chess Coach",
    rating: "1700 Elo",
    specialties: ["Strong Structure Building", "Positional Play"],
    image: nitheshImg,
     // "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=900&auto=format&fit=crop&q=85",
    imageAlt: "Coach Nithesh portrait",
    description: [
      "Nithesh believes that a strong chess game is built much like a strong foundation — one thoughtful decision at a time.",
      "With a focus on pawn structures and positional play, he guides students to understand the hidden architecture of a chess position.",
      "His teaching encourages learners to think ahead, recognize patterns, and build plans with patience rather than rushing towards immediate opportunities.",
      "Through a calm and structured approach, he helps students appreciate the beauty of strategic chess.",
    ],
    philosophy:
      "A beautiful game isn't always about the brilliant move; sometimes, it's about building a position where every move has a purpose.",
  },
];

// function CoachesHeader() {
//   return (
    // <header className="coaches-header">
    //   <div className="coaches-header-inner">
    //     <Link to="/" className="coaches-brand">
    //       Vishal <span>Chess Academy</span>
    //     </Link>

    //     <nav className="coaches-nav">
    //       <Link to="/">Home</Link>
    //       <Link to="/coaches" className="active">
    //         Coaches
    //       </Link>
    //       <Link to="/tournament-registration">Tournament</Link>
    //       <Link to="/student-registration">Student
    //       </Link>
    //     </nav>
    //   </div>
    // </header>
 // );
//}

function CoachProfile({ coach }) {
  return (
    <article
      className={`coach-profile ${
        coach.id % 2 === 0 ? "coach-reverse" : ""
      }`}
    >
      <div className="coach-image-wrapper">
        <img
          src={coach.image}
          alt={coach.imageAlt}
          className="coach-image"
          loading="lazy"
        />
        <div className="coach-image-overlay" />
        <span className="coach-number">
          0{coach.id}
        </span>
      </div>

      <div className="coach-content">
        <span className="coach-role">
          {coach.role}
        </span>

        <h2>{coach.name}</h2>

        <div className="coach-rating">
          <span className="rating-icon">♔</span>
          Peak Rating: {coach.rating}
        </div>

        <div className="coach-specialties">
          {coach.specialties.map((specialty) => (
            <span key={specialty}>
              {specialty}
            </span>
          ))}
        </div>

        <div className="coach-description">
          {coach.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="coach-philosophy">
          <span className="philosophy-label">
            Coaching Philosophy
          </span>
          <p>“{coach.philosophy}”</p>
        </div>
      </div>
    </article>
  );
}

function CoachesFooter() {
  return (
    <footer className="coaches-footer">
      <div className="coaches-footer-inner">
        <div>
          <h3>Vishal Chess Academy</h3>
          <p>Building thinkers, one move at a time.</p>
        </div>

        <div className="coaches-contact">
          <a href="tel:+919036024532">
            +91 90360 24532
          </a>
          <a href="mailto:unpuzzleclub@gmail.com">
            unpuzzleclub@gmail.com
          </a>
        </div>
      </div>

      <div className="coaches-footer-bottom">
        © {new Date().getFullYear()} Vishal Chess Academy. All rights reserved.
      </div>
    </footer>
  );
}

export default function Coaches() {
  return (
    //  <div className="coaches-page">
    //    <CoachesHeader />
    <div className="coaches-page">
       <div/>
      <main>
        <section className="coaches-hero">
          <div className="coaches-hero-content">
            <span className="coaches-eyebrow">
              THE MINDS BEHIND THE MOVES
            </span>

            <h1>
              Meet Our <span>Coaches</span>
            </h1>

            <p>
              Every great player begins with a guide.
              Meet the people who inspire every move,
              nurture every mind, and shape the next
              generation of chess thinkers.
            </p>

            <div className="hero-divider">
              <span />
              ♔
              <span />
            </div>
          </div>
        </section>

        <section className="coaches-list">
          {coaches.map((coach) => (
            <CoachProfile
              key={coach.id}
              coach={coach}
            />
          ))}
        </section>
      </main>

      <CoachesFooter />
    </div>
  );
}