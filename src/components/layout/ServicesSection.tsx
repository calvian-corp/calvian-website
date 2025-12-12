// components/layout/ServicesSection.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaServer, FaCloud, FaBug, FaCheckCircle } from 'react-icons/fa';
import ServiceCard from '../../components/services/ServiceCard';
import ServiceModal from '../../components/services/ServiceModal'; // Import the new modal

// Define a type for service data
interface Service {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
    longDescription: string;
    keyFeatures: string[];
}

const servicesData: Service[] = [
    {
        id: 1,
        title: "Programming",
        description: "Custom software development using modern technologies and best practices.",
        icon: <FaCode />,
        longDescription: "We craft robust, high-performance, and maintainable applications from the ground up. Our expertise spans full-stack development, mobile apps, and legacy system modernization. We focus on delivering clean, well-tested code that adheres to industry standards.",
        keyFeatures: ["Full-Stack JavaScript (React/Node)", "Python/Django Development", "RESTful API Design", "Code Reviews & Refactoring"]
    },
    {
        id: 2,
        title: "System Architecture",
        description: "Design scalable and maintainable system architectures tailored to your needs.",
        icon: <FaServer />,
        longDescription: "Our architects design future-proof systems, ensuring they can handle millions of users and high traffic loads. We specialize in microservices, serverless, and event-driven patterns to provide maximum resilience and cost efficiency.",
        keyFeatures: ["Microservices Design", "Cloud Native (AWS, Azure, GCP)", "Data Modeling & Database Selection", "Performance Optimization"]
    },
    {
        id: 3,
        title: "Deployment & Hosting",
        description: "Reliable cloud deployment and hosting services ensuring uptime and performance.",
        icon: <FaCloud />,
        longDescription: "We automate the entire deployment lifecycle using CI/CD pipelines. Leveraging leading cloud providers, we ensure your application is always available, secure, and running at peak performance. Our services include infrastructure-as-code (Terraform/CloudFormation).",
        keyFeatures: ["CI/CD Pipeline Setup (GitHub Actions, Jenkins)", "Docker & Kubernetes Management", "Serverless Functions (Lambda)", "Infrastructure as Code (IaC)"]
    },
    {
        id: 4,
        title: "Testing & QA",
        description: "Automated and manual testing to guarantee software quality and reliability.",
        icon: <FaBug />,
        longDescription: "Quality is embedded in our development process. We implement comprehensive testing strategies including unit, integration, and end-to-end tests to catch bugs early. This minimizes risk and ensures a stable, reliable user experience for your customers.",
        keyFeatures: ["Unit & Integration Testing (Jest, Mocha)", "End-to-End Testing (Cypress, Playwright)", "User Acceptance Testing (UAT)", "Performance & Load Testing"]
    },
];

const ServicesSection: React.FC = () => {
    // State to manage the currently open modal service
    const [selectedService, setSelectedService] = useState<Service | null>(null);

    const openModal = (service: Service) => {
        setSelectedService(service);
    };

    const closeModal = () => {
        setSelectedService(null);
    };

    return (
        <>
            <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {servicesData.map((service) => (
                    <ServiceCard
                        key={service.id}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                        onClick={() => openModal(service)} // Pass the openModal handler
                    />
                ))}
            </section>

            {/* Render the modal component, only visible when selectedService is not null */}
            <ServiceModal
                isOpen={!!selectedService}
                onClose={closeModal}
                title={selectedService?.title || "Service Details"}
            >
                {selectedService && (
                    <div className="space-y-6">
                        <p className="text-gray-700 text-lg leading-relaxed">
                            {selectedService.longDescription}
                        </p>
                        
                        <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Key Features</h3>
                        <ul className="space-y-3">
                            {selectedService.keyFeatures.map((feature, index) => (
                                <li key={index} className="flex items-start text-gray-700">
                                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        
                        <div className="pt-4 text-center">
                            <Link
                                to="/contact"
                                onClick={closeModal} 
                                state={{contextMsg: selectedService.title}}
                                className="px-6 py-2 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary-hover transition-colors"
                            >
                                Get Started with {selectedService.title}
                            </Link>
                        </div>
                    </div>
                )}
            </ServiceModal>
        </>
    );
};

export default ServicesSection;