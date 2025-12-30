import React from 'react';
import { StartupPlan, ValidationLog, ExtractedAssumption } from '../types';
import SectionCard from './common/SectionCard';
import ValidationTab from './ValidationTab';
import ValidationDashboard from './ValidationDashboard';
import ValidationHistory from './ValidationHistory';
import { 
  Sparkles, Target, CheckCircle2, Zap, Users, Box, 
  TrendingUp, ShieldCheck, DollarSign, Server, Database, 
  FolderTree, Code, Monitor, ImageIcon, Activity, Map, Calendar,
  RefreshCw, Bot, Wrench, BarChart3, Mic
} from 'lucide-react';

/* --- STRATEGY VIEW --- */
export const StrategyView: React.FC<{ data: StartupPlan['strategy'] }> = ({ data }) => (
  <div className="space-y-6">
    <SectionCard title="Executive Summary" icon={<Sparkles className="w-5 h-5 text-purple-500" />}>
      <p className="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line text-[15px]">{data.summary}</p>
    </SectionCard>
    
    <div className="grid md:grid-cols-2 gap-6">
       <SectionCard title="The Problem" icon={<Target className="w-5 h-5 text-red-500" />}>
        <p className="text-slate-700 dark:text-slate-300 text-[15px] leading-relaxed">{data.problem}</p>
      </SectionCard>
       <SectionCard title="The Solution" icon={<CheckCircle2 className="w-5 h-5 text-green-500" />}>
        <p className="text-slate-700 dark:text-slate-300 text-[15px] leading-relaxed">{data.solution}</p>
      </SectionCard>
    </div>

    <SectionCard title="Unique Selling Proposition" icon={<Zap className="w-5 h-5 text-amber-500" />}>
      <div className="p-5 bg-amber-50 dark:bg-amber-950/30 border border-amber-100 dark:border-amber-900/50 rounded-xl text-amber-900 dark:text-amber-200 font-medium text-lg text-center">
        "{data.usp}"
      </div>
    </SectionCard>

    <SectionCard title="Target Customers" icon={<Users className="w-5 h-5 text-blue-500" />}>
      <div className="flex flex-wrap gap-2.5">
        {data.targetCustomers.map((cust, i) => (
          <span key={i} className="px-3.5 py-1.5 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-700 transition-colors">
            {cust}
          </span>
        ))}
      </div>
    </SectionCard>
  </div>
);

/* --- VIABILITY VIEW --- */
const ScoreBar: React.FC<{ label: string; score: number }> = ({ label, score }) => {
  // Determine color based on score
  const getColor = (s: number) => {
    if (s >= 8) return 'bg-emerald-500';
    if (s >= 5) return 'bg-amber-400';
    return 'bg-red-500';
  };

  return (
    <div className="group flex items-center gap-4 text-sm py-1">
      <div className="w-36 font-medium text-slate-600 dark:text-slate-400 truncate group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors" title={label}>{label}</div>
      <div className="flex-1 bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
        <div 
          className={`h-full rounded-full transition-all duration-1000 ${getColor(score)} shadow-[0_0_8px_rgba(0,0,0,0.1)]`} 
          style={{ width: `${score * 10}%` }}
        ></div>
      </div>
      <div className="w-6 text-right font-bold text-slate-900 dark:text-white tabular-nums">{score}</div>
    </div>
  );
};

export const ViabilityView: React.FC<{ data: StartupPlan['viability'] }> = ({ data }) => {
  const trafficLightColor = 
    data.trafficLight === 'Green' ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800' :
    data.trafficLight === 'Yellow' ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800' :
    'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800';

  const trafficLightIcon =
    data.trafficLight === 'Green' ? <CheckCircle2 className="w-5 h-5" /> :
    data.trafficLight === 'Yellow' ? <Activity className="w-5 h-5" /> :
    <ShieldCheck className="w-5 h-5" />;

  return (
    <div className="space-y-6">
      <SectionCard title="Viability Analysis" icon={<Activity className="w-5 h-5 text-blue-600 dark:text-blue-400" />}>
        <div className="flex flex-col md:flex-row gap-10 items-center mb-10 pb-8 border-b border-slate-100 dark:border-slate-800">
          
          {/* Main Score Circle */}
          <div className="flex flex-col items-center justify-center shrink-0">
            <div className="relative w-36 h-36 flex items-center justify-center">
               <svg className="w-full h-full transform -rotate-90 drop-shadow-sm">
                <circle cx="72" cy="72" r="64" className="stroke-slate-100 dark:stroke-slate-800" strokeWidth="6" fill="none" />
                <circle 
                  cx="72" cy="72" r="64" 
                  stroke="currentColor" 
                  strokeWidth="6" 
                  strokeLinecap="round"
                  fill="none" 
                  className={data.overallScore >= 70 ? 'text-emerald-500' : data.overallScore >= 40 ? 'text-amber-400' : 'text-red-500'}
                  strokeDasharray={`${2 * Math.PI * 64}`}
                  strokeDashoffset={`${2 * Math.PI * 64 * (1 - data.overallScore / 100)}`}
                  style={{ transition: 'stroke-dashoffset 1.5s ease-out' }}
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-4xl font-bold text-slate-900 dark:text-white tracking-tighter">{data.overallScore}</span>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mt-1">Score</span>
              </div>
            </div>
          </div>

          {/* Verdict & Recommendation */}
          <div className="flex-1 space-y-5 text-center md:text-left">
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-bold uppercase tracking-wide ${trafficLightColor}`}>
              {trafficLightIcon}
              <span>Verdict: {data.trafficLight} Light</span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium text-lg">
              "{data.founderRecommendation}"
            </p>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="space-y-4">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Detailed Breakdown</h4>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-3">
            <ScoreBar label="TAM / Market Size" score={data.categories.tam} />
            <ScoreBar label="Feasibility" score={data.categories.feasibility} />
            <ScoreBar label="Competition Risk" score={data.categories.competitionRisk} />
            <ScoreBar label="Revenue Potential" score={data.categories.revenuePotential} />
            <ScoreBar label="Founder Moat" score={data.categories.founderMoat} />
            <ScoreBar label="Operational Complexity" score={data.categories.operationalComplexity} />
            <ScoreBar label="Speed to MVP" score={data.categories.speedToMVP} />
            <ScoreBar label="AI Leverage Factor" score={data.categories.aiLeverage} />
            <ScoreBar label="Technical Risk (Low is Good)" score={data.categories.technicalRisk} />
            <ScoreBar label="Business Longevity" score={data.categories.longevity} />
            </div>
        </div>
      </SectionCard>
    </div>
  );
};

/* --- EXECUTION ROADMAP VIEW --- */
export const ExecutionRoadmapView: React.FC<{ data: StartupPlan['executionRoadmap'] }> = ({ data }) => (
  <div className="space-y-6">
    {/* Launch Timeline */}
    <SectionCard title="Launch Timeline" icon={<Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />}>
      <div className="grid md:grid-cols-3 gap-6">
        {/* Day 1 */}
        <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-xl border border-slate-100 dark:border-slate-800 relative group hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
           <div className="absolute top-0 left-0 w-full h-1 bg-blue-500 rounded-t-xl opacity-80"></div>
           <h4 className="font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 flex items-center justify-center text-xs font-bold shadow-sm">1</span>
            Day 1 (Immediate)
           </h4>
           <ul className="space-y-3">
             {data.day1.map((item, i) => (
               <li key={i} className="text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2.5 leading-snug">
                 <CheckCircle2 className="w-4 h-4 text-blue-400 dark:text-blue-500 shrink-0 mt-0.5" />
                 {item}
               </li>
             ))}
           </ul>
        </div>
        {/* Week 1 */}
        <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-xl border border-slate-100 dark:border-slate-800 relative group hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
           <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500 rounded-t-xl opacity-80"></div>
           <h4 className="font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300 flex items-center justify-center text-xs font-bold shadow-sm">7</span>
            Week 1 (Sprint)
           </h4>
           <ul className="space-y-3">
             {data.week1.map((item, i) => (
               <li key={i} className="text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2.5 leading-snug">
                 <div className="w-4 h-4 rounded-full border border-indigo-400 shrink-0 mt-0.5" />
                 {item}
               </li>
             ))}
           </ul>
        </div>
        {/* Month 1 */}
        <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-xl border border-slate-100 dark:border-slate-800 relative group hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
           <div className="absolute top-0 left-0 w-full h-1 bg-purple-500 rounded-t-xl opacity-80"></div>
           <h4 className="font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-lg bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 flex items-center justify-center text-xs font-bold shadow-sm">30</span>
            Month 1 (Goals)
           </h4>
           <ul className="space-y-3">
             {data.month1.map((item, i) => (
               <li key={i} className="text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2.5 leading-snug">
                 <div className="w-4 h-4 rounded-full border border-purple-400 shrink-0 mt-0.5" />
                 {item}
               </li>
             ))}
           </ul>
        </div>
      </div>
    </SectionCard>

    {/* Loops */}
    <div className="grid md:grid-cols-2 gap-6">
       <SectionCard title="AI Growth Loop" icon={<TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />}>
          <div className="space-y-4">
            <p className="text-[11px] text-slate-400 dark:text-slate-500 uppercase tracking-widest font-bold">Recurring Growth Tasks</p>
            <ul className="space-y-3">
              {data.growthLoop.map((item, i) => (
                <li key={i} className="flex gap-3 text-slate-700 dark:text-slate-300 text-sm items-start">
                   <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0 shadow-sm"></div>
                   <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
       </SectionCard>
       <SectionCard title="Automation Loop" icon={<RefreshCw className="w-5 h-5 text-amber-600 dark:text-amber-400" />}>
          <div className="space-y-4">
            <p className="text-[11px] text-slate-400 dark:text-slate-500 uppercase tracking-widest font-bold">Operational Automation</p>
            <ul className="space-y-3">
              {data.automationLoop.map((item, i) => (
                <li key={i} className="flex gap-3 text-slate-700 dark:text-slate-300 text-sm items-start">
                   <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 shadow-sm"></div>
                   <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
       </SectionCard>
    </div>

    {/* Resources */}
    <SectionCard title="Agentic Resources & Stack" icon={<Bot className="w-5 h-5 text-slate-700 dark:text-slate-300" />}>
      <div className="grid md:grid-cols-3 gap-8">
         {/* Agents */}
         <div>
            <h4 className="flex items-center gap-2 font-bold text-slate-800 dark:text-white mb-3 text-sm">
              <Bot className="w-4 h-4 text-blue-500" /> AI Agents Involved
            </h4>
            <div className="flex flex-wrap gap-2">
              {data.agentsInvolved.map((agent, i) => (
                <span key={i} className="px-2.5 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800 rounded-md text-xs font-semibold">
                  {agent}
                </span>
              ))}
            </div>
         </div>
         {/* Tools */}
         <div>
            <h4 className="flex items-center gap-2 font-bold text-slate-800 dark:text-white mb-3 text-sm">
              <Wrench className="w-4 h-4 text-slate-500" /> Tools & APIs
            </h4>
            <div className="flex flex-wrap gap-2">
              {data.toolsUsed.map((tool, i) => (
                <span key={i} className="px-2.5 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-md text-xs font-semibold">
                  {tool}
                </span>
              ))}
            </div>
         </div>
         {/* KPIs */}
         <div>
            <h4 className="flex items-center gap-2 font-bold text-slate-800 dark:text-white mb-3 text-sm">
              <BarChart3 className="w-4 h-4 text-green-500" /> Key Metrics (KPIs)
            </h4>
            <ul className="space-y-1.5">
              {data.kpisTracked.map((kpi, i) => (
                <li key={i} className="text-xs text-slate-600 dark:text-slate-300 font-medium flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-green-500"></div>
                  {kpi}
                </li>
              ))}
            </ul>
         </div>
      </div>
    </SectionCard>
  </div>
);

/* --- PITCH SCRIPT VIEW --- */
export const PitchScriptView: React.FC<{ data: StartupPlan['pitchScript'] }> = ({ data }) => (
  <div className="space-y-6">
    <SectionCard title="1-Minute VC Pitch (Formal)" icon={<Mic className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />}>
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-200 font-medium whitespace-pre-line border-l-4 border-indigo-200 dark:border-indigo-800 pl-6 py-1">
          {data.vcPitch}
        </p>
      </div>
      <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-x-4 gap-y-2 text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest">
        <span>Hook</span> <span className="text-slate-200 dark:text-slate-700">•</span>
        <span>Problem</span> <span className="text-slate-200 dark:text-slate-700">•</span>
        <span>Solution</span> <span className="text-slate-200 dark:text-slate-700">•</span>
        <span>Why Now</span> <span className="text-slate-200 dark:text-slate-700">•</span>
        <span>Differentiation</span> <span className="text-slate-200 dark:text-slate-700">•</span>
        <span>Traction</span> <span className="text-slate-200 dark:text-slate-700">•</span>
        <span>Ask</span>
      </div>
    </SectionCard>

    <SectionCard title="Founder Story Pitch (Narrative)" icon={<Sparkles className="w-5 h-5 text-amber-500" />}>
       <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 italic whitespace-pre-line bg-amber-50/50 dark:bg-amber-900/10 p-6 rounded-xl border border-amber-100 dark:border-amber-900/20">
          "{data.founderVoicePitch}"
        </p>
      </div>
    </SectionCard>
  </div>
);

/* --- PRODUCT VIEW --- */
export const ProductView: React.FC<{ data: StartupPlan['product'] }> = ({ data }) => (
  <div className="space-y-6">
    <SectionCard title="Core Features" icon={<Box className="w-5 h-5 text-indigo-500" />}>
      <ul className="space-y-4">
        {data.coreFeatures.map((feat, i) => (
          <li key={i} className="flex items-start gap-3.5">
            <div className="mt-0.5 w-6 h-6 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 flex items-center justify-center shrink-0">
              <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">{i + 1}</span>
            </div>
            <span className="text-slate-700 dark:text-slate-300 text-[15px] leading-relaxed">{feat}</span>
          </li>
        ))}
      </ul>
    </SectionCard>

    <SectionCard title="User Journey" icon={<TrendingUp className="w-5 h-5 text-slate-600 dark:text-slate-400" />}>
       <p className="text-slate-700 dark:text-slate-300 whitespace-pre-line leading-loose text-[15px]">
         {data.userJourney}
       </p>
    </SectionCard>

    <SectionCard title="Differentiation" icon={<ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />}>
      <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed text-[15px]">
        {data.differentiation}
      </p>
    </SectionCard>
  </div>
);

/* --- MVP VIEW --- */
export const MVPView: React.FC<{ data: StartupPlan['mvp'] }> = ({ data }) => (
  <div className="space-y-6">
    <div className="grid md:grid-cols-2 gap-6">
      <SectionCard title="Must-Have (Day 1)" className="border-t-4 border-t-emerald-500">
        <ul className="space-y-3">
          {data.mustHave.map((feat, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
              <span className="text-slate-700 dark:text-slate-300 text-[15px] font-medium leading-snug">{feat}</span>
            </li>
          ))}
        </ul>
      </SectionCard>
      
      <SectionCard title="Nice-to-Have (v2)" className="border-t-4 border-t-slate-300 dark:border-t-slate-600">
        <ul className="space-y-3">
          {data.niceToHave.map((feat, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-500 dark:text-slate-400">
              <div className="w-4 h-4 rounded-full border-2 border-slate-300 dark:border-slate-600 shrink-0 mt-0.5" />
              <span className="text-[15px] leading-snug">{feat}</span>
            </li>
          ))}
        </ul>
      </SectionCard>
    </div>
  </div>
);

/* --- APP SCAFFOLD VIEW --- */
const TechItem = ({ label, value }: { label: string; value: string }) => (
  <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
    <div className="text-[10px] font-bold text-slate-400 uppercase mb-1.5 tracking-wider">{label}</div>
    <div className="font-semibold text-slate-800 dark:text-slate-200 text-sm">{value}</div>
  </div>
);

export const AppScaffoldView: React.FC<{ data: StartupPlan['appScaffold'] }> = ({ data }) => (
  <div className="space-y-6">
    <SectionCard title="Recommended Tech Stack" icon={<Server className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TechItem label="Frontend" value={data.techStack.frontend} />
        <TechItem label="Backend" value={data.techStack.backend} />
        <TechItem label="Database" value={data.techStack.database} />
        <TechItem label="Hosting" value={data.techStack.hosting} />
      </div>
      <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800">
        <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Key Integrations</span>
        <div className="flex flex-wrap gap-2 mt-3">
            {data.techStack.keyIntegrations.map((item, i) => (
              <span key={i} className="px-3 py-1.5 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 text-sm rounded-lg border border-indigo-100 dark:border-indigo-800 font-medium">{item}</span>
            ))}
        </div>
      </div>
    </SectionCard>

    <SectionCard title="Core API Design" icon={<Database className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />}>
        <div className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-semibold border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th className="px-5 py-3 w-24">Method</th>
                <th className="px-5 py-3 w-1/3">Endpoint</th>
                <th className="px-5 py-3">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900">
              {data.apiEndpoints.map((ep, i) => (
                <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-5 py-3 font-mono font-bold text-xs">
                    <span className={`px-2 py-1 rounded
                      ${ep.method === 'GET' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' : ''}
                      ${ep.method === 'POST' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300' : ''}
                      ${ep.method === 'PUT' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300' : ''}
                      ${ep.method === 'DELETE' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' : ''}
                    `}>{ep.method}</span>
                  </td>
                  <td className="px-5 py-3 font-mono text-slate-600 dark:text-slate-300 text-xs">{ep.endpoint}</td>
                  <td className="px-5 py-3 text-slate-600 dark:text-slate-400">{ep.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </SectionCard>

    <SectionCard title="Project Structure" icon={<FolderTree className="w-5 h-5 text-amber-600 dark:text-amber-400" />}>
      <pre className="bg-slate-900 text-slate-300 p-5 rounded-xl font-mono text-xs overflow-x-auto leading-relaxed border border-slate-800 shadow-inner">
        {data.fileStructure}
      </pre>
    </SectionCard>

    <SectionCard title="User Stories" icon={<Users className="w-5 h-5 text-pink-500" />}>
        <ul className="space-y-4">
          {data.userStories.map((story, i) => (
            <li key={i} className="flex gap-4 text-slate-700 dark:text-slate-300">
              <div className="mt-2 w-1.5 h-1.5 rounded-full bg-pink-400 shrink-0"></div>
              <span className="leading-relaxed">{story}</span>
            </li>
          ))}
        </ul>
    </SectionCard>
  </div>
);

/* --- MOCKUPS VIEW --- */
const MockupCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
    <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
      <h3 className="font-semibold text-slate-800 dark:text-slate-100">{title}</h3>
    </div>
    <div className="p-6 space-y-5">
      {/* Static Placeholder - Text Only */}
      <div className="aspect-video bg-slate-50 dark:bg-slate-800 rounded-lg overflow-hidden flex items-center justify-center border border-slate-100 dark:border-slate-700">
          <div className="text-center p-6">
            <ImageIcon className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-2 opacity-50" />
            <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Visual Spec Placeholder</p>
          </div>
      </div>
      <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
        <span className="font-bold text-slate-400 dark:text-slate-500 uppercase text-[10px] tracking-widest block mb-2">Detailed Spec</span>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </div>
);

export const MockupsView: React.FC<{ data: StartupPlan['mockups'] }> = ({ data }) => (
  <div className="space-y-6">
    <SectionCard title="MVP Visual Blueprint" icon={<Monitor className="w-5 h-5 text-indigo-500" />}>
      <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-2xl leading-relaxed">
        Below are the AI-generated specifications for your key UI screens. These descriptions are designed to be handed off directly to a UI designer or used as prompts for image generation tools.
      </p>
      <div className="grid lg:grid-cols-2 gap-8">
        <MockupCard 
          title="Main Dashboard Wireframe" 
          description={data.dashboardDesc} 
        />
        <MockupCard 
          title="User Onboarding Flow" 
          description={data.onboardingDesc} 
        />
        <div className="lg:col-span-2">
          <MockupCard 
            title="High-Level Architecture" 
            description={data.architectureDesc} 
          />
        </div>
      </div>
    </SectionCard>
  </div>
);

/* --- FINANCIALS VIEW --- */
export const FinancialsView: React.FC<{ data: StartupPlan['financials'] }> = ({ data }) => (
  <div className="space-y-6">
    <SectionCard title="Pricing Model" icon={<DollarSign className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />}>
      <p className="text-slate-800 dark:text-slate-200 whitespace-pre-line font-medium text-lg leading-relaxed">{data.pricingModel}</p>
    </SectionCard>

    <SectionCard title="Revenue Streams">
      <ul className="grid sm:grid-cols-2 gap-4">
        {data.revenueStreams.map((stream, i) => (
          <li key={i} className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700">
             <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center shrink-0">
               <span className="font-bold text-emerald-600 dark:text-emerald-400 text-xs">$</span>
             </div>
             <span className="text-slate-700 dark:text-slate-300 font-medium text-sm">{stream}</span>
          </li>
        ))}
      </ul>
    </SectionCard>

    <SectionCard title="Unit Economics (Estimates)" icon={<TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />}>
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center text-center">
          <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest mb-2">Rough CAC</p>
          <p className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">{data.roughCAC}</p>
          <p className="text-xs text-slate-400 mt-2">Cost to acquire customer</p>
        </div>
        <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center text-center">
          <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest mb-2">Rough LTV</p>
          <p className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">{data.roughLTV}</p>
          <p className="text-xs text-slate-400 mt-2">Lifetime value</p>
        </div>
      </div>
    </SectionCard>
  </div>
);

/* --- ASSETS VIEW --- */
export const AssetsView: React.FC<{ data: StartupPlan['assets'] }> = ({ data }) => (
  <div className="space-y-8">
    <SectionCard title="Brand Name Ideas">
      <div className="flex flex-wrap gap-4">
        {data.brandNames.map((name, i) => (
          <span key={i} className="px-6 py-3 bg-white dark:bg-slate-800 text-slate-800 dark:text-white rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 font-bold text-lg hover:-translate-y-1 transition-transform cursor-default">
            {name}
          </span>
        ))}
      </div>
    </SectionCard>

    <SectionCard title="Tagline Options" icon={<Sparkles className="w-5 h-5 text-amber-400" />}>
        <ul className="space-y-4">
        {data.taglineOptions.map((tagline, i) => (
          <li key={i} className="flex items-center gap-4 group">
            <div className="w-2 h-2 rounded-full bg-amber-400 shrink-0 group-hover:scale-150 transition-transform"></div>
            <span className="text-xl font-serif italic text-slate-700 dark:text-slate-300">"{tagline}"</span>
          </li>
        ))}
        </ul>
    </SectionCard>

    <SectionCard title="Landing Page Hero Copy" noPadding>
      <div className="bg-slate-900 dark:bg-black p-10 md:p-14 text-center relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
           <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-[60px]"></div>
           <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500 rounded-full blur-[80px]"></div>
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-white font-bold text-3xl md:text-5xl mb-6 leading-tight tracking-tight">
            {data.landingHero.split('\n')[0] || data.landingHero}
          </h2>
          <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed mb-10">
            {data.landingHero.split('\n').slice(1).join('\n')}
          </p>
          <button className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-full font-semibold transition-all shadow-lg shadow-brand-900/50 hover:shadow-brand-600/50 hover:-translate-y-1">
            Get Early Access
          </button>
        </div>
      </div>
    </SectionCard>

    <SectionCard title="Ad Copy Variants">
      <div className="grid md:grid-cols-3 gap-6">
        {data.adCopyVariants.map((copy, i) => (
          <div key={i} className="flex flex-col h-full p-6 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-xl transition-all hover:border-brand-200 dark:hover:border-brand-800">
            <div className="text-[10px] font-bold text-slate-400 uppercase mb-3 tracking-widest">Variant {String.fromCharCode(65 + i)}</div>
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed flex-1 italic">"{copy}"</p>
          </div>
        ))}
      </div>
    </SectionCard>
  </div>
);

/* --- VALIDATION VIEW --- */
interface ValidationTabViewProps {
  data: StartupPlan;
  validationLogs: ValidationLog[];
  extractedAssumptions: ExtractedAssumption[];
  onAddValidationLog: (log: Omit<ValidationLog, 'id' | 'timestamp'>) => void;
}

export const ValidationTabView: React.FC<ValidationTabViewProps> = ({
  data,
  validationLogs,
  extractedAssumptions,
  onAddValidationLog
}) => (
  <div className="space-y-6">
    <ValidationDashboard 
      plan={data}
      validationLogs={validationLogs}
      extractedAssumptions={extractedAssumptions}
    />
    
    <ValidationTab 
      validationLogs={validationLogs}
      extractedAssumptions={extractedAssumptions}
      onAddLog={onAddValidationLog}
    />
    
    <ValidationHistory 
      validationLogs={validationLogs}
    />
  </div>
);