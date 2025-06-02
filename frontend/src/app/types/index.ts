// Remove the faulty import if it exists:
// import { SectionAnalysisResult as ImportedSectionAnalysisResult, ... } from './interfaces';

// Re-exporting the interfaces for easier access
export type { SectionAnalysisResult as ImportedSectionAnalysisResult };
export type { ExecutiveSummary as ImportedExecutiveSummary };
export type { Recommendation as ImportedRecommendation };

// Define basic types if not already in interfaces.ts
export interface RFPSection {
  content: string;
}

export interface RFPDocument {
  introduction?: RFPSection;
  sow?: RFPSection;
  proposalSubmission?: RFPSection;
  evaluationCriteria?: RFPSection;
  contractTerms?: RFPSection;
  priceCostProposal?: RFPSection;
  periodOfPerformance?: RFPSection;
  keyPersonnel?: RFPSection;
  pastPerformance?: RFPSection;
  subcontractingPlan?: RFPSection;
  environmentalConsiderations?: RFPSection;
  cybersecurityPlan?: RFPSection;
  supplyChainRisk?: RFPSection;
  contractDataRequirements?: RFPSection;
  certificationsRepresentations?: RFPSection;
  technicalApproach?: RFPSection;
  managementApproach?: RFPSection;
  riskAssessment?: RFPSection;
  // Allow any string key for flexibility, mapping to RFPSection or undefined
  [key: string]: RFPSection | undefined; 
}

// Main AnalysisResults type combining specific fields and section results
export type AnalysisResults = {
  executiveSummary: ExecutiveSummary;
  recommendations: Recommendation[];
} & {
  // Index signature for individual section analysis results or not found status
  [sectionName: string]: SectionAnalysisResult | { status: string; message: string };
};

export interface EvaluationResult {
  criterion: string;
  score: number;
  maxScore: number;
  comments: string;
}

// Updated Recommendation interface
export interface Recommendation {
  priority: 'high' | 'medium' | 'low';
  section: string;
  recommendation: string;
}

export interface SectionAnalysisResult {
  sectionName: string;
  extractedInformation: Record<string, string>;
  evaluationResults: EvaluationResult[];
  evaluationScore: number;
  // Assuming recommendations from analyzers are simple strings for now
  // If they need to be full Recommendation objects, the analyzers need updating
  recommendations: string[]; 
}

// Corrected ExecutiveSummary interface (should match usage)
export interface ExecutiveSummary {
  overallScore: number;
  summary: string;
  keyFindings: string[];
}