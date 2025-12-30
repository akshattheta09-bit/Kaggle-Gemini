import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface FinalCTAProps {
  onGetStarted: () => void;
}

/**
 * Final CTA Section - Apple Level Design
 * 
 * Clean, confident conversion point.
 * No manipulation. No gradients. Just clarity.
 */
const FinalCTA: React.FC<FinalCTAProps> = ({ onGetStarted }) => {
  return (
    <section className="relative py-32 px-8 overflow-hidden bg-slate-900 dark:bg-slate-950">
      <motion.div 
        className="relative z-10 max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        {/* Main Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white">
          Start building today
        </h2>

        {/* Subheading */}
        <p className="text-lg text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
          Get a complete startup blueprint in minutes. No templates. Just clarity.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-8 py-3 rounded-full border border-white/30 text-white font-semibold text-base transition-all duration-300 hover:bg-white/10"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Learn more
          </motion.button>
        </div>

        {/* Trust Line */}
        <motion.p 
          className="text-sm text-slate-400 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          No credit card required. Just pure clarity.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
