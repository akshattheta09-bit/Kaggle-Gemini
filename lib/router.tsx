import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navigation from '../components/landing/Navigation';
import Footer from '../components/landing/Footer';

// Lazy load pages for better performance
const LandingPage = lazy(() => import('../pages/LandingPage'));
const FeaturesPage = lazy(() => import('../pages/FeaturesPage'));
const HowItWorksPage = lazy(() => import('../pages/HowItWorksPage'));
const PricingPage = lazy(() => import('../pages/PricingPage'));
const APIPage = lazy(() => import('../pages/APIPage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const BlogPage = lazy(() => import('../pages/BlogPage'));
const CareersPage = lazy(() => import('../pages/CareersPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const DocsPage = lazy(() => import('../pages/DocsPage'));
const HelpCenterPage = lazy(() => import('../pages/HelpCenterPage'));
const CommunityPage = lazy(() => import('../pages/CommunityPage'));
const StatusPage = lazy(() => import('../pages/StatusPage'));
const PrivacyPage = lazy(() => import('../pages/PrivacyPage'));
const TermsPage = lazy(() => import('../pages/TermsPage'));
const CookiePage = lazy(() => import('../pages/CookiePage'));
const SecurityPage = lazy(() => import('../pages/SecurityPage'));
const SignInPage = lazy(() => import('../pages/SignInPage'));
const SignUpPage = lazy(() => import('../pages/SignUpPage'));

// Loading fallback component
const PageLoader: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950">
    <div className="text-center">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center mx-auto mb-4 animate-pulse">
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <p className="text-gray-500 dark:text-gray-400 text-sm">Loading...</p>
    </div>
  </div>
);

// Layout wrapper for pages with navigation
interface LayoutProps {
  onGetStarted: () => void;
}

export const PageLayout: React.FC<LayoutProps> = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navigation onGetStarted={onGetStarted} />
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};

// Route configuration
export const routes = [
  // Marketing/Landing pages
  { path: '/', element: 'landing' },
  { path: '/features', element: 'features' },
  { path: '/how-it-works', element: 'how-it-works' },
  { path: '/pricing', element: 'pricing' },
  { path: '/api', element: 'api' },
  
  // Company pages
  { path: '/about', element: 'about' },
  { path: '/blog', element: 'blog' },
  { path: '/careers', element: 'careers' },
  { path: '/contact', element: 'contact' },
  
  // Support pages
  { path: '/docs', element: 'docs' },
  { path: '/help', element: 'help' },
  { path: '/community', element: 'community' },
  { path: '/status', element: 'status' },
  
  // Legal pages
  { path: '/privacy', element: 'privacy' },
  { path: '/terms', element: 'terms' },
  { path: '/cookies', element: 'cookies' },
  { path: '/security', element: 'security' },
  
  // Auth pages
  { path: '/signin', element: 'signin' },
  { path: '/signup', element: 'signup' },
];

// Page component map
export const pageComponents: Record<string, React.FC<any>> = {
  'features': FeaturesPage as unknown as React.FC,
  'how-it-works': HowItWorksPage as unknown as React.FC,
  'pricing': PricingPage as unknown as React.FC,
  'api': APIPage as unknown as React.FC,
  'about': AboutPage as unknown as React.FC,
  'blog': BlogPage as unknown as React.FC,
  'careers': CareersPage as unknown as React.FC,
  'contact': ContactPage as unknown as React.FC,
  'docs': DocsPage as unknown as React.FC,
  'help': HelpCenterPage as unknown as React.FC,
  'community': CommunityPage as unknown as React.FC,
  'status': StatusPage as unknown as React.FC,
  'privacy': PrivacyPage as unknown as React.FC,
  'terms': TermsPage as unknown as React.FC,
  'cookies': CookiePage as unknown as React.FC,
  'security': SecurityPage as unknown as React.FC,
  'signin': SignInPage as unknown as React.FC,
  'signup': SignUpPage as unknown as React.FC,
};
