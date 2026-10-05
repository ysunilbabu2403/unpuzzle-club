import { useNavigate } from "react-router-dom";

import landscapePoster
  from "../assets/tournament/lposter.jpg";

import mobilePoster
  from "../assets/tournament/mposter.jpg";

import "../styles/tournament-info.css";

function TournamentRegistration() {
  const navigate = useNavigate();

  return (
    <div className="tournament-registration-page">

      <main>

        {/* =====================================================
            PAGE HERO
            ===================================================== */}

        <section className="tournament-registration-hero">

          <div className="tournament-registration-overlay">

            <div className="tournament-registration-content">

              <h1>Tournaments</h1>

              <p>
                Explore upcoming tournaments and register for your next
                competitive chess experience.
              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            TOURNAMENT LIST
            ===================================================== */}

        <section className="tournaments-section">

          <div className="tournaments-container">

            {/* <div className="tournaments-heading">

              <span>UPCOMING EVENTS</span>

              <h2>Choose Your Tournament</h2>

              <p>
                Find a tournament that matches your level and get ready
                to make your move.
              </p>

            </div> */}


            {/* =================================================
                TOURNAMENT 1
                ================================================= */}

            <article className="tournament-card">

              {/* Poster */}

              <div className="tournament-card-poster">

                {/* <img
                  src={landscapePoster}
                  alt="Vishal Chess Academy Internal Tournament"
                  className="tournament-poster-landscape"
                /> */}

                <img
                  src={mobilePoster}
                  alt="Vishal Chess Academy Internal Tournament"
                  className="tournament-poster-landscape"
                />

              </div>


              {/* Information */}

              <div className="tournament-card-content">

                <p className="tournament-card-label">
                  VISHAL CHESS ACADEMY
                </p>

                <h3>
                  Internal Tournament
                </h3>

                <p className="tournament-card-description">
                  Get ready for an exciting day of competitive chess at
                  Vishal Chess Academy. This internal tournament is designed
                  for our Intermediate and Advanced players to test their
                  skills, gain tournament experience, and enjoy the spirit
                  of competitive chess.
                </p>


                {/* Tournament Information */}

                <div className="tournament-card-info">

                  <div>
                    <span>Date</span>
                    <strong>October 25</strong>
                  </div>

                  <div>
                    <span>Start Time</span>
                    <strong>12:30 PM</strong>
                  </div>

                  <div>
                    <span>Entry Fee</span>
                    <strong>₹300</strong>
                  </div>

                  <div>
                    <span>Rounds</span>
                    <strong>5 Rounds</strong>
                  </div>

                  <div>
                    <span>Time Control</span>
                    <strong>15 + 5</strong>
                  </div>

                  <div>
                    <span>Category</span>
                    <strong>Intermediate & Advanced</strong>
                  </div>

                </div>


                {/* Prizes */}

                <div className="tournament-card-prizes">

                  <span>Prizes</span>

                  <p>
                    <strong>Top 2</strong> — Trophies
                    <br />
                    <strong>Next 3</strong> — Medals
                  </p>

                </div>


                {/* Register */}

                <button
                  type="button"
                  className="tournament-register-button"
                  onClick={() =>
                    navigate("/tournament-registration/form")
                  }
                >
                  Register Now →
                </button>

              </div>

            </article>


            {/* =================================================
                ADD FUTURE TOURNAMENTS HERE
                ================================================= */}

            {/*
            <article className="tournament-card">

              <div className="tournament-card-poster">
                <img src={anotherPoster} alt="Tournament Name" />
              </div>

              <div className="tournament-card-content">

                <p className="tournament-card-label">
                  VISHAL CHESS ACADEMY
                </p>

                <h3>
                  Another Tournament
                </h3>

                <p className="tournament-card-description">
                  Tournament description goes here.
                </p>

                <div className="tournament-card-info">
                  ...
                </div>

                <button
                  type="button"
                  className="tournament-register-button"
                  onClick={() =>
                    navigate("/tournament-registration/form")
                  }
                >
                  Register Now →
                </button>

              </div>

            </article>
            */}

          </div>

        </section>

      </main>

    </div>
  );
}

export default TournamentRegistration;