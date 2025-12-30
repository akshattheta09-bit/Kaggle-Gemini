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
    <section className="relative py-40 px-6 md:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-black">
      <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(ellipse_at_15%_20%,rgba(59,130,246,0.12),transparent_35%),radial-gradient(ellipse_at_85%_80%,rgba(168,85,247,0.10),transparent_40%)]"/>
      <motion.div 
        className="relative z-10 max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        {/* Main Headline */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 text-white leading-[1.05]">
          Stop hypothesizing.<br/>
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">Start building.</span>
        </h2>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto font-normal">
          Generate your complete startup blueprint in minutes. Strategy, product specs, technical roadmap, execution plan, investor pitch—everything you need to move fast and confidently.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.button
            onClick={onGetStarted}
            className="relative px-10 py-4 rounded-full text-white font-bold text-base bg-white dark:bg-white text-slate-900 dark:text-slate-900 shadow-[0_20px_80px_rgba(255,255,255,0.25)] transition-all duration-300 overflow-hidden group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="relative inline-flex items-center gap-2">
              Get your blueprint
              <ArrowRight className="w-5 h-5" />
            </span>
          </motion.button>

          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-10 py-4 rounded-full border-2 border-white/30 text-white font-bold text-base transition-all duration-300 hover:border-white/60 hover:bg-white/10 backdrop-blur"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Explore more
          </motion.button>
        </div>

        {/* Trust Line */}
        <motion.p 
          className="text-sm text-slate-500 mt-8 font-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Free to use. No credit card. Just instant clarity.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
