import React from 'react';
import HeroSection from '../components/layout/HeroSection';
import ServicesSection from '../components/layout/ServicesSection';

const Home: React.FC = () => {
  return (
    <div className="pt-24 max-w-7xl mx-auto px-4 space-y-20">
      <HeroSection />

      <ServicesSection />

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
