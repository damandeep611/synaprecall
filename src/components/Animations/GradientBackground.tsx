import React from 'react';
import { motion } from 'framer-motion';

const GradientBackground: React.FC = () => {
  return (
    <motion.div
      className="absolute inset-0"
      animate={{
        background: [
          'rgba(230, 230, 250, 0.7)',  // Pale lavender
          'rgba(224, 255, 255, 0.7)',  // Light cyan
          'rgba(255, 228, 225, 0.7)',  // Pale rose
          'rgba(224, 255, 224, 0.7)',  // Soft mint  
          'rgba(248, 230, 255, 0.7)',  // Light lilac
          'rgba(255, 218, 185, 0.7)',  // Soft peach
        ],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
    >
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </motion.div>
  );
};

export default GradientBackground;

