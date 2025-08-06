import React from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaServer, FaCloud, FaBug } from 'react-icons/fa';
import ServiceCard from '../components/services/ServiceCard';

const Home: React.FC = () => {
  return (
    <div className="pt-24 max-w-7xl mx-auto px-4 space-y-20">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-extrabold text-primary mb-6">
          Professional Software Services for Your Business
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Programming, system architecture, deployment, testing & more — tailored for your success.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-primary text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition"
        >
          Get Started
        </Link>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ServiceCard
          icon={<FaCode />}
          title="Programming"
          description="Custom software development using modern technologies and best practices."
        />
        <ServiceCard
          icon={<FaServer />}
          title="System Architecture"
          description="Design scalable and maintainable system architectures tailored to your needs."
        />
        <ServiceCard
          icon={<FaCloud />}
          title="Deployment & Hosting"
          description="Reliable cloud deployment and hosting services ensuring uptime and performance."
        />
        <ServiceCard
          icon={<FaBug />}
          title="Testing & QA"
          description="Automated and manual testing to guarantee software quality and reliability."
        />
      </section>

      {/* About Snippet */}
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-secondary mb-4">About Us</h2>
        <p className="text-gray-700">
          We are a team of passionate software professionals committed to delivering scalable,
          efficient, and modern solutions that empower your business to thrive in the digital world.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Why Choose Us</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 list-disc list-inside max-w-xl mx-auto">
          <li>Experienced team of software engineers and architects</li>
          <li>Scalable and maintainable solutions</li>
          <li>Use of modern, reliable technology stack</li>
          <li>Transparent communication and project management</li>
          <li>Dedicated 24/7 support and maintenance</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
