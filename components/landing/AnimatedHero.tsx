import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Zap, Shield, Target } from 'lucide-react';

interface AnimatedHeroProps {
  onGetStarted: () => void;
}

/**
 * AnimatedHero - Apple-Level Premium Hero Section
 * 
 * Features:
 * - Stunning gradient mesh background with animation
 * - 3D floating elements with parallax
 * - Premium typography with gradient text
 * - Micro-interactions throughout
 * - Social proof and trust indicators
 */
const AnimatedHero: React.FC<AnimatedHeroProps> = ({ onGetStarted }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, 200]), { stiffness: 100, damping: 30 });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const stats = [
    { value: '10x', label: 'Faster planning' },
    { value: '18K+', label: 'Blueprints created' },
    { value: '94%', label: 'Founder satisfaction' },
  ];

  const features = [
    { icon: Zap, label: 'AI-Powered', color: 'text-amber-500' },
    { icon: Shield, label: 'Enterprise Ready', color: 'text-emerald-500' },
    { icon: Target, label: 'VC Validated', color: 'text-blue-500' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      }
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100vh] w-full flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-gray-100/80 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />
        
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-[10%] left-[10%] w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%)',
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, -50, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-[40%] right-[20%] w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.08) 0%, transparent 70%)',
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 4,
          }}
        />

        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 pt-32 pb-20"
        style={{ y, opacity, scale }}
      >
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-black/[0.04] dark:border-white/[0.08] shadow-glass">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                Now with GPT-4 & Gemini Pro
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-8"
          >
            <span className="block text-gray-900 dark:text-white">From idea to</span>
            <span className="block mt-2">
              <span className="gradient-text">investor-ready</span>
            </span>
            <span className="block text-gray-900 dark:text-white mt-2">blueprint</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            variants={itemVariants}
            className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-10"
          >
            Transform your startup vision into a comprehensive business plan with AI-powered 
            strategy, product design, technical roadmap, and pitch deck—in minutes, not months.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              onClick={onGetStarted}
              className="group relative px-8 py-4 rounded-full text-base font-semibold text-white bg-gray-900 dark:bg-white dark:text-gray-900 shadow-apple-lg overflow-hidden"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Generate your blueprint
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-brand-600 via-brand-500 to-purple-500"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>

            <motion.button
              onClick={() => document.getElementById('workflow')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-gray-700 dark:text-gray-200 border border-black/10 dark:border-white/15 hover:bg-black/[0.02] dark:hover:bg-white/[0.05] transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Play className="w-5 h-5" />
              See how it works
            </motion.button>
          </motion.div>

          {/* Feature Pills */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-3 justify-center mb-16"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-black/[0.03] dark:border-white/[0.06]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <feature.icon className={`w-4 h-4 ${feature.color}`} />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{feature.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-3 gap-8 max-w-xl mx-auto pt-8 border-t border-black/[0.04] dark:border-white/[0.06]"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-gray-300 dark:border-gray-600 flex justify-center pt-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>

      {/* Floating 3D Elements */}
      <motion.div
        className="absolute top-[20%] right-[8%] w-20 h-20 hidden lg:block"
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-full h-full rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 shadow-glow opacity-80" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-[25%] left-[5%] w-16 h-16 hidden lg:block"
        animate={{ y: [0, 20, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        <div className="w-full h-full rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 shadow-lg opacity-70" />
      </motion.div>

      <motion.div
        className="absolute top-[60%] right-[15%] w-12 h-12 hidden lg:block"
        animate={{ y: [0, -12, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      >
        <div className="w-full h-full rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg opacity-60" />
      </motion.div>
    </section>
  );
};

export default AnimatedHero;
