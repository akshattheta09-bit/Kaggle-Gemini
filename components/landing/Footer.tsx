import React from 'react';
import { motion } from 'framer-motion';

/**
 * Footer Component - Apple Level Design
 * 
 * Elegant, minimal footer with:
 * - Clean typography
 * - Refined spacing
 * - Professional links
 * - Premium aesthetic
 */
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

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
    ],
    social: [
      { label: 'Twitter', href: '#' },
      { label: 'LinkedIn', href: '#' },
      { label: 'GitHub', href: '#' }
    ]
  };

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <motion.div 
              className="mb-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-base font-semibold text-slate-900 dark:text-white">
                AutoFounder
              </span>
            </motion.div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              The operating system for building companies.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-widest mb-8">Product</h4>
            <ul className="space-y-5">
              {footerLinks.product.map((link, i) => (
                <li key={i}>
                  <motion.a
                    href={link.href}
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors font-light"
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
            <h4 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-widest mb-8">Company</h4>
            <ul className="space-y-5">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <motion.a
                    href={link.href}
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors font-light"
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
            <h4 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-widest mb-8">Legal</h4>
            <ul className="space-y-5">
              {footerLinks.legal.map((link, i) => (
                <li key={i}>
                  <motion.a
                    href={link.href}
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors font-light"
                    whileHover={{ x: 2 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-widest mb-8">Social</h4>
            <ul className="space-y-5">
              {footerLinks.social.map((link, i) => (
                <li key={i}>
                  <motion.a
                    href={link.href}
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors font-light"
                    whileHover={{ x: 2 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="border-t border-slate-200 dark:border-white/10 pt-10">
          {/* Copyright and Additional Info */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <motion.p 
              className="text-xs text-slate-600 dark:text-slate-500 font-light"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              © {currentYear} AutoFounder. All rights reserved.
            </motion.p>

            {/* Status Badge */}
            <motion.div
              className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-500 font-light"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              <span>Launching 2025</span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
