import React from 'react';
import { FaCode, FaServer, FaCloud, FaBug } from 'react-icons/fa';
import ServiceCard from '../components/services/ServiceCard';

const Services: React.FC = () => (
  <div className="pt-24 max-w-7xl mx-auto px-4 space-y-16">
    <h1 className="text-5xl font-extrabold text-primary text-center mb-12">Our Services</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
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
    </div>
  </div>
);

export default Services;
