import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Sparkles, Target, Layers, Code, DollarSign, Activity, 
  Map, Mic, FileText, Palette, CheckCircle2, ArrowRight,
  Zap, Shield, Clock, Globe
} from 'lucide-react';

interface FeaturesPageProps {
  onGetStarted?: () => void;
}

const features = [
  {
    icon: Target,
    title: 'Market Strategy',
    description: 'Define your ICP, positioning, and go-to-market motion with AI-powered market analysis.',
    color: 'text-red-500',
    bg: 'bg-red-50 dark:bg-red-900/20'
  },
  {
    icon: Layers,
    title: 'Product Design',
    description: 'UX flows, feature prioritization, and user journey mapping tailored to your market.',
    color: 'text-blue-500',
    bg: 'bg-blue-50 dark:bg-blue-900/20'
  },
  {
    icon: Code,
    title: 'Tech Architecture',
    description: 'Stack recommendations, API design, and scalability patterns for your specific use case.',
    color: 'text-purple-500',
    bg: 'bg-purple-50 dark:bg-purple-900/20'
  },
  {
    icon: Activity,
    title: 'Viability Scoring',
    description: '10-dimension analysis covering TAM, competition, moat, and execution complexity.',
    color: 'text-green-500',
    bg: 'bg-green-50 dark:bg-green-900/20'
  },
  {
    icon: Map,
    title: 'Execution Roadmap',
    description: 'Day 1, Week 1, Month 1 milestones with clear owners and success metrics.',
    color: 'text-indigo-500',
    bg: 'bg-indigo-50 dark:bg-indigo-900/20'
  },
  {
    icon: Mic,
    title: 'Pitch Scripts',
    description: 'VC-ready pitches and founder narratives crafted for maximum impact.',
    color: 'text-amber-500',
    bg: 'bg-amber-50 dark:bg-amber-900/20'
  },
  {
    icon: DollarSign,
    title: 'Financial Model',
    description: 'Revenue projections, cost structures, and runway planning with realistic assumptions.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50 dark:bg-emerald-900/20'
  },
  {
    icon: Palette,
    title: 'Brand Assets',
    description: 'Name suggestions, taglines, and visual identity guidelines for your startup.',
    color: 'text-pink-500',
    bg: 'bg-pink-50 dark:bg-pink-900/20'
  },
  {
    icon: FileText,
    title: 'MVP Specification',
    description: 'Detailed feature specs, user stories, and acceptance criteria ready for development.',
    color: 'text-cyan-500',
    bg: 'bg-cyan-50 dark:bg-cyan-900/20'
  }
];

const highlights = [
  {
    icon: Zap,
    title: 'Generate in Minutes',
    description: 'Complete blueprints in under 3 minutes, not weeks of consulting.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SOC 2 aligned controls, encryption, and data privacy by design.'
  },
  {
    icon: Clock,
    title: 'Always Current',
    description: 'Models trained on the latest market data and startup playbooks.'
  },
  {
    icon: Globe,
    title: 'Any Industry',
    description: 'From SaaS to hardware, B2B to consumer—we adapt to your vertical.'
  }
];

const FeaturesPage: React.FC<FeaturesPageProps> = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-50" />
        <motion.div
          className="absolute top-20 right-1/4 w-96 h-96 rounded-full bg-purple-100/40 dark:bg-purple-900/20 blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-xs font-semibold mb-6"
          >
            <Sparkles className="w-3 h-3" />
            Comprehensive Features
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight"
          >
            Everything you need to{' '}
            <span className="gradient-text">launch faster</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10"
          >
            From market analysis to investor pitch—11 interconnected views that transform your idea into a fundable business plan.
          </motion.p>

          <Link to="/app">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold hover:opacity-90 transition-all shadow-lg"
            >
              Start Building
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-7 h-7 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Built for serious founders
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Not another toy—enterprise-grade tooling from day one.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-brand-600 dark:text-brand-400" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {highlight.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to see it in action?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Generate your first blueprint in under 3 minutes—no credit card required.
          </p>
          <Link to="/app">
            <button
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold hover:opacity-90 transition-all shadow-lg"
            >
              Generate Your Blueprint
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
