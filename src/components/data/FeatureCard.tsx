import React, { ReactNode } from 'react';

interface FeatureCardProps {
  /** The primary title of the feature. */
  title: string;
  /** The detailed description of the feature. */
  description: string;
  /** The icon element (e.g., a React-Icon component) to display. */
  icon: ReactNode;
  /** Optional background color class for the card. */
  bgColorClass?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon,
  bgColorClass = 'bg-white',
}) => {
  return (
    <div className={`p-6 border border-gray-200 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:shadow-xl hover:-translate-y-1 ${bgColorClass}`}>
      <div className="flex items-start space-x-4">
        {/* Icon Container */}
        <div className="flex-shrink-0 mt-1">
          {/* The icon prop already contains styling (color/size) from the parent component */}
          {icon}
        </div>
        
        {/* Text Content */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {title}
          </h3>
          <p className="text-gray-600 text-base">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;