import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface FinalCTAProps {
  onGetStarted: () => void;
}

/**
 * Final CTA Section
 * 
 * Clean, confident conversion point.
 * No manipulation. No urgency tactics.
 * Just a clear next step.
 */
const FinalCTA: React.FC<FinalCTAProps> = ({ onGetStarted }) => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-40 dark:opacity-20">
        <motion.div 
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-300 rounded-full mix-blend-multiply filter blur-[150px]"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-400 rounded-full mix-blend-multiply filter blur-[150px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <motion.div 
        className="relative z-10 max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        {/* Main Headline */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
          Ready to turn your idea
          <br />
          <span className="bg-gradient-to-r from-brand-600 to-brand-700 bg-clip-text text-transparent">
            into a plan?
          </span>
        </h2>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Get a complete, reasoned startup blueprint in minutes.
          <br />
          No fluff. No templates. Just clear direction.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.button
            onClick={onGetStarted}
            className="group relative px-10 py-5 rounded-xl bg-gradient-to-r from-brand-600 to-brand-700 text-white font-semibold text-lg shadow-2xl shadow-brand-600/40 overflow-hidden"
            whileHover={{ scale: 1.03, y: -3 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {/* Shimmer effect on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            
            <span className="relative flex items-center gap-2">
              Start Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>

          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-10 py-5 rounded-xl border-2 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-semibold text-lg backdrop-blur-sm hover:bg-slate-100 dark:hover:bg-slate-900/50 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Back to top
          </motion.button>
        </div>

        {/* Trust Line */}
        <motion.p 
          className="text-sm text-slate-500 dark:text-slate-400 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          No credit card required. No commitment. Just clarity.
        </motion.p>

        {/* Decorative Element */}
        <motion.div
          className="mt-16 flex items-center justify-center gap-2 opacity-20"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.2, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="w-2 h-2 rounded-full bg-brand-500"></div>
          <div className="w-2 h-2 rounded-full bg-brand-500"></div>
          <div className="w-2 h-2 rounded-full bg-brand-500"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
