/**
 * predefined industry sectors for the startup idea.
 * This helps the AI context-switch to the right domain knowledge.
 */
export enum Sector {
  SaaS = 'SaaS',
  Education = 'Education',
  Health = 'Health',
  CreatorTools = 'Creator Tools',
  Fintech = 'Fintech',
  Productivity = 'Productivity',
  Other = 'Other'
}

/**
 * STRATEGY TAB DATA
 * High-level business overview.
 */
export interface StrategyData {
  summary: string;
  problem: string;
  solution: string;
  targetCustomers: string[];
  usp: string; // Unique Selling Proposition
}

/**
 * PRODUCT TAB DATA
 * Functional details about the product offering.
 */
export interface ProductData {
  coreFeatures: string[];
  userJourney: string;
  differentiation: string;
}

/**
 * MVP TAB DATA
 * Prioritization of features for the first version.
 */
export interface MVPData {
  mustHave: string[]; // Critical for launch
  niceToHave: string[]; // Can wait for v2
}

/**
 * FINANCIALS TAB DATA
 * Basic economic modeling.
 */
export interface FinancialsData {
  pricingModel: string;
  revenueStreams: string[];
  roughCAC: string; // Customer Acquisition Cost
  roughLTV: string; // Lifetime Value
}

/**
 * ASSETS TAB DATA
 * Marketing and branding materials.
 */
export interface AssetsData {
  brandNames: string[];
  taglineOptions: string[];
  landingHero: string;
  adCopyVariants: string[];
}

/**
 * APP SCAFFOLD TAB DATA
 * Technical implementation details.
 */
export interface TechStack {
  frontend: string;
  backend: string;
  database: string;
  hosting: string;
  keyIntegrations: string[];
}

export interface ApiEndpoint {
  method: string; // GET, POST, PUT, DELETE
  endpoint: string; // e.g., /api/users
  description: string;
}

export interface AppScaffoldData {
  techStack: TechStack;
  apiEndpoints: ApiEndpoint[];
  fileStructure: string; // Tree representation
  userStories: string[];
}

/**
 * MOCKUPS TAB DATA
 * Visual wireframes and diagrams.
 */
export interface MockupsData {
  dashboardDesc: string; // The prompt used to generate the image
  onboardingDesc: string;
  architectureDesc: string;
  // Removed image fields for text-only mode
}

/**
 * VIABILITY TAB DATA
 * Scored analysis of the startup's potential.
 */
export interface ViabilityData {
  overallScore: number; // 0-100
  categories: {
    tam: number; // 0-10
    feasibility: number;
    competitionRisk: number;
    revenuePotential: number;
    founderMoat: number;
    operationalComplexity: number;
    speedToMVP: number;
    aiLeverage: number;
    technicalRisk: number;
    longevity: number;
  };
  trafficLight: "Green" | "Yellow" | "Red";
  founderRecommendation: string;
}

/**
 * EXECUTION ROADMAP DATA
 * Agentic workflow and timeline.
 */
export interface ExecutionRoadmapData {
  day1: string[];
  week1: string[];
  month1: string[];
  growthLoop: string[];
  automationLoop: string[];
  agentsInvolved: string[];
  toolsUsed: string[];
  kpisTracked: string[];
}

/**
 * PITCH SCRIPT DATA
 * Scripts for VC and Founder pitches.
 */
export interface PitchScriptData {
  vcPitch: string;
  founderVoicePitch: string;
}

/**
 * MASTER PLAN OBJECT
 * This is the root object returned by Gemini.
 */
export interface StartupPlan {
  strategy: StrategyData;
  product: ProductData;
  mvp: MVPData;
  financials: FinancialsData;
  assets: AssetsData;
  appScaffold: AppScaffoldData;
  mockups: MockupsData;
  viability: ViabilityData;
  executionRoadmap: ExecutionRoadmapData;
  pitchScript: PitchScriptData;
}

// Valid keys for tab navigation
export type TabId = 'strategy' | 'viability' | 'execution-roadmap' | 'pitch-script' | 'product' | 'mvp' | 'mockups' | 'app-scaffold' | 'financials' | 'assets';
