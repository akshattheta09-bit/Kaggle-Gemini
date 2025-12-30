import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/landing/Navigation';
import AnimatedHero from '../components/landing/AnimatedHero';
import Capabilities from '../components/landing/Capabilities';
import ShowcaseParallax from '../components/landing/ShowcaseParallax';
import Workflow from '../components/landing/Workflow';
import Philosophy from '../components/landing/Philosophy';
import FinalCTA from '../components/landing/FinalCTA';
import Footer from '../components/landing/Footer';

/**
 * LandingPage Component
 * 
 * Premium landing experience for AutoFounder with animated hero.
 * Features blue gradient accents and professional design.
 * 
 * Architecture:
 * - Modular, reusable components
 * - Smooth scroll animations via Framer Motion
 * - Animated marquee hero section
 * - Blue brand color throughout
 * - Professional card designs
 */
interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-slate-900 dark:text-slate-100">
      {/* Fixed Navigation */}
      <Navigation onGetStarted={onGetStarted} />

      {/* Animated Hero Section with Marquee */}
      <AnimatedHero onGetStarted={onGetStarted} />

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
