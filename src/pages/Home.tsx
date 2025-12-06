import React from 'react';
import HeroSection from '../components/layout/HeroSection';
import ServicesSection from '../components/layout/ServicesSection';
import TechStackSection from '../components/layout/TechStackSection'; 
import LatestBlogSection from '../components/data/LatestBlogSection';
import ContactCTA from '../components/layout/ContactCTA';

const DUMMY_BLOG_POSTS = [
    { id: 1, title: "The Future of Serverless Architecture in 2024", summary: "A deep dive into how serverless computing is changing the way we deploy applications.", link: "/blog/serverless-future" },
    { id: 2, title: "10 Key Principles of Clean Code", summary: "Practical tips and guidelines for writing more maintainable and readable software.", link: "/blog/clean-code-principles" },
    { id: 3, title: "Why Microservices are Essential for Scalability", summary: "Understanding the benefits and challenges of breaking down monoliths into smaller services.", link: "/blog/microservices-scalability" },
];


const Home: React.FC = () => {
  return (
    <div className="pt-12 max-w-7xl mx-auto px-4 space-y-20">
      
      <HeroSection />

      <div style={{ padding: "20px 0" }} />

      <ServicesSection />
      
      <section className="max-w-5xl mx-auto py-8">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">Why Choose Us</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 max-w-4xl mx-auto">
          <li className="flex items-start space-x-3">
            <span className="text-2xl text-green-500">✓</span>
            <p><strong className="font-semibold">Experienced Team:</strong> Certified software engineers and architects dedicated to excellence.</p>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-2xl text-green-500">✓</span>
            <p><strong className="font-semibold">Scalable Solutions:</strong> Building future-proof applications that grow with your business.</p>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-2xl text-green-500">✓</span>
            <p><strong className="font-semibold">Modern Technology Stack:</strong> Utilizing reliable, industry-leading tools like React, Node.js, and AWS.</p>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-2xl text-green-500">✓</span>
            <p><strong className="font-semibold">Transparent Process:</strong> Agile methodologies and open communication throughout the project life cycle.</p>
          </li>
        </ul>
      </section>

      <TechStackSection />

      <LatestBlogSection posts={DUMMY_BLOG_POSTS} />

      <div className="relative pt-8 pb-0 overflow-hidden" /> 

      <ContactCTA />

    </div>
  );
};

export default Home;