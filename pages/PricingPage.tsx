import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Sparkles, Zap, Shield, Building2 } from 'lucide-react';

interface PricingPageProps {
  onSelectPlan?: (plan: string) => void;
  onBack?: () => void;
}

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    period: 'forever',
    description: 'Perfect for solo founders exploring ideas',
    features: [
      '5 blueprints per month',
      'Core strategy & product views',
      'Markdown exports',
      'Community support',
      'Basic viability scoring'
    ],
    cta: 'Get Started',
    highlight: false,
    icon: Sparkles
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'For serious founders building their startup',
    features: [
      'Unlimited blueprints',
      'All 11 blueprint views',
      'PDF & Notion exports',
      'Priority support',
      'Advanced viability scoring',
      'Pitch script generator',
      'Financial projections',
      'Custom templates'
    ],
    cta: 'Start Free Trial',
    highlight: true,
    badge: 'Most Popular',
    icon: Zap
  },
  {
    name: 'Team',
    price: '$79',
    period: '/month',
    description: 'Collaborate with co-founders and advisors',
    features: [
      'Everything in Pro',
      'Up to 5 team members',
      'Shared workspaces',
      'Version history',
      'Comments & feedback',
      'Role-based access',
      'Team analytics',
      'Slack integration'
    ],
    cta: 'Start Free Trial',
    highlight: false,
    icon: Building2
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For accelerators, VCs, and large teams',
    features: [
      'Everything in Team',
      'Unlimited team members',
      'SSO / SAML',
      'API access',
      'Custom integrations',
      'Dedicated support',
      'SLA guarantee',
      'Security review',
      'Custom contracts'
    ],
    cta: 'Contact Sales',
    highlight: false,
    icon: Shield
  }
];

const PricingPage: React.FC<PricingPageProps> = ({ onSelectPlan }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-50" />
        <motion.div
          className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-brand-100/40 dark:bg-brand-900/20 blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-xs font-semibold mb-6"
          >
            Simple Pricing
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight"
          >
            Plans that scale with you
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Start free, upgrade when you need more power. No hidden fees.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-3xl p-8 ${
                  plan.highlight
                    ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 ring-2 ring-brand-500'
                    : 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-brand-500 text-white text-xs font-semibold">
                    {plan.badge}
                  </div>
                )}

                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${
                  plan.highlight 
                    ? 'bg-white/10 dark:bg-gray-900/10' 
                    : 'bg-gray-100 dark:bg-gray-800'
                }`}>
                  <Icon className={`w-6 h-6 ${plan.highlight ? '' : 'text-brand-500'}`} />
                </div>

                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className={plan.highlight ? 'text-white/60 dark:text-gray-500' : 'text-gray-500'}>
                      {plan.period}
                    </span>
                  )}
                </div>

                <p className={`text-sm mb-6 ${plan.highlight ? 'text-white/70 dark:text-gray-600' : 'text-gray-500'}`}>
                  {plan.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm">
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${
                        plan.highlight ? 'text-brand-400' : 'text-brand-500'
                      }`} />
                      <span className={plan.highlight ? 'text-white/90 dark:text-gray-700' : 'text-gray-700 dark:text-gray-300'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link to="/app">
                  <button
                    className={`w-full py-3 px-4 rounded-xl font-semibold transition-all ${
                      plan.highlight
                        ? 'bg-brand-500 hover:bg-brand-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'Can I switch plans anytime?',
                a: 'Yes! You can upgrade or downgrade at any time. Changes take effect immediately and we prorate the difference.'
              },
              {
                q: 'What happens when I hit my blueprint limit?',
                a: "You'll be prompted to upgrade to Pro for unlimited blueprints. Your existing blueprints remain accessible."
              },
              {
                q: 'Do you offer discounts for startups?',
                a: 'Yes! We offer 50% off for the first year for startups in accelerators. Contact us with proof of enrollment.'
              },
              {
                q: 'Is there a free trial for Pro?',
                a: 'Absolutely. Start a 14-day free trial of Pro with no credit card required.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{faq.q}</h3>
                <p className="text-gray-600 dark:text-gray-400">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Our team is happy to help you find the right plan for your needs.
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold hover:opacity-90 transition-all">
            Talk to Sales
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
