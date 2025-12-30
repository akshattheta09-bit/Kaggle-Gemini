import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface WorkflowStep {
  number: string;
  title: string;
  description: string;
}

const steps: WorkflowStep[] = [
  {
    number: "01",
    title: "Describe Your Idea",
    description: "Tell AutoFounder what you're building, why now, and what problem you're solving. Include your sector to ground the reasoning."
  },
  {
    number: "02",
    title: "System Reasons",
    description: "AutoFounder combines market analysis, product thinking, financial modeling, and technical feasibility into a single coherent blueprint."
  },
  {
    number: "03",
    title: "Get Your Blueprint",
    description: "Export a complete startup plan: strategy doc, product specs, tech scaffolding, execution timeline, viability analysis, and pitch scripts."
  },
  {
    number: "04",
    title: "Execute",
    description: "Everything you need to move from thinking to building. Share with co-founders, developers, or investors. Iterate from real data, not assumptions."
  }
];

/**
 * Workflow Section
 * 
 * Shows the step-by-step process with:
 * - Alternating left/right layout
 * - Parallax number backgrounds
 * - Smooth scroll reveals
 * - Visual hierarchy through scale and position
 */
const Workflow: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={ref} className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-block px-4 py-2 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-400 text-sm font-semibold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Process
          </motion.span>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            One coherent system
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Strategy informs product. Product informs roadmap. Roadmap informs execution. 
            <br className="hidden md:block" />
            Everything is threaded together.
          </p>
        </motion.div>

        {/* Workflow Steps */}
        <div className="space-y-32">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className={`grid md:grid-cols-2 gap-16 items-center ${isEven ? '' : 'md:grid-flow-col-dense'}`}
              >
                {/* Text Content */}
                <div className={isEven ? '' : 'md:col-start-2'}>
                  <motion.div 
                    className="relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Large Number Background */}
                    <motion.div
                      className="absolute -top-12 -left-8 text-[200px] font-bold text-slate-100 dark:text-slate-900 leading-none pointer-events-none select-none"
                      style={{ y }}
                    >
                      {step.number}
                    </motion.div>

                    {/* Content */}
                    <div className="relative z-10 space-y-4">
                      <motion.div 
                        className="inline-block px-3 py-1 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-400 text-xs font-bold uppercase tracking-wider"
                        whileHover={{ scale: 1.05 }}
                      >
                        Step {step.number}
                      </motion.div>
                      
                      <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
                        {step.title}
                      </h3>
                      
                      <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Visual Element */}
                <motion.div
                  className={`${isEven ? '' : 'md:col-start-1 md:row-start-1'}`}
                  whileInView={{ opacity: 1, scale: 1 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <motion.div
                    className="relative h-[400px] rounded-3xl bg-gradient-to-br from-brand-50 via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800 overflow-hidden"
                    whileHover={{ scale: 1.02, rotateY: 5, rotateX: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    style={{ perspective: "1000px" }}
                  >
                    {/* Animated content inside card */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="relative"
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        {/* Icon or visual representation */}
                        <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center shadow-2xl">
                          <Sparkles className="w-16 h-16 text-white" />
                        </div>

                        {/* Floating particles */}
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-brand-400 rounded-full"
                            animate={{
                              x: [0, 50 * (i + 1), 0],
                              y: [0, -50 * (i + 1), 0],
                              opacity: [0, 1, 0],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: i * 0.5,
                            }}
                            style={{
                              top: `${20 + i * 10}%`,
                              left: `${30 + i * 15}%`,
                            }}
                          />
                        ))}
                      </motion.div>
                    </div>

                    {/* Grid Pattern Overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-50"></div>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
