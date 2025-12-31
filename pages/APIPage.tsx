import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Code, Copy, Check, Terminal, Zap, Shield, 
  Key, Webhook, FileJson, Clock, Globe
} from 'lucide-react';

interface APIPageProps {
  onGetStarted?: () => void;
}

const endpoints = [
  {
    method: 'POST',
    path: '/v1/blueprints',
    description: 'Generate a new startup blueprint',
    example: `{
  "sector": "SaaS",
  "idea": "AI-powered code review tool for enterprise teams",
  "constraints": {
    "budget": "bootstrapped",
    "timeline": "3 months to MVP"
  }
}`
  },
  {
    method: 'GET',
    path: '/v1/blueprints/:id',
    description: 'Retrieve a specific blueprint',
    example: `{
  "id": "bp_abc123",
  "status": "completed",
  "strategy": { ... },
  "product": { ... },
  "viability": { ... }
}`
  },
  {
    method: 'PATCH',
    path: '/v1/blueprints/:id',
    description: 'Update sections of a blueprint',
    example: `{
  "strategy": {
    "summary": "Updated executive summary..."
  }
}`
  },
  {
    method: 'POST',
    path: '/v1/blueprints/:id/export',
    description: 'Export blueprint to PDF or Markdown',
    example: `{
  "format": "pdf",
  "sections": ["strategy", "product", "financials"]
}`
  }
];

const features = [
  {
    icon: Zap,
    title: 'Fast Generation',
    description: 'Blueprints generated in under 60 seconds via async processing'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'OAuth 2.0, API keys with scopes, IP allowlisting, and audit logs'
  },
  {
    icon: Webhook,
    title: 'Webhooks',
    description: 'Real-time notifications for blueprint completion and exports'
  },
  {
    icon: Clock,
    title: 'Rate Limits',
    description: 'Generous limits with burst capacity for batch operations'
  },
  {
    icon: Globe,
    title: 'Global Edge',
    description: 'Low-latency endpoints served from global edge locations'
  },
  {
    icon: FileJson,
    title: 'Typed Contracts',
    description: 'OpenAPI 3.0 spec with TypeScript and Python SDKs'
  }
];

const APIPage: React.FC<APIPageProps> = ({ onGetStarted }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-50" />
        <motion.div
          className="absolute top-20 right-1/3 w-96 h-96 rounded-full bg-purple-100/40 dark:bg-purple-900/20 blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-semibold mb-6"
          >
            <Terminal className="w-3 h-3" />
            Developer API
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight"
          >
            Build with the{' '}
            <span className="gradient-text">AutoFounder API</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10"
          >
            Programmatically generate, retrieve, and export startup blueprints. Perfect for accelerators, VCs, and internal tools.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button
              onClick={onGetStarted}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold hover:opacity-90 transition-all shadow-lg"
            >
              Get API Keys
              <Key className="w-5 h-5" />
            </button>
            <a
              href="#endpoints"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
            >
              View Docs
              <Code className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Quick Start
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900 dark:bg-gray-800 rounded-2xl p-6 overflow-hidden"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <button
                onClick={() => copyToClipboard(`curl -X POST https://api.autofounder.io/v1/blueprints \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"sector": "SaaS", "idea": "Your startup idea here"}'`, -1)}
                className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors"
              >
                {copiedIndex === -1 ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copiedIndex === -1 ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <pre className="text-sm text-gray-300 overflow-x-auto">
              <code>{`curl -X POST https://api.autofounder.io/v1/blueprints \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"sector": "SaaS", "idea": "Your startup idea here"}'`}</code>
            </pre>
          </motion.div>
        </div>
      </section>

      {/* Endpoints */}
      <section id="endpoints" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            API Endpoints
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12">
            RESTful endpoints with JSON request/response bodies
          </p>

          <div className="space-y-6">
            {endpoints.map((endpoint, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden"
              >
                <div className="p-6 border-b border-gray-100 dark:border-gray-800">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      endpoint.method === 'GET' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                      endpoint.method === 'POST' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                      'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                    }`}>
                      {endpoint.method}
                    </span>
                    <code className="text-sm font-mono text-gray-900 dark:text-white">
                      {endpoint.path}
                    </code>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {endpoint.description}
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800/50 p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-gray-500">Example</span>
                    <button
                      onClick={() => copyToClipboard(endpoint.example, index)}
                      className="flex items-center gap-1 text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    >
                      {copiedIndex === index ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                      {copiedIndex === index ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                  <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto">
                    <code>{endpoint.example}</code>
                  </pre>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Built for developers
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
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
            Ready to integrate?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Get your API keys and start building in minutes.
          </p>
          <button
            onClick={onGetStarted}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold hover:opacity-90 transition-all shadow-lg"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default APIPage;
