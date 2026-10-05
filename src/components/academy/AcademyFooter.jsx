import { FaInstagram, FaLinkedinIn, FaWhatsapp, FaYoutube } from "react-icons/fa";
import "../../styles/academy-footer.css";

function AcademyFooter() {
  return (
    <footer className="academy-footer">
      <div className="footer-container">

        <h2>Contact Us</h2>

        <div className="footer-contact">

          <a href="tel:+919036024532">
            📞 +91 90360 24532
          </a>

          <a href="mailto:unpuzzleclub@gmail.com">
            ✉ unpuzzleclub@gmail.com
          </a>

          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
            Instagram
          </a>

          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
            LinkedIn
          </a>

          <a
            href="https://wa.me/919036024532"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
            WhatsApp
          </a>

          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
            YouTube
          </a>

        </div>

      </div>
    </footer>
  );
}

export default AcademyFooter;