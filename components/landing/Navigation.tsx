import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface NavigationProps {
  onGetStarted: () => void;
}

/**
 * Navigation Component - Apple Level Design
 * 
 * Minimal, elegant header with:
 * - Subtle backdrop blur (only on scroll)
 * - Refined typography
 * - Maximum simplicity
 * - No gradients or shadows
 */
const Navigation: React.FC<NavigationProps> = ({ onGetStarted }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'backdrop-blur-2xl bg-white/75 dark:bg-black/75 border-b border-slate-200/30 dark:border-white/5' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        {/* Logo - Ultra Minimal */}
        <motion.div 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="text-base font-semibold tracking-tight text-slate-900 dark:text-white">
            AutoFounder
          </span>
        </motion.div>

        {/* CTA Button - Blue Accent */}
        <motion.button
          onClick={onGetStarted}
          className="px-6 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-blue-500/20"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          Get started
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navigation;
