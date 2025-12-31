import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  ChevronRight,
  Sparkles,
  Bug,
  Zap,
  Shield,
  Code2,
  Rocket,
  Package,
  CheckCircle2
} from 'lucide-react';

const ChangelogPage: React.FC = () => {
  const releases = [
    {
      version: '2.1.0',
      date: 'January 15, 2025',
      tag: 'Latest',
      tagColor: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
      changes: [
        { type: 'feature', icon: Sparkles, text: 'Real-time streaming for blueprint generation' },
        { type: 'feature', icon: Sparkles, text: 'New financial projections module with AI-powered forecasting' },
        { type: 'improvement', icon: Zap, text: '40% faster response times across all endpoints' },
        { type: 'fix', icon: Bug, text: 'Fixed rate limiting edge case for burst traffic' },
        { type: 'security', icon: Shield, text: 'Enhanced API key rotation workflow' },
      ]
    },
    {
      version: '2.0.0',
      date: 'December 1, 2024',
      tag: 'Major',
      tagColor: 'bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-400',
      changes: [
        { type: 'feature', icon: Sparkles, text: 'Complete API v2 redesign with breaking changes' },
        { type: 'feature', icon: Sparkles, text: 'Multi-language blueprint generation' },
        { type: 'feature', icon: Sparkles, text: 'Webhook support for async notifications' },
        { type: 'improvement', icon: Zap, text: 'New rate limiting system with better quotas' },
        { type: 'improvement', icon: Code2, text: 'Improved TypeScript definitions' },
        { type: 'security', icon: Shield, text: 'SOC 2 Type II compliance achieved' },
      ]
    },
    {
      version: '1.9.0',
      date: 'October 15, 2024',
      changes: [
        { type: 'feature', icon: Sparkles, text: 'Added competitive analysis section to blueprints' },
        { type: 'feature', icon: Sparkles, text: 'Export blueprints to PDF, Notion, and Markdown' },
        { type: 'improvement', icon: Zap, text: 'Better handling of niche industries' },
        { type: 'fix', icon: Bug, text: 'Fixed formatting issues in legal sections' },
      ]
    },
    {
      version: '1.8.0',
      date: 'September 1, 2024',
      changes: [
        { type: 'feature', icon: Sparkles, text: 'Team collaboration features' },
        { type: 'feature', icon: Sparkles, text: 'Blueprint versioning and history' },
        { type: 'improvement', icon: Zap, text: 'Enhanced market research data sources' },
        { type: 'improvement', icon: Package, text: 'Python SDK async support' },
      ]
    },
    {
      version: '1.7.0',
      date: 'July 15, 2024',
      changes: [
        { type: 'feature', icon: Sparkles, text: 'Go-to-market strategy generation' },
        { type: 'feature', icon: Sparkles, text: 'Investor pitch deck templates' },
        { type: 'fix', icon: Bug, text: 'Fixed token counting for long inputs' },
        { type: 'security', icon: Shield, text: 'Added API key scoping' },
      ]
    },
    {
      version: '1.6.0',
      date: 'June 1, 2024',
      changes: [
        { type: 'feature', icon: Sparkles, text: 'Business model canvas generation' },
        { type: 'improvement', icon: Zap, text: '25% improvement in generation quality' },
        { type: 'improvement', icon: Code2, text: 'Better error messages with suggestions' },
      ]
    },
    {
      version: '1.5.0',
      date: 'April 15, 2024',
      changes: [
        { type: 'feature', icon: Rocket, text: 'Initial public release' },
        { type: 'feature', icon: Sparkles, text: 'Core blueprint generation' },
        { type: 'feature', icon: Sparkles, text: 'Market validation scoring' },
        { type: 'feature', icon: Package, text: 'JavaScript and Python SDKs' },
      ]
    },
  ];

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'feature': return { label: 'New', color: 'text-green-600 dark:text-green-400' };
      case 'improvement': return { label: 'Improved', color: 'text-brand-600 dark:text-brand-400' };
      case 'fix': return { label: 'Fixed', color: 'text-orange-600 dark:text-orange-400' };
      case 'security': return { label: 'Security', color: 'text-purple-600 dark:text-purple-400' };
      default: return { label: '', color: '' };
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 pt-24">
      {/* Hero */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-brand-600 dark:text-brand-400 text-sm font-medium mb-4"
          >
            <BookOpen className="w-4 h-4" />
            <span>Documentation</span>
            <ChevronRight className="w-4 h-4" />
            <span>Changelog</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Changelog
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400"
          >
            Track the latest updates, improvements, and fixes to the AutoFounder platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 flex items-center gap-4"
          >
            <a
              href="https://github.com/autofounder/autofounder/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-500 hover:text-brand-600 font-medium flex items-center gap-1"
            >
              View on GitHub
              <ChevronRight className="w-4 h-4" />
            </a>
            <span className="text-gray-300 dark:text-gray-700">|</span>
            <Link
              to="/status"
              className="text-brand-500 hover:text-brand-600 font-medium flex items-center gap-1"
            >
              System Status
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {releases.map((release, index) => (
              <motion.div
                key={release.version}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-800"
              >
                {/* Version dot */}
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-brand-500 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>

                {/* Header */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    v{release.version}
                  </h2>
                  {release.tag && (
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${release.tagColor}`}>
                      {release.tag}
                    </span>
                  )}
                  <span className="text-gray-500 text-sm">
                    {release.date}
                  </span>
                </div>

                {/* Changes */}
                <div className="space-y-3">
                  {release.changes.map((change, changeIndex) => {
                    const { label, color } = getTypeLabel(change.type);
                    const Icon = change.icon;
                    return (
                      <div
                        key={changeIndex}
                        className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-900/50"
                      >
                        <Icon className={`w-5 h-5 mt-0.5 ${color}`} />
                        <div>
                          <span className={`text-xs font-medium ${color} mr-2`}>
                            {label}
                          </span>
                          <span className="text-gray-700 dark:text-gray-300">
                            {change.text}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Subscribe to our changelog to get notified about new features and updates.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-500 dark:focus:ring-brand-400 text-gray-900 dark:text-white"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-brand-500 text-white font-semibold hover:bg-brand-600 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* API Versioning */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            API Versioning
          </h2>
          <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We follow semantic versioning (SemVer) for our API. Major versions may include breaking changes.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <strong>v2.x</strong> — Current stable version (recommended)
              </li>
              <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span className="w-2 h-2 rounded-full bg-yellow-500" />
                <strong>v1.x</strong> — Legacy version (deprecated, sunset: March 2025)
              </li>
            </ul>
            <div className="mt-4">
              <Link
                to="/docs/api-quickstart"
                className="text-brand-500 hover:text-brand-600 font-medium flex items-center gap-1"
              >
                API Migration Guide
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChangelogPage;
