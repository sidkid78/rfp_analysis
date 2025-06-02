export interface RFPSection {
  content: string;
}

export interface RFPDocument {
  introduction?: RFPSection;
  sow?: RFPSection;
  proposalSubmission?: RFPSection;
  evaluationCriteria?: RFPSection;
  [key: string]: RFPSection | undefined;
}

export interface EvaluationResult {
  criterion: string;
  score: number;
  maxScore: number;
  comments: string;
}

export interface SectionAnalysisResult {
  sectionName: string;
  content: string;
  evaluationScore: number;
  recommendations: Array<{
    priority: 'high' | 'medium' | 'low';
    title: string;
    description: string;
  }>;
  extractedInformation: Record<string, string>;
  evaluationResults: EvaluationResult[];
}

export interface ExecutiveSummary {
  overallScore: number;
  summary: string;
  keyFindings: string[];
}

export interface Recommendation {
  priority: 'high' | 'medium' | 'low';
  section: string;
  recommendation: string;
}

export interface AnalysisResults {
  executiveSummary: ExecutiveSummary;
  recommendations: Recommendation[];
  [key: string]: SectionAnalysisResult | ExecutiveSummary | Recommendation[] | { status: string; message: string };
} 