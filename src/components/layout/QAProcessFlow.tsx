// src/components/layout/QAProcessFlow.tsx
import React from 'react';
import { FaArrowRight, FaSearch, FaFlask, FaCheckCircle, FaClipboardCheck } from 'react-icons/fa';

interface QAProcessStep {
  title: string;
  detail: string;
  icon: React.ReactNode;
}

interface QAProcessFlowProps {
  steps: QAProcessStep[];
}

const defaultSteps: QAProcessStep[] = [
  { title: "Define Strategy", detail: "Establish testing goals, coverage metrics, and automation framework selection.", icon: <FaSearch size={24} className="text-blue-500" /> },
  { title: "Test Environment Setup", detail: "Configure environments and necessary tools for parallel and continuous testing.", icon: <FaFlask size={24} className="text-yellow-500" /> },
  { title: "Script Development", detail: "Write robust, reusable automation scripts for unit, integration, and E2E tests.", icon: <FaClipboardCheck size={24} className="text-green-500" /> },
  { title: "CI/CD Integration", detail: "Embed tests into the deployment pipeline to ensure quality checks on every commit.", icon: <FaCheckCircle size={24} className="text-purple-500" /> },
];

const QAProcessFlow: React.FC<QAProcessFlowProps> = ({ steps = defaultSteps }) => {
  return (
    <div className="flex flex-col items-center py-8">
      
      

[Image of Quality Assurance Workflow Diagram]


      <div className="flex justify-center items-stretch space-x-0 overflow-x-auto p-4">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            {/* QA Process Step Card */}
            <div 
              className="flex flex-col justify-start w-64 p-6 bg-white border border-gray-200 rounded-lg shadow-xl flex-shrink-0 transition duration-300 hover:shadow-2xl"
            >
              <div className="mb-3">{step.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
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
        This structured process guarantees maximum test coverage and a shift-left approach to quality engineering.
      </p>
    </div>
  );
};

export default QAProcessFlow;