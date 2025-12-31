import { GoogleGenAI, Type, Schema } from "@google/genai";
import { StartupPlan, Sector } from "../types";

// Initialize the Gemini client with the API key from the environment
// If no API key is provided, we'll handle it gracefully in the generateStartupPlan function
const apiKey = process.env.API_KEY || process.env.VITE_API_KEY;
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

/**
 * Schema Definition
 * strictly defines the JSON structure we expect Gemini to return.
 * This ensures the UI code rarely breaks due to malformed data.
 */
const startupPlanSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    strategy: {
      type: Type.OBJECT,
      properties: {
        summary: { type: Type.STRING, description: "High-level executive summary of the strategy." },
        problem: { type: Type.STRING, description: "The core problem being solved." },
        solution: { type: Type.STRING, description: "The proposed solution." },
        targetCustomers: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Specific target customer segments." },
        usp: { type: Type.STRING, description: "Unique Selling Proposition." }
      },
      required: ["summary", "problem", "solution", "targetCustomers", "usp"]
    },
    product: {
      type: Type.OBJECT,
      properties: {
        coreFeatures: { type: Type.ARRAY, items: { type: Type.STRING }, description: "List of core product features." },
        userJourney: { type: Type.STRING, description: "Narrative description of the user journey." },
        differentiation: { type: Type.STRING, description: "How the product differentiates from competitors." }
      },
      required: ["coreFeatures", "userJourney", "differentiation"]
    },
    mvp: {
      type: Type.OBJECT,
      properties: {
        mustHave: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Essential features for Day 1 launch." },
        niceToHave: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Features deferred to post-launch." }
      },
      required: ["mustHave", "niceToHave"]
    },
    financials: {
      type: Type.OBJECT,
      properties: {
        pricingModel: { type: Type.STRING, description: "Description of the pricing model." },
        revenueStreams: { type: Type.ARRAY, items: { type: Type.STRING }, description: "List of revenue streams." },
        roughCAC: { type: Type.STRING, description: "Estimated Customer Acquisition Cost (e.g. '$50')." },
        roughLTV: { type: Type.STRING, description: "Estimated Lifetime Value (e.g. '$500')." }
      },
      required: ["pricingModel", "revenueStreams", "roughCAC", "roughLTV"]
    },
    assets: {
      type: Type.OBJECT,
      properties: {
        brandNames: { type: Type.ARRAY, items: { type: Type.STRING }, description: "5 creative brand name ideas." },
        taglineOptions: { type: Type.ARRAY, items: { type: Type.STRING }, description: "3-5 catchy tagline options." },
        landingHero: { type: Type.STRING, description: "Compelling Hero H1 and subtext for landing page." },
        adCopyVariants: { type: Type.ARRAY, items: { type: Type.STRING }, description: "3 distinct ad copy variants." }
      },
      required: ["brandNames", "taglineOptions", "landingHero", "adCopyVariants"]
    },
    appScaffold: {
      type: Type.OBJECT,
      properties: {
        techStack: {
          type: Type.OBJECT,
          description: "Recommended technology stack.",
          properties: {
            frontend: { type: Type.STRING },
            backend: { type: Type.STRING },
            database: { type: Type.STRING },
            hosting: { type: Type.STRING },
            keyIntegrations: { type: Type.ARRAY, items: { type: Type.STRING } }
          },
          required: ["frontend", "backend", "database", "hosting", "keyIntegrations"]
        },
        apiEndpoints: {
          type: Type.ARRAY,
          description: "List of 3-7 core API endpoints.",
          items: {
            type: Type.OBJECT,
            properties: {
              method: { type: Type.STRING, description: "GET, POST, etc." },
              endpoint: { type: Type.STRING, description: "/api/v1/..." },
              description: { type: Type.STRING }
            },
            required: ["method", "endpoint", "description"]
          }
        },
        fileStructure: { type: Type.STRING, description: "Project folder structure tree as a string." },
        userStories: { type: Type.ARRAY, items: { type: Type.STRING }, description: "3-5 user stories." }
      },
      required: ["techStack", "apiEndpoints", "fileStructure", "userStories"]
    },
    mockups: {
      type: Type.OBJECT,
      description: "Visual descriptions for UI mockups and diagrams.",
      properties: {
        dashboardDesc: { type: Type.STRING, description: "Detailed visual description of the main dashboard wireframe (layout, components)." },
        onboardingDesc: { type: Type.STRING, description: "Detailed visual description of the user onboarding flow wireframe." },
        architectureDesc: { type: Type.STRING, description: "Detailed description of the high-level architecture diagram (boxes and arrows)." }
      },
      required: ["dashboardDesc", "onboardingDesc", "architectureDesc"]
    },
    viability: {
      type: Type.OBJECT,
      description: "A scored viability analysis of the startup idea.",
      properties: {
        overallScore: { type: Type.NUMBER, description: "Overall viability score from 0 to 100." },
        categories: {
          type: Type.OBJECT,
          properties: {
            tam: { type: Type.NUMBER, description: "Score 0-10 for Total Addressable Market size." },
            feasibility: { type: Type.NUMBER, description: "Score 0-10 for technical and financial feasibility." },
            competitionRisk: { type: Type.NUMBER, description: "Score 0-10 for competition risk (10 = low risk, 0 = high risk)." },
            revenuePotential: { type: Type.NUMBER, description: "Score 0-10 for revenue potential." },
            founderMoat: { type: Type.NUMBER, description: "Score 0-10 for defensibility/moat." },
            operationalComplexity: { type: Type.NUMBER, description: "Score 0-10 for operational ease (10 = easy, 0 = hard)." },
            speedToMVP: { type: Type.NUMBER, description: "Score 0-10 for speed to launch." },
            aiLeverage: { type: Type.NUMBER, description: "Score 0-10 for how well it leverages AI." },
            technicalRisk: { type: Type.NUMBER, description: "Score 0-10 for technical risk (10 = low risk, 0 = high risk)." },
            longevity: { type: Type.NUMBER, description: "Score 0-10 for long-term business sustainability." }
          },
          required: ["tam", "feasibility", "competitionRisk", "revenuePotential", "founderMoat", "operationalComplexity", "speedToMVP", "aiLeverage", "technicalRisk", "longevity"]
        },
        trafficLight: { type: Type.STRING, enum: ["Green", "Yellow", "Red"], description: "Overall verdict." },
        founderRecommendation: { type: Type.STRING, description: "Strategic advice on whether to pursue this idea and why." }
      },
      required: ["overallScore", "categories", "trafficLight", "founderRecommendation"]
    },
    executionRoadmap: {
      type: Type.OBJECT,
      description: "A step-by-step agentic execution plan.",
      properties: {
        day1: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Specific tasks for the first 24 hours." },
        week1: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Prioritized tasks for the first sprint (Week 1)." },
        month1: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Strategic goals and tasks for Month 1." },
        growthLoop: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Recurring AI-driven growth tasks." },
        automationLoop: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Recurring operational automation tasks." },
        agentsInvolved: { type: Type.ARRAY, items: { type: Type.STRING }, description: "List of AI agents needed (e.g., 'Coder Agent', 'Sales Agent')." },
        toolsUsed: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Specific tools and APIs to use." },
        kpisTracked: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Key Performance Indicators to track." }
      },
      required: ["day1", "week1", "month1", "growthLoop", "automationLoop", "agentsInvolved", "toolsUsed", "kpisTracked"]
    },
    pitchScript: {
      type: Type.OBJECT,
      description: "Two versions of a 1-minute elevator pitch.",
      properties: {
        vcPitch: { type: Type.STRING, description: "A formal 120-150 word VC-style pitch covering Hook, Problem, Solution, Why Now, Differentiation, Traction Potential, and Ask." },
        founderVoicePitch: { type: Type.STRING, description: "A narrative 120-150 word pitch written in the first person ('I'), more personal and storytelling-focused." }
      },
      required: ["vcPitch", "founderVoicePitch"]
    }
  },
  required: ["strategy", "product", "mvp", "financials", "assets", "appScaffold", "mockups", "viability", "executionRoadmap", "pitchScript"]
};

/**
 * Sanitizes user input to prevent injection attacks
 * @param input - Raw user input
 * @returns Sanitized input safe for use in prompts
 */
const sanitizeInput = (input: string): string => {
  // Remove potential prompt injection attempts
  const sanitized = input
    // Remove any attempts to override system prompts
    .replace(/system\s*:/gi, '')
    .replace(/assistant\s*:/gi, '')
    .replace(/user\s*:/gi, '')
    // Remove potential code injection markers
    .replace(/<script[^>]*>.*?<\/script>/gi, '')
    .replace(/```[\s\S]*?```/g, (match) => match.replace(/[<>]/g, ''))
    // Limit length to prevent resource exhaustion
    .slice(0, 5000)
    // Escape special characters that could be used for injection
    .replace(/[<>]/g, (char) => char === '<' ? '&lt;' : '&gt;')
    .trim();
  
  return sanitized;
};

/**
 * Validates the sector input
 * @param sector - The sector to validate
 * @returns boolean indicating if sector is valid
 */
const isValidSector = (sector: string): sector is Sector => {
  const validSectors = ['AI', 'SaaS', 'E-commerce', 'FinTech', 'HealthTech', 'EdTech', 'CleanTech', 'Other'];
  return validSectors.includes(sector);
};

/**
 * Generates a full startup plan using Gemini 3 Pro.
 * @param idea - The user's raw idea input.
 * @param sector - The selected industry sector.
 * @returns A structured StartupPlan object.
 * @throws Error if API key is missing or input is invalid.
 */
export const generateStartupPlan = async (idea: string, sector: Sector): Promise<StartupPlan> => {
  // Check if API key is available
  if (!ai) {
    throw new Error("API key missing. Please configure your Gemini API key to generate startup plans.");
  }

  // Validate and sanitize inputs
  if (!idea || typeof idea !== 'string') {
    throw new Error("Invalid idea input. Please provide a valid startup idea.");
  }
  
  if (!isValidSector(sector)) {
    throw new Error("Invalid sector selected. Please choose a valid industry sector.");
  }

  const sanitizedIdea = sanitizeInput(idea);
  
  if (sanitizedIdea.length < 10) {
    throw new Error("Idea is too short. Please provide more details about your startup concept.");
  }

  const prompt = `
    Act as a world-class startup founder and consultant (Y Combinator level).
    Analyze the following startup idea and generate a comprehensive startup plan.
    
    Sector: ${sector}
    Idea: ${sanitizedIdea}

    Be critical, realistic, and strategic. Do not give generic fluff.
    Focus on viability, monetization, and rapid execution.
    Include a detailed agentic workflow roadmap and pitch scripts.
    Provide rich descriptive text for visual mockups, but do not generate actual images.
  `;

  try {
    // Generate the text-based plan (including descriptions for images)
    // We strictly use gemini-3-pro-preview and avoid image generation models.
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: startupPlanSchema,
        thinkingConfig: { thinkingBudget: 4096 }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from Gemini");

    const plan = JSON.parse(text) as StartupPlan;

    // We no longer generate images. The plan only contains text descriptions.
    return plan;
  } catch (error) {
    console.error("Error generating startup plan:", error);
    throw error;
  }
};
