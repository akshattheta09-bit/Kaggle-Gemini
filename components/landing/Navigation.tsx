import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

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
          ? 'backdrop-blur-2xl bg-white/80 dark:bg-slate-950/80 border-b border-slate-200/60 dark:border-white/10 shadow-[0_10px_40px_rgba(15,23,42,0.12)]' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg shadow-blue-600/30 flex items-center justify-center">
            <Rocket className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-black tracking-tight text-slate-900 dark:text-white">
            AutoFounder
          </span>
        </motion.div>

        {/* CTA Button - Bold */}
        <motion.button
          onClick={onGetStarted}
          className="px-6 py-2.5 rounded-full text-sm font-bold text-white bg-slate-900 dark:bg-white dark:text-slate-900 shadow-lg shadow-slate-900/20 dark:shadow-white/20"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          Get started
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navigation;
