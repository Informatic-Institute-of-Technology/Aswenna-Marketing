import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import LanguageToggle from './LanguageToggle';

const Navigation = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className="navbar navbar-expand-md navbar-dark fixed-top"
      style={{
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.1)' : '#000000',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: '0 0 10px 0 #ffffff70',
        transition: 'all 0.3s ease'
      }}
    >
      <div className="container-fluid px-4 px-lg-5">
        <NavLink to="/" className="navbar-brand d-flex align-items-center">
          <div
            className="rounded-circle d-flex align-items-center justify-content-center me-2"
            style={{ width: '40px', height: '40px', backgroundColor: '#C7DDC5' }}
          >
            <span className="text-black fw-bold fs-5">A</span>
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
          <ul className="navbar-nav gap-4 align-items-center">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) => `nav-link text-white ${isActive ? 'fw-semibold' : ''}`}
                onClick={closeMenu}
              >
                {t('nav.home')}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) => `nav-link text-white ${isActive ? 'fw-semibold' : ''}`}
                onClick={closeMenu}
              >
                {t('nav.about')}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/services"
                className={({ isActive }) => `nav-link text-white ${isActive ? 'fw-semibold' : ''}`}
                onClick={closeMenu}
              >
                {t('nav.services')}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) => `nav-link text-white ${isActive ? 'fw-semibold' : ''}`}
                onClick={closeMenu}
              >
                {t('nav.contact')}
              </NavLink>
            </li>
            <li className="nav-item">
              <LanguageToggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;