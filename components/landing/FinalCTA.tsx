import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Check } from 'lucide-react';

interface FinalCTAProps {
  onGetStarted: () => void;
}

/**
 * Final CTA Section - Apple-Level Premium Design
 * 
 * Features:
 * - Stunning dark gradient background
 * - Premium typography
 * - Value proposition summary
 * - Strong call to action
 */
const FinalCTA: React.FC<FinalCTAProps> = ({ onGetStarted }) => {
  const benefits = [
    "Complete startup blueprint in minutes",
    "10-dimensional viability analysis",
    "Investor-ready pitch scripts",
    "Technical architecture & roadmap"
  ];

  return (
    <section className="relative py-32 md:py-40 px-6 lg:px-8 overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black" />
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 70%)',
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, transparent 70%)',
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

      {/* Noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Sparkles className="w-4 h-4 text-brand-400" />
          <span className="text-sm font-medium text-white/80">Start free, upgrade anytime</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-white">Stop hypothesizing.</span>
          <br />
          <span className="bg-gradient-to-r from-brand-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Start building.
          </span>
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Join 18,000+ founders who've transformed their ideas into actionable blueprints. 
          Your complete startup plan is just minutes away.
        </motion.p>

        {/* Benefits */}
        <motion.div
          className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2 text-gray-300">
              <Check className="w-4 h-4 text-emerald-400" />
              <span className="text-sm">{benefit}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button
            onClick={onGetStarted}
            className="group relative px-10 py-4 rounded-full text-base font-semibold text-gray-900 bg-white shadow-[0_0_40px_rgba(255,255,255,0.2)] overflow-hidden"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Generate your blueprint
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-brand-100 to-purple-100"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-10 py-4 rounded-full text-base font-semibold text-white/90 border border-white/20 hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Learn more
          </motion.button>
        </motion.div>

        {/* Trust line */}
        <motion.p
          className="mt-10 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          No credit card required • Free tier available • Cancel anytime
        </motion.p>
      </div>
    </section>
  );
};

export default FinalCTA;
