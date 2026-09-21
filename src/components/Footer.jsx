function Footer() {
  return (
    <footer className="site-footer">

      <div className="footer-content">
        
        <div className="footer-contact">

          <a href="tel:+919036024532">
            📞 +91 90360 24532
          </a>

          <a href="mailto:unpuzzleclub@gmail.com">
            ✉ unpuzzleclub@gmail.com
          </a>

        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Unpuzzle Club.
          All rights reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;