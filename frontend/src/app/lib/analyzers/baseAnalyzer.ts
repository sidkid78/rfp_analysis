import { EvaluationResult, Recommendation } from '@/app/types';

export abstract class SectionAnalyzer {
  protected sectionName: string;
  protected requiredElements: string[];
  protected evaluationCriteria: Array<{
    name: string;
    description: string;
  }>;

  constructor() {
    this.sectionName = 'Generic Section';
    this.requiredElements = [];
    this.evaluationCriteria = [];
  }

  analyze(sectionText: string) {
    const extractedInfo = this.extractInformation(sectionText);
    const evaluationResults = this.evaluateSection(extractedInfo, sectionText);
    const recommendations = this.generateRecommendations(extractedInfo, evaluationResults);
    
    return {
      sectionName: this.sectionName,
      extractedInformation: extractedInfo,
      evaluationResults,
      evaluationScore: this.calculateScore(evaluationResults),
      recommendations
    };
  }

  protected abstract extractInformation(sectionText: string): Record<string, string>;

  protected evaluateSection(
    extractedInfo: Record<string, string>, 
    sectionText: string
  ): EvaluationResult[] {
    return this.evaluationCriteria.map(criterion => {
      return {
        criterion: criterion.name,
        score: this.evaluateCriterion(criterion, extractedInfo, sectionText),
        maxScore: 5,
        comments: this.getCommentsForCriterion(criterion, extractedInfo, sectionText)
      };
    });
  }

  protected abstract evaluateCriterion(
    criterion: { name: string; description: string }, 
    extractedInfo: Record<string, string>, 
    sectionText: string
  ): number;

  protected abstract getCommentsForCriterion(
    criterion: { name: string; description: string }, 
    extractedInfo: Record<string, string>, 
    sectionText: string
  ): string;

  protected calculateScore(evaluationResults: EvaluationResult[]): number {
    if (evaluationResults.length === 0) return 0;
    
    const totalScore = evaluationResults.reduce((sum, result) => sum + result.score, 0);
    return parseFloat((totalScore / evaluationResults.length).toFixed(2));
  }

  protected generateRecommendations(
    extractedInfo: Record<string, string>, 
    evaluationResults: EvaluationResult[]
  ): Recommendation[] {
    const recommendations: Recommendation[] = [];
    
    // Find low-scoring criteria
    const lowScoreCriteria = evaluationResults.filter(result => result.score <= 3);
    
    for (const criterion of lowScoreCriteria) {
      recommendations.push({
        priority: criterion.score <= 2 ? 'high' : 'medium',
        section: this.sectionName,
        recommendation: `Address issues with ${criterion.criterion.toLowerCase()}: ${criterion.comments}`,
      });
    }
    
    // Add general recommendations
    if (recommendations.length === 0) {
      recommendations.push({
        priority: 'low',
        section: this.sectionName,
        recommendation: `Continue to maintain the high quality of the ${this.sectionName} section.`,
      });
    }
    
    return recommendations;
  }

  protected containsKeywords(text: string | undefined, keywords: string[]): boolean {
    if (!text) return false;
    const lowerText = text.toLowerCase();
    return keywords.some(keyword => lowerText.includes(keyword.toLowerCase()));
  }

  protected countKeywordOccurrences(text: string | undefined, keywords: string[]): number {
    if (!text) return 0;
    const lowerText = text.toLowerCase();
    return keywords.reduce((count, keyword) => {
      const regex = new RegExp(keyword.toLowerCase(), 'g');
      const matches = lowerText.match(regex);
      return count + (matches ? matches.length : 0);
    }, 0);
  }
}