import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => (
  <section className="text-center max-w-2xl mx-auto">
    <h1 className="text-5xl pt-10 font-extrabold text-primary mb-6">
      Efficient Software Solutions
    </h1>
    <p className="text-lg text-gray-700 mb-8">
      Programming, system architecture, deployment, testing & more — tailored for your success
    </p>
    <Link
      to="/contact"
      className="inline-block bg-primary text-white font-semibold py-3 px-8 rounded-lg hover:bg-primary-hover transition"
    >
      Get Started
    </Link>
  </section>
);

export default HeroSection;