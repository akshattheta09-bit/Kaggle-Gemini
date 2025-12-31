import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Lock,
  Server,
  Key,
  Eye,
  AlertTriangle,
  CheckCircle,
  FileCheck,
  UserCheck,
  Database,
  Globe,
  Mail,
  ArrowRight,
  Fingerprint,
  RefreshCw
} from 'lucide-react';

const securityFeatures = [
  {
    icon: Lock,
    title: 'End-to-End Encryption',
    description: 'All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption.',
    badge: 'Industry Standard'
  },
  {
    icon: Server,
    title: 'Secure Infrastructure',
    description: 'Hosted on Google Cloud Platform with enterprise-grade security controls and compliance.',
    badge: 'SOC 2 Aligned'
  },
  {
    icon: Key,
    title: 'API Key Security',
    description: 'Secure handling of your Gemini API keys - never stored on our servers, only processed locally.',
    badge: 'Zero Storage'
  },
  {
    icon: UserCheck,
    title: 'Access Control',
    description: 'Role-based access control, multi-factor authentication, and single sign-on support.',
    badge: 'Enterprise Ready'
  },
  {
    icon: Database,
    title: 'Data Isolation',
    description: 'Your data is logically separated and isolated from other users at all times.',
    badge: 'Multi-tenant Safe'
  },
  {
    icon: RefreshCw,
    title: 'Regular Backups',
    description: 'Automated backups with geographic redundancy and point-in-time recovery.',
    badge: '99.99% Durability'
  }
];

const certifications = [
  { name: 'SOC 2 Type II', status: 'aligned', description: 'Security controls aligned' },
  { name: 'GDPR', status: 'compliant', description: 'EU data protection' },
  { name: 'CCPA', status: 'compliant', description: 'California privacy' },
  { name: 'ISO 27001', status: 'in-progress', description: 'Information security' }
];

const practices = [
  {
    icon: Eye,
    title: 'Security Audits',
    description: 'Regular third-party penetration testing and vulnerability assessments.',
    frequency: 'Quarterly'
  },
  {
    icon: AlertTriangle,
    title: 'Incident Response',
    description: '24/7 monitoring with defined incident response procedures and communication.',
    frequency: '< 1 hour response'
  },
  {
    icon: FileCheck,
    title: 'Code Review',
    description: 'All code changes undergo security review before deployment.',
    frequency: 'Every commit'
  },
  {
    icon: Fingerprint,
    title: 'Employee Access',
    description: 'Strict need-to-know access with background checks and security training.',
    frequency: 'Continuous'
  }
];

const faqs = [
  {
    q: 'Is my startup idea safe with AutoFounder?',
    a: 'Absolutely. Your ideas are processed locally with the Gemini API and are never stored on our servers. We do not use your input to train any models or share it with third parties.'
  },
  {
    q: 'How do you handle my API key?',
    a: 'Your Gemini API key is stored only in your browser\'s local storage. It\'s never transmitted to our servers - API calls go directly from your browser to Google\'s Gemini API.'
  },
  {
    q: 'Can AutoFounder employees see my data?',
    a: 'No. We have strict access controls and data isolation. Employees only access customer data for support purposes with explicit consent, and all access is logged and audited.'
  },
  {
    q: 'What happens if there\'s a security incident?',
    a: 'We have a comprehensive incident response plan. Affected users are notified within 72 hours, and we provide full transparency about what happened and what we\'re doing about it.'
  },
  {
    q: 'Do you have a bug bounty program?',
    a: 'Yes! We welcome responsible security disclosures. Contact security@autofounder.io for details about our bug bounty program and rewards.'
  }
];

const SecurityPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-brand-500/10 to-emerald-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-6"
          >
            <Shield className="w-3 h-3" />
            Trust & Security
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight"
          >
            Your security is our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-emerald-500"> top priority</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl"
          >
            We've built AutoFounder with security at its core. Learn about our comprehensive approach to protecting your data and ideas.
          </motion.p>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
            Enterprise-Grade Security
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Multiple layers of protection to keep your startup ideas and data safe.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 hover:bg-white dark:hover:bg-gray-800 border border-gray-100 dark:border-gray-800 hover:border-brand-200 dark:hover:border-brand-800 transition-all hover:shadow-xl"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                  </div>
                  <span className="px-2 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-medium">
                    {feature.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
            Compliance & Certifications
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12">
            Meeting industry standards for security and privacy.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-center"
              >
                <div className={`w-10 h-10 rounded-full mx-auto mb-4 flex items-center justify-center ${
                  cert.status === 'compliant'
                    ? 'bg-emerald-100 dark:bg-emerald-900/30'
                    : cert.status === 'aligned'
                    ? 'bg-blue-100 dark:bg-blue-900/30'
                    : 'bg-amber-100 dark:bg-amber-900/30'
                }`}>
                  {cert.status === 'compliant' || cert.status === 'aligned' ? (
                    <CheckCircle className={`w-5 h-5 ${
                      cert.status === 'compliant'
                        ? 'text-emerald-600 dark:text-emerald-400'
                        : 'text-blue-600 dark:text-blue-400'
                    }`} />
                  ) : (
                    <RefreshCw className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  )}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                  {cert.name}
                </h3>
                <p className="text-gray-500 text-sm">{cert.description}</p>
                <span className={`inline-block mt-3 px-3 py-1 rounded-full text-xs font-medium ${
                  cert.status === 'compliant'
                    ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
                    : cert.status === 'aligned'
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                    : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                }`}>
                  {cert.status === 'compliant' ? 'Compliant' : cert.status === 'aligned' ? 'Aligned' : 'In Progress'}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Practices */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
            Security Practices
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12">
            Continuous monitoring and improvement of our security posture.
          </p>

          <div className="space-y-4">
            {practices.map((practice, index) => (
              <motion.div
                key={practice.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center flex-shrink-0">
                  <practice.icon className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-gray-900 dark:text-white">
                      {practice.title}
                    </h3>
                    <span className="text-brand-600 dark:text-brand-400 text-sm font-medium">
                      {practice.frequency}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {practice.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
            Security FAQ
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12">
            Common questions about how we protect your data.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
              >
                <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                  {faq.q}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Report Vulnerability */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-12 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Found a Security Issue?
              </h3>
              <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                We appreciate responsible disclosure. Report security vulnerabilities to our security team and be eligible for our bug bounty program.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="mailto:security@autofounder.io"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-all"
                >
                  <Mail className="w-5 h-5" />
                  security@autofounder.io
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition-all"
                >
                  View Bug Bounty
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SecurityPage;
