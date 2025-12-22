import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

interface ProcessStep {
  title: string;
  detail: string;
}

interface ProcessFlowProps {
  steps: ProcessStep[];
}

const ProcessFlow: React.FC<ProcessFlowProps> = ({ steps }) => {
  return (
    <div className="flex flex-col items-center py-8">
      
      

      <div className="flex justify-center items-stretch space-x-0 overflow-x-auto p-4">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            {/* Process Step Card */}
            <div 
              className="flex flex-col justify-start w-64 p-6 bg-white border border-gray-200 rounded-lg shadow-xl flex-shrink-0 transition duration-300 hover:shadow-2xl"
            >
              <span className="text-3xl font-extrabold text-primary mb-2">{index + 1}</span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm flex-grow">{step.detail}</p>
            </div>
            
            {/* Arrow Separator (Hidden on the last step) */}
            {index < steps.length - 1 && (
              <div className="flex items-center justify-center p-4 flex-shrink-0">
                <FaArrowRight size={24} className="text-gray-400" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <p className="mt-8 text-sm text-gray-500 italic max-w-4xl text-center">
        Our process is iterative and minimizes risk by prioritizing continuous integration and incremental deployment, ensuring business continuity throughout the transformation.
      </p>
    </div>
  );
};

export default ProcessFlow;