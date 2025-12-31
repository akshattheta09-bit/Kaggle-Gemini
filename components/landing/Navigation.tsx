import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Menu, X, ArrowRight } from 'lucide-react';

interface NavigationProps {
  onGetStarted: () => void;
}

/**
 * Navigation Component - Apple-Level Premium Design
 * 
 * Features:
 * - Ultra-refined glassmorphism
 * - Seamless scroll transitions
 * - Micro-interactions on every element
 * - Mobile-first responsive design
 * - Accessibility-focused
 */
const Navigation: React.FC<NavigationProps> = ({ onGetStarted }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'How it works', href: '#workflow' },
    { label: 'About', href: '#philosophy' },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'py-3' 
            : 'py-5'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Background blur layer */}
        <div 
          className={`absolute inset-0 transition-all duration-500 ${
            scrolled 
              ? 'bg-white/70 dark:bg-gray-950/70 backdrop-blur-2xl border-b border-black/[0.04] dark:border-white/[0.06]' 
              : 'bg-transparent'
          }`}
        />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 group focus-ring rounded-xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-500 to-brand-600 rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
                <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center shadow-lg">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
              </div>
              <span className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                AutoFounder
              </span>
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-[15px] font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-full transition-colors focus-ring"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden md:flex items-center gap-4">
              <motion.button
                onClick={onGetStarted}
                className="group relative px-6 py-2.5 rounded-full text-[15px] font-semibold text-white bg-gray-900 dark:bg-white dark:text-gray-900 overflow-hidden focus-ring"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-brand-600 to-brand-500"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10 transition-colors focus-ring"
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-white/95 dark:bg-gray-950/95 backdrop-blur-2xl border-l border-black/[0.04] dark:border-white/[0.06] md:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <div className="flex flex-col h-full p-6">
                {/* Close Button */}
                <div className="flex justify-end mb-8">
                  <motion.button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10"
                    whileTap={{ scale: 0.95 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.button>
                </div>

                {/* Links */}
                <div className="flex-1 flex flex-col gap-2">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-4 py-3 text-lg font-medium text-gray-900 dark:text-white rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </div>

                {/* CTA */}
                <motion.button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onGetStarted();
                  }}
                  className="w-full py-4 rounded-2xl text-base font-semibold text-white bg-gray-900 dark:bg-white dark:text-gray-900"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get started free
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
