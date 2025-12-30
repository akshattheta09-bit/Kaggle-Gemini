import { StartupPlan } from "../types";

/**
 * Generates a Markdown string from the Startup Plan data
 * and triggers a browser download.
 */
export const downloadBlueprint = (plan: StartupPlan) => {
  const markdown = `
# AutoFounder Startup Blueprint

## 1. Overview
**Strategy Summary:**
${plan.strategy.summary}

## 2. Viability Analysis
**Overall Score:** ${plan.viability.overallScore}/100
**Verdict:** ${plan.viability.trafficLight}
**Recommendation:** ${plan.viability.founderRecommendation}

**Detailed Scores:**
- TAM: ${plan.viability.categories.tam}/10
- Feasibility: ${plan.viability.categories.feasibility}/10
- Competition Risk: ${plan.viability.categories.competitionRisk}/10
- Revenue Potential: ${plan.viability.categories.revenuePotential}/10
- Founder Moat: ${plan.viability.categories.founderMoat}/10
- Operational Complexity: ${plan.viability.categories.operationalComplexity}/10
- Speed to MVP: ${plan.viability.categories.speedToMVP}/10
- AI Leverage: ${plan.viability.categories.aiLeverage}/10
- Technical Risk: ${plan.viability.categories.technicalRisk}/10
- Longevity: ${plan.viability.categories.longevity}/10

## 3. Execution Roadmap
**Launch Timeline:**
- **Day 1:** 
${plan.executionRoadmap.day1.map(t => `  - ${t}`).join('\n')}
- **Week 1:** 
${plan.executionRoadmap.week1.map(t => `  - ${t}`).join('\n')}
- **Month 1:** 
${plan.executionRoadmap.month1.map(t => `  - ${t}`).join('\n')}

**AI Growth Loop:**
${plan.executionRoadmap.growthLoop.map(t => `- ${t}`).join('\n')}

**Automation Loop:**
${plan.executionRoadmap.automationLoop.map(t => `- ${t}`).join('\n')}

**Resources:**
- **Agents:** ${plan.executionRoadmap.agentsInvolved.join(', ')}
- **Tools:** ${plan.executionRoadmap.toolsUsed.join(', ')}
- **KPIs:** ${plan.executionRoadmap.kpisTracked.join(', ')}

## 4. Pitch Script
**1-Minute VC Pitch (Formal):**
${plan.pitchScript.vcPitch}

**Founder Voice Pitch (Narrative):**
${plan.pitchScript.founderVoicePitch}

## 5. Strategy
**Problem:**
${plan.strategy.problem}

**Solution:**
${plan.strategy.solution}

**Target Customers:**
${plan.strategy.targetCustomers.map(c => `- ${c}`).join('\n')}

**Unique Selling Proposition:**
${plan.strategy.usp}

## 6. Product
**Core Features:**
${plan.product.coreFeatures.map(f => `- ${f}`).join('\n')}

**User Journey:**
${plan.product.userJourney}

**Differentiation:**
${plan.product.differentiation}

## 7. MVP App Spec
**Must-Have Features (Day 1):**
${plan.mvp.mustHave.map(f => `- ${f}`).join('\n')}

**Nice-To-Have Features (v2):**
${plan.mvp.niceToHave.map(f => `- ${f}`).join('\n')}

## 8. Visual Specs (Mockups)
**Dashboard Wireframe Description:**
${plan.mockups.dashboardDesc}

**Onboarding Flow Description:**
${plan.mockups.onboardingDesc}

**Architecture Diagram Description:**
${plan.mockups.architectureDesc}

## 9. Financials
**Pricing Model:**
${plan.financials.pricingModel}

**Revenue Streams:**
${plan.financials.revenueStreams.map(s => `- ${s}`).join('\n')}

**Unit Economics:**
- Rough CAC: ${plan.financials.roughCAC}
- Rough LTV: ${plan.financials.roughLTV}

## 10. Assets
**Brand Name Ideas:**
${plan.assets.brandNames.map(n => `- ${n}`).join('\n')}

**Tagline Options:**
${plan.assets.taglineOptions.map(t => `- "${t}"`).join('\n')}

**Landing Page Hero:**
${plan.assets.landingHero}

**Ad Copy Variants:**
${plan.assets.adCopyVariants.map((c, i) => `Variant ${String.fromCharCode(65 + i)}:\n${c}`).join('\n\n')}

## 11. App Scaffold
**Tech Stack:**
- Frontend: ${plan.appScaffold.techStack.frontend}
- Backend: ${plan.appScaffold.techStack.backend}
- Database: ${plan.appScaffold.techStack.database}
- Hosting: ${plan.appScaffold.techStack.hosting}
- Integrations: ${plan.appScaffold.techStack.keyIntegrations.join(', ')}

**API Endpoints:**
${plan.appScaffold.apiEndpoints.map(e => `- [${e.method}] ${e.endpoint}: ${e.description}`).join('\n')}

**Project Structure:**
\`\`\`
${plan.appScaffold.fileStructure}
\`\`\`

**User Stories:**
${plan.appScaffold.userStories.map(s => `- ${s}`).join('\n')}
`.trim();

  // Create a blob and trigger download
  const blob = new Blob([markdown], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'autofounder-startup-blueprint.md';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
