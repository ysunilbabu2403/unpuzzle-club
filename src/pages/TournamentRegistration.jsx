import TournamentRegistrationForm from "../components/TournamentRegistrationForm";
import "../styles/tournament-registration.css";

function TournamentRegistration() {
  return (
    <div className="tournament-registration-page">

      <main>

        <section className="tournament-registration-hero">

          <div className="tournament-registration-overlay">

            <div className="tournament-registration-content">

              <h1>
                Tournament Registration
              </h1>

              <p>
                Register now and get ready to make your move.
              </p>

            </div>

          </div>

        </section>


        <section className="tournament-form-section">

          <div className="tournament-form-card">

            <div className="tournament-form-header">

              <h2>
                Player Registration
              </h2>

              <p>
                Please fill in the details below to register
                for the tournament.
              </p>

            </div>

            <TournamentRegistrationForm />

          </div>

        </section>

      </main>

    </div>
  );
}

export default TournamentRegistration;