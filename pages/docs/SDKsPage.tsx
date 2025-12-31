import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Package, 
  Copy, 
  Check, 
  ExternalLink,
  BookOpen,
  ChevronRight,
  Star,
  Download,
  Code2,
  Terminal
} from 'lucide-react';

const SDKsPage: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const sdks = [
    {
      name: 'JavaScript / TypeScript',
      package: '@autofounder/sdk',
      install: 'npm install @autofounder/sdk',
      version: '2.1.0',
      stars: '1.2k',
      downloads: '50k/week',
      description: 'Official JavaScript SDK with full TypeScript support. Works in Node.js and modern browsers.',
      features: ['Full TypeScript support', 'Streaming responses', 'Automatic retries', 'Browser & Node.js'],
      github: 'https://github.com/autofounder/autofounder-js',
      docs: '/docs/sdks/javascript',
      example: `import { AutoFounder } from '@autofounder/sdk';

const client = new AutoFounder({ apiKey: 'your-key' });

const blueprint = await client.blueprints.create({
  idea: "AI-powered fitness app",
  sector: "Health"
});`
    },
    {
      name: 'Python',
      package: 'autofounder',
      install: 'pip install autofounder',
      version: '1.8.0',
      stars: '890',
      downloads: '30k/week',
      description: 'Official Python SDK with async support. Compatible with Python 3.8+.',
      features: ['Async/await support', 'Type hints', 'Pydantic models', 'Streaming'],
      github: 'https://github.com/autofounder/autofounder-python',
      docs: '/docs/sdks/python',
      example: `from autofounder import AutoFounder

client = AutoFounder(api_key="your-key")

blueprint = client.blueprints.create(
    idea="AI-powered fitness app",
    sector="Health"
)`
    },
    {
      name: 'Ruby',
      package: 'autofounder',
      install: 'gem install autofounder',
      version: '1.2.0',
      stars: '320',
      downloads: '8k/week',
      description: 'Official Ruby SDK. Works with Ruby 2.7+ and Rails.',
      features: ['Rails integration', 'ActiveSupport compatible', 'Faraday HTTP client'],
      github: 'https://github.com/autofounder/autofounder-ruby',
      docs: '/docs/sdks/ruby',
      example: `require 'autofounder'

client = AutoFounder::Client.new(api_key: 'your-key')

blueprint = client.blueprints.create(
  idea: "AI-powered fitness app",
  sector: "Health"
)`
    },
    {
      name: 'Go',
      package: 'github.com/autofounder/autofounder-go',
      install: 'go get github.com/autofounder/autofounder-go',
      version: '0.9.0',
      stars: '180',
      downloads: '5k/week',
      description: 'Official Go SDK with context support and streaming.',
      features: ['Context support', 'Streaming', 'Zero dependencies', 'Full test coverage'],
      github: 'https://github.com/autofounder/autofounder-go',
      docs: '/docs/sdks/go',
      example: `import "github.com/autofounder/autofounder-go"

client := autofounder.NewClient("your-key")

blueprint, err := client.Blueprints.Create(ctx, &autofounder.CreateBlueprintParams{
    Idea:   "AI-powered fitness app",
    Sector: "Health",
})`
    }
  ];

  const communitySDKs = [
    { name: 'Rust', package: 'autofounder-rs', author: 'Community', stars: '45' },
    { name: 'PHP', package: 'autofounder-php', author: 'Community', stars: '38' },
    { name: 'Java', package: 'autofounder-java', author: 'Community', stars: '62' },
    { name: 'C#', package: 'AutoFounder.NET', author: 'Community', stars: '29' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 pt-24">
      {/* Hero */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-brand-600 dark:text-brand-400 text-sm font-medium mb-4"
          >
            <BookOpen className="w-4 h-4" />
            <span>Documentation</span>
            <ChevronRight className="w-4 h-4" />
            <span>SDKs & Libraries</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            SDKs & Libraries
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400"
          >
            Official and community SDKs for integrating AutoFounder into your applications.
          </motion.p>
        </div>
      </section>

      {/* Official SDKs */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Official SDKs
          </h2>

          <div className="space-y-8">
            {sdks.map((sdk, index) => (
              <motion.div
                key={sdk.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Package className="w-6 h-6 text-brand-500" />
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {sdk.name}
                      </h3>
                      <span className="px-2 py-0.5 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-xs font-medium">
                        v{sdk.version}
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {sdk.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {sdk.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-2 py-1 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        {sdk.stars}
                      </div>
                      <div className="flex items-center gap-1">
                        <Download className="w-4 h-4" />
                        {sdk.downloads}
                      </div>
                      <a
                        href={sdk.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:text-brand-500 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        GitHub
                      </a>
                    </div>
                  </div>

                  {/* Install */}
                  <div className="lg:w-96">
                    <div className="relative mb-4">
                      <div className="flex items-center gap-2 mb-2 text-sm text-gray-500">
                        <Terminal className="w-4 h-4" />
                        Installation
                      </div>
                      <div className="relative">
                        <pre className="p-4 rounded-xl bg-gray-900 dark:bg-gray-800 overflow-x-auto">
                          <code className="text-sm text-gray-100 font-mono">
                            {sdk.install}
                          </code>
                        </pre>
                        <button
                          onClick={() => copyToClipboard(sdk.install, index)}
                          className="absolute top-2 right-2 p-2 rounded-lg bg-gray-800 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                        >
                          {copiedIndex === index ? (
                            <Check className="w-4 h-4 text-green-400" />
                          ) : (
                            <Copy className="w-4 h-4 text-gray-400" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2 text-sm text-gray-500">
                        <Code2 className="w-4 h-4" />
                        Quick Example
                      </div>
                      <pre className="p-4 rounded-xl bg-gray-900 dark:bg-gray-800 overflow-x-auto text-xs">
                        <code className="text-gray-100 font-mono whitespace-pre">
                          {sdk.example}
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community SDKs */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Community SDKs
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Community-maintained SDKs for additional languages. Not officially supported.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {communitySDKs.map((sdk, index) => (
              <motion.div
                key={sdk.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
              >
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                  {sdk.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{sdk.package}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Star className="w-3 h-3" />
                  {sdk.stars}
                  <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800">
                    {sdk.author}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Build Your Own SDK?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Check out our API reference to build integrations for any language.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/api"
              className="px-6 py-3 rounded-full bg-brand-500 text-white font-semibold hover:bg-brand-600 transition-colors"
            >
              API Reference
            </Link>
            <a
              href="https://github.com/autofounder"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SDKsPage;
