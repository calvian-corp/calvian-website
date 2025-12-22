import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaExchangeAlt, FaBolt, FaShieldAlt, FaChartLine, FaCloud, FaBug, FaRocket, FaHandshake } from 'react-icons/fa';
import ProcessFlow from '../../components/layout/ProcessFlow';
// --- Import framer-motion ---
import { motion, AnimatePresence } from 'framer-motion';
import CallToActionSection from "../../components/layout/CallToActionSection"

const ModernizationPage: React.FC = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  // --- Data based on TSH's structure (Challenges and Solutions) ---

  const keyChallenges = [
    {
      icon: FaBug,
      title: "Hidden Technical Debt",
      detail: "Legacy codebases are costly to maintain, slow down development, and harbor unforeseen risks.",
      iconColor: "text-red-500"
    },
    {
      icon: FaBolt,
      title: "Performance Bottlenecks",
      detail: "Outdated infrastructure leads to slow load times and inability to handle peak user traffic.",
      iconColor: "text-amber-500"
    },
    {
      icon: FaShieldAlt,
      title: "Security Vulnerabilities",
      detail: "Lack of modern security measures and difficulty in applying necessary patches and compliance updates.",
      iconColor: "text-primary"
    },
  ];

  const coreServices = [
    {
      icon: FaExchangeAlt,
      title: "Full System Rewrites",
      detail: "Transition monolithic systems to modern, scalable, and modular architectures using React, Next.js, and cloud-native services.",
      color: "border-l-4 border-orange-500 bg-orange-50"
    },
    {
      icon: FaCloud,
      title: "Cloud-Native Migration",
      detail: "Move applications to AWS, Azure, or GCP, leveraging microservices and serverless functions for cost and scalability optimization.",
      color: "border-l-4 border-blue-500 bg-blue-50"
    },
    {
      icon: FaHandshake,
      title: "Continuous Maintenance",
      detail: "Ongoing support, security monitoring, and iterative refactoring to ensure long-term system health and performance.",
      color: "border-l-4 border-purple-800 bg-purple-50"
    },
  ];

  // --- Process Flow remains similar but with updated titles for context ---
  const modernizationProcessSteps = [
    { title: "Discovery & Audit", detail: "Comprehensive analysis of existing architecture, code, and dependencies to define modernization scope." },
    { title: "Strategic Roadmap", detail: "Define the 'R' strategy (Rehost, Replatform, Refactor, Retire, Replace) for each component." },
    { title: "Agile Implementation", detail: "Iterative, low-risk development focusing on core features and parallel deployment." },
    { title: "Testing & Go-Live", detail: "Robust security and performance testing before deploying the modernized system." },
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
        staggerChildren: 0.2, // Delay between child animations
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
          className="text-center py-20 bg-white border-b border-gray-100"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <motion.h1 
            className="text-6xl font-extrabold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="text-primary">Future-Proof</span> Your Legacy Systems
          </motion.h1>
          <motion.p 
            className="text-2xl text-gray-600 max-w-4xl mx-auto mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Strategically transforming outdated architecture into modern, secure, and scalable cloud-native applications for true business agility.
          </motion.p>
          <Link to="/contact" state={{contextMsg: "modernizing"}}>
            <motion.button 
              className="px-10 py-4 bg-primary text-white text-lg font-semibold rounded-full shadow-lg hover:bg-primary transition duration-300 transform hover:scale-105"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
            >
              Start Your Modernization Audit
            </motion.button>
          </Link>
        </motion.section>

        {/* Key Challenges - Staggered Card Animation */}
        <motion.section 
          className="bg-gray-50 p-12 rounded-xl shadow-inner"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <motion.h2 
            className="text-4xl font-bold text-gray-800 text-center mb-16"
            variants={fadeIn}
          >
            The Common Modernization Hurdles
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-3 gap-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {keyChallenges.map((challenge, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300 border-t-4 border-gray-200"
                variants={cardVariant}
                whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
              >
                <challenge.icon size={36} className={`${challenge.iconColor} mb-4`} />
                <h3 className="font-extrabold text-xl text-gray-900 mb-3">{challenge.title}</h3>
                <p className="text-gray-600">{challenge.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Our Core Services - Staggered Card Animation */}
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
            The Strategic Services We Provide
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {coreServices.map((service, index) => (
              <motion.div 
                key={index} 
                className={`p-6 rounded-lg shadow-lg ${service.color}`}
                variants={cardVariant}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              >
                <service.icon size={32} className="text-gray-800 mb-4" />
                <h3 className="font-extrabold text-2xl text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Modernization Process/Strategy - Animation for the whole section */}
        <motion.section 
          className="pb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <motion.h2 
            className="text-4xl font-bold text-gray-800 text-center mb-16"
            variants={fadeIn}
          >
            Our Proven Modernization Flow
          </motion.h2>
          {/* Assuming ProcessFlow can be wrapped in motion.div or handles its own animations */}
          <motion.div variants={fadeIn}>
            <ProcessFlow steps={modernizationProcessSteps} />
            
          </motion.div>
        </motion.section>

        <CallToActionSection topic="system modernization" />
      </div>
    </AnimatePresence>
  );
};

export default ModernizationPage;