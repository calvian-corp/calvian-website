// components/services/ServiceCard.tsx
import React from 'react';
import { IconType } from 'react-icons'; // Assuming you pass an Icon component directly

interface ServiceCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    onClick: () => void; // New prop for click handler
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, onClick }) => (
    // Added onClick handler and a cursor-pointer class to indicate interactivity
    <div 
        className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow cursor-pointer border border-transparent hover:border-primary-400"
        onClick={onClick} 
    >
        <div className="text-primary mb-4 text-6xl">{icon}</div> {/* Changed color for consistency */}
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-700">{description}</p>
        <div className="mt-auto pt-4 text-sm font-medium text-primary hover:text-primary-hover">
            Learn More →
        </div>
    </div>
);

export default ServiceCard;