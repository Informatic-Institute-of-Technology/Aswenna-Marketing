import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top" style={{ backgroundColor: '#000000', boxShadow: '0 4px 6px rgba(179, 179, 179, 0.3)' }}>
      <div className="container-fluid px-4 px-lg-5">
        <NavLink to="/" className="navbar-brand d-flex align-items-center">
          <div
            className="rounded-circle bg-primary d-flex align-items-center justify-content-center me-2"
            style={{ width: '40px', height: '40px' }}
          >
            <span className="text-white fw-bold fs-5">A</span>
          </div>
          <span className="fs-5 fw-bold text-white">Aswenna</span>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse justify-content-end ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav gap-4">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) => `nav-link text-white ${isActive ? 'fw-semibold' : ''}`}
                onClick={closeMenu}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) => `nav-link text-white ${isActive ? 'fw-semibold' : ''}`}
                onClick={closeMenu}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/services"
                className={({ isActive }) => `nav-link text-white ${isActive ? 'fw-semibold' : ''}`}
                onClick={closeMenu}
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) => `nav-link text-white ${isActive ? 'fw-semibold' : ''}`}
                onClick={closeMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;