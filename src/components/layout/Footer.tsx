import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebook, FaYoutube, FaCloud, FaExchangeAlt, FaCogs, FaCheckSquare } from 'react-icons/fa';
import { AiOutlineApi } from 'react-icons/ai';
import { MdOutlineDataExploration } from 'react-icons/md';
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo_white.svg";
import Contact from '../../pages/Contact';
import MiniContactForm from '../layout/MiniContactForm'

// Replicating the services array from ServicesDropdown for use in the Footer
const services = [
  {
    label: "Software Development", 
    to: "/services/custom-software",
  },
  {
    label: "Cloud & DevOps", 
    to: "/services/cloud-devops",
  },
  {
    label: "Data & BI", 
    to: "/services/data-bi",
  },
  {
    label: "System Modernization", 
    to: "/services/modernization",
  },
  {
    label: "API Integration", 
    to: "/services/api-integration",
  },
  {
    label: "QA Automation", 
    to: "/services/qa-automation",
  },
];

export default function Footer() {
  return (
    <>
      <style>{`
        .footer {
          background-color: #0a0c10;
          color: #c2c7cc;
          font-family: Arial, sans-serif;
          font-size: 0.9rem;
          padding: 3rem 1.5rem 1rem;
        }
        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .footer-flex {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 2rem;
          border-bottom: 1px solid #333;
          padding-bottom: 2rem;
        }
        .footer-logo {
          flex: 1 1 200px;
        }
        .footer-cols {
          flex: 3;
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
        }
        .col {
          min-width: 150px;
        }
        .col h4 {
          color: #fff;
          font-size: 1rem;
          margin-bottom: 0.75rem;
        }
        .col a {
          display: block;
          color: #c2c7cc;
          text-decoration: none;
          margin-bottom: 0.4rem;
        }
        .col a:hover {
          color: #fff;
        }
        .footer-contact {
          flex: 1 1 200px;
        }
        .social {
          margin-top: 1rem;
          display: flex;
          gap: 1rem;
        }
        .social a {
          color: #c2c7cc;
          font-size: 1.2rem;
        }
        .social a:hover {
          color: #fff;
        }
        .footer-bottom {
          text-align: center;
          margin-top: 1.5rem;
          color: #777;
          font-size: 0.8rem;
        }
        .footer-logo-link {
          display: flex;
          align-items: center;
          user-select: none;
          outline: none;
        }
        .footer-logo-image {
          height: 26px;
          width: auto;
          object-fit: contain;
        }
      `}</style>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-flex">
            <div className="footer-logo">
              {/* Replace with your logo component */}
              <Link to="/" className="footer-logo-link" aria-label="Go to homepage">
                <img src={logo} alt="Calvian Logo" className="footer-logo-image" />
              </Link>
              <p>Your Vision, Developed. Your Future, Secured.</p>
            </div>

            <div className="footer-cols">
              <div className="col" style={{padding: "0 50px 0 0 "}}>
                <h4>Services</h4>
                {services.map(({ label, to }) => (
                  <Link key={to} to={to}>{label}</Link>
                ))}
              </div>
              <div className="col">
                <h4>Company</h4>
                <Link to="/about">About Us</Link>
                <Link to="/blog">Insights</Link>
              </div>
              <div className="col footer-contact">
                <h4>Contact</h4>
                <MiniContactForm />
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            &copy; {new Date().getFullYear()} Calvian Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}