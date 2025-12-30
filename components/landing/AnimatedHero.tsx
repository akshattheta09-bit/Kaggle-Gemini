import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

interface AnimatedHeroProps {
  onGetStarted: () => void;
}

/**
 * Animated Hero Section with Marquee
 * 
 * Premium design featuring:
 * - Bold blue gradient typography
 * - Animated floating images at bottom
 * - Smooth scroll animations
 * - Professional visual hierarchy
 */
const AnimatedHero: React.FC<AnimatedHeroProps> = ({ onGetStarted }) => {
  // Sample startup-themed images
  const showcaseImages = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=800&fit=crop", // Analytics/Data
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=800&fit=crop", // Business charts
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=800&fit=crop", // Team collaboration
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=800&fit=crop", // Business meeting
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=800&fit=crop", // Startup team
    "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?w=600&h=800&fit=crop", // Development
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=800&fit=crop", // Office work
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=800&fit=crop", // Professional
  ];

  const duplicatedImages = [...showcaseImages, ...showcaseImages, ...showcaseImages];

  const FADE_IN = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 20 
      } 
    },
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-32 pb-20 px-8">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-slate-50 dark:from-blue-950/30 dark:via-black dark:to-slate-950"></div>
      
      {/* Animated blue orbs */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-400/20 dark:bg-indigo-600/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        <motion.div
          initial="hidden"
          animate="show"
          variants={FADE_IN}
        >
          {/* Badge */}
          <motion.div
            variants={FADE_IN}
            className="mb-6 inline-block rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/50 px-4 py-1.5 text-sm font-medium text-blue-700 dark:text-blue-300 backdrop-blur-sm"
          >
            ✨ Join 10,000+ founders building with clarity
          </motion.div>

          {/* Main Headline with Blue Gradient */}
          <motion.h1
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.15]"
          >
            {["From", "idea", "to"].map((word, i) => (
              <motion.span
                key={i}
                variants={FADE_IN}
                className="inline-block text-slate-900 dark:text-white"
              >
                {word}&nbsp;
              </motion.span>
            ))}
            <br />
            <motion.span
              variants={FADE_IN}
              className="inline-block bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent"
            >
              execution-ready
            </motion.span>
            <br />
            {["in", "minutes."].map((word, i) => (
              <motion.span
                key={i}
                variants={FADE_IN}
                className="inline-block text-slate-900 dark:text-white"
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            variants={FADE_IN}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-light"
          >
            The operating system for building companies. Strategy, product design, technical roadmap, and viability analysis—all coherent, all actionable.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={FADE_IN}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <motion.button
              onClick={onGetStarted}
              className="relative px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-base shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-blue-500/50 flex items-center gap-2 overflow-hidden group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative flex items-center gap-2">
                Get started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            <motion.button
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
              className="px-8 py-3 rounded-full border-2 border-blue-200 dark:border-blue-800 text-slate-900 dark:text-white font-semibold text-base transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:border-blue-300 dark:hover:border-blue-700"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              See how it works
            </motion.button>
          </motion.div>

          {/* Trust Line with Icon */}
          <motion.div 
            variants={FADE_IN}
            transition={{ delay: 0.8 }}
            className="mt-12 flex items-center justify-center gap-2 text-sm text-slate-600 dark:text-slate-400 font-light"
          >
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span>No credit card required. Free and instant.</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Image Marquee */}
      <div className="absolute bottom-0 left-0 w-full h-72 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
        <motion.div
          className="flex gap-6"
          animate={{
            x: ["-33.33%", "0%"],
            transition: {
              ease: "linear",
              duration: 40,
              repeat: Infinity,
            },
          }}
        >
          {duplicatedImages.map((src, index) => (
            <div
              key={index}
              className="relative aspect-[3/4] h-48 md:h-56 flex-shrink-0 rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800"
              style={{
                rotate: `${(index % 3 === 0 ? -2 : index % 3 === 1 ? 1.5 : -0.5)}deg`,
              }}
            >
              <img
                src={src}
                alt={`Showcase ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-blue-400">
          <path d="M10 3v10M3 10l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </section>
  );
};

export default AnimatedHero;
