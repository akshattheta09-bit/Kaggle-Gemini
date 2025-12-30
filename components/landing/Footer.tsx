import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

/**
 * Footer Component
 * 
 * Minimal, functional footer.
 * No marketing clutter.
 * Just necessary information.
 */
const Footer: React.FC = () => {
  const footerLinks = {
    product: [
      { label: 'Features', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'Roadmap', href: '#' }
    ],
    company: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Contact', href: '#' }
    ],
    legal: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' }
    ]
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-16 px-6 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-500 to-brand-700 rounded-lg flex items-center justify-center">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg">AutoFounder</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              AI-powered startup operating system
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4 text-slate-900 dark:text-white">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, i) => (
                <li key={i}>
                  <motion.a
                    href={link.href}
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                    whileHover={{ x: 2 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4 text-slate-900 dark:text-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <motion.a
                    href={link.href}
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                    whileHover={{ x: 2 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4 text-slate-900 dark:text-white">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, i) => (
                <li key={i}>
                  <motion.a
                    href={link.href}
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                    whileHover={{ x: 2 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
          <p>© 2025 AutoFounder. All rights reserved.</p>
          
          <div className="flex gap-6">
            <motion.a 
              href="#" 
              className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
              whileHover={{ y: -2 }}
            >
              Twitter
            </motion.a>
            <motion.a 
              href="#" 
              className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
              whileHover={{ y: -2 }}
            >
              LinkedIn
            </motion.a>
            <motion.a 
              href="#" 
              className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
              whileHover={{ y: -2 }}
            >
              GitHub
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
