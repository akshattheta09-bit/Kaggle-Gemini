import { GoogleGenAI, Type, Schema } from "@google/genai";
import {
  StartupPlan,
  ExtractedAssumption,
  ValidationLog,
  ValidationDashboard,
  DecisionReasoning
} from "../types";

const apiKey = process.env.API_KEY || process.env.VITE_API_KEY;
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

/**
 * Extracts key assumptions from a startup plan.
 * Assumptions are critical points that need to be validated in the real world.
 *
 * @param plan - The startup plan to analyze
 * @returns Array of extracted assumptions
 */
export const extractAssumptionsFromPlan = (plan: StartupPlan): ExtractedAssumption[] => {
  const assumptions: ExtractedAssumption[] = [];
  const baseId = 'assumption_';
  let counter = 0;

  // Market assumptions
  if (plan.strategy.targetCustomers?.length > 0) {
    plan.strategy.targetCustomers.forEach((customer) => {
      assumptions.push({
        id: `${baseId}${++counter}`,
        category: 'Market',
        text: `Target customers include: ${customer}`,
        criticality: 'core',
        confidence: 'high'
      });
    });
  }

  if (plan.strategy.problem) {
    assumptions.push({
      id: `${baseId}${++counter}`,
      category: 'Market',
      text: `Core problem: ${plan.strategy.problem}`,
      criticality: 'core',
      confidence: 'high'
    });
  }

  // Product assumptions
  if (plan.product.coreFeatures?.length > 0) {
    assumptions.push({
      id: `${baseId}${++counter}`,
      category: 'Product',
      text: `Core features can be built as specified: ${plan.product.coreFeatures.slice(0, 3).join(', ')}`,
      criticality: 'core',
      confidence: 'medium'
    });
  }

  if (plan.product.userJourney) {
    assumptions.push({
      id: `${baseId}${++counter}`,
      category: 'Product',
      text: `User journey flows as described: ${plan.product.userJourney.slice(0, 100)}...`,
      criticality: 'core',
      confidence: 'medium'
    });
  }

  // Revenue assumptions
  if (plan.financials.pricingModel) {
    assumptions.push({
      id: `${baseId}${++counter}`,
      category: 'Revenue',
      text: `Pricing model will work: ${plan.financials.pricingModel.slice(0, 100)}...`,
      criticality: 'core',
      confidence: 'medium'
    });
  }

  if (plan.financials.revenueStreams?.length > 0) {
    assumptions.push({
      id: `${baseId}${++counter}`,
      category: 'Revenue',
      text: `Revenue streams: ${plan.financials.revenueStreams.join(', ')}`,
      criticality: 'helpful',
      confidence: 'medium'
    });
  }

  // Feasibility assumptions
  if (plan.appScaffold.techStack) {
    assumptions.push({
      id: `${baseId}${++counter}`,
      category: 'Feasibility',
      text: `Chosen tech stack is appropriate and feasible`,
      criticality: 'core',
      confidence: 'high'
    });
  }

  if (plan.viability?.categories?.speedToMVP) {
    assumptions.push({
      id: `${baseId}${++counter}`,
      category: 'Feasibility',
      text: `MVP can be built within the expected timeframe`,
      criticality: 'core',
      confidence: 'medium'
    });
  }

  return assumptions;
};

/**
 * Analyzes assumption drift based on validation logs.
 * Categorizes assumptions into validating, at-risk, and broken.
 *
 * @param plan - The startup plan
 * @param validationLogs - Array of validation entries
 * @returns Dashboard showing assumption status
 */
export const analyzeAssumptionDrift = (
  plan: StartupPlan,
  validationLogs: ValidationLog[]
): ValidationDashboard => {
  const extractedAssumptions = plan.extractedAssumptions || extractAssumptionsFromPlan(plan);

  const assumptionResults = new Map<string, { status: string; count: number }>();

  // Aggregate validation results for each assumption
  validationLogs
    .filter((log) => log.type === 'assumption_result' && log.assumptionId)
    .forEach((log) => {
      const key = log.assumptionId!;
      const current = assumptionResults.get(key) || { status: 'validating', count: 0 };
      current.count += 1;
      if (log.status) {
        current.status = log.status;
      }
      assumptionResults.set(key, current);
    });

  // Categorize assumptions
  const validatingAssumptions: ExtractedAssumption[] = [];
  const atRiskAssumptions: ExtractedAssumption[] = [];
  const brokenAssumptions: ExtractedAssumption[] = [];

  extractedAssumptions.forEach((assumption) => {
    const result = assumptionResults.get(assumption.id);

    if (!result || result.status === 'validating') {
      validatingAssumptions.push(assumption);
    } else if (result.status === 'validated') {
      // Successfully validated assumptions don't appear in the dashboard
      // (they're confirmed, so not a concern)
    } else if (result.status === 'broken') {
      brokenAssumptions.push(assumption);
    } else {
      atRiskAssumptions.push(assumption);
    }
  });

  // Determine next decision point from logs
  const decisionLogs = validationLogs.filter((log) => log.type === 'decision_point');
  const nextDecisionPoint = decisionLogs.length > 0 ? decisionLogs[decisionLogs.length - 1].decision || null : null;

  return {
    validatingAssumptions,
    atRiskAssumptions,
    brokenAssumptions,
    nextDecisionPoint
  };
};

/**
 * Detects if the startup should pivot based on validation data.
 *
 * @param plan - The startup plan
 * @param validationLogs - Array of validation entries
 * @returns Pivot opportunity assessment
 */
export const detectPivotOpportunity = (
  plan: StartupPlan,
  validationLogs: ValidationLog[]
): { shouldPivot: boolean; suggestion: string } => {
  const dashboard = analyzeAssumptionDrift(plan, validationLogs);

  // If more than 30% of core assumptions are broken, flag for potential pivot
  const coreAssumptions = dashboard.validatingAssumptions
    .concat(dashboard.atRiskAssumptions)
    .concat(dashboard.brokenAssumptions)
    .filter((a) => a.criticality === 'core');

  const brokenCoreCount = dashboard.brokenAssumptions.filter((a) => a.criticality === 'core').length;

  if (coreAssumptions.length === 0) {
    return {
      shouldPivot: false,
      suggestion: 'Continue with current plan. Not enough data to assess.'
    };
  }

  const brokenPercentage = (brokenCoreCount / coreAssumptions.length) * 100;

  if (brokenPercentage >= 30) {
    return {
      shouldPivot: true,
      suggestion: `${brokenPercentage.toFixed(0)}% of core assumptions have been invalidated. Consider pivoting to a new market, customer segment, or revenue model.`
    };
  }

  if (dashboard.atRiskAssumptions.length > 0) {
    return {
      shouldPivot: false,
      suggestion: `Continue validating. You have ${dashboard.atRiskAssumptions.length} assumption(s) at risk that need attention.`
    };
  }

  return {
    shouldPivot: false,
    suggestion: 'Keep executing. Your core assumptions are validating well.'
  };
};

/**
 * Uses Gemini to reason about a decision point in the context of validation data.
 *
 * @param originalPlan - The original startup plan
 * @param validationLogs - Array of validation entries
 * @param decision - The decision question or scenario
 * @returns Structured reasoning about the decision
 */
export const reasonAboutDecision = async (
  originalPlan: StartupPlan,
  validationLogs: ValidationLog[],
  decision: string
): Promise<DecisionReasoning> => {
  if (!ai) {
    throw new Error('API key missing. Cannot generate decision reasoning.');
  }

  const dashboard = analyzeAssumptionDrift(originalPlan, validationLogs);

  // Build context from validation data
  const recentLogs = validationLogs.slice(-10);
  const logsText = recentLogs
    .map(
      (log) =>
        `[${new Date(log.timestamp).toLocaleDateString()}] ${log.type}: ${log.founderObservation}`
    )
    .join('\n');

  const assumptionContext = `
Broken assumptions: ${dashboard.brokenAssumptions.map((a) => a.text).join('; ')}
At-risk assumptions: ${dashboard.atRiskAssumptions.map((a) => a.text).join('; ')}
Validating assumptions: ${dashboard.validatingAssumptions.map((a) => a.text).join('; ')}
  `.trim();

  const prompt = `
You are a world-class startup advisor analyzing a startup's validation data and helping with a critical decision.

Original Business Plan Summary:
- Problem: ${originalPlan.strategy.problem}
- Solution: ${originalPlan.strategy.solution}
- Target Customers: ${originalPlan.strategy.targetCustomers.join(', ')}
- Pricing Model: ${originalPlan.financials.pricingModel}

Validation Data Summary:
${assumptionContext}

Recent Validation Logs:
${logsText}

Current Decision to Make:
${decision}

Provide a structured response with:
1. A concise decision question (reframe the decision if needed)
2. Two distinct paths forward (Path A and Path B, each 1-2 sentences)
3. A clear recommendation with reasoning
4. 2-3 cascade effects or downstream consequences of each path

Respond in JSON format with keys: question, paths (with pathA and pathB), recommendation, cascadeEffects (array of strings).
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            question: { type: Type.STRING },
            paths: {
              type: Type.OBJECT,
              properties: {
                pathA: { type: Type.STRING },
                pathB: { type: Type.STRING }
              },
              required: ['pathA', 'pathB']
            },
            recommendation: { type: Type.STRING },
            cascadeEffects: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ['question', 'paths', 'recommendation', 'cascadeEffects']
        },
        thinkingConfig: { thinkingBudget: 2048 }
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error('No response from Gemini');
    }

    const reasoning = JSON.parse(text) as DecisionReasoning;
    return reasoning;
  } catch (error) {
    console.error('Error generating decision reasoning:', error);
    throw error;
  }
};
