import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Book, Code, Terminal, FileText, ChevronRight, Search,
  Zap, Shield, Webhook, Key, Download, Settings, ArrowRight
} from 'lucide-react';

interface DocsPageProps {
  onNavigate?: (section: string) => void;
}

const sections = [
  {
    icon: Zap,
    title: 'Getting Started',
    description: 'Quick start guide to generate your first blueprint',
    items: [
      'Account setup',
      'Creating your first blueprint',
      'Understanding views',
      'Exporting your plan'
    ]
  },
  {
    icon: Book,
    title: 'Core Concepts',
    description: 'Learn about the building blocks of AutoFounder',
    items: [
      'Blueprint structure',
      'Viability scoring',
      'Roadmap generation',
      'Pitch script framework'
    ]
  },
  {
    icon: Code,
    title: 'API Reference',
    description: 'Comprehensive API documentation for developers',
    items: [
      'Authentication',
      'Endpoints overview',
      'Rate limits',
      'Error handling'
    ]
  },
  {
    icon: Webhook,
    title: 'Integrations',
    description: 'Connect AutoFounder to your workflow',
    items: [
      'Webhooks setup',
      'Notion integration',
      'Slack notifications',
      'Zapier workflows'
    ]
  },
  {
    icon: Settings,
    title: 'Configuration',
    description: 'Customize AutoFounder to your needs',
    items: [
      'Workspace settings',
      'Team management',
      'Custom templates',
      'Scoring rubrics'
    ]
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'Security best practices and compliance',
    items: [
      'Data encryption',
      'Access controls',
      'Audit logs',
      'Compliance (SOC 2)'
    ]
  }
];

const quickLinks = [
  { icon: Terminal, label: 'API Quickstart', href: '/docs/quickstart' },
  { icon: Key, label: 'Authentication', href: '/docs/authentication' },
  { icon: Download, label: 'SDKs & Libraries', href: '/docs/sdks' },
  { icon: FileText, label: 'Changelog', href: '/docs/changelog' }
];

const DocsPage: React.FC<DocsPageProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-50" />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-xs font-semibold mb-6"
          >
            <Book className="w-3 h-3" />
            Documentation
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight"
          >
            Documentation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10"
          >
            Everything you need to get started and master AutoFounder.
          </motion.p>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-xl mx-auto relative"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search documentation..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-lg transition-all"
            />
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 px-6 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm font-medium"
                >
                  <Icon className="w-4 h-4" />
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => onNavigate?.(section.title.toLowerCase())}
                  className="group cursor-pointer p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-brand-600 dark:text-brand-400" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {section.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {section.description}
                  </p>

                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
                        <ChevronRight className="w-3 h-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Quick Example
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Generate a blueprint in just a few lines of code
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900 dark:bg-gray-800 rounded-2xl overflow-hidden"
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-2 text-sm text-gray-400">example.ts</span>
            </div>
            <pre className="p-6 text-sm text-gray-300 overflow-x-auto">
              <code>{`import { AutoFounder } from '@autofounder/sdk';

const client = new AutoFounder({
  apiKey: process.env.AUTOFOUNDER_API_KEY
});

// Generate a blueprint
const blueprint = await client.blueprints.create({
  sector: 'SaaS',
  idea: 'AI-powered code review tool for enterprise teams',
  constraints: {
    budget: 'bootstrapped',
    timeline: '3 months to MVP'
  }
});

// Access different views
console.log(blueprint.strategy.summary);
console.log(blueprint.viability.overallScore);
console.log(blueprint.pitchScript.vcPitch);

// Export to PDF
const pdf = await client.blueprints.export(blueprint.id, {
  format: 'pdf',
  sections: ['strategy', 'product', 'financials']
});`}</code>
            </pre>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Need help getting started?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Our team is here to help you succeed. Reach out anytime.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/support">
              <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold hover:opacity-90 transition-all shadow-lg">
                Contact Support
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link to="/community">
              <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
                Join Community
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DocsPage;
