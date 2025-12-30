import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import ContentArea from './components/ContentArea';
import LoadingOverlay from './components/LoadingOverlay';
import { StartupPlan, Sector, ValidationLog, ExtractedAssumption } from './types';
import { generateStartupPlan } from './services/geminiService';
import { extractAssumptionsFromPlan } from './services/validationService';

/**
 * App Component
 * 
 * This is the root component of the application.
 * It manages the global state:
 * 1. plan: The generated startup blueprint (null if not generated yet).
 * 2. isGenerating: A boolean flag to show the loading spinner.
 * 3. error: To display if something goes wrong with the AI service.
 * 4. isDarkMode: Manages the application theme.
 * 5. validationLogs: Array of validation entries.
 * 6. extractedAssumptions: Array of extracted assumptions from the plan.
 */
const App: React.FC = () => {
  const [plan, setPlan] = useState<StartupPlan | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [validationLogs, setValidationLogs] = useState<ValidationLog[]>([]);
  const [extractedAssumptions, setExtractedAssumptions] = useState<ExtractedAssumption[]>([]);
  
  // Initialize dark mode from system preference or default to false
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return true;
    }
    return false;
  });

  // Apply dark mode class to html element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  /**
   * Handler for the "Generate" button in the Sidebar.
   * Calls the Gemini service to transform the idea into a plan.
   */
  const handleGenerate = async (idea: string, sector: Sector) => {
    setIsGenerating(true);
    setError(null);
    // Note: We do NOT clear setPlan(null) here anymore. 
    // This allows the old plan (or empty state) to remain visible behind the overlay
    // until the new one is ready, which feels smoother.

    try {
      const generatedPlan = await generateStartupPlan(idea, sector);
      setPlan(generatedPlan);
      
      // Extract assumptions from the new plan
      const assumptions = extractAssumptionsFromPlan(generatedPlan);
      setExtractedAssumptions(assumptions);
      generatedPlan.extractedAssumptions = assumptions;
      
      // Reset validation logs for new plan
      setValidationLogs([]);
    } catch (err) {
      console.error(err);
      setError("Failed to generate startup plan. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  /**
   * Handler to add a new validation log
   */
  const handleAddValidationLog = (logData: Omit<ValidationLog, 'id' | 'timestamp'>) => {
    const newLog: ValidationLog = {
      id: `log_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: Date.now(),
      ...logData
    };
    setValidationLogs([...validationLogs, newLog]);
  };

  return (
    <div className="flex h-screen w-screen bg-slate-50 dark:bg-slate-950 overflow-hidden text-slate-900 dark:text-slate-100 font-sans relative transition-colors duration-200">
      {/* Global Loading Overlay */}
      <LoadingOverlay isLoading={isGenerating} />

      {/* Left Panel: Inputs */}
      <Sidebar 
        onGenerate={handleGenerate} 
        isGenerating={isGenerating} 
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
      />
      
      {/* Right Panel: Results & Visualization */}
      <main className="flex-1 relative h-full flex flex-col">
        {/* Main Display Area */}
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

export default App;