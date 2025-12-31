import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Key, 
  Shield, 
  Lock, 
  Copy, 
  Check, 
  AlertTriangle,
  BookOpen,
  ChevronRight,
  Eye,
  EyeOff,
  RefreshCw,
  Trash2
} from 'lucide-react';

const AuthenticationPage: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [showKey, setShowKey] = useState(false);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const codeExamples = [
    {
      title: 'Using API Key in Headers',
      language: 'bash',
      code: `curl https://api.autofounder.io/v1/blueprints \\
  -H "Authorization: Bearer af_sk_1234567890abcdef" \\
  -H "Content-Type: application/json" \\
  -d '{"idea": "Your startup idea", "sector": "SaaS"}'`
    },
    {
      title: 'JavaScript SDK',
      language: 'javascript',
      code: `import { AutoFounder } from '@autofounder/sdk';

// Initialize with your API key
const client = new AutoFounder({
  apiKey: process.env.AUTOFOUNDER_API_KEY
});

// The SDK automatically handles authentication
const blueprint = await client.blueprints.create({
  idea: "Your startup idea",
  sector: "SaaS"
});`
    },
    {
      title: 'Python SDK',
      language: 'python',
      code: `from autofounder import AutoFounder
import os

# Initialize with your API key
client = AutoFounder(api_key=os.environ["AUTOFOUNDER_API_KEY"])

# Create a blueprint
blueprint = client.blueprints.create(
    idea="Your startup idea",
    sector="SaaS"
)`
    },
    {
      title: 'Environment Variables (Recommended)',
      language: 'bash',
      code: `# .env file
AUTOFOUNDER_API_KEY=af_sk_1234567890abcdef

# The SDK will automatically read from environment
# No need to pass the key explicitly`
    }
  ];

  const securityTips = [
    {
      icon: Shield,
      title: 'Never expose keys in client-side code',
      description: 'API keys should only be used in server-side code or secure environments.'
    },
    {
      icon: Lock,
      title: 'Use environment variables',
      description: 'Store API keys in environment variables, never hardcode them.'
    },
    {
      icon: RefreshCw,
      title: 'Rotate keys regularly',
      description: 'Regenerate your API keys periodically for enhanced security.'
    },
    {
      icon: Trash2,
      title: 'Revoke compromised keys',
      description: 'If a key is exposed, revoke it immediately from your dashboard.'
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
            <span>Authentication</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Authentication
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400"
          >
            Learn how to authenticate your API requests and manage your API keys securely.
          </motion.p>
        </div>
      </section>

      {/* API Keys Overview */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            API Keys
          </h2>

          <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center flex-shrink-0">
                <Key className="w-6 h-6 text-brand-600 dark:text-brand-400" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  Your API Key
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Use this key to authenticate all API requests. Keep it secure and never share it publicly.
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex-1 px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 font-mono text-sm">
                    {showKey ? 'af_sk_1234567890abcdef1234567890abcdef' : '••••••••••••••••••••••••••••••••'}
                  </div>
                  <button
                    onClick={() => setShowKey(!showKey)}
                    className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    {showKey ? <EyeOff className="w-5 h-5 text-gray-600" /> : <Eye className="w-5 h-5 text-gray-600" />}
                  </button>
                  <button
                    onClick={() => copyToClipboard('af_sk_1234567890abcdef1234567890abcdef', -1)}
                    className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    {copiedIndex === -1 ? (
                      <Check className="w-5 h-5 text-green-500" />
                    ) : (
                      <Copy className="w-5 h-5 text-gray-600" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Link
                to="/signup"
                className="px-4 py-2 rounded-lg bg-brand-500 text-white font-medium hover:bg-brand-600 transition-colors"
              >
                Generate New Key
              </Link>
              <button className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                Revoke Key
              </button>
            </div>
          </div>

          {/* Warning */}
          <div className="p-6 rounded-2xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-amber-900 dark:text-amber-200 mb-2">
                  Keep Your API Key Secret
                </h4>
                <p className="text-amber-800 dark:text-amber-300 text-sm">
                  Your API key grants full access to your account. Never share it in public repositories, 
                  client-side code, or anywhere it could be exposed. If you believe your key has been 
                  compromised, revoke it immediately and generate a new one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Authentication Examples
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12">
            Here's how to authenticate your requests using different methods.
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
                    {example.title}
                  </h3>
                  <span className="text-xs font-medium text-gray-500 uppercase">
                    {example.language}
                  </span>
                </div>
                <div className="relative">
                  <pre className="p-6 rounded-2xl bg-gray-900 dark:bg-gray-800 overflow-x-auto">
                    <code className="text-sm text-gray-100 font-mono whitespace-pre">
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

      {/* Security Best Practices */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Security Best Practices
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {securityTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
              >
                <tip.icon className="w-8 h-8 text-brand-500 mb-4" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  {tip.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {tip.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuthenticationPage;
