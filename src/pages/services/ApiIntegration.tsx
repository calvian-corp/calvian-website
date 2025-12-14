import React, { useMemo, useState, useCallback, ReactNode, useEffect } from 'react';
import { FaPlug, FaExchangeAlt, FaShieldAlt, FaTachometerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaDraftingCompass, FaCode, FaVial, FaRocket } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import CallToActionSection from "../../components/layout/CallToActionSection"

const sampleApiResponse = {
  status: 200,
  message: "Successfully retrieved user profile data.",
  timestamp: "2023-10-27T10:30:00Z",
  data: {
    userId: "u7890",
    username: "jane_doe",
    isActive: true,
    subscriptionTier: "premium",
    roles: ["user", "admin"],
    settings: {
      theme: "dark",
      notifications: true,
      pageSize: 10,
      font: null,
    },
    metrics: [
      { id: 1, name: "posts", count: 45 },
      { id: 2, name: "followers", count: 1200 },
    ],
  },
  errors: [
    {
      "code": "AUTH_001",
      "message": "Invalid or expired authorization token.",
      "field": null
    },
    {
      "code": "VALIDATION_005",
      "message": "Username is already taken.",
      "field": "username"
    }
  ],
};

interface JsonViewerProps {
  json: object;
}

interface JsonNodeProps {
  label: string | number;
  value: any;
  depth: number;
  isLast: boolean;
  isObjectKey?: boolean;
}

interface PostmanJsonViewerProps {
  data: object;
}

const PostmanJsonViewer: React.FC<PostmanJsonViewerProps> = ({ data }) => {
  return (
    <Container>
      <ContentArea>
        <JsonViewer json={data} />
      </ContentArea>
    </Container>
  );
};

const JsonViewer: React.FC<JsonViewerProps> = ({ json }) => {
  return (
    <JsonContainer>
      <JsonNode label="" value={json} depth={0} isLast={true} />
    </JsonContainer>
  );
};

const JsonNode: React.FC<JsonNodeProps> = ({ label, value, depth, isLast, isObjectKey = false }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const isObject = typeof value === 'object' && value !== null;
  const isArray = Array.isArray(value);

  const entries = useMemo(() => {
    if (isObject) {
      return Object.entries(value);
    }
    return [];
  }, [isObject, value]);

  const preview = useMemo(() => {
    if (isArray) {
      return `[${value.length} items]`;
    }
    if (isObject) {
      return `{${Object.keys(value).length} keys}`;
    }
    return '';
  }, [isArray, isObject, value]);

  const renderValue = () => {
    if (isArray) {
      return <TypeIndicator type="array">Array</TypeIndicator>;
    }
    if (isObject) {
      return <TypeIndicator type="object">Object</TypeIndicator>;
    }
    if (typeof value === 'string') {
      return <StringValue>"{value}"</StringValue>;
    }
    if (typeof value === 'number') {
      return <NumberValue>{value}</NumberValue>;
    }
    if (typeof value === 'boolean') {
      return <BooleanValue>{String(value)}</BooleanValue>;
    }
    if (value === null) {
      return <NullValue>null</NullValue>;
    }
    return <UndefinedValue>undefined</UndefinedValue>;
  };

  return (
    <NodeWrapper depth={depth}>
      <NodeHeader isObject={isObject} onClick={isObject ? toggleOpen : undefined}>
        {isObject && (
          <ToggleIcon isOpen={isOpen} data-testid="toggle-icon">
            {isOpen ? '▼' : '▶'}
          </ToggleIcon>
        )}
        <Label isObjectKey={isObjectKey}>{label}</Label>
        {!isObjectKey && (
          <>
            <Separator>:</Separator>
            {renderValue()}
            {isObject && !isOpen && <Preview> {preview}</Preview>}
          </>
        )}
        {!isLast && <Comma>,</Comma>}
      </NodeHeader>

      {isObject && isOpen && (
        <ChildrenContainer>
          {entries.map(([key, childValue], index) => (
            <JsonNode
              key={key}
              label={isArray ? index : key}
              value={childValue}
              depth={depth + 1}
              isLast={index === entries.length - 1}
              isObjectKey={!isArray}
            />
          ))}
        </ChildrenContainer>
      )}
    </NodeWrapper>
  );
};

const Container = styled.div`
  border: 1px solid #ccc;
  width: 50%;
  margin: 0 auto;
  border-radius: 4px;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const Header = styled.div`
  background-color: #f0f0f0;
  padding: 8px 12px;
  font-weight: 600;
  color: #333;
  border-bottom: 1px solid #ccc;
`;

const ContentArea = styled.div`
  padding: 10px;
  max-height: none;
  overflow-y: visible;
  background-color: #f7f7f7;
`;

const JsonContainer = styled.div`
  font-family: monospace;
  font-size: 14px;
  line-height: 1.5;
  white-space: pre-wrap;
`;

const NodeWrapper = styled.div<{ depth: number }>`
  padding-left: ${props => props.depth * 20}px;
`;

const NodeHeader = styled.div<{ isObject: boolean }>`
  display: flex;
  align-items: center;
  cursor: ${props => (props.isObject ? 'pointer' : 'default')};
  user-select: none;
`;

const ToggleIcon = styled.span<{ isOpen: boolean }>`
  margin-right: 4px;
  font-size: 10px;
  color: #666;
  width: 12px;
  text-align: center;
  transform: translateY(-1px);
`;

const Label = styled.span<{ isObjectKey: boolean }>`
  color: ${props => (props.isObjectKey ? '#690' : '#444')};
  font-weight: 600;
  ${props => props.isObjectKey && `
    &:before {
      content: '"';
    }
    &:after {
      content: '"';
    }
  `}
`;

const Separator = styled.span`
  margin: 0 4px;
  color: #333;
`;

const Comma = styled.span`
  margin-left: 2px;
  color: #333;
`;

const ChildrenContainer = styled.div`
  border-left: 1px dashed #ddd;
  margin-left: 10px;
`;

const StringValue = styled.span`
  color: #d14;
  &:before, &:after {
    content: '"';
  }
`;

const NumberValue = styled.span`
  color: #08c;
`;

const BooleanValue = styled.span`
  color: #08c;
`;

const NullValue = styled.span`
  color: #999;
`;

const UndefinedValue = styled.span`
  color: #999;
`;

const TypeIndicator = styled.span<{ type: 'array' | 'object' }>`
  color: #aaa;
  font-style: italic;
  font-size: 0.9em;
  margin-right: 4px;
`;

const Preview = styled.span`
  color: #aaa;
  margin-left: 8px;
  font-style: italic;
  font-size: 0.9em;
`;



// --- ANIMATION VARIANTS ---
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
// --- END ANIMATION VARIANTS ---


interface FeatureCardProps {
  title: string;
  description: string;
  // The icon is passed as a React element (e.g., from react-icons)
  icon: ReactNode;
}

/**
 * Animated Feature Card component for service highlights.
 */
const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md transition duration-300 transform border-t-4 border-primary/50"
      variants={cardVariant}
      // Added whileHover for a subtle lift effect
      whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
    >
      
      {/* Icon Container */}
      <div className="mb-4">
        {icon} 
      </div>
      
      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-gray-600">
        {description}
      </p>
    </motion.div>
  );
};

/**
 * API Integration Workflow component with animated steps.
 */
const APIIntegrationWorkflow: React.FC = () => {
  const steps = [
    {
      icon: FaDraftingCompass,
      title: "1. Discovery & Design",
      description: "Define scope, map data requirements, choose standards (REST/GraphQL), and design the schema.",
      color: "text-indigo-500"
    },
    {
      icon: FaCode,
      title: "2. Development & Implementation",
      description: "Code the API, implement security (e.g., OAuth), build connectors, and set up gateway policies.",
      color: "text-green-500"
    },
    {
      icon: FaVial,
      title: "3. Testing & Validation",
      description: "Conduct unit tests, integration tests, performance tests, and security scanning before deployment.",
      color: "text-yellow-500"
    },
    {
      icon: FaRocket,
      title: "4. Deployment & Monitoring",
      description: "Deploy the API to the cloud, configure logging, alerts, and establish continuous performance monitoring.",
      color: "text-red-500"
    },
  ];

  // StepCard is wrapped in motion.div to receive the staggered animation
  const StepCard: React.FC<{ step: typeof steps[0] }> = ({ step }) => (
    <motion.div
      className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg transition duration-300 hover:shadow-xl h-full"
      variants={cardVariant} // Apply animation variants from the parent stagger
      whileHover={{ scale: 1.02 }} // Subtle scale up on hover
    >
      <step.icon size={40} className={`mb-4 ${step.color}`} />
      <h4 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h4>
      <p className="text-gray-600 text-sm">{step.description}</p>
    </motion.div>
  );

  return (
    <>
      <div className="relative">
        {/* Horizontal Line Connector (Hidden on Small Screens) */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 transform -translate-y-1/2 hidden md:block" />

        {/* Workflow steps with staggered animation, triggered on scroll (whileInView) */}
        <motion.div
          className="grid md:grid-cols-4 gap-8 relative z-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible" // Animation triggers when component is in view
          viewport={{ once: true, amount: 0.2 }} // Only animate once, when 20% of the component is visible
        >
          {steps.map((step, index) => (
            <StepCard key={index} step={step} />
          ))}
        </motion.div>
        
        {/*  */}
      </div>
    </>
  );
};

/**
 * Main API Integrations Page component.
 */
const APIIntegrationsPage: React.FC = () => {
  useEffect(() => window.scrollTo(0, 0), [])
  const serviceHighlights = [
    { title: "Custom API Development", icon: <FaPlug size={28} className="text-indigo-500" />, description: "Design, build, and deploy robust, scalable RESTful and GraphQL APIs tailored to your needs." },
    { title: "System-to-System Integration", icon: <FaExchangeAlt size={28} className="text-green-500" />, description: "Seamlessly connect disparate legacy systems, databases, and third-party services." },
    { title: "API Gateway & Management", icon: <FaShieldAlt size={28} className="text-primary" />, description: "Implement secure API gateways for traffic control, authentication, and comprehensive monitoring." },
    { title: "Performance & Scalability", icon: <FaTachometerAlt size={28} className="text-yellow-500" />, description: "Optimize API latency, caching strategies, and ensure high availability under heavy load." },
  ];

  return (
    <AnimatePresence>
      <div className="pt-12 max-w-7xl mx-auto px-4 space-y-24">
        
        {/* Hero Section - Animated as a single block */}
        <motion.section
          className="text-center py-20 rounded-lg"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          {/* Title and Subtitle with sequential delay */}
          <motion.h1 
            className="text-5xl font-extrabold text-gray-900 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Robust API Integration & Development
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Unify your digital ecosystem by building secure, high-performing APIs and integrating critical systems for streamlined data flow and enhanced functionality.
          </motion.p>
          <Link to="/contact" state={{contextMsg: "integrating my business systems via APIs"}}>
            {/* Button with a 'spring' animation */}
            <motion.button 
              className="mt-8 px-8 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary transition duration-300"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
            >
              Start My Integration Project
            </motion.button>
          </Link>
          
        </motion.section>
        <motion.h1 
          className="text-5xl font-extrabold text-gray-900 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <PostmanJsonViewer data={sampleApiResponse} />
        </motion.h1>

        {/* Service Breakdown - Staggered FeatureCard Animation (triggers on scroll) */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn} // Title fades in
        >
          <motion.h2 
            className="text-4xl font-bold text-gray-800 text-center mb-12"
            variants={fadeIn}
          >
            Key API Integration Services
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-4 gap-8"
            variants={staggerContainer} // Container for staggered children
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {serviceHighlights.map((item, index) => (
              <FeatureCard 
                key={index} 
                title={item.title} 
                description={item.description} 
                icon={item.icon}
              />
            ))}
          </motion.div>
        </motion.section>
        
        {/* API Integration Workflow */}
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
            Our Proven API Integration Process
          </motion.h2>
          <div className="py-8">
            <motion.p 
              className="text-center text-lg text-gray-600 mb-8"
              variants={fadeIn}
            >
              We follow a structured approach from discovery and design to deployment and maintenance, ensuring your APIs are reliable and future-proof. 
            </motion.p>
            
            <APIIntegrationWorkflow />
            

          </div>
        </motion.section>
        
        {/* Security and Standards */}
        <motion.section 
          className="bg-gray-100 p-12 rounded-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn} // Section fades in
        >
          <motion.h3 
            className="text-3xl font-bold text-gray-800 mb-4 flex items-center"
            variants={cardVariant}
          >
            <FaShieldAlt className="mr-3 text-red-500" /> Security, Standards, and Documentation
          </motion.h3>
          <motion.p 
            className="text-lg text-gray-700"
            variants={cardVariant}
          >
            We prioritize API security (OAuth 2.0, JWT, API Keys), implement industry standards (OpenAPI/Swagger documentation), and ensure rigorous testing to deliver well-documented, reliable, and impenetrable endpoints.
          </motion.p>
        </motion.section>

        <CallToActionSection topic="API integration" />
      </div>
    </AnimatePresence>
  );
};

export default APIIntegrationsPage;