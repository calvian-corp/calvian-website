import React, { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';
import {
    FaCode,
    FaRegLightbulb,
    FaRegBuilding,
    FaRegCommentDots,
    FaRocket,
} from 'react-icons/fa';
import colors from '../../../config/colors'
import CallToActionSection from "../../components/layout/CallToActionSection"

// Assuming colors are defined in a way that maps to Tailwind-compatible classes
// For this example, I'll stick to inline styles for the new gradient where colors are used.

// --- Type Definitions ---
interface AccordionItem {
    title: string;
    content: string;
    icon: React.ElementType;
}

interface ServiceStep {
    id: number;
    title: string;
    description: string;
}

// --- Animation Variants ---
const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
};

const staggerContainer = {
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

// --- Sub-Components ---

// 1. Accordion Component
const ServiceAccordion: React.FC<{ items: AccordionItem[] }> = ({ items }) => {
    // State to manage the currently expanded panel ID (index in this case)
    const [expanded, setExpanded] = useState<number | false>(false);

    const handleExpandOnEnter = (panel: number) => () => {
        setExpanded(panel);
    };

    const handleCollapseOnLeave = () => {
        // Only collapse if the currently expanded panel is the one the mouse is leaving (optional check)
        // setExpanded(false); // Simple approach
        if (expanded !== false) {
             setExpanded(false); // Collapse on mouse leave from any accordion item
        }
    };

    return (
        <div style={{width: "65%", margin: "auto"}}>
            {items.map((item, index) => {
                const isExpanded = expanded === index;

                return (
                    <Accordion
                        key={index}
                        expanded={isExpanded} // Bind expanded state
                        onMouseEnter={handleExpandOnEnter(index)} 
                        onMouseLeave={handleCollapseOnLeave}
                        slotProps={{ heading: { component: 'h4' } }}
                        sx={{
                            backgroundColor: "#000",
                            color: "#fff",
                            // Add a margin to separate accordions, making the border visible on all sides
                            marginBottom: '1rem', 
                            borderRadius: '8px !important', // Ensure border-radius is applied
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)', // Optional: enhanced shadow
                            
                            // **CONDITIONALLY APPLY THE BORDER**
                            border: isExpanded ? `2px solid ${colors.primary}` : `2px solid ${colors['dark-grey']}`,
                            
                            '&:before': { // Hide the default MUI separator line
                                display: 'none',
                            },
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: colors.primary }} />} // Style the expand icon
                            aria-controls={`panel${index}-content`}
                            id={`panel${index}-header`}
                            sx={{
                                // Optional: style the summary when expanded
                                borderBottom: isExpanded ? `1px solid ${colors.primary}` : 'none',
                            }}
                        >
                            <item.icon style={{ color: colors.primary, marginRight: '10px' }} />
                            <span className="font-semibold text-lg">{item.title}</span>
                        </AccordionSummary>
                        <AccordionDetails style={{fontSize: "16", fontWeight: "bold"}}>
                            {item.content}
                        </AccordionDetails>
                    </Accordion>
                );
            })}
        </div>
    );
};

// --- Main Component ---
const SoftwareDevelopmentService: React.FC = () => {
    useEffect(() => window.scrollTo(0, 0), []);
    // Data for Accordion Section
    const accordionItems: AccordionItem[] = [
        {
            title: 'Cloud-Native Architecture',
            content:
                'We design scalable, resilient, and cost-effective cloud solutions using AWS, Azure, or GCP, leveraging serverless computing and microservices.',
            icon: FaRegBuilding,
        },
        {
            title: 'Modern Front-End Development',
            content:
                'Crafting lightning-fast and intuitive user interfaces using React, Next.js, and TypeScript, focusing on exceptional user experience.',
            icon: FaCode,
        },
        {
            title: 'DevOps & CI/CD Pipelines',
            content:
                'Automating your development lifecycle from code commit to deployment, ensuring rapid, reliable, and secure releases.',
            icon: FaRocket,
        },
    ];

    // Data for Process Section
    const processSteps: ServiceStep[] = [
        { id: 1, title: 'Discovery & Strategy', description: 'Deep-dive into your vision, requirements, and target market to define a clear product roadmap.' },
        { id: 2, title: 'Design & Prototyping', description: 'Creating user flows, wireframes, and high-fidelity mockups to visualize the solution.' },
        { id: 3, title: 'Agile Development', description: 'Iterative development in short sprints, ensuring continuous feedback and flexibility.' },
        { id: 4, title: 'Testing & Quality Assurance', description: 'Rigorously testing the application for performance, security, and functionality.' },
        { id: 5, title: 'Deployment & Launch', description: 'Flawless deployment to production environments with continuous monitoring setup.' },
        { id: 6, title: 'Maintenance & Scaling', description: 'Post-launch support, ongoing optimization, and feature enhancements for long-term success.' },
    ];

    return (
        <div className="min-h-screen text-white">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={staggerContainer}
                className="max-w-7xl mx-auto p-4 sm:p-8 lg:p-12 space-y-20"
            >
                {/* 1. Hero Section (Motion) */}
                <motion.section variants={sectionVariants} className="text-center py-16">
                    <motion.h1
                        className="text-6xl font-extrabold mb-4 leading-tight"
                        style={{ color: colors.primary }}
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {/* The Unicode character used here (≡ƒÜÇ) is likely a placeholder/typo and might not render as intended. */}
                        {/* I'll use a standard, widely supported checkmark for a clean rendering. */}
                        Digital Excellence, Engineered.
                    </motion.h1>
                    <motion.p
                        className="text-xl max-w-3xl mx-auto text-gray-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        We turn complex challenges into elegant, high-performance software solutions that drive business growth.
                    </motion.p>
                </motion.section>

                {/* 2. Key Capabilities (Grid with Motion) */}
                <motion.section variants={sectionVariants}>
                    <h2 className="text-4xl font-bold text-center mb-10">Our Core Expertise</h2>
                    <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={staggerContainer}>
                        {[
                            { title: 'Custom Software', icon: FaCode, desc: 'Tailored applications designed from the ground up to meet your unique business needs.' },
                            { title: 'Product Consulting', icon: FaRegLightbulb, desc: 'Strategic guidance on product roadmap, architecture, and technology stack selection.' },
                            { title: 'Team Augmentation', icon: FaRegCommentDots, desc: 'Integrating skilled engineers seamlessly into your existing team to boost capacity.' },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={sectionVariants}
                                whileHover={{ scale: 1.05, boxShadow: `0 10px 20px -5px ${colors['primary'] + '40'}` }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                className="p-6 rounded-lg shadow-xl border-t-4 border-primary bg-dark-grey/50"
                                style={{ borderColor: colors.primary }}
                            >
                                <item.icon className="mb-4" size={36} style={{ color: colors.primary }} />
                                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-400">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.section>

                {/* 3. The Process (Steps with Motion) */}
                <motion.section variants={sectionVariants}>
                    <h2 className="text-4xl font-bold text-center mb-10">Our Proven Development Cycle</h2>
                    <div className="relative">
                        {/* Process Line - Hidden on smaller screens and uncommented for a full-width line on medium screens and up */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 hidden md:block" style={{ backgroundColor: colors['primary-medium'] }}></div>
                        
                        <div className="space-y-12">
                            {processSteps.map((step, index) => (
                                <motion.div
                                    key={step.id}
                                    variants={sectionVariants}
                                    className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                >
                                    <div className="w-full md:w-5/12 p-4">
                                        <div 
                                            // **CHANGE STARTS HERE: Adding gradient background and border**
                                            className={`p-6 rounded-lg shadow-xl border-2 ${index % 2 === 0 ? 'text-right md:ml-auto' : 'text-left md:mr-auto'}`}
                                            style={{
                                                borderColor: colors.primary,
                                                background: `linear-gradient(to bottom right, ${colors.secondary} 0%, rgba(10, 10, 10, 0.9) 100%)`, // Using secondary for a subtle glow effect
                                            }}
                                            // **CHANGE ENDS HERE**
                                        >
                                            <span className="text-sm font-medium uppercase tracking-wider" style={{ color: colors.primary }}>
                                                Step {step.id}
                                            </span>
                                            <h4 className="text-2xl font-bold mb-2 text-white">{step.title}</h4>
                                            <p className="text-gray-400">{step.description}</p>
                                        </div>
                                    </div>
                                    <div className="hidden md:block relative flex justify-center items-center">
                                        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg border-2" style={{ backgroundColor: colors.secondary, borderColor: colors.primary }}>
                                            {step.id}
                                        </div>
                                    </div>
                                    <div className="w-full md:w-5/12"></div> {/* Spacer */}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* 4. Technology Stacks (Accordion Section) */}
                <motion.section variants={sectionVariants}>
                    <h2 className="text-4xl font-bold text-center mb-10">Featured Technology Stacks</h2>
                    <ServiceAccordion items={accordionItems} />
                </motion.section>

                {/* 5. Call to Action (Motion & Clickable Section with Modal) */}
                <CallToActionSection topic="custom software development" />
            </motion.div>
        </div>
    );
};

export default SoftwareDevelopmentService;