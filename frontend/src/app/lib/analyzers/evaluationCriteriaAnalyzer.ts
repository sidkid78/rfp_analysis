import { SectionAnalyzer } from './baseAnalyzer';

export class EvaluationCriteriaAnalyzer extends SectionAnalyzer {
  constructor() {
    super();
    this.sectionName = 'Evaluation Criteria';
    this.requiredElements = ['factors', 'weights', 'assessment_method'];
    this.evaluationCriteria = [
      {
        name: 'Factor Definition',
        description: 'Clarity and comprehensiveness of evaluation factors'
      },
      {
        name: 'Weighting System',
        description: 'Clear definition of relative importance of factors'
      },
      {
        name: 'Assessment Methodology',
        description: 'Clarity of how proposals will be evaluated'
      },
      {
        name: 'Objectivity',
        description: 'Objective and measurable evaluation criteria'
      }
    ];
  }
  
  protected extractInformation(sectionText: string): Record<string, string> {
    return {
      evaluationFactors: this.extractFactors(sectionText),
      weightSystem: this.extractWeights(sectionText),
      assessmentMethod: this.extractAssessmentMethod(sectionText),
      objectivityMeasures: this.extractObjectivityMeasures(sectionText)
    };
  }
  
  private extractFactors(text: string): string {
    const factorKeywords = [
      'factor', 'criteria', 'evaluate', 'consideration', 'aspect', 'element'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const factorSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, factorKeywords)
    );
    
    return factorSentences.join('. ');
  }
  
  private extractWeights(text: string): string {
    const weightKeywords = [
      'weight', 'importance', 'priority', 'percentage', 'point', 'score'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const weightSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, weightKeywords)
    );
    
    return weightSentences.join('. ');
  }
  
  private extractAssessmentMethod(text: string): string {
    const methodKeywords = [
      'method', 'approach', 'process', 'procedure', 'evaluate', 'assess'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const methodSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, methodKeywords)
    );
    
    return methodSentences.join('. ');
  }
  
  private extractObjectivityMeasures(text: string): string {
    const objectivityKeywords = [
      'objective', 'measurable', 'quantitative', 'specific', 'fair', 'neutral'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const objectivitySentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, objectivityKeywords)
    );
    
    return objectivitySentences.join('. ');
  }
  
  protected evaluateCriterion(
    criterion: { name: string; description: string },
    extractedInfo: Record<string, string>
  ): number {
    switch (criterion.name) {
      case 'Factor Definition':
        if (!extractedInfo.evaluationFactors) return 1;
        return extractedInfo.evaluationFactors.length > 150 ? 5 : 
               (extractedInfo.evaluationFactors.length > 80 ? 4 : 3);
               
      case 'Weighting System':
        if (!extractedInfo.weightSystem) return 1;
        const hasNumericWeights = /\d+\s*%|\d+\s*point/.test(extractedInfo.weightSystem);
        return hasNumericWeights ? 5 : 
               (extractedInfo.weightSystem.length > 50 ? 3 : 2);
               
      case 'Assessment Methodology':
        if (!extractedInfo.assessmentMethod) return 1;
        return extractedInfo.assessmentMethod.length > 100 ? 5 : 
               (extractedInfo.assessmentMethod.length > 50 ? 4 : 3);
               
      case 'Objectivity':
        if (!extractedInfo.objectivityMeasures) return 1;
        const hasObjectiveLanguage = this.countKeywordOccurrences(
          extractedInfo.objectivityMeasures, 
          ['measurable', 'quantitative', 'specific', 'metric']
        );
        return hasObjectiveLanguage > 3 ? 5 : 
               (hasObjectiveLanguage > 1 ? 4 : 3);
               
      default:
        return 3;
    }
  }
  
  protected getCommentsForCriterion(
    criterion: { name: string; description: string },
    extractedInfo: Record<string, string>,
  ): string {
    switch (criterion.name) {
      case 'Factor Definition':
        if (!extractedInfo.evaluationFactors)
          return 'No clear evaluation factors identified.';
        return extractedInfo.evaluationFactors.length > 150 ?
          'Evaluation factors are comprehensively defined.' :
          'Basic evaluation factors mentioned but could be more detailed.';
          
      case 'Weighting System':
        if (!extractedInfo.weightSystem)
          return 'No weighting system identified.';
        const hasNumericWeights = /\d+\s*%|\d+\s*point/.test(extractedInfo.weightSystem);
        return hasNumericWeights ?
          'Clear numeric weights assigned to evaluation factors.' :
          'Relative importance mentioned but lacks specific weighting values.';
          
      case 'Assessment Methodology':
        if (!extractedInfo.assessmentMethod)
          return 'No assessment methodology identified.';
        return extractedInfo.assessmentMethod.length > 100 ?
          'Assessment methodology is clearly defined with specific procedures.' :
          'Basic assessment approach mentioned but lacks procedural details.';
          
      case 'Objectivity':
        if (!extractedInfo.objectivityMeasures)
          return 'No objectivity measures identified.';
        const objectiveCount = this.countKeywordOccurrences(
          extractedInfo.objectivityMeasures, 
          ['measurable', 'quantitative', 'specific', 'metric']
        );
        return objectiveCount > 3 ?
          'Strong emphasis on objective and measurable evaluation criteria.' :
          'Limited emphasis on objective measurement in evaluation criteria.';
          
      default:
        return 'General evaluation.';
    }
  }
}