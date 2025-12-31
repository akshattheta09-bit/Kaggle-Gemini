import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { AuthProvider } from './lib/authContext';
import { HistoryProvider, useHistory } from './lib/historyContext';
import Sidebar from './components/Sidebar';
import ContentArea from './components/ContentArea';
import LoadingOverlay from './components/LoadingOverlay';
import Navigation from './components/landing/Navigation';
import Footer from './components/landing/Footer';
import { StartupPlan, Sector, ValidationLog, ExtractedAssumption } from './types';
import { generateStartupPlan } from './services/geminiService';
import { extractAssumptionsFromPlan } from './services/validationService';

// Lazy load pages for better performance
const LandingPage = lazy(() => import('./pages/LandingPage'));
const FeaturesPage = lazy(() => import('./pages/FeaturesPage'));
const HowItWorksPage = lazy(() => import('./pages/HowItWorksPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const APIPage = lazy(() => import('./pages/APIPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const DocsPage = lazy(() => import('./pages/DocsPage'));
const HelpCenterPage = lazy(() => import('./pages/HelpCenterPage'));
const CommunityPage = lazy(() => import('./pages/CommunityPage'));
const StatusPage = lazy(() => import('./pages/StatusPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const CookiePage = lazy(() => import('./pages/CookiePage'));
const SecurityPage = lazy(() => import('./pages/SecurityPage'));
const SignInPage = lazy(() => import('./pages/SignInPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage'));

// Page loader component
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

// Layout for marketing pages (with nav + footer)
interface MarketingLayoutProps {
  children: React.ReactNode;
}

const MarketingLayout: React.FC<MarketingLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navigation onGetStarted={() => navigate('/app')} />
      <Suspense fallback={<PageLoader />}>
        {children}
      </Suspense>
      <Footer />
    </div>
  );
};

// The main app workspace (blueprint generator)
const AppWorkspace: React.FC = () => {
  const { addItem } = useHistory();
  const [plan, setPlan] = useState<StartupPlan | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [validationLogs, setValidationLogs] = useState<ValidationLog[]>([]);
  const [extractedAssumptions, setExtractedAssumptions] = useState<ExtractedAssumption[]>([]);
  
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return true;
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const handleGenerate = async (idea: string, sector: Sector) => {
    setIsGenerating(true);
    setError(null);

    try {
      const generatedPlan = await generateStartupPlan(idea, sector);
      setPlan(generatedPlan);
      
      const assumptions = extractAssumptionsFromPlan(generatedPlan);
      setExtractedAssumptions(assumptions);
      generatedPlan.extractedAssumptions = assumptions;
      
      // Save to history
      addItem(idea, sector, generatedPlan);
      
      setValidationLogs([]);
    } catch (err) {
      console.error(err);
      setError("Failed to generate startup plan. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleAddValidationLog = (logData: Omit<ValidationLog, 'id' | 'timestamp'>) => {
    const newLog: ValidationLog = {
      id: `log_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: Date.now(),
      ...logData
    };
    setValidationLogs([...validationLogs, newLog]);
  };

  return (
    <div className="flex h-screen w-screen bg-gray-50 dark:bg-gray-950 overflow-hidden text-gray-900 dark:text-gray-100 font-sans relative transition-colors duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50/30 via-transparent to-purple-50/20 dark:from-brand-950/20 dark:via-transparent dark:to-purple-950/10 pointer-events-none" />
      
      <LoadingOverlay isLoading={isGenerating} />

      <Sidebar 
        onGenerate={handleGenerate} 
        isGenerating={isGenerating} 
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
      />
      
      <main className="flex-1 relative h-full flex flex-col">
        <ContentArea 
          plan={plan} 
          isGenerating={isGenerating} 
          error={error}
          validationLogs={validationLogs}
          extractedAssumptions={extractedAssumptions}
          onAddValidationLog={handleAddValidationLog}
        />
      </main>
    </div>
  );
};

// Main App with all routes
const AppRoutes: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* Landing page */}
        <Route path="/" element={<LandingPage onGetStarted={() => navigate('/app')} />} />
        
        {/* Main app workspace */}
        <Route path="/app" element={<AppWorkspace />} />
        
        {/* Auth pages */}
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        
        {/* Marketing pages */}
        <Route path="/features" element={<MarketingLayout><FeaturesPage /></MarketingLayout>} />
        <Route path="/how-it-works" element={<MarketingLayout><HowItWorksPage /></MarketingLayout>} />
        <Route path="/pricing" element={<MarketingLayout><PricingPage /></MarketingLayout>} />
        <Route path="/api" element={<MarketingLayout><APIPage /></MarketingLayout>} />
        
        {/* Company pages */}
        <Route path="/about" element={<MarketingLayout><AboutPage /></MarketingLayout>} />
        <Route path="/blog" element={<MarketingLayout><BlogPage /></MarketingLayout>} />
        <Route path="/careers" element={<MarketingLayout><CareersPage /></MarketingLayout>} />
        <Route path="/contact" element={<MarketingLayout><ContactPage /></MarketingLayout>} />
        
        {/* Support pages */}
        <Route path="/docs" element={<MarketingLayout><DocsPage /></MarketingLayout>} />
        <Route path="/help" element={<MarketingLayout><HelpCenterPage /></MarketingLayout>} />
        <Route path="/community" element={<MarketingLayout><CommunityPage /></MarketingLayout>} />
        <Route path="/status" element={<MarketingLayout><StatusPage /></MarketingLayout>} />
        
        {/* Legal pages */}
        <Route path="/privacy" element={<MarketingLayout><PrivacyPage /></MarketingLayout>} />
        <Route path="/terms" element={<MarketingLayout><TermsPage /></MarketingLayout>} />
        <Route path="/cookies" element={<MarketingLayout><CookiePage /></MarketingLayout>} />
        <Route path="/security" element={<MarketingLayout><SecurityPage /></MarketingLayout>} />
        
        {/* Catch all - redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};

// Root App component with providers
const App: React.FC = () => {
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <HistoryProvider>
          <AppRoutes />
        </HistoryProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;