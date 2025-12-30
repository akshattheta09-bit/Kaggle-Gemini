import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

/**
 * Hero Section - Apple Level Design
 * 
 * Minimal, elegant hero with:
 * - Clean typography hierarchy
 * - Subtle, refined animations
 * - No colorful orbs or distractions
 * - Premium whitespace
 * - Clear value proposition
 */
const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-32 pb-20 px-8">
      {/* Subtle background element */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black"></div>
      
      {/* Minimal decorative element - only visible as subtle gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-slate-100 dark:bg-slate-900 rounded-full opacity-20 blur-3xl -mr-48 -mt-48"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Main Headline - Refined Typography */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.15] text-slate-900 dark:text-white">
            From idea to<br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">execution-ready</span> in<br />
            minutes.
          </h1>

          {/* Subheading */}
          <motion.p 
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The operating system for building companies. Strategy, product design, technical roadmap, and viability analysis—all coherent, all actionable.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button
              onClick={onGetStarted}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold text-base transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/50 flex items-center gap-2"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              Get started
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.button
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
              className="px-8 py-3 rounded-full border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-semibold text-base transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-900"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Learn more
            </motion.button>
          </motion.div>

          {/* Trust Line */}
          <motion.p 
            className="mt-12 text-sm text-slate-600 dark:text-slate-400 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            No credit card required. Free and instant.
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-slate-400">
          <path d="M10 3v10M3 10l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
