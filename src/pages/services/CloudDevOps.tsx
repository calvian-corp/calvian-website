import React, { useEffect } from 'react';
import { FaCode, FaCogs, FaServer, FaChartLine, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import WorkflowDiagram from '../../components/data/WorkflowDiagram'; // Mock Component
import FeatureCard from '../../components/data/FeatureCard'; // Mock Component
// --- Import framer-motion ---
import { motion, AnimatePresence } from 'framer-motion';
import CallToActionSection from "../../components/layout/CallToActionSection"

const CloudDevOpsPage: React.FC = () => {
  useEffect(() => window.scrollTo(0, 0), [])
  const serviceHighlights = [
    { title: "Infrastructure as Code (IaC)", icon: <FaCode size={28} className="text-indigo-500" />, description: "Manage infrastructure efficiently using Terraform and CloudFormation." },
    { title: "CI/CD Pipeline Setup", icon: <FaCogs size={28} className="text-green-500" />, description: "Automate builds, testing, and deployment with Jenkins, GitLab CI, or GitHub Actions." },
    { title: "Containerization & Orchestration", icon: <FaServer size={28} className="text-primary" />, description: "Implement Docker and Kubernetes for highly scalable and resilient microservices." },
    { title: "Cost Optimization & Monitoring", icon: <FaChartLine size={28} className="text-yellow-500" />, description: "Implement real-time monitoring, logging, and cost-saving strategies on AWS, Azure, or GCP." },
  ];

  // --- Animation Variants ---
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };
  // --- End Animation Variants ---

  return (
    <AnimatePresence>
      <div className="pt-12 max-w-7xl mx-auto px-4 space-y-24">
        
        {/* Hero Section - Animated as a single block */}
        <motion.section
          className="text-center py-20 bg-gray-100 rounded-lg shadow-xl"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <motion.h1 
            className="text-5xl font-extrabold text-gray-900 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Cloud Engineering & DevOps Excellence
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Transform your operations with seamless cloud migration, optimized architecture, and automated CI/CD pipelines for faster, more reliable deployments.
          </motion.p>
          <Link to="/contact" state={{contextMsg: "optimizing my cloud setup"}}>
            <motion.button 
              className="mt-8 px-8 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary transition duration-300"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
            >
              Optimize My Cloud
            </motion.button>
          </Link>
          
        </motion.section>

        {/* Service Breakdown - Staggered Card Animation */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <motion.h2 
            className="text-4xl font-bold text-gray-800 text-center mb-12"
            variants={fadeIn}
          >
            Key Cloud & DevOps Offerings
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {serviceHighlights.map((item, index) => (
              <motion.div 
                key={index}
                variants={cardVariant}
                whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
              >
                {/* Wrapping FeatureCard (a mock component) in motion.div for animation */}
                <FeatureCard 
                  title={item.title} 
                  description={item.description} 
                  icon={item.icon}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
        
        {/* DevOps Workflow - Highlight the visual component */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <motion.h2 
            className="text-4xl font-bold text-gray-800 text-center mb-12"
            variants={fadeIn}
          >
            Our End-to-End DevOps Workflow
          </motion.h2>
          <div className="py-8">
            <motion.p 
              className="text-center text-lg text-gray-600 mb-8"
              variants={fadeIn}
            >
              We bridge the gap between development and operations to accelerate time-to-market while improving system stability and security.
            </motion.p>
            
            <motion.div variants={fadeIn}>
              <WorkflowDiagram />
              
            </motion.div>

          </div>
        </motion.section>
        
        {/* Security and Compliance */}
        <motion.section 
          className="bg-gray-100 p-12 rounded-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <motion.h3 
            className="text-3xl font-bold text-gray-800 mb-4 flex items-center"
            variants={cardVariant}
          >
            <FaLock className="mr-3 text-red-500" /> Secure and Compliant by Design
          </motion.h3>
          <motion.p 
            className="text-lg text-gray-700"
            variants={cardVariant}
          >
            Security is integrated at every stage (SecDevOps). We implement best practices for identity management, network security, vulnerability scanning, and compliance with standards like ISO, SOC 2, and HIPAA.
          </motion.p>
        </motion.section>
      
        <CallToActionSection topic="cloud & DevOps" />
      </div>
    </AnimatePresence>
  );
};

export default CloudDevOpsPage;