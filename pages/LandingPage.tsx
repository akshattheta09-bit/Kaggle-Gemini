import React from 'react';
import Navigation from '../components/landing/Navigation';
import AnimatedHero from '../components/landing/AnimatedHero';
import Capabilities from '../components/landing/Capabilities';
import ShowcaseParallax from '../components/landing/ShowcaseParallax';
import Workflow from '../components/landing/Workflow';
import Philosophy from '../components/landing/Philosophy';
import FinalCTA from '../components/landing/FinalCTA';
import Footer from '../components/landing/Footer';

/**
 * LandingPage Component - Apple Level Premium Design
 * 
 * A stunning, VC-ready landing experience featuring:
 * - Smooth scroll animations
 * - Premium glassmorphism effects
 * - 3D parallax showcase
 * - Trust-building social proof
 * - Clean, minimal typography
 */
interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 antialiased">
      {/* Fixed Navigation with Glassmorphism */}
      <Navigation onGetStarted={onGetStarted} />

      {/* Animated Hero Section */}
      <AnimatedHero onGetStarted={onGetStarted} />

      {/* Capabilities Bento Grid */}
      <Capabilities />

      {/* 3D Parallax Showcase */}
      <ShowcaseParallax />

      {/* Process Workflow Timeline */}
      <Workflow />

      {/* Trust & Philosophy Section */}
      <Philosophy />

      {/* Conversion CTA Section */}
      <FinalCTA onGetStarted={onGetStarted} />

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;