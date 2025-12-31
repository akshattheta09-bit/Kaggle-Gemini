import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Layers, Users, GitBranch, Palette, FileText, Zap, CheckCircle2 } from 'lucide-react';

const ProductBlueprintPage: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: 'User Personas',
      description: 'Detailed profiles of your target users including goals, frustrations, technical proficiency, and decision-making patterns.',
    },
    {
      icon: GitBranch,
      title: 'User Journey Maps',
      description: 'End-to-end visualization of how users discover, evaluate, adopt, and become advocates for your product.',
    },
    {
      icon: FileText,
      title: 'Feature Specifications',
      description: 'Prioritized feature list with user stories, acceptance criteria, and effort estimates using MoSCoW framework.',
    },
    {
      icon: Palette,
      title: 'UX Recommendations',
      description: 'Information architecture, navigation patterns, and key interaction flows tailored to your user personas.',
    },
  ];

  const deliverables = [
    '3-5 detailed user personas',
    'Customer journey map per persona',
    'Prioritized feature backlog',
    'User story templates',
    'Information architecture diagram',
    'Key wireframe concepts',
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Header */}
      <div className="bg-gradient-to-br from-violet-50 via-purple-50 to-white dark:from-violet-950/30 dark:via-purple-950/20 dark:to-gray-950">
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
            <div className="hidden md:flex w-16 h-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 text-white shadow-lg">
              <Layers className="w-8 h-8" />
            </div>
            <div>
              <div className="text-sm font-semibold text-violet-600 dark:text-violet-400 mb-2">AI Module</div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Product Blueprint
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
                Design products that convert with AI-generated user personas, journey maps, and complete feature specifications.
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
              <div className="w-12 h-12 rounded-xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 dark:text-violet-400 mb-4">
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
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-violet-500 to-purple-500 text-white text-center">
          <Zap className="w-12 h-12 mx-auto mb-4 opacity-80" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to design your product?</h2>
          <p className="text-violet-100 mb-8 max-w-xl mx-auto">
            Generate your complete product blueprint in under 60 seconds with our AI-powered generator.
          </p>
          <Link
            to="/app?feature=product-design"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-violet-600 font-semibold hover:bg-violet-50 transition-colors"
          >
            Generate Product Blueprint
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductBlueprintPage;
