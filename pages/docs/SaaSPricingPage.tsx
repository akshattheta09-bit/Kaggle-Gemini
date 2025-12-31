import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  DollarSign, 
  TrendingUp,
  Users,
  Zap,
  ChevronRight,
  ArrowRight,
  Target,
  CheckCircle,
  BarChart3,
  Layers,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

const pricingModels = [
  {
    name: 'Freemium',
    description: 'Free tier with paid upgrades',
    icon: Layers,
    color: 'from-blue-500 to-cyan-500',
    bestFor: 'Consumer apps, B2B with viral potential',
    pros: [
      'Low barrier to adoption',
      'Natural viral growth',
      'Large user base for upselling'
    ],
    cons: [
      'High support costs for free users',
      'Conversion rates typically 2-5%',
      'Requires massive scale'
    ],
    example: 'Slack, Dropbox, Zoom'
  },
  {
    name: 'Usage-Based',
    description: 'Pay for what you use',
    icon: BarChart3,
    color: 'from-purple-500 to-pink-500',
    bestFor: 'APIs, infrastructure, dev tools',
    pros: [
      'Aligns cost with value delivered',
      'Scales with customer success',
      'Low commitment entry point'
    ],
    cons: [
      'Revenue can be unpredictable',
      'Harder to forecast',
      'May discourage heavy usage'
    ],
    example: 'AWS, Twilio, Stripe'
  },
  {
    name: 'Seat-Based',
    description: 'Per-user monthly/annual fee',
    icon: Users,
    color: 'from-emerald-500 to-teal-500',
    bestFor: 'Collaboration tools, team software',
    pros: [
      'Predictable revenue',
      'Grows with customer team',
      'Easy to understand'
    ],
    cons: [
      'Incentivizes seat consolidation',
      'Harder for small teams',
      'Doesn\'t capture power users'
    ],
    example: 'Notion, Figma, Asana'
  },
  {
    name: 'Flat-Rate',
    description: 'One price, unlimited usage',
    icon: Zap,
    color: 'from-amber-500 to-orange-500',
    bestFor: 'Simple products, commoditized markets',
    pros: [
      'Simple to communicate',
      'No surprise bills',
      'Encourages full adoption'
    ],
    cons: [
      'Leaves money on table',
      'Heavy users subsidized',
      'Hard to expand revenue'
    ],
    example: 'Basecamp, Netflix'
  },
  {
    name: 'Tiered',
    description: 'Good/Better/Best packages',
    icon: TrendingUp,
    color: 'from-rose-500 to-red-500',
    bestFor: 'Most SaaS businesses',
    pros: [
      'Captures different segments',
      'Clear upgrade path',
      'Anchoring effect'
    ],
    cons: [
      'Can be complex to manage',
      'Feature allocation decisions',
      'Analysis paralysis for buyers'
    ],
    example: 'HubSpot, Mailchimp, GitHub'
  },
  {
    name: 'Outcome-Based',
    description: 'Pay for results delivered',
    icon: Target,
    color: 'from-indigo-500 to-violet-500',
    bestFor: 'High-value B2B, consulting-adjacent',
    pros: [
      'Perfect value alignment',
      'Easy to justify ROI',
      'Strong customer commitment'
    ],
    cons: [
      'Complex to implement',
      'Attribution challenges',
      'Revenue recognition issues'
    ],
    example: 'Performance marketing tools'
  }
];

const metrics = [
  { name: 'LTV:CAC Ratio', target: '3:1+', description: 'Lifetime value should be 3x+ acquisition cost' },
  { name: 'Payback Period', target: '<12 months', description: 'Time to recover customer acquisition cost' },
  { name: 'Net Revenue Retention', target: '110%+', description: 'Revenue from existing customers including expansion' },
  { name: 'Gross Margin', target: '70%+', description: 'Revenue after cost of goods sold' },
  { name: 'Monthly Churn', target: '<2%', description: 'Percentage of customers lost per month' },
  { name: 'ARPU', target: 'Varies', description: 'Average revenue per user/account' }
];

const pricingMistakes = [
  {
    mistake: 'Pricing Too Low',
    icon: ArrowDownRight,
    impact: 'Signals low value, unsustainable unit economics',
    fix: 'Test 2-3x your current price. Most startups are underpriced.'
  },
  {
    mistake: 'Too Many Tiers',
    icon: Layers,
    impact: 'Confuses buyers, increases sales friction',
    fix: 'Stick to 3 tiers max. Good/Better/Best works.'
  },
  {
    mistake: 'Feature-Based Tiers',
    icon: Zap,
    impact: 'Customers feel nickeled and dimed',
    fix: 'Tier on usage/scale, not features. Unlock all features.'
  },
  {
    mistake: 'Annual-Only Pricing',
    icon: DollarSign,
    impact: 'High friction, long sales cycles',
    fix: 'Offer monthly with 20% annual discount.'
  }
];

const SaaSPricingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-50" />
        
        <div className="relative max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
            <Link to="/docs" className="hover:text-brand-500 transition-colors">Docs</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 dark:text-white">SaaS Pricing</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 dark:bg-brand-950/30 border border-brand-200/50 dark:border-brand-800/30 mb-6"
          >
            <DollarSign className="w-4 h-4 text-brand-600 dark:text-brand-400" />
            <span className="text-sm font-medium text-brand-700 dark:text-brand-300">Growth Guide</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight"
          >
            The Science of SaaS Pricing
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl"
          >
            Data-driven approaches to pricing that maximize growth and retention. Because pricing is the most underleveraged growth lever.
          </motion.p>
        </div>
      </section>

      {/* Key Stat */}
      <section className="py-12 px-6 border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-4xl md:text-5xl font-bold text-brand-600 dark:text-brand-400 mb-2">
            1% pricing improvement = 11% profit increase
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            McKinsey research shows pricing has the highest impact on profitability
          </p>
        </div>
      </section>

      {/* Pricing Models */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Pricing Models Explained
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12">
            Choose the model that best fits your product and market.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingModels.map((model, index) => {
              const Icon = model.icon;
              return (
                <motion.div
                  key={model.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${model.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {model.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {model.description}
                  </p>
                  
                  <div className="text-xs text-brand-600 dark:text-brand-400 font-medium mb-4">
                    Best for: {model.bestFor}
                  </div>

                  <div className="space-y-3">
                    <div>
                      <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">Pros</span>
                      <ul className="mt-1 space-y-1">
                        {model.pros.map((pro, i) => (
                          <li key={i} className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-1">
                            <CheckCircle className="w-3 h-3 text-emerald-500 mt-0.5 flex-shrink-0" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-red-600 dark:text-red-400">Cons</span>
                      <ul className="mt-1 space-y-1">
                        {model.cons.map((con, i) => (
                          <li key={i} className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-1">
                            <span className="w-1 h-1 rounded-full bg-red-400 mt-1.5 flex-shrink-0" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                    <span className="text-xs text-gray-500">Examples: {model.example}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Metrics That Matter
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12">
            Track these metrics to know if your pricing is working.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {metric.name}
                  </h3>
                  <span className="text-sm font-bold text-brand-600 dark:text-brand-400">
                    {metric.target}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {metric.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Pricing Mistakes to Avoid
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12">
            Learn from others' expensive lessons.
          </p>

          <div className="space-y-4">
            {pricingMistakes.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.mistake}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-red-600 dark:text-red-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {item.mistake}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        <span className="text-red-600 dark:text-red-400">Impact:</span> {item.impact}
                      </p>
                      <p className="text-sm text-emerald-600 dark:text-emerald-400">
                        <span className="font-medium">Fix:</span> {item.fix}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Framework */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            The 3-Step Pricing Framework
          </h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-5 flex-1 border border-gray-100 dark:border-gray-800">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Quantify the Value
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Calculate the economic value your product creates for customers. Time saved × hourly rate, revenue increased, costs avoided. This is your pricing ceiling.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-5 flex-1 border border-gray-100 dark:border-gray-800">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Price at 10-20% of Value
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Customers should feel like they're getting a deal. If you deliver $10,000 in value, charging $1,000-2,000 creates an obvious ROI story.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-5 flex-1 border border-gray-100 dark:border-gray-800">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Test and Iterate
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Run price tests with new cohorts. If close rate doesn't drop when you raise prices, you're still too cheap. Keep testing until you find resistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Get Your Pricing Strategy
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            AutoFounder generates customized pricing recommendations for your business model.
          </p>
          <Link
            to="/app"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-semibold hover:opacity-90 transition-all"
          >
            Generate Blueprint
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SaaSPricingPage;
