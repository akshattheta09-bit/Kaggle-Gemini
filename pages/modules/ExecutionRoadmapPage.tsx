import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Map, Calendar, Target, Users, Flag, Zap, CheckCircle2 } from 'lucide-react';

const ExecutionRoadmapPage: React.FC = () => {
  const features = [
    {
      icon: Calendar,
      title: '12-Week Sprint Plan',
      description: 'Detailed week-by-week breakdown of tasks, milestones, and deliverables to launch your MVP.',
    },
    {
      icon: Flag,
      title: 'Key Milestones',
      description: 'Critical checkpoints with success criteria, dependencies, and risk mitigation strategies.',
    },
    {
      icon: Users,
      title: 'Resource Allocation',
      description: 'Team structure recommendations, skill requirements, and hiring timeline for each phase.',
    },
    {
      icon: Target,
      title: 'KPI Framework',
      description: 'Measurable goals and metrics to track progress and validate assumptions at each stage.',
    },
  ];

  const deliverables = [
    '12-week sprint breakdown',
    'Week-by-week task list',
    'Milestone definitions',
    'Resource requirements',
    'Budget estimates',
    'Risk mitigation plan',
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Header */}
      <div className="bg-gradient-to-br from-pink-50 via-rose-50 to-white dark:from-pink-950/30 dark:via-rose-950/20 dark:to-gray-950">
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-start gap-6"
          >
            <div className="hidden md:flex w-16 h-16 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 text-white shadow-lg">
              <Map className="w-8 h-8" />
            </div>
            <div>
              <div className="text-sm font-semibold text-pink-600 dark:text-pink-400 mb-2">AI Module</div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Execution Roadmap
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
                Sprint to success with AI-generated 12-week plans, milestones, and resource allocation strategies.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">What You Get</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
            >
              <div className="w-12 h-12 rounded-xl bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center text-pink-600 dark:text-pink-400 mb-4">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Deliverables */}
      <div className="bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Deliverables</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {deliverables.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
              >
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-pink-500 to-rose-500 text-white text-center">
          <Zap className="w-12 h-12 mx-auto mb-4 opacity-80" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to plan your execution?</h2>
          <p className="text-pink-100 mb-8 max-w-xl mx-auto">
            Generate your complete execution roadmap in under 60 seconds with our AI-powered generator.
          </p>
          <Link
            to="/app?feature=execution-roadmap"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-pink-600 font-semibold hover:bg-pink-50 transition-colors"
          >
            Generate Execution Roadmap
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExecutionRoadmapPage;
