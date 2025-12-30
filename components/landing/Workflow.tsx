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
    title: "Describe your idea",
    description: "Write a short brief—problem, audience, timing, and why now. Add any constraints so we can reason with real context."
  },
  {
    number: "02",
    title: "System reasons",
    description: "We fuse market maps, product thinking, technical feasibility, and financial models into a single narrative and plan."
  },
  {
    number: "03",
    title: "Get your blueprint",
    description: "Download strategy, product spec, tech scaffolding, 4-week sprint plan, viability scores, and two 1-minute pitches."
  },
  {
    number: "04",
    title: "Execute",
    description: "Hand it to your team or investors. Iterate fast with grounded assumptions and clear milestones."
  }
];

/**
 * Workflow Section - Apple Level Design
 * 
 * Clean process with:
 * - Simple numbered steps
 * - Minimal visual elements
 * - Clear hierarchy and readability
 * - Elegant spacing
 */
const Workflow: React.FC = () => {
  const ref = useRef<HTMLElement>(null);

  return (
    <section ref={ref} className="relative py-32 px-6 md:px-8 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="mb-24 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6 text-slate-900 dark:text-white leading-[1.1]">
            Four simple steps
          </h2>
          
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
            From idea to execution-ready blueprint. Each step builds on the previous one, creating a coherent, actionable plan.
          </p>
        </motion.div>

        {/* Workflow Steps - Simplified */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="flex gap-10 items-start group hover:bg-white/60 dark:hover:bg-slate-800/50 p-6 rounded-2xl transition-all duration-300"
            >
              {/* Step Number */}
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white font-black text-lg shadow-[0_16px_60px_rgba(59,130,246,0.25)]">
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-black mb-3 text-slate-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base font-normal">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
