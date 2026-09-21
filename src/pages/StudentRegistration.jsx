//import Header from "../components/Header";
import logo from "../assets/logo/01_unpuzzle_logo.png";
import childImage from "../assets/images/Child_Image.png";
import RegistrationForm from "../components/RegistrationForm";
import Footer from "../components/Footer";
import "../styles/registration.css";
function StudentRegistration() {
  return (
    <div className="registration-page">

      <main>

        <section className="registration-hero">

          <div className="hero-content">

            <a href="/" className="logo">
              <img
                src={logo}
                alt="Unpuzzle Club"
              />
            </a>


          <h1>
            Child Information Entry Form
          </h1>

            <p className="hero-description">
              Take the first step towards learning,
              growing and playing.
            </p>

          </div>

          <div className="hero-visual">
            <img
              src={childImage}
              alt="Child playing chess"
            />
          </div>

        </section>


        <section className="registration-section">

          <div className="registration-card">

            <div className="card-header">
              <h2>
                Register Your Child
              </h2>

              <p>
                Fill in the details below to get started.
              </p>
            </div>

            <RegistrationForm />

          </div>

        </section>


        <section className="dream-section">

          <h2>
            Small Steps
            <span>Big Dreams</span>
          </h2>

        </section>

      </main>

      <Footer />

    </div>
  );
}

export default StudentRegistration;