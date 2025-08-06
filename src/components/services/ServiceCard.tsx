import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow cursor-default">
    <div className="text-primary mb-4 text-6xl">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

export default ServiceCard;
