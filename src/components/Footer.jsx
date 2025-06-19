import { Link } from 'react-router-dom';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__logo">
          <h2>📱 Tecnomorphosis</h2>
          <p>Tu tienda de celulares de confianza</p>
        </div>
        <div className="footer__links">
          <Link to="/">Inicio</Link>
          <Link to="/quienes-somos">Quiénes Somos</Link>
          <Link to="/productos">Productos</Link>
          <Link to="/contacto">Contacto</Link>
        </div>
        <div className="footer__social">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; 2025 Tecnomorphosis. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
