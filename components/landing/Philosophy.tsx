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
    className="p-8 rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/85 dark:bg-slate-900/50 backdrop-blur-xl shadow-[0_20px_90px_rgba(15,23,42,0.10)] transition-all duration-300 hover:border-slate-300 dark:hover:border-white/15"
  >
    <motion.div
      className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center mb-5"
      whileHover={{ scale: 1.08 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      {icon}
    </motion.div>
    
    <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-white">
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
    <section className="relative py-32 px-6 md:px-8 bg-gradient-to-b from-slate-50 via-white to-white dark:from-slate-950 dark:via-slate-950 dark:to-black overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-50 [background:radial-gradient(ellipse_at_20%_25%,rgba(59,130,246,0.10),transparent_35%),radial-gradient(ellipse_at_80%_75%,rgba(168,85,247,0.08),transparent_40%)]" />
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div 
          className="mb-24 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-6xl font-black tracking-tight mb-6 text-slate-900 dark:text-white leading-[1.1]">
            Built for founders
          </h2>
          
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
            Designed by founders who've launched, raised capital, and scaled. This system is built on battle-tested patterns from companies that shipped.
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
