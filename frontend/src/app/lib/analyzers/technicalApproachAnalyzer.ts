import { SectionAnalyzer } from './baseAnalyzer';

export class TechnicalApproachAnalyzer extends SectionAnalyzer {
  constructor() {
    super();
    this.sectionName = 'Technical Approach';
    this.requiredElements = ['methodology', 'innovation', 'requirements', 'understanding'];
    this.evaluationCriteria = [
      {
        name: 'Methodology Requirements',
        description: 'Requirements for technical methodology or approach'
      },
      {
        name: 'Innovation Emphasis',
        description: 'Emphasis on innovative approaches or solutions'
      },
      {
        name: 'Requirement Compliance',
        description: 'Requirements for demonstrating compliance with technical specifications'
      },
      {
        name: 'Evaluation Method',
        description: 'How the technical approach will be evaluated'
      }
    ];
  }
  
  protected extractInformation(sectionText: string): Record<string, string> {
    return {
      methodologyRequirements: this.extractMethodologyRequirements(sectionText),
      innovationEmphasis: this.extractInnovationEmphasis(sectionText),
      requirementCompliance: this.extractRequirementCompliance(sectionText),
      evaluationMethod: this.extractEvaluationMethod(sectionText)
    };
  }
  
  private extractMethodologyRequirements(text: string): string {
    const methodologyKeywords = [
      'methodology', 'approach', 'method', 'process', 'procedure',
      'technique', 'plan', 'strategy'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const methodologySentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, methodologyKeywords)
    );
    
    return methodologySentences.join('. ');
  }
  
  private extractInnovationEmphasis(text: string): string {
    const innovationKeywords = [
      'innovation', 'innovative', 'novel', 'creative', 'unique',
      'cutting-edge', 'state-of-the-art', 'new', 'advanced'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const innovationSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, innovationKeywords)
    );
    
    return innovationSentences.join('. ');
  }
  
  private extractRequirementCompliance(text: string): string {
    const complianceKeywords = [
      'requirement', 'specification', 'comply', 'conformance', 'meet',
      'satisfy', 'address', 'demonstrate'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const complianceSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, complianceKeywords)
    );
    
    return complianceSentences.join('. ');
  }
  
  private extractEvaluationMethod(text: string): string {
    const evaluationKeywords = [
      'evaluate', 'assess', 'review', 'factor', 'score', 'rating',
      'criterion', 'consideration'
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
      case 'Methodology Requirements':
        if (!extractedInfo.methodologyRequirements) return 1;
        
        // Check for specific methodological elements
        const methodElementCount = this.countKeywordOccurrences(
          extractedInfo.methodologyRequirements,
          ['development', 'analysis', 'design', 'implementation', 'testing',
           'integration', 'deployment', 'maintenance']
        );
        
        // Check for detail level
        const methodDetail = extractedInfo.methodologyRequirements.length;
        
        if (methodElementCount > 3 && methodDetail > 150) return 5;
        if (methodElementCount > 1 && methodDetail > 100) return 4;
        if (methodElementCount > 0 || methodDetail > 100) return 3;
        return 2;
        
      case 'Innovation Emphasis':
        if (!extractedInfo.innovationEmphasis) return 2; // Not always emphasized
        
        // Check for innovation importance
        const innovationImportance = this.countKeywordOccurrences(
          extractedInfo.innovationEmphasis,
          ['encourage', 'emphasize', 'value', 'seek', 'looking for',
           'important', 'priority', 'advantage']
        );
        
        // Check for specific areas for innovation
        const innovationAreaCount = this.countKeywordOccurrences(
          extractedInfo.innovationEmphasis,
          ['technology', 'process', 'solution', 'approach', 'efficiency',
           'cost', 'performance', 'quality']
        );
        
        if (innovationImportance > 1 && innovationAreaCount > 1) return 5;
        if (innovationImportance > 0 && innovationAreaCount > 0) return 4;
        if (innovationImportance > 0 || innovationAreaCount > 0) return 3;
        return 2;
        
      case 'Requirement Compliance':
        if (!extractedInfo.requirementCompliance) return 1;
        
        // Check for reference to specific requirements
        const specificRequirementReference = /specification|SOW|Statement of Work|technical requirement|performance requirement/i.test(
          extractedInfo.requirementCompliance
        );
        
        // Check for demonstration method
        const hasComplianceDemonstration = /demonstrate|show|prove|evidence|explanation|description|narrative/i.test(
          extractedInfo.requirementCompliance
        );
        
        if (specificRequirementReference && hasComplianceDemonstration) return 5;
        if (specificRequirementReference || hasComplianceDemonstration) return 4;
        if (extractedInfo.requirementCompliance.length > 80) return 3;
        return 2;
        
      case 'Evaluation Method':
        if (!extractedInfo.evaluationMethod) return 1;
        
        // Check for specific evaluation criteria
        const evaluationCriteriaCount = this.countKeywordOccurrences(
          extractedInfo.evaluationMethod,
          ['feasibility', 'effectiveness', 'efficiency', 'reliability',
           'scalability', 'maintainability', 'innovation']
        );
        
        // Check for evaluation approach
        const hasEvaluationApproach = /weight|factor|score|rating|point|relative importance/i.test(
          extractedInfo.evaluationMethod
        );
        
        if (evaluationCriteriaCount > 2 && hasEvaluationApproach) return 5;
        if (evaluationCriteriaCount > 0 && hasEvaluationApproach) return 4;
        if (evaluationCriteriaCount > 0 || hasEvaluationApproach) return 3;
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
      case 'Methodology Requirements':
        if (!extractedInfo.methodologyRequirements)
          return 'No technical methodology requirements identified.';
        
        const methodElementCount = this.countKeywordOccurrences(
          extractedInfo.methodologyRequirements,
          ['development', 'analysis', 'design', 'implementation', 'testing',
           'integration', 'deployment', 'maintenance']
        );
        
        const methodDetail = extractedInfo.methodologyRequirements.length;
        
        if (methodElementCount > 3 && methodDetail > 150)
          return 'Comprehensive methodology requirements with multiple specific elements and detailed instructions.';
        if (methodElementCount > 1 && methodDetail > 100)
          return 'Good methodology requirements with specific elements and some detail.';
        if (methodElementCount > 0)
          return 'Some specific methodological elements mentioned but could include more detail.';
        if (methodDetail > 100)
          return 'Detailed methodology information provided but specific elements could be clearer.';
        return 'Basic methodology information provided but lacks specificity.';
        
      case 'Innovation Emphasis':
        if (!extractedInfo.innovationEmphasis)
          return 'No emphasis on innovation identified.';
        
        const innovationImportance = this.countKeywordOccurrences(
          extractedInfo.innovationEmphasis,
          ['encourage', 'emphasize', 'value', 'seek', 'looking for',
           'important', 'priority', 'advantage']
        );
        
        const innovationAreaCount = this.countKeywordOccurrences(
          extractedInfo.innovationEmphasis,
          ['technology', 'process', 'solution', 'approach', 'efficiency',
           'cost', 'performance', 'quality']
        );
        
        if (innovationImportance > 1 && innovationAreaCount > 1)
          return 'Strong emphasis on innovation with clear importance and specific areas for innovative approaches.';
        if (innovationImportance > 0 && innovationAreaCount > 0)
          return 'Good emphasis on innovation with some indication of importance and target areas.';
        if (innovationImportance > 0)
          return 'Some emphasis on the importance of innovation but target areas could be clearer.';
        if (innovationAreaCount > 0)
          return 'Some mention of areas for innovation but importance could be emphasized more.';
        return 'Limited innovation emphasis information provided.';
        
      case 'Requirement Compliance':
        if (!extractedInfo.requirementCompliance)
          return 'No requirement compliance information identified.';
        
        const specificRequirementReference = /specification|SOW|Statement of Work|technical requirement|performance requirement/i.test(
          extractedInfo.requirementCompliance
        );
        
        const hasComplianceDemonstration = /demonstrate|show|prove|evidence|explanation|description|narrative/i.test(
          extractedInfo.requirementCompliance
        );
        
        if (specificRequirementReference && hasComplianceDemonstration)
          return 'Clear requirement compliance instructions with specific requirements referenced and demonstration method.';
        if (specificRequirementReference)
          return 'Specific requirements referenced but demonstration method could be clearer.';
        if (hasComplianceDemonstration)
          return 'Compliance demonstration method specified but reference to specific requirements could be clearer.';
        return 'Basic compliance information provided but lacks specificity.';
        
      case 'Evaluation Method':
        if (!extractedInfo.evaluationMethod)
          return 'No evaluation method for technical approach identified.';
        
        const evaluationCriteriaCount = this.countKeywordOccurrences(
          extractedInfo.evaluationMethod,
          ['feasibility', 'effectiveness', 'efficiency', 'reliability',
           'scalability', 'maintainability', 'innovation']
        );
        
        const hasEvaluationApproach = /weight|factor|score|rating|point|relative importance/i.test(
          extractedInfo.evaluationMethod
        );
        
        if (evaluationCriteriaCount > 2 && hasEvaluationApproach)
          return 'Clear evaluation method with multiple specific criteria and scoring approach.';
        if (evaluationCriteriaCount > 0 && hasEvaluationApproach)
          return 'Good evaluation method with some specific criteria and scoring approach.';
        if (evaluationCriteriaCount > 0)
          return 'Some specific evaluation criteria mentioned but scoring approach could be clearer.';
        if (hasEvaluationApproach)
          return 'Evaluation scoring approach mentioned but specific criteria could be clearer.';
        return 'Limited evaluation method information provided.';
        
      default:
        return 'General evaluation.';
    }
  }
}       