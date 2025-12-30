import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Boxes } from 'lucide-react';

interface PrincipleProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Principle: React.FC<PrincipleProps> = ({ icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -4 }}
    className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 transition-all duration-300 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-md"
  >
    <motion.div
      className="w-10 h-10 rounded-lg bg-slate-200 dark:bg-slate-800 flex items-center justify-center mb-4 text-slate-700 dark:text-slate-300"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      {icon}
    </motion.div>
    
    <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">
      {title}
    </h3>
    
    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
      {description}
    </p>
  </motion.div>
);

/**
 * Philosophy Section - Apple Level Design
 * 
 * Builds trust through clarity.
 * Simple, honest positioning.
 * No unnecessary decoration.
 */
const Philosophy: React.FC = () => {
  return (
    <section className="relative py-32 px-8 bg-white dark:bg-black overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-slate-900 dark:text-white">
            Built for reality
          </h2>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-light max-w-2xl">
            Created by founders who've launched companies, raised capital, and scaled teams. This is a system built on patterns from companies that succeeded.
          </p>
        </motion.div>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Principle
            icon={<Shield className="w-5 h-5" />}
            title="First-Principles"
            description="Grounded in how successful startups actually get built, not generic templates."
            delay={0.1}
          />
          
          <Principle
            icon={<Zap className="w-5 h-5" />}
            title="Honest"
            description="It pushes back when ideas have flaws. It highlights real risks. No delusions."
            delay={0.2}
          />
          
          <Principle
            icon={<Boxes className="w-5 h-5" />}
            title="Executable"
            description="Outputs are actionable blueprints you can hand to developers and investors today."
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
