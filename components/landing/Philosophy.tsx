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
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ y: -8, scale: 1.02 }}
    className="group p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm hover:border-brand-300 dark:hover:border-brand-700 hover:shadow-xl dark:hover:shadow-brand-900/10 transition-all duration-500"
  >
    <motion.div
      className="w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center mb-6 text-brand-600 dark:text-brand-400"
      whileHover={{ rotate: 360, scale: 1.1 }}
      transition={{ duration: 0.6 }}
    >
      {icon}
    </motion.div>
    
    <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
      {title}
    </h3>
    
    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
      {description}
    </p>
  </motion.div>
);

/**
 * Philosophy Section
 * 
 * Builds trust through clarity and depth.
 * No testimonials. No fake social proof.
 * Just honest positioning about how the system thinks.
 */
const Philosophy: React.FC = () => {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30 dark:opacity-10">
        <motion.div 
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-200 rounded-full mix-blend-multiply filter blur-[150px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            Built by people who've been there
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto">
            AutoFounder was created by founders and operators who've launched companies, raised capital, and scaled teams. 
            This isn't a generic tool—it's a system built on patterns from real startups that succeeded.
          </p>
        </motion.div>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <Principle
            icon={<Shield className="w-6 h-6" />}
            title="First-Principles Thinking"
            description="Every decision in the system is grounded in how successful startups actually get built, not generic best practices."
            delay={0.1}
          />
          
          <Principle
            icon={<Zap className="w-6 h-6" />}
            title="Ruthlessly Honest"
            description="AutoFounder pushes back when your idea has structural flaws. It highlights real risks. It doesn't encourage delusions."
            delay={0.2}
          />
          
          <Principle
            icon={<Boxes className="w-6 h-6" />}
            title="Built for Execution"
            description="The outputs aren't theory—they're actionable blueprints that founders can immediately hand to developers and investors."
            delay={0.3}
          />
        </div>

        {/* Quote/Manifesto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 p-12 rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 relative overflow-hidden"
        >
          {/* Quote mark decoration */}
          <div className="absolute top-8 left-8 text-[120px] text-brand-100 dark:text-brand-900/30 font-serif leading-none">
            "
          </div>

          <div className="relative z-10">
            <p className="text-2xl md:text-3xl text-slate-700 dark:text-slate-300 font-medium leading-relaxed text-center italic max-w-3xl mx-auto">
              Most startup tools give you templates.
              <br />
              AutoFounder gives you clarity.
            </p>
          </div>

          {/* Bottom decoration */}
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-brand-100/30 to-transparent dark:from-brand-900/20 dark:to-transparent rounded-tl-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
