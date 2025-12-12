// src/components/layout/Navbar.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ServicesDropdown from "./ServicesDropdown";
import logo from "../../assets/images/logo_white.svg";
import colors from "../../../config/colors";

interface NavbarProps {
    id: string;
    className: string;
}

const navItems = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services", hasDropdown: true },
];

const sideMargins = "120px";

// Updated the function signature to use React.FC and accept props
const Navbar: React.FC<NavbarProps> = ({ id, className }) => {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    // Apply the ID and class from App.tsx, and combine with the static base class
    <nav id={id} className={`navbar navbar-base ${className}`}> 
      <Link to="/" className="logo-link" aria-label="Go to homepage" style={{ paddingLeft: sideMargins }}>
        <img src={logo} alt="Calvian Logo" className="logo-image" />
      </Link>

      <ul className="nav-list" style={{ marginRight: sideMargins }}>
        {navItems.map(({ label, to, hasDropdown }) => {
          if (hasDropdown) {
            return (
              <li
                key={label}
                className="nav-item dropdown"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <div
                  className="nav-link no-focus"
                  tabIndex={0}
                  onFocus={() => setServicesOpen(true)}
                  onBlur={() => setServicesOpen(false)}
                >
                  {label}
                  <span className="underline" />
                </div>

                <ServicesDropdown isOpen={servicesOpen} setIsOpen={setServicesOpen} />
              </li>
            );
          }

          return (
            <li key={label} className="nav-item">
              <Link to={to} className="nav-link">
                {label}
                <span className="underline" />
              </Link>
            </li>
          );
        })}

        <li className="nav-item">
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <button
              className="contact-btn"
              type="button">
              Contact
            </button>
          </Link>
        </li>
      </ul>

      <style jsx>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-link {
          display: flex;
          align-items: center;
          user-select: none;
          outline: none;
        }

        .logo-image {
          height: 40px; /* adjust to fit your navbar */
          width: auto;
          object-fit: contain;
        }

        .nav-list {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
          align-items: center;
        }

        .nav-item {
          position: relative;
        }

        .nav-link {
          color: #eee;
          text-decoration: none;
          cursor: pointer;
          padding: 0.5rem 0;
          display: inline-block;
          transition: color 0.3s ease, transform 0.3s ease;
          user-select: none;
          outline: none;
        }

        .nav-link:hover,
        .nav-link:not(.no-focus):focus {
          color: ${colors["primary-hover"]};
          transform: scale(1.1);
        }

        .underline {
          position: absolute;
          left: 0;
          bottom: 0;
          height: 2px;
          width: 0%;
          background-color: ${colors.primary};
          transition: width 0.3s ease;
          border-radius: 2px;
        }

        .nav-link:hover .underline,
        .nav-link:not(.no-focus):focus .underline {
          width: 100%;
        }

        .contact-btn {
          background-color: ${colors.primary};
          color: ${colors['dark-grey']};
          border: none;
          border-radius: 4px;
          padding: 0.5rem 1rem;
          cursor: pointer;
          font-weight: bold;
          transition: background-color 0.3s ease;
        }

        .contact-btn:hover {
          background-color: ${colors["primary-hover"]};
        }
      `}</style>
    </nav>
  );
}

export default Navbar;