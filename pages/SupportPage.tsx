import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MessageCircle, 
  Mail, 
  Phone, 
  Clock, 
  Send,
  FileText,
  BookOpen,
  HelpCircle,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const SupportPage: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    priority: 'medium',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const supportCategories = [
    { value: 'technical', label: 'Technical Issue' },
    { value: 'billing', label: 'Billing & Payments' },
    { value: 'account', label: 'Account Access' },
    { value: 'api', label: 'API & Integration' },
    { value: 'feature', label: 'Feature Request' },
    { value: 'other', label: 'Other' },
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get help via email',
      value: 'support@autofounder.com',
      action: 'mailto:support@autofounder.com'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our team',
      value: 'Available 9am-6pm PST',
      action: '#chat'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Enterprise customers only',
      value: '+1 (888) AUTO-FND',
      action: 'tel:+18882886363'
    }
  ];

  const quickLinks = [
    { icon: BookOpen, title: 'Documentation', description: 'Browse our guides', link: '/docs' },
    { icon: HelpCircle, title: 'Help Center', description: 'Find answers', link: '/help-center' },
    { icon: FileText, title: 'API Reference', description: 'Technical docs', link: '/api' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 pt-24">
      {/* Hero */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 text-sm font-medium mb-6"
          >
            <MessageCircle className="w-4 h-4" />
            We're here to help
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Contact Support
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Have a question or need assistance? Our support team is ready to help you succeed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-500"
          >
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Avg. response: 2 hours</span>
            </div>
            <span className="text-gray-300 dark:text-gray-700">|</span>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>98% satisfaction rate</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-8 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.action}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-brand-500 transition-all group"
              >
                <method.icon className="w-8 h-8 text-brand-500 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {method.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{method.description}</p>
                <p className="text-brand-600 dark:text-brand-400 font-medium group-hover:underline">
                  {method.value}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Submit a Request
                </h2>

                {formStatus === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Request Submitted!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      We've received your request and will respond within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setFormStatus('idle');
                        setFormData({ name: '', email: '', subject: '', category: '', priority: 'medium', message: '' });
                      }}
                      className="text-brand-500 hover:text-brand-600 font-medium"
                    >
                      Submit another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-500 dark:focus:ring-brand-400 text-gray-900 dark:text-white"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-500 dark:focus:ring-brand-400 text-gray-900 dark:text-white"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Category *
                        </label>
                        <select
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                          required
                          title="Select support category"
                          className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-500 dark:focus:ring-brand-400 text-gray-900 dark:text-white"
                        >
                          <option value="">Select a category</option>
                          {supportCategories.map(cat => (
                            <option key={cat.value} value={cat.value}>
                              {cat.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Priority
                        </label>
                        <select
                          name="priority"
                          value={formData.priority}
                          onChange={handleChange}
                          title="Select ticket priority"
                          className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-500 dark:focus:ring-brand-400 text-gray-900 dark:text-white"
                        >
                          <option value="low">Low</option>
                          <option value="medium">Medium</option>
                          <option value="high">High</option>
                          <option value="urgent">Urgent</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-500 dark:focus:ring-brand-400 text-gray-900 dark:text-white"
                        placeholder="Brief description of your issue"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-500 dark:focus:ring-brand-400 text-gray-900 dark:text-white resize-none"
                        placeholder="Please describe your issue in detail..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="w-full px-6 py-3 rounded-full bg-brand-500 text-white font-semibold hover:bg-brand-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {formStatus === 'submitting' ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Submit Request
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Quick Links
                </h3>
                <div className="space-y-3">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.title}
                      to={link.link}
                      className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-brand-500 transition-colors"
                    >
                      <link.icon className="w-5 h-5 text-brand-500" />
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {link.title}
                        </p>
                        <p className="text-xs text-gray-500">{link.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="p-6 rounded-2xl bg-brand-50 dark:bg-brand-900/20 border border-brand-200 dark:border-brand-800"
              >
                <AlertCircle className="w-6 h-6 text-brand-500 mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Need Urgent Help?
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  For critical issues affecting production, enterprise customers can access priority support.
                </p>
                <Link
                  to="/pricing"
                  className="text-brand-500 hover:text-brand-600 font-medium text-sm"
                >
                  Upgrade to Enterprise →
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Office Hours
                </h3>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <p>Monday - Friday</p>
                  <p className="font-medium text-gray-900 dark:text-white">9:00 AM - 6:00 PM PST</p>
                  <p className="mt-4">Weekend</p>
                  <p className="font-medium text-gray-900 dark:text-white">Emergency only</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;
