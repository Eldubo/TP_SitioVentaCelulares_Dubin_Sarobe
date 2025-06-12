import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { marcas } from '../data/data';
import '../styles/navbar.css';

const Navbar = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <header className="navbar">
      <div className="navbar__logo">
        <Link to="/" onClick={cerrarMenu}>📱 CellStore</Link>
      </div>

      <nav className={`navbar__links ${menuAbierto ? 'active' : ''}`}>
        <NavLink to="/" onClick={cerrarMenu}>Home</NavLink>
        <NavLink to="/quienes-somos" onClick={cerrarMenu}>Quiénes Somos</NavLink>
        <div className="navbar__dropdown">
          <NavLink to="/productos" onClick={cerrarMenu}>Productos ▾</NavLink>
          <div className="dropdown-content">
            <NavLink to="/productos" onClick={cerrarMenu}>Ver Todos</NavLink>
            {marcas.map(marca => (
              <NavLink
                key={marca.id}
                to={`/productos/marca/${marca.id}`}
                onClick={cerrarMenu}
              >
                {marca.nombre}
              </NavLink>
            ))}
          </div>
        </div>
        <NavLink to="/contacto" onClick={cerrarMenu}>Contacto</NavLink>
      </nav>

      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>
    </header>
  );
};

export default Navbar;
