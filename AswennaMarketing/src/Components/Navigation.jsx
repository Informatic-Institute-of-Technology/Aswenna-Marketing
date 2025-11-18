import { NavLink } from "./NavLink";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top border-bottom" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(10px)' }}>
      <div className="container">
        <NavLink to="/" className="navbar-brand d-flex align-items-center">
          <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center me-2" style={{ width: '40px', height: '40px' }}>
            <span className="text-white fw-bold fs-5">A</span>
          </div>
          <span className="fs-5 fw-bold text-dark">Aswenna</span>
        </NavLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-4">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link text-secondary"
                activeClassName="text-primary fw-semibold"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-link text-secondary"
                activeClassName="text-primary fw-semibold"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/services"
                className="nav-link text-secondary"
                activeClassName="text-primary fw-semibold"
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-link text-secondary"
                activeClassName="text-primary fw-semibold"
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