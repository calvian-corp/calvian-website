import React from 'react';
import { FaCode, FaCogs, FaRocket, FaBug, FaCloud } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';

const steps = [
  { label: 'Plan & Code', icon: FaCode, color: 'bg-indigo-500' },
  { label: 'Build', icon: FaCogs, color: 'bg-blue-500' },
  { label: 'Test & QA', icon: FaBug, color: 'bg-green-500' },
  { label: 'Deploy', icon: FaRocket, color: 'bg-yellow-500' },
  { label: 'Monitor & Feedback', icon: FaCloud, color: 'bg-red-500' },
];

const WorkflowDiagram: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-white shadow-lg rounded-xl border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-800 mb-8">DevOps Continuous Workflow</h3>

      {/* The requested image tag for the DevOps Infinity Loop Diagram */}<div className="flex justify-center items-center space-x-2 md:space-x-4 mt-6">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            {/* Workflow Step */}
            <div
              className={`flex flex-col items-center p-4 rounded-lg text-white w-32 h-32 md:w-40 md:h-40 ${step.color} shadow-md transition-transform duration-300 hover:scale-105`}
            >
              <step.icon size={36} className="mb-2" />
              <p className="text-sm font-semibold text-center">{step.label}</p>
            </div>

            {/* Arrow Separator (Hidden on the last step) */}
            {index < steps.length - 1 && (
              <BsArrowRight size={32} className="text-gray-400 flex-shrink-0 hidden md:block" />
            )}
          </React.Fragment>
        ))}
      </div>
      <p className="mt-6 text-sm text-gray-500 italic">This loop ensures continuous delivery, fast iteration, and quality assurance.</p>
    </div>
  );
};

export default WorkflowDiagram;
