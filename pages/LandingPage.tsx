import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/landing/Navigation';
import Hero from '../components/landing/Hero';
import Capabilities from '../components/landing/Capabilities';
import ShowcaseParallax from '../components/landing/ShowcaseParallax';
import Workflow from '../components/landing/Workflow';
import Philosophy from '../components/landing/Philosophy';
import FinalCTA from '../components/landing/FinalCTA';
import Footer from '../components/landing/Footer';

/**
 * LandingPage Component
 * 
 * Premium landing experience for AutoFounder.
 * Designed to feel like a serious product (Linear, Cursor, Framer level).
 * 
 * Architecture:
 * - Modular, reusable components
 * - Smooth scroll animations via Framer Motion
 * - 3D transforms and parallax effects
 * - Clean, minimal design language
 * - No marketing fluff—just clarity
 */
interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      {/* Fixed Navigation */}
      <Navigation onGetStarted={onGetStarted} />

      {/* Hero Section */}
      <Hero onGetStarted={onGetStarted} />

      {/* Capabilities Section */}
      <Capabilities />

      {/* Showcase Parallax Section */}
      <ShowcaseParallax />

      {/* Workflow Section */}
      <Workflow />

      {/* Philosophy Section */}
      <Philosophy />

      {/* Final CTA Section */}
      <FinalCTA onGetStarted={onGetStarted} />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
