import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Copy, 
  Check, 
  ArrowRight, 
  Terminal, 
  Code2,
  Rocket,
  BookOpen,
  ChevronRight
} from 'lucide-react';

const APIQuickstartPage: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const codeExamples = [
    {
      title: 'Install the SDK',
      language: 'bash',
      code: `npm install @autofounder/sdk`
    },
    {
      title: 'Initialize the Client',
      language: 'javascript',
      code: `import { AutoFounder } from '@autofounder/sdk';

const client = new AutoFounder({
  apiKey: process.env.AUTOFOUNDER_API_KEY
});`
    },
    {
      title: 'Generate Your First Blueprint',
      language: 'javascript',
      code: `const blueprint = await client.blueprints.create({
  idea: "An AI-powered fitness app that creates personalized workout plans",
  sector: "Health",
  options: {
    includeFinancials: true,
    includePitchDeck: true
  }
});

console.log(blueprint.strategy);
console.log(blueprint.viability.overallScore);`
    },
    {
      title: 'Stream Results in Real-time',
      language: 'javascript',
      code: `const stream = await client.blueprints.createStream({
  idea: "A marketplace for sustainable fashion",
  sector: "E-commerce"
});

for await (const chunk of stream) {
  console.log(chunk.section, chunk.progress);
}

const finalBlueprint = await stream.finalResult();`
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Get Your API Key',
      description: 'Sign up for an account and generate your API key from the dashboard.',
      action: { label: 'Get API Key', href: '/signup' }
    },
    {
      number: '02',
      title: 'Install the SDK',
      description: 'Install our official SDK for your preferred programming language.',
      action: { label: 'View SDKs', href: '/docs/sdks' }
    },
    {
      number: '03',
      title: 'Make Your First Request',
      description: 'Generate your first startup blueprint with a simple API call.',
      action: { label: 'See Examples', href: '#examples' }
    },
    {
      number: '04',
      title: 'Build Amazing Products',
      description: 'Integrate AutoFounder into your workflow and start building.',
      action: { label: 'Read Docs', href: '/docs' }
    }
  ];

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
            <span>Quickstart</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            API Quickstart
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 mb-8"
          >
            Get up and running with AutoFounder API in under 5 minutes. 
            Generate your first startup blueprint programmatically.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-500 text-white font-semibold hover:bg-brand-600 transition-colors"
            >
              <Zap className="w-5 h-5" />
              Get API Key
            </Link>
            <a
              href="#examples"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Code2 className="w-5 h-5" />
              View Examples
            </a>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-12">
            Quick Setup Guide
          </h2>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center">
                    <span className="text-brand-600 dark:text-brand-400 font-bold">{step.number}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {step.description}
                  </p>
                  <Link
                    to={step.action.href}
                    className="inline-flex items-center gap-2 text-brand-600 dark:text-brand-400 font-medium hover:underline"
                  >
                    {step.action.label}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section id="examples" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Code Examples
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12">
            Follow these steps to generate your first blueprint.
          </p>

          <div className="space-y-8">
            {codeExamples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-900 dark:text-white">
                    {index + 1}. {example.title}
                  </h3>
                  <span className="text-xs font-medium text-gray-500 uppercase">
                    {example.language}
                  </span>
                </div>
                <div className="relative">
                  <pre className="p-6 rounded-2xl bg-gray-900 dark:bg-gray-800 overflow-x-auto">
                    <code className="text-sm text-gray-100 font-mono">
                      {example.code}
                    </code>
                  </pre>
                  <button
                    onClick={() => copyToClipboard(example.code, index)}
                    className="absolute top-4 right-4 p-2 rounded-lg bg-gray-800 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                  >
                    {copiedIndex === index ? (
                      <Check className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-gray-400" />
                    )}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Next Steps
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Terminal,
                title: 'Authentication',
                description: 'Learn about API keys and authentication methods.',
                href: '/docs/authentication'
              },
              {
                icon: Code2,
                title: 'SDKs & Libraries',
                description: 'Official SDKs for JavaScript, Python, and more.',
                href: '/docs/sdks'
              },
              {
                icon: Rocket,
                title: 'API Reference',
                description: 'Complete API documentation with all endpoints.',
                href: '/api'
              }
            ].map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="group p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-brand-500 dark:hover:border-brand-500 transition-colors"
              >
                <item.icon className="w-8 h-8 text-brand-500 mb-4" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default APIQuickstartPage;
