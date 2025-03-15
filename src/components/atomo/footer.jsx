import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
        <div className="social-links">
          <a href="https://github.com/Voli-svg" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href="https://www.linkedin.com/in/benjamin-almonacid-chamia-327a23356/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i> Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;