import React, { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import { FaCloud, FaExchangeAlt, FaCogs, FaCheckSquare } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { MdOutlineDataExploration } from "react-icons/md";

import colors from "../../../config/colors";

interface ServicesDropdownProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const services = [
  {
    label: "Software Development", // Shortened from "Custom Software Development"
    to: "/services/custom-software",
    icon: <FaCogs size={24} color={colors.primary} />,
    description: "Tailored solutions from concept to deployment for your unique business needs.",
  },
  {
    label: "Cloud & DevOps", // Shortened from "Cloud Engineering & DevOps"
    to: "/services/cloud-devops",
    icon: <FaCloud size={24} color={colors.primary} />,
    description: "Migration, architecture, and automation for scalable, cost-efficient cloud infrastructure.",
  },
  {
    label: "Data & BI", // Shortened from "Data & Business Intelligence"
    to: "/services/data-bi",
    icon: <MdOutlineDataExploration size={24} color={colors.primary} />,
    description: "Transform raw data into actionable insights and strategic reporting dashboards.",
  },
  {
    label: "System Modernization", // Shortened from "Legacy System Modernization"
    to: "/services/modernization",
    icon: <FaExchangeAlt size={24} color={colors.primary} />,
    description: "Update and refactor outdated systems to improve performance, security, and maintainability.",
  },
  {
    label: "API Integration", // Shortened from "API Development & Integration"
    to: "/services/api-integration",
    icon: <AiOutlineApi size={24} color={colors.primary} />,
    description: "Build robust APIs and seamlessly connect disparate systems and third-party services.",
  },
  {
    label: "QA Automation", // Shortened from "QA & Automation Engineering"
    to: "/services/qa-automation",
    icon: <FaCheckSquare size={24} color={colors.primary} />,
    description: "Implement automated testing frameworks, performance tests, and continuous quality pipelines.",
  },
];

export default function ServicesDropdown({
  isOpen,
  setIsOpen,
}: ServicesDropdownProps) {
  return (
    <div className={`dropdown-drawer ${isOpen ? "open" : ""}`}>
      <div className="drawer-content">
        {services.map(({ label, to, icon, description }) => (
          <Link
            key={to}
            to={to}
            className="drawer-item"
            onClick={() => setIsOpen(false)}
          >
            <div className="icon">{icon}</div>
            <div className="text">
              <div className="title">{label}</div>
              <div className="description">{description}</div>
            </div>
          </Link>
        ))}
      </div>

      <style jsx>{`
        .dropdown-drawer {
          position: fixed;
          top: 70px; /* adjust this to your navbar height */
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
          max-height: 500px; /* Adjust based on content */
          opacity: 1;
          visibility: visible;
          overflow: auto;
        }

        .drawer-content {
          display: grid;
          /* Adjusted to 3 columns for better content flow with 9 items, maintaining 250px width */
          grid-template-columns: repeat(3, 300px);
          gap: 2rem;
          padding: 1.5rem 4rem;
          justify-content: center;
          align-items: flex-start;
          flex-wrap: wrap;
        }

        .drawer-item {
          display: flex;
          align-items: flex-start;
          height: 130px;
          gap: 1rem;
          background-color: #333;
          padding: 1rem 1.5rem;
          border-radius: 8px;
          text-decoration: none;
          color: #eee;
          width: 300px; /* Adjusted width */
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
          transition: background-color 0.25s ease;
          user-select: none;
        }

        .drawer-item:hover {
          background-color: ${colors["primary-hover"]};
          color: #222;
        }

        .drawer-item:hover .icon svg {
          color: #222;
          fill: #222;
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

        @media (max-width: 1000px) {
          .drawer-content {
            grid-template-columns: repeat(2, 300px); /* 2 columns for smaller screens */
          }
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