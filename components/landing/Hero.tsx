import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle2, Rocket } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

/**
 * Hero Section
 * 
 * Full-viewport hero with:
 * - Animated gradient orbs (depth and movement)
 * - Scale/fade on scroll
 * - Premium typography hierarchy
 * - Dual CTA strategy
 * - Trust indicators
 */
const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 opacity-40 dark:opacity-20">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-300 rounded-full mix-blend-multiply filter blur-[128px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-brand-200 rounded-full mix-blend-multiply filter blur-[128px]"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -40, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/2 w-[500px] h-[500px] bg-brand-400 rounded-full mix-blend-multiply filter blur-[128px]"
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 30, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Main Headline */}
          <h1 className="text-[clamp(3rem,8vw,7rem)] font-bold tracking-tight leading-[1.1] mb-8">
            <span className="block text-slate-900 dark:text-white">
              From idea to
            </span>
            <span className="block bg-gradient-to-r from-brand-600 via-brand-500 to-brand-700 bg-clip-text text-transparent animate-gradient-x">
              execution-ready company
            </span>
            <span className="block text-slate-900 dark:text-white">
              in minutes.
            </span>
          </h1>

          {/* Subheading */}
          <motion.p 
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            AutoFounder combines strategy, product design, viability analysis, and execution planning 
            into one coherent system. It's the reasoning layer every founder needs.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button
              onClick={onGetStarted}
              className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-brand-600 to-brand-700 text-white font-semibold text-lg shadow-xl shadow-brand-600/30 overflow-hidden"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative flex items-center gap-2">
                Start Building
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            <motion.button
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
              className="px-8 py-4 rounded-xl border-2 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-semibold text-lg backdrop-blur-sm"
              whileHover={{ scale: 1.02, borderColor: 'rgb(148 163 184)' }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-600 dark:text-slate-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>No credit card required</span>
            </div>
            <div className="w-1 h-1 bg-slate-400 rounded-full hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-brand-500" />
              <span>Powered by AI reasoning</span>
            </div>
            <div className="w-1 h-1 bg-slate-400 rounded-full hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <Rocket className="w-5 h-5 text-blue-500" />
              <span>Ship faster</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-slate-400">
              <path d="M12 5v14M19 12l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
