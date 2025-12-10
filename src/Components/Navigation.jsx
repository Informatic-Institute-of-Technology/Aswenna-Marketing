import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useNavigate } from 'react-router-dom';
import AswennaLogo from '../assets/Company/AswennaLogo.png';
import LanguageToggle from './LanguageToggle';
import './Navigation.css';

const Navigation = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Update scrolled state
      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
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

  const toggleSearch = () => {
    setShowSearch(!showSearch);
    setSearchQuery('');
  };

  // Comprehensive search database for all sections and content
  const searchDatabase = [
    // Home page sections
    { keywords: ['home', 'main', 'welcome', 'landing'], path: '/', section: 'home' },
    { keywords: ['hero', 'banner', 'main banner'], path: '/', section: 'hero' },
    { keywords: ['benefits', 'why choose', 'advantages'], path: '/', section: 'benefits' },
    { keywords: ['testimonials', 'reviews', 'feedback', 'customer reviews'], path: '/', section: 'testimonials' },
    { keywords: ['call to action', 'cta', 'get started'], path: '/', section: 'cta' },

    // About page sections
    { keywords: ['about', 'about us', 'who we are', 'our story'], path: '/about', section: 'about' },
    { keywords: ['team', 'our team', 'members', 'staff', 'people'], path: '/about', section: 'team' },
    { keywords: ['mission', 'vision', 'values', 'our mission'], path: '/about', section: 'mission' },

    // Services page sections
    { keywords: ['services', 'what we offer', 'offerings', 'solutions'], path: '/services', section: 'services' },
    { keywords: ['digital marketing', 'marketing', 'seo', 'social media'], path: '/services', section: 'services' },
    { keywords: ['web development', 'website', 'web design'], path: '/services', section: 'services' },
    { keywords: ['branding', 'brand identity', 'logo'], path: '/services', section: 'services' },
    { keywords: ['consulting', 'strategy', 'business strategy'], path: '/services', section: 'services' },

    // Contact page sections
    { keywords: ['contact', 'reach us', 'get in touch', 'email', 'phone'], path: '/contact', section: 'contact' },
    { keywords: ['location', 'address', 'where we are', 'find us'], path: '/contact', section: 'contact' },
    { keywords: ['form', 'contact form', 'message'], path: '/contact', section: 'contact' },

    // General content
    { keywords: ['empower', 'empowerment', 'how we empower'], path: '/', section: 'empower' },
    { keywords: ['footer', 'social media', 'links'], path: '/', section: 'footer' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchQuery.toLowerCase().trim();

    if (!query) return;

    // Find matching section
    const matchedSection = searchDatabase.find(item =>
      item.keywords.some(keyword => keyword.includes(query) || query.includes(keyword))
    );

    if (matchedSection) {
      navigate(matchedSection.path);

      // Scroll to section after navigation
      setTimeout(() => {
        const sectionElement = document.getElementById(matchedSection.section);
        if (sectionElement) {
          sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // If no match found, go to home page
      navigate('/');
    }

    setShowSearch(false);
    setSearchQuery('');
    closeMenu();
  };

  // Filter search suggestions based on query
  const getSearchSuggestions = () => {
    if (!searchQuery.trim()) return [];

    const query = searchQuery.toLowerCase();
    return searchDatabase
      .filter(item => item.keywords.some(keyword => keyword.includes(query)))
      .slice(0, 5)
      .map(item => ({
        label: item.keywords[0].charAt(0).toUpperCase() + item.keywords[0].slice(1),
        path: item.path,
        section: item.section
      }));
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark fixed-top ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="navbar-container">
        <div className="container-fluid px-0">
          <NavLink to="/" className="navbar-brand d-flex align-items-center">
            <img
              src={AswennaLogo}
              alt="Aswenna Logo"
              className="navbar-logo"
              style={{
                width: '50px',
                height: '50px',
                objectFit: 'cover',
                borderRadius: '50%',
                transition: 'all 0.3s ease'
              }}
            />
          </NavLink>

          <div className="d-flex align-items-center gap-3 d-lg-none">
            <button
              className="btn btn-link p-0 text-white"
              onClick={toggleSearch}
              style={{ fontSize: '1.2rem', textDecoration: 'none' }}
            >
              <i className="bi bi-search"></i>
            </button>
            <LanguageToggle />

            <button
              className="navbar-toggler border-0"
              type="button"
              onClick={toggleMenu}
              aria-controls="navbarNav"
              aria-expanded={isOpen}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav align-items-center">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}
                  onClick={closeMenu}
                >
                  {t('nav.home')}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}
                  onClick={closeMenu}
                >
                  {t('nav.about')}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/services"
                  className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}
                  onClick={closeMenu}
                >
                  {t('nav.services')}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}
                  onClick={closeMenu}
                >
                  {t('nav.contact')}
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Right side: Language Toggle and Search */}
          <div className="d-none d-lg-flex align-items-center gap-3 ms-auto">
            <LanguageToggle />

            <button
              className="btn btn-link p-0 text-white search-btn"
              onClick={toggleSearch}
              style={{ fontSize: '1.3rem', textDecoration: 'none' }}
              title="Search"
            >
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Search Modal/Dropdown */}
      {showSearch && (
        <div className="search-overlay" onClick={toggleSearch}>
          <div className="search-container" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleSearch} className="search-form">
              <input
                type="text"
                className="form-control search-input"
                placeholder="Search for sections, content, services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <button type="submit" className="btn btn-primary search-submit">
                <i className="bi bi-search"></i>
              </button>
              <button type="button" className="btn btn-link search-close" onClick={toggleSearch}>
                <i className="bi bi-x-lg"></i>
              </button>
            </form>

            {/* Dynamic Search Suggestions */}
            {searchQuery && getSearchSuggestions().length > 0 && (
              <div className="search-results mt-3">
                <p className="text-muted small mb-2">Suggestions:</p>
                <div className="list-group">
                  {getSearchSuggestions().map((suggestion, index) => (
                    <button
                      key={index}
                      className="list-group-item list-group-item-action"
                      onClick={() => {
                        navigate(suggestion.path);
                        setTimeout(() => {
                          const sectionElement = document.getElementById(suggestion.section);
                          if (sectionElement) {
                            sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }
                        }, 100);
                        toggleSearch();
                      }}
                    >
                      <i className="bi bi-search me-2"></i>
                      {suggestion.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quick links when no search query */}
            {!searchQuery && (
              <div className="search-suggestions mt-3">
                <p className="text-muted small mb-2">Popular searches:</p>
                <div className="d-flex flex-wrap gap-2">
                  <button className="btn btn-sm btn-outline-secondary" onClick={() => { setSearchQuery('team'); }}>Team</button>
                  <button className="btn btn-sm btn-outline-secondary" onClick={() => { setSearchQuery('services'); }}>Services</button>
                  <button className="btn btn-sm btn-outline-secondary" onClick={() => { setSearchQuery('testimonials'); }}>Testimonials</button>
                  <button className="btn btn-sm btn-outline-secondary" onClick={() => { setSearchQuery('contact'); }}>Contact</button>
                  <button className="btn btn-sm btn-outline-secondary" onClick={() => { setSearchQuery('benefits'); }}>Benefits</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;