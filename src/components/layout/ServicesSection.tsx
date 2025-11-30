import React from 'react';
import { FaCode, FaServer, FaCloud, FaBug } from 'react-icons/fa';
import ServiceCard from '../../components/services/ServiceCard';

const ServicesSection: React.FC = () => (
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
);

export default ServicesSection;
