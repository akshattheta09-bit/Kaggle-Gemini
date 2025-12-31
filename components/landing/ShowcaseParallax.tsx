import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Activity, ArrowRight, Box, Code, Map, Mic, Sparkles, Target } from 'lucide-react';

type ShowcaseModuleId =
  | 'market-strategy'
  | 'viability-scoring'
  | 'product-design'
  | 'tech-architecture'
  | 'execution-roadmap'
  | 'pitch-scripts';

interface ShowcaseModule {
  id: ShowcaseModuleId;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  learnMoreUrl: string;
}

const SHOWCASE_MODULES: ShowcaseModule[] = [
  {
    id: 'market-strategy',
    title: 'Market Strategy',
    tagline: 'Dominate your market',
    description:
      'Complete TAM/SAM/SOM analysis, competitive positioning, and go-to-market playbooks powered by real-time market data.',
    features: ['Market Sizing', 'Competitor Analysis', 'GTM Strategy'],
    icon: <Target className="w-5 h-5" />,
    learnMoreUrl: '/modules/market-strategy',
  },
  {
    id: 'viability-scoring',
    title: 'Viability Score',
    tagline: 'Data-driven validation',
    description: '10-dimensional scoring across market timing, competition, and funding potential.',
    features: ['10 Dimensions', 'Risk Analysis', '95% Accuracy'],
    icon: <Box className="w-5 h-5" />,
    learnMoreUrl: '/modules/viability-score',
  },
  {
    id: 'product-design',
    title: 'Product Blueprint',
    tagline: 'Design that converts',
    description: 'User personas, journey maps, and complete feature specifications.',
    features: ['User Personas', 'Feature Specs', 'Journey Maps'],
    icon: <Code className="w-5 h-5" />,
    learnMoreUrl: '/modules/product-blueprint',
  },
  {
    id: 'tech-architecture',
    title: 'Tech Architecture',
    tagline: 'Built to scale',
    description: 'Technology stack, system design, and infrastructure planning.',
    features: ['Stack Selection', 'System Design', 'Scalability'],
    icon: <Activity className="w-5 h-5" />,
    learnMoreUrl: '/modules/tech-architecture',
  },
  {
    id: 'execution-roadmap',
    title: 'Execution Roadmap',
    tagline: 'Sprint to success',
    description: '12-week sprint plans with milestones and resource allocation.',
    features: ['12-Week Sprints', 'Milestones', 'Resources'],
    icon: <Map className="w-5 h-5" />,
    learnMoreUrl: '/modules/execution-roadmap',
  },
  {
    id: 'pitch-scripts',
    title: 'Pitch Scripts',
    tagline: 'Close every deal',
    description: 'Investor narratives, elevator pitches, and funding deck outlines.',
    features: ['Pitch Decks', 'VC Scripts', 'Objection Handling'],
    icon: <Mic className="w-5 h-5" />,
    learnMoreUrl: '/modules/pitch-scripts',
  },
];

const ShowcaseParallax: React.FC = () => {
  const [activeId, setActiveId] = useState<ShowcaseModuleId>('market-strategy');
  const active = SHOWCASE_MODULES.find((m) => m.id === activeId) ?? SHOWCASE_MODULES[0];

  return (
    <section className="relative py-20 md:py-24 bg-gray-50 dark:bg-gray-950">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 dark:bg-brand-950/50 border border-brand-200 dark:border-brand-800/50">
            <Sparkles className="w-4 h-4 text-brand-500" />
            <span className="text-sm font-medium text-brand-700 dark:text-brand-300">Complete Startup Toolkit</span>
            <span className="px-2 py-0.5 rounded-full bg-brand-500 text-white text-xs font-bold">6 AI Modules</span>
          </div>

          <h2 className="mt-6 text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight">
            Everything you need
            <br />
            <span className="bg-gradient-to-r from-brand-500 via-violet-500 to-purple-500 bg-clip-text text-transparent">
              in one blueprint
            </span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Six powerful AI modules work together to transform your idea into an investor-ready startup blueprint.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {SHOWCASE_MODULES.map((m) => {
            const isActive = m.id === activeId;
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => setActiveId(m.id)}
                className={
                  isActive
                    ? 'inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white shadow-sm'
                    : 'inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-transparent border border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-gray-900/40'
                }
              >
                <span className={isActive ? 'text-brand-600 dark:text-brand-400' : 'text-gray-500 dark:text-gray-500'}>
                  {m.icon}
                </span>
                <span className="text-sm font-semibold">{m.title}</span>
              </button>
            );
          })}
        </div>

        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm"
        >
          <div className="p-6 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-brand-600 dark:text-brand-400">{active.tagline}</div>
                <h3 className="mt-1 text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{active.title}</h3>
                <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">{active.description}</p>
              </div>
              <div className="hidden md:flex w-12 h-12 items-center justify-center rounded-2xl bg-brand-50 dark:bg-brand-950/40 border border-brand-100 dark:border-brand-900/40 text-brand-600 dark:text-brand-400">
                {active.icon}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {active.features.map((feature) => (
                <span
                  key={feature}
                  className="px-3 py-1.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  {feature}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <Link
                to={active.learnMoreUrl}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold hover:opacity-90 transition-opacity"
              >
                Learn more
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ShowcaseParallax;
