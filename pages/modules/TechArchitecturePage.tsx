import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Server, Database, Cloud, Shield, Code, Zap, CheckCircle2 } from 'lucide-react';

const TechArchitecturePage: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'Stack Selection',
      description: 'AI-recommended technology stack based on your product requirements, team skills, and scalability needs.',
    },
    {
      icon: Server,
      title: 'System Design',
      description: 'High-level architecture diagrams showing services, APIs, data flows, and integration points.',
    },
    {
      icon: Database,
      title: 'Data Architecture',
      description: 'Database schema recommendations, caching strategies, and data pipeline considerations.',
    },
    {
      icon: Cloud,
      title: 'Infrastructure Planning',
      description: 'Cloud provider recommendations, deployment strategies, and cost optimization guidelines.',
    },
  ];

  const deliverables = [
    'Technology stack recommendations',
    'System architecture diagram',
    'API design guidelines',
    'Database schema outline',
    'Security considerations',
    'Scalability roadmap',
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Header */}
      <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-white dark:from-emerald-950/30 dark:via-teal-950/20 dark:to-gray-950">
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
            <div className="hidden md:flex w-16 h-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg">
              <Server className="w-8 h-8" />
            </div>
            <div>
              <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-2">AI Module</div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Tech Architecture
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
                Build to scale with AI-generated technology stack recommendations, system design, and infrastructure planning.
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
              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4">
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
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white text-center">
          <Zap className="w-12 h-12 mx-auto mb-4 opacity-80" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to architect your system?</h2>
          <p className="text-emerald-100 mb-8 max-w-xl mx-auto">
            Generate your complete tech architecture in under 60 seconds with our AI-powered generator.
          </p>
          <Link
            to="/app?feature=tech-architecture"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-emerald-600 font-semibold hover:bg-emerald-50 transition-colors"
          >
            Generate Tech Architecture
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TechArchitecturePage;
