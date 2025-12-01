// src/components/layout/ServicesDropdown.tsx
import React from "react";
import { Link } from "react-router-dom";
import { FaCode, FaMobileAlt, FaPalette } from "react-icons/fa"; // Using react-icons for demo
import colors from "../../../config/colors";

interface ServicesDropdownProps {
  isOpen: boolean;
}

const services = [
  {
    label: "Web Development",
    to: "/services/web-development",
    icon: <FaCode size={24} color={colors.primary} />,
    description: "Build modern and scalable websites and apps.",
  },
  {
    label: "Mobile Apps",
    to: "/services/mobile-apps",
    icon: <FaMobileAlt size={24} color={colors.primary} />,
    description: "Native and cross-platform mobile applications.",
  },
  {
    label: "UI/UX Design",
    to: "/services/ui-ux",
    icon: <FaPalette size={24} color={colors.primary} />,
    description: "Intuitive and beautiful user interfaces.",
  },
];

export default function ServicesDropdown({ isOpen }: ServicesDropdownProps) {
  return (
    <div className={`dropdown-drawer ${isOpen ? "open" : ""}`}>
      <div className="drawer-content">
        {services.map(({ label, to, icon, description }) => (
          <Link key={label} to={to} className="drawer-item">
            <div className="icon">{icon}</div>
            <div className="text">
              <div className="title">{label}</div>
              <div className="description">{description}</div>
            </div>
          </Link>
        ))}

        <button
          className="contact-btn"
          onClick={() => alert("Contacting sales...")}
          type="button"
        >
          Contact Sales
        </button>
      </div>

      <style jsx>{`
        .dropdown-drawer {
          position: fixed;
          top: 60px; /* adjust this to your navbar height */
          left: 0;
          right: 0;
          width: 100vw;
          background-color: #222;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          visibility: hidden;
          transition: max-height 0.4s ease, opacity 0.3s ease, visibility 0.3s;
          z-index: 1001;
          border-top: 2px solid ${colors.primary};
        }

        .dropdown-drawer.open {
          max-height: 400px; /* Adjust based on content */
          opacity: 1;
          visibility: visible;
          overflow: auto;
        }

        .drawer-content {
          display: flex;
          gap: 2rem;
          padding: 1.5rem 4rem;
          justify-content: center;
          align-items: flex-start;
          flex-wrap: wrap;
        }

        .drawer-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          background-color: #333;
          padding: 1rem 1.5rem;
          border-radius: 8px;
          text-decoration: none;
          color: #eee;
          width: 220px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
          transition: background-color 0.25s ease;
          user-select: none;
        }

        .drawer-item:hover {
          background-color: ${colors.primary};
          color: #222;
        }

        .icon {
          flex-shrink: 0;
          margin-top: 4px;
        }

        .text {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .title {
          font-weight: 700;
          font-size: 1.1rem;
          user-select: text;
        }

        .description {
          font-size: 0.85rem;
          opacity: 0.75;
          user-select: text;
        }

        .contact-btn {
          align-self: center;
          margin-left: 2rem;
          background-color: ${colors["primary"]};
          border: none;
          padding: 0.75rem 1.75rem;
          border-radius: 6px;
          color: #222;
          font-weight: 700;
          cursor: pointer;
          //box-shadow: 0 4px 12px ${colors["gray-base"]};
          transition: background-color 0.3s ease;
          user-select: none;
          height: fit-content;
        }

        .contact-btn:hover {
          background-color: ${colors["primary-hover"]};
        }

        /* Scrollbar styling for overflow */
        .dropdown-drawer.open::-webkit-scrollbar {
          height: 8px;
        }

        .dropdown-drawer.open::-webkit-scrollbar-thumb {
          background-color: ${colors["hover-accent"]};
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
}
