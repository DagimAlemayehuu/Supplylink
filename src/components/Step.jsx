import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Step visibility controller for sequential reveals within slides.
 */
export default function Step({
  minStep,
  currentStep,
  children,
  className = "",
  motionType = "fade"
}) {
  const isVisible = currentStep >= minStep;

  const variants = {
    fade: {
      hidden: { opacity: 0, y: 12 },
      visible: { opacity: 1, y: 0 }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.95 },
      visible: { opacity: 1, scale: 1 }
    },
    slideLeft: {
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0 }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants[motionType] || variants.fade}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className={className}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
