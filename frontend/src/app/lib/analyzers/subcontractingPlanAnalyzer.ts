import { SectionAnalyzer } from './baseAnalyzer';

export class SubcontractingPlanAnalyzer extends SectionAnalyzer {
  constructor() {
    super();
    this.sectionName = 'Subcontracting Plan';
    this.requiredElements = ['goals', 'compliance', 'reporting'];
    this.evaluationCriteria = [
      {
        name: 'Goal Requirements',
        description: 'Clear requirements for small business subcontracting goals'
      },
      {
        name: 'Plan Elements',
        description: 'Required elements of the subcontracting plan'
      },
      {
        name: 'Reporting Requirements',
        description: 'Clear requirements for subcontracting reporting'
      },
      {
        name: 'Evaluation Method',
        description: 'Clear explanation of how subcontracting plans will be evaluated'
      }
    ];
  }
  
  protected extractInformation(sectionText: string): Record<string, string> {
    return {
      goalRequirements: this.extractGoalRequirements(sectionText),
      planElements: this.extractPlanElements(sectionText),
      reportingRequirements: this.extractReportingRequirements(sectionText),
      evaluationMethod: this.extractEvaluationMethod(sectionText)
    };
  }
  
  private extractGoalRequirements(text: string): string {
    const goalKeywords = [
      'goal', 'target', 'percentage', 'small business', 'woman-owned', 
      'veteran', 'minority', 'disadvantaged', 'WOSB', 'VOSB', 'SDVOSB', 'HUBZone'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const goalSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, goalKeywords)
    );
    
    return goalSentences.join('. ');
  }
  
  private extractPlanElements(text: string): string {
    const planKeywords = [
      'plan', 'element', 'include', 'submit', 'provide', 'describe',
      'identify', 'detail'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const planSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, planKeywords)
    );
    
    return planSentences.join('. ');
  }
  
  private extractReportingRequirements(text: string): string {
    const reportingKeywords = [
      'report', 'submit', 'ISR', 'SSR', 'Individual Subcontracting Report',
      'Summary Subcontracting Report', 'eSRS'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const reportingSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, reportingKeywords)
    );
    
    return reportingSentences.join('. ');
  }
  
  private extractEvaluationMethod(text: string): string {
    const evaluationKeywords = [
      'evaluate', 'assess', 'review', 'factor', 'consider', 'acceptable',
      'evaluation'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const evaluationSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, evaluationKeywords)
    );
    
    return evaluationSentences.join('. ');
  }
  
  protected evaluateCriterion(
    criterion: { name: string; description: string },
    extractedInfo: Record<string, string>
  ): number {
    switch (criterion.name) {
      case 'Goal Requirements':
        if (!extractedInfo.goalRequirements) return 1;
        
        // Check for specific percentage goals
        const hasPercentageGoals = /\d+\s*%/.test(extractedInfo.goalRequirements);
        
        // Check for specific small business categories
        const sbCategoryCount = this.countKeywordOccurrences(
          extractedInfo.goalRequirements,
          ['small business', 'woman-owned', 'veteran', 'minority', 'disadvantaged', 
           'WOSB', 'VOSB', 'SDVOSB', 'HUBZone']
        );
        
        if (hasPercentageGoals && sbCategoryCount > 3) return 5;
        if (hasPercentageGoals && sbCategoryCount > 1) return 4;
        if (hasPercentageGoals || sbCategoryCount > 2) return 3;
        return 2;
        
      case 'Plan Elements':
        if (!extractedInfo.planElements) return 1;
        
        // Check for specific plan requirements
        const planElementCount = this.countKeywordOccurrences(
          extractedInfo.planElements,
          ['description', 'identify', 'submit', 'provide', 'include', 'methodology']
        );
        
        // Check for detail level
        const planDetail = extractedInfo.planElements.length;
        
        if (planElementCount > 4 && planDetail > 150) return 5;
        if (planElementCount > 2 && planDetail > 100) return 4;
        if (planElementCount > 1 || planDetail > 100) return 3;
        return 2;
        
      case 'Reporting Requirements':
        if (!extractedInfo.reportingRequirements) return 1;
        
        // Check for specific reporting requirements
        const hasSpecificReports = /ISR|SSR|Individual Subcontracting Report|Summary Subcontracting Report|eSRS/i.test(
          extractedInfo.reportingRequirements
        );
        
        // Check for frequency requirements
        const hasFrequency = /monthly|quarterly|semi-annual|annual|bi-annual/i.test(
          extractedInfo.reportingRequirements
        );
        
        if (hasSpecificReports && hasFrequency) return 5;
        if (hasSpecificReports || hasFrequency) return 4;
        if (extractedInfo.reportingRequirements.length > 50) return 3;
        return 2;
        
      case 'Evaluation Method':
        if (!extractedInfo.evaluationMethod) return 1;
        
        // Check for specific evaluation criteria
        const hasEvaluationCriteria = /factor|weight|consider|score|rating/i.test(
          extractedInfo.evaluationMethod
        );
        
        // Check if compliance is mentioned
        const hasComplianceMention = /comply|compliance|requirement|FAR/i.test(
          extractedInfo.evaluationMethod
        );
        
        if (hasEvaluationCriteria && hasComplianceMention) return 5;
        if (hasEvaluationCriteria || hasComplianceMention) return 4;
        if (extractedInfo.evaluationMethod.length > 50) return 3;
        return 2;
        
      default:
        return 3;
    }
  }
  
  protected getCommentsForCriterion(
    criterion: { name: string; description: string },
    extractedInfo: Record<string, string>
  ): string {
    switch (criterion.name) {
      case 'Goal Requirements':
        if (!extractedInfo.goalRequirements)
          return 'No small business goal requirements identified.';
        
        const hasPercentageGoals = /\d+\s*%/.test(extractedInfo.goalRequirements);
        
        const sbCategoryCount = this.countKeywordOccurrences(
          extractedInfo.goalRequirements,
          ['small business', 'woman-owned', 'veteran', 'minority', 'disadvantaged', 
           'WOSB', 'VOSB', 'SDVOSB', 'HUBZone']
        );
        
        if (hasPercentageGoals && sbCategoryCount > 3)
          return 'Comprehensive small business goal requirements with specific percentages for multiple categories.';
        if (hasPercentageGoals && sbCategoryCount > 1)
          return 'Good small business goal requirements with specific percentages for some categories.';
        if (hasPercentageGoals)
          return 'Percentage goals provided but could include more specific small business categories.';
        if (sbCategoryCount > 2)
          return 'Multiple small business categories identified but specific percentage goals could be clearer.';
        return 'Limited small business goal information provided.';
        
      case 'Plan Elements':
        if (!extractedInfo.planElements)
          return 'No subcontracting plan element requirements identified.';
        
        const planElementCount = this.countKeywordOccurrences(
          extractedInfo.planElements,
          ['description', 'identify', 'submit', 'provide', 'include', 'methodology']
        );
        
        const planDetail = extractedInfo.planElements.length;
        
        if (planElementCount > 4 && planDetail > 150)
          return 'Comprehensive requirements for subcontracting plan elements with detailed instructions.';
        if (planElementCount > 2 && planDetail > 100)
          return 'Good requirements for plan elements with several specific requirements.';
        if (planElementCount > 1)
          return 'Some specific plan element requirements mentioned but could be more comprehensive.';
        if (planDetail > 100)
          return 'Detailed plan information required but specific elements could be clearer.';
        return 'Basic plan element information provided but lacks specificity.';
        
      case 'Reporting Requirements':
        if (!extractedInfo.reportingRequirements)
          return 'No subcontracting reporting requirements identified.';
        
        const hasSpecificReports = /ISR|SSR|Individual Subcontracting Report|Summary Subcontracting Report|eSRS/i.test(
          extractedInfo.reportingRequirements
        );
        
        const hasFrequency = /monthly|quarterly|semi-annual|annual|bi-annual/i.test(
          extractedInfo.reportingRequirements
        );
        
        if (hasSpecificReports && hasFrequency)
          return 'Clear reporting requirements with specific report types and submission frequency.';
        if (hasSpecificReports)
          return 'Specific report types identified but submission frequency could be clearer.';
        if (hasFrequency)
          return 'Reporting frequency specified but report types could be clearer.';
        return 'Basic reporting information provided but lacks specificity.';
        
      case 'Evaluation Method':
        if (!extractedInfo.evaluationMethod)
          return 'No evaluation method for subcontracting plans identified.';
        
        const hasEvaluationCriteria = /factor|weight|consider|score|rating/i.test(
          extractedInfo.evaluationMethod
        );
        
        const hasComplianceMention = /comply|compliance|requirement|FAR/i.test(
          extractedInfo.evaluationMethod
        );
        
        if (hasEvaluationCriteria && hasComplianceMention)
          return 'Clear evaluation method for subcontracting plans with specific criteria and compliance requirements.';
        if (hasEvaluationCriteria)
          return 'Evaluation criteria specified but compliance requirements could be clearer.';
        if (hasComplianceMention)
          return 'Compliance requirements mentioned but specific evaluation criteria could be clearer.';
        return 'Basic evaluation information provided but lacks specificity.';
        
      default:
        return 'General evaluation.';
    }
  }
}