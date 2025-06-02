import { RFPDocument, AnalysisResults, Recommendation, ExecutiveSummary, SectionAnalysisResult } from '@/app/types';
import { IntroductionAnalyzer } from './analyzers/introductionAnalyzer';
import { RiskAssessmentAnalyzer } from './analyzers/riskAssessmentAnalyzer';
import { ManagementApproachAnalyzer } from './analyzers/managementApproachAnalyzer';
import { ContractDataAnalyzer } from './analyzers/contractDataAnalyzer';
import { SupplyChainRiskAnalyzer } from './analyzers/supplyChainRiskAnalyzer';
import { PerformanceAnalyzer } from './analyzers/periodOfPerformanceAnalyzer';
import { KeyPersonnelAnalyzer } from './analyzers/keyPersonnelAnalyzer';
import { CybersecurityAnalyzer } from './analyzers/cybersecurityAnalyzer';
import { SubcontractingPlanAnalyzer } from './analyzers/subcontractingPlanAnalyzer';
import { EnvironmentalAnalyzer } from './analyzers/environmentalAnalyzer';
import { ContractTermsAnalyzer } from './analyzers/contractTermsAnalyzer';
import { EvaluationCriteriaAnalyzer } from './analyzers/evaluationCriteriaAnalyzer';
import { ProposalSubmissionAnalyzer } from './analyzers/proposalSubmissionAnalyzer';
import { SOWAnalyzer } from './analyzers/sowAnalyzer';
import { PastPerformanceAnalyzer } from './analyzers/pastPerformanceAnalyzer';
import { CertificationsAnalyzer } from './analyzers/certificationsAnalyzer';
import { TechnicalApproachAnalyzer } from './analyzers/technicalApproachAnalyzer';
import { PriceCostProposalAnalyzer } from './analyzers/priceCostProposalAnalyzer';

export class RFPAnalyzer {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private sections: Record<string, any>;

  constructor() {
    this.sections = {
      introduction: new IntroductionAnalyzer(),
      sow: new SOWAnalyzer(),
      proposalSubmission: new ProposalSubmissionAnalyzer(),
      evaluationCriteria: new EvaluationCriteriaAnalyzer(),
      contractTerms: new ContractTermsAnalyzer(),
      priceCostProposal: new PriceCostProposalAnalyzer(),
      periodOfPerformance: new PerformanceAnalyzer(),
      keyPersonnel: new KeyPersonnelAnalyzer(),
      pastPerformance: new PastPerformanceAnalyzer(),
      subcontractingPlan: new SubcontractingPlanAnalyzer(),
      environmentalConsiderations: new EnvironmentalAnalyzer(),
      cybersecurityPlan: new CybersecurityAnalyzer(),
      supplyChainRisk: new SupplyChainRiskAnalyzer(),
      contractDataRequirements: new ContractDataAnalyzer(),
      certificationsRepresentations: new CertificationsAnalyzer(),
      technicalApproach: new TechnicalApproachAnalyzer(),
      managementApproach: new ManagementApproachAnalyzer(),
      riskAssessment: new RiskAssessmentAnalyzer()
    };
  }

  analyzeRFP(rfpDocument: RFPDocument): AnalysisResults {
    const sectionResults: Record<string, SectionAnalysisResult | { status: string; message: string }> = {};
    console.log(rfpDocument);
    for (const [sectionName, analyzer] of Object.entries(this.sections)) {
      console.log(sectionName);
      if (rfpDocument[sectionName as keyof RFPDocument]?.content) {
        sectionResults[sectionName] = analyzer.analyze(rfpDocument[sectionName as keyof RFPDocument]?.content);
      } else {
        sectionResults[sectionName] = {
          status: 'Not Found',
          message: `${sectionName} section not found in RFP document`
        };
      }
    }
    console.log(sectionResults);
    const executiveSummary = this.generateExecutiveSummary(sectionResults);
    const recommendations = this.generateRecommendations(sectionResults);
    console.log(recommendations);
    return {
      executiveSummary,
      recommendations,
      ...sectionResults,
    };
  }
  
  private generateExecutiveSummary(results: Record<string, SectionAnalysisResult | { status: string; message: string }>): ExecutiveSummary {
    const sectionScores: Record<string, number> = {};
    let overallScore = 0;
    let sectionsCount = 0;
    const foundSections: string[] = [];
    const missingSections: string[] = [];
    let weakSectionCount = 0;
    let strongSectionCount = 0;
    
    for (const [sectionName, analysis] of Object.entries(results)) {
      if ('status' in analysis && analysis.status === 'Not Found') {
        missingSections.push(sectionName);
      } else if ('evaluationScore' in analysis) {
        const sectionAnalysis = analysis as SectionAnalysisResult;
        foundSections.push(sectionName);
        sectionScores[sectionName] = sectionAnalysis.evaluationScore;
        overallScore += sectionAnalysis.evaluationScore;
        sectionsCount++;
        if (sectionAnalysis.evaluationScore < 3) weakSectionCount++;
        if (sectionAnalysis.evaluationScore >= 4) strongSectionCount++;
      }
    }

    const finalScore = sectionsCount > 0 ? parseFloat((overallScore / sectionsCount).toFixed(1)) : 0;

    let summary = `The RFP analysis resulted in an overall score of ${finalScore} out of 5. `;
    const keyFindings: string[] = [];

    if (strongSectionCount > sectionsCount / 2) {
      summary += 'The document demonstrates strong overall quality with several well-defined sections. ';
      keyFindings.push(`High overall quality with ${strongSectionCount} strong section(s).`);
    } else if (weakSectionCount > sectionsCount / 2) {
      summary += 'Significant weaknesses were identified, requiring attention in key areas. ';
      keyFindings.push(`Significant weaknesses detected in ${weakSectionCount} section(s).`);
    } else {
      summary += 'The document shows moderate quality with a mix of strengths and areas for improvement. ';
      keyFindings.push('Moderate overall quality with potential for improvement.');
    }

    const topSections = this.getTopSections(sectionScores, 2).map((s: { section: string }) => s.section);
    if (topSections.length > 0) {
      keyFindings.push(`Strongest sections: ${topSections.join(', ')}.`);
    }

    const bottomSections = this.getBottomSections(sectionScores, 2).map((s: { section: string }) => s.section);
    if (bottomSections.length > 0) {
      keyFindings.push(`Weakest sections needing attention: ${bottomSections.join(', ')}.`);
    }

    if (missingSections.length > 0) {
      summary += `${missingSections.length} section(s) were missing or could not be identified.`;
      keyFindings.push(`Missing sections: ${missingSections.join(', ')}.`);
    }
    
    return {
      overallScore: finalScore,
      summary: summary.trim(),
      keyFindings,
    };
  }
  
  private getTopSections(sectionScores: Record<string, number>, count: number): { section: string; score: number }[] {
    return Object.entries(sectionScores)
      .sort((a: [string, number], b: [string, number]) => b[1] - a[1])
      .slice(0, count)
      .map(([section, score]: [string, number]) => ({ section, score }));
  }
  
  private getBottomSections(sectionScores: Record<string, number>, count: number): { section: string; score: number }[] {
    return Object.entries(sectionScores)
      .sort((a: [string, number], b: [string, number]) => a[1] - b[1])
      .slice(0, count)
      .map(([section, score]: [string, number]) => ({ section, score }));
  }
  
  private generateRecommendations(results: Record<string, SectionAnalysisResult | { status: string; message: string }>): Recommendation[] {
    const allRecommendations: Recommendation[] = [];
    
    for (const [sectionName, analysis] of Object.entries(results)) {
      if ('recommendations' in analysis && Array.isArray(analysis.recommendations)) {
        const sectionAnalysis = analysis as SectionAnalysisResult;
        sectionAnalysis.recommendations.forEach((rec: { priority: 'medium' | 'high' | 'low'; description?: string; recommendation?: string }) => { 
          allRecommendations.push({
            priority: rec.priority,
            section: sectionName,
            recommendation: rec.description || rec.recommendation || rec.priority || 'No recommendation provided'
          });
        });
      }
    }
    
    const processImprovements: Recommendation[] = [
      {
        priority: 'medium',
        section: 'Overall Process',
        recommendation: 'Implement a standardized RFP template that includes all required sections with clear guidelines for each.'
      },
      {
        priority: 'medium',
        section: 'Overall Process',
        recommendation: 'Ensure consistency of requirements, terminology, and evaluation metrics across all RFP sections.'
      },
      {
        priority: 'medium',
        section: 'Overall Process',
        recommendation: 'Use automated tools to check for completeness, clarity, and compliance with organizational standards.'
      }
    ];
    
    allRecommendations.push(...processImprovements);
    
    return allRecommendations;
  }
}
