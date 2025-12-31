import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { AuthProvider } from './lib/authContext';
import { HistoryProvider, useHistory } from './lib/historyContext';
import ScrollToTop from './components/ScrollToTop';
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
const APIQuickstartPage = lazy(() => import('./pages/docs/APIQuickstartPage'));
const AuthenticationPage = lazy(() => import('./pages/docs/AuthenticationPage'));
const SDKsPage = lazy(() => import('./pages/docs/SDKsPage'));
const ChangelogPage = lazy(() => import('./pages/docs/ChangelogPage'));
const ViabilityScoringPage = lazy(() => import('./pages/docs/ViabilityScoringPage'));
const PitchScriptsPage = lazy(() => import('./pages/docs/PitchScriptsPage'));
const BlueprintToMVPPage = lazy(() => import('./pages/docs/BlueprintToMVPPage'));
const FounderMarketFitPage = lazy(() => import('./pages/docs/FounderMarketFitPage'));
const AcceleratorIntegrationPage = lazy(() => import('./pages/docs/AcceleratorIntegrationPage'));
const SaaSPricingPage = lazy(() => import('./pages/docs/SaaSPricingPage'));
const SupportPage = lazy(() => import('./pages/SupportPage'));
const SecurityPage = lazy(() => import('./pages/SecurityPage'));
const SignInPage = lazy(() => import('./pages/SignInPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage'));
const ForgotPasswordPage = lazy(() => import('./pages/ForgotPasswordPage'));

// Module description pages
const MarketStrategyPage = lazy(() => import('./pages/modules/MarketStrategyPage'));
const ProductBlueprintPage = lazy(() => import('./pages/modules/ProductBlueprintPage'));
const TechArchitecturePage = lazy(() => import('./pages/modules/TechArchitecturePage'));
const ExecutionRoadmapPage = lazy(() => import('./pages/modules/ExecutionRoadmapPage'));
const ViabilityScorePage = lazy(() => import('./pages/modules/ViabilityScorePage'));
const PitchScriptsModulePage = lazy(() => import('./pages/modules/PitchScriptsPage'));

// Page loader component - Premium animated loader
const PageLoader: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950">
    <div className="text-center">
      {/* Animated loader */}
      <div className="relative w-16 h-16 mx-auto mb-6">
        {/* Spinning ring */}
        <div className="absolute inset-0 rounded-full border-2 border-gray-200 dark:border-gray-800" />
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-brand-500 animate-spin" />
        {/* Center dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-brand-500 animate-pulse" />
        </div>
      </div>
      <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Loading...</p>
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

// App Workspace Loader - Premium loader for the main workspace
const AppWorkspaceLoader: React.FC = () => (
  <div className="flex h-screen w-screen bg-gray-50 dark:bg-gray-950 items-center justify-center">
    <div className="text-center">
      <div className="relative w-20 h-20 mx-auto mb-6">
        {/* Animated rings */}
        <div className="absolute inset-0 rounded-full border-2 border-brand-200 dark:border-brand-800 animate-ping opacity-20" />
        <div className="absolute inset-2 rounded-full border-2 border-brand-300 dark:border-brand-700 animate-ping opacity-30" style={{ animationDelay: '0.2s' }} />
        <div className="absolute inset-4 rounded-full border-2 border-brand-400 dark:border-brand-600 animate-ping opacity-40" style={{ animationDelay: '0.4s' }} />
        {/* Center icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 text-white animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Loading Workspace</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">Initializing your startup studio...</p>
      {/* Progress bar */}
      <div className="mt-6 w-48 mx-auto h-1 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-brand-500 to-brand-400 rounded-full animate-[shimmer_1.5s_ease-in-out_infinite]" style={{ width: '60%' }} />
      </div>
    </div>
  </div>
);

class WorkspaceErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; message?: string }
> {
  state: { hasError: boolean; message?: string } = { hasError: false };

  static getDerivedStateFromError(error: unknown) {
    const message = error instanceof Error ? error.message : 'An unexpected error occurred.';
    return { hasError: true, message };
  }

  componentDidCatch(error: unknown) {
    console.error('Workspace crashed:', error);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 p-6">
        <div className="max-w-md w-full rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-8 text-center shadow-apple">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Workspace failed to load</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {this.state.message}
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              onClick={() => window.location.reload()}
              className="px-5 py-2.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold hover:opacity-90"
            >
              Reload
            </button>
            <button
              onClick={() => (window.location.href = '/')}
              className="px-5 py-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-semibold hover:opacity-90"
            >
              Go Home
            </button>
          </div>
        </div>
      </div>
    );
  }
}

// Main App with all routes
const AppRoutes: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Landing page */}
          <Route path="/" element={<LandingPage onGetStarted={() => navigate('/app')} />} />
          
          {/* Main app workspace - wrapped in its own Suspense for smooth loading */}
          <Route path="/app" element={
            <Suspense fallback={<AppWorkspaceLoader />}>
              <WorkspaceErrorBoundary>
                <AppWorkspace />
              </WorkspaceErrorBoundary>
            </Suspense>
          } />
          
          {/* Auth pages */}
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          
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
          <Route path="/docs/quickstart" element={<MarketingLayout><APIQuickstartPage /></MarketingLayout>} />
          {/* Back-compat alias */}
          <Route path="/docs/api-quickstart" element={<Navigate to="/docs/quickstart" replace />} />
          <Route path="/docs/authentication" element={<MarketingLayout><AuthenticationPage /></MarketingLayout>} />
          <Route path="/docs/sdks" element={<MarketingLayout><SDKsPage /></MarketingLayout>} />
          <Route path="/docs/changelog" element={<MarketingLayout><ChangelogPage /></MarketingLayout>} />
          <Route path="/docs/viability-scoring" element={<MarketingLayout><ViabilityScoringPage /></MarketingLayout>} />
          <Route path="/docs/pitch-scripts" element={<MarketingLayout><PitchScriptsPage /></MarketingLayout>} />
          <Route path="/docs/blueprint-to-mvp" element={<MarketingLayout><BlueprintToMVPPage /></MarketingLayout>} />
          <Route path="/docs/founder-market-fit" element={<MarketingLayout><FounderMarketFitPage /></MarketingLayout>} />
          <Route path="/docs/accelerator-integration" element={<MarketingLayout><AcceleratorIntegrationPage /></MarketingLayout>} />
          <Route path="/docs/saas-pricing" element={<MarketingLayout><SaaSPricingPage /></MarketingLayout>} />
          {/* Canonical help center path */}
          <Route path="/help-center" element={<MarketingLayout><HelpCenterPage /></MarketingLayout>} />
          {/* Back-compat alias */}
          <Route path="/help" element={<Navigate to="/help-center" replace />} />
          <Route path="/support" element={<MarketingLayout><SupportPage /></MarketingLayout>} />
          <Route path="/community" element={<MarketingLayout><CommunityPage /></MarketingLayout>} />
          <Route path="/status" element={<MarketingLayout><StatusPage /></MarketingLayout>} />
          
          {/* Module description pages */}
          <Route path="/modules/market-strategy" element={<MarketingLayout><MarketStrategyPage /></MarketingLayout>} />
          <Route path="/modules/product-blueprint" element={<MarketingLayout><ProductBlueprintPage /></MarketingLayout>} />
          <Route path="/modules/tech-architecture" element={<MarketingLayout><TechArchitecturePage /></MarketingLayout>} />
          <Route path="/modules/execution-roadmap" element={<MarketingLayout><ExecutionRoadmapPage /></MarketingLayout>} />
          <Route path="/modules/viability-score" element={<MarketingLayout><ViabilityScorePage /></MarketingLayout>} />
          <Route path="/modules/pitch-scripts" element={<MarketingLayout><PitchScriptsModulePage /></MarketingLayout>} />
          
          {/* Legal pages */}
          <Route path="/privacy" element={<MarketingLayout><PrivacyPage /></MarketingLayout>} />
          <Route path="/terms" element={<MarketingLayout><TermsPage /></MarketingLayout>} />
          <Route path="/cookies" element={<MarketingLayout><CookiePage /></MarketingLayout>} />
          <Route path="/security" element={<MarketingLayout><SecurityPage /></MarketingLayout>} />
          
          {/* Catch all - redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </>
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