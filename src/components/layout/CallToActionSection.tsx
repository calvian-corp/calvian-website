import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import colors from "../../../config/colors"
import { FaArrowRight } from 'react-icons/fa'; // Icons for CTA

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

function capitalizeEachWord(str: string) {
  const words = str.split(' ');
  
  const capitalizedWords = words.map(word => {
    if (word.length === 0) return ''; 

    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  
  return capitalizedWords.join(' ');
}

interface CallToActionSectionProps {
    topic: string;
}

const CallToActionSection = ({ topic }: CallToActionSectionProps) => {
    return (<motion.section variants={sectionVariants} className="text-center" style={{paddingTop: "50px"}}>
        <Link to="/contact" state={{ contextMsg: topic }}>
            <motion.div
                className="p-10 rounded-xl cursor-pointer"
                style={{ backgroundColor: colors['primary-medium'] }}
                whileHover={{ scale: 1.02, backgroundColor: colors['primary-hover'] }}
                transition={{ duration: 0.3 }}
            >
                <h3 className="text-3xl font-bold mb-3 text-white">
                    {`Ready to Implement Your ${capitalizeEachWord(topic)}?`}
                </h3>
                <p className="text-lg text-black/80 font-medium">
                    Click here to schedule a <b>Free Strategy Session!</b>
                </p>
                <FaArrowRight className="mx-auto mt-4" size={30} color={colors.secondary} />
            </motion.div>
        </Link>
        </motion.section>)
}

export default CallToActionSection;
