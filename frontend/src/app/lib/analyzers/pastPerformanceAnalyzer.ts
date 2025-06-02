import { SectionAnalyzer } from './baseAnalyzer';

export class PastPerformanceAnalyzer extends SectionAnalyzer {
  constructor() {
    super();
    this.sectionName = 'Past Performance';
    this.requiredElements = ['projects', 'references', 'ratings'];
    this.evaluationCriteria = [
      {
        name: 'Project Requirements',
        description: 'Clear requirements for past project information'
      },
      {
        name: 'Relevance Criteria',
        description: 'Criteria for determining relevance of past performance'
      },
      {
        name: 'Reference Requirements',
        description: 'Specificity of reference contact requirements'
      },
      {
        name: 'Evaluation Method',
        description: 'Clear explanation of how past performance will be evaluated'
      }
    ];
  }
  
  protected extractInformation(sectionText: string): Record<string, string> {
    return {
      projectRequirements: this.extractProjectRequirements(sectionText),
      relevanceCriteria: this.extractRelevanceCriteria(sectionText),
      referenceRequirements: this.extractReferenceRequirements(sectionText),
      evaluationMethod: this.extractEvaluationMethod(sectionText)
    };
  }
  
  private extractProjectRequirements(text: string): string {
    const projectKeywords = [
      'project', 'contract', 'experience', 'work', 'similar', 'previous'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const projectSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, projectKeywords)
    );
    
    return projectSentences.join('. ');
  }
  
  private extractRelevanceCriteria(text: string): string {
    const relevanceKeywords = [
      'relevant', 'similar', 'scope', 'size', 'complexity', 'comparable'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const relevanceSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, relevanceKeywords)
    );
    
    return relevanceSentences.join('. ');
  }
  
  private extractReferenceRequirements(text: string): string {
    const referenceKeywords = [
      'reference', 'contact', 'client', 'customer', 'point of contact', 'POC'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const referenceSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, referenceKeywords)
    );
    
    return referenceSentences.join('. ');
  }
  
  private extractEvaluationMethod(text: string): string {
    const evaluationKeywords = [
      'evaluate', 'assess', 'rate', 'consider', 'factor', 'weight', 'score'
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
      case 'Project Requirements':
        if (!extractedInfo.projectRequirements) return 1;
        
        // Check for specific quantity requirements
        const hasQuantityRequirement = /\d+\s+(?:project|contract|example)/i.test(
          extractedInfo.projectRequirements
        );
        
        // Check for timeframe requirements
        const hasTimeframeRequirement = /\d+\s+(?:year|month|day)|recent|current|ongoing|completed/i.test(
          extractedInfo.projectRequirements
        );
        
        // Check detail level
        const requirementDetail = extractedInfo.projectRequirements.length;
        
        if (hasQuantityRequirement && hasTimeframeRequirement && requirementDetail > 150) return 5;
        if ((hasQuantityRequirement || hasTimeframeRequirement) && requirementDetail > 100) return 4;
        if (hasQuantityRequirement || hasTimeframeRequirement || requirementDetail > 100) return 3;
        return 2;
        
      case 'Relevance Criteria':
        if (!extractedInfo.relevanceCriteria) return 1;
        
        // Check for specific relevance factors
        const relevanceFactorCount = this.countKeywordOccurrences(
          extractedInfo.relevanceCriteria,
          ['scope', 'size', 'complexity', 'dollar value', 'industry', 'sector', 'technology']
        );
        
        if (relevanceFactorCount > 3 && extractedInfo.relevanceCriteria.length > 100) return 5;
        if (relevanceFactorCount > 2) return 4;
        if (relevanceFactorCount > 0) return 3;
        return 2;
        
      case 'Reference Requirements':
        if (!extractedInfo.referenceRequirements) return 1;
        
        // Check for specific reference information requirements
        const hasContactInfo = /name|phone|email|address|title|position/i.test(
          extractedInfo.referenceRequirements
        );
        
        // Check for verification statement
        const hasVerification = /verify|verification|confirm|check|contact|call/i.test(
          extractedInfo.referenceRequirements
        );
        
        if (hasContactInfo && hasVerification) return 5;
        if (hasContactInfo) return 4;
        if (hasVerification || extractedInfo.referenceRequirements.length > 50) return 3;
        return 2;
        
      case 'Evaluation Method':
        if (!extractedInfo.evaluationMethod) return 1;
        
        // Check for specific evaluation criteria
        const hasCriteria = /quality|timeliness|cost control|management|customer satisfaction|performance/i.test(
          extractedInfo.evaluationMethod
        );
        
        // Check for rating scale
        const hasRatingScale = /scale|rating|score|excellent|acceptable|marginal|poor|confidence/i.test(
          extractedInfo.evaluationMethod
        );
        
        if (hasCriteria && hasRatingScale) return 5;
        if (hasCriteria || hasRatingScale) return 4;
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
      case 'Project Requirements':
        if (!extractedInfo.projectRequirements)
          return 'No project requirements identified for past performance.';
        
        const hasQuantityRequirement = /\d+\s+(?:project|contract|example)/i.test(
          extractedInfo.projectRequirements
        );
        
        const hasTimeframeRequirement = /\d+\s+(?:year|month|day)|recent|current|ongoing|completed/i.test(
          extractedInfo.projectRequirements
        );
        
        const requirementDetail = extractedInfo.projectRequirements.length;
        
        if (hasQuantityRequirement && hasTimeframeRequirement && requirementDetail > 150)
          return 'Comprehensive project requirements with specific quantity, timeframe, and detailed information requirements.';
        if ((hasQuantityRequirement || hasTimeframeRequirement) && requirementDetail > 100)
          return 'Good project requirements with either quantity or timeframe specifications and good detail.';
        if (hasQuantityRequirement)
          return 'Project quantity requirements specified but could include more detail on timeframe and content.';
        if (hasTimeframeRequirement)
          return 'Project timeframe requirements specified but could include more detail on quantity and content.';
        if (requirementDetail > 100)
          return 'Detailed project information requirements but lacks specific quantity or timeframe guidance.';
        return 'Basic project requirements provided but lacks specificity.';
        
      case 'Relevance Criteria':
        if (!extractedInfo.relevanceCriteria)
          return 'No relevance criteria identified for evaluating past performance.';
        
        const relevanceFactorCount = this.countKeywordOccurrences(
          extractedInfo.relevanceCriteria,
          ['scope', 'size', 'complexity', 'dollar value', 'industry', 'sector', 'technology']
        );
        
        if (relevanceFactorCount > 3 && extractedInfo.relevanceCriteria.length > 100)
          return 'Comprehensive relevance criteria with multiple specific factors for determining similarity.';
        if (relevanceFactorCount > 2)
          return 'Good relevance criteria with several specific factors identified.';
        if (relevanceFactorCount > 0)
          return 'Basic relevance criteria mentioned but could be more comprehensive.';
        return 'Limited information on how relevance of past performance will be determined.';
        
      case 'Reference Requirements':
        if (!extractedInfo.referenceRequirements)
          return 'No reference requirements identified.';
        
        const hasContactInfo = /name|phone|email|address|title|position/i.test(
          extractedInfo.referenceRequirements
        );
        
        const hasVerification = /verify|verification|confirm|check|contact|call/i.test(
          extractedInfo.referenceRequirements
        );
        
        if (hasContactInfo && hasVerification)
          return 'Comprehensive reference requirements with specific contact information and verification statement.';
        if (hasContactInfo)
          return 'Specific contact information requirements for references provided but verification approach could be clearer.';
        if (hasVerification)
          return 'Reference verification approach mentioned but specific contact information requirements could be clearer.';
        return 'Basic reference information requested but lacks specificity.';
        
      case 'Evaluation Method':
        if (!extractedInfo.evaluationMethod)
          return 'No evaluation method identified for past performance.';
        
        const hasCriteria = /quality|timeliness|cost control|management|customer satisfaction|performance/i.test(
          extractedInfo.evaluationMethod
        );
        
        const hasRatingScale = /scale|rating|score|excellent|acceptable|marginal|poor|confidence/i.test(
          extractedInfo.evaluationMethod
        );
        
        if (hasCriteria && hasRatingScale)
          return 'Clear evaluation method with specific criteria and rating scale for past performance.';
        if (hasCriteria)
          return 'Specific evaluation criteria mentioned but rating approach could be clearer.';
        if (hasRatingScale)
          return 'Rating scale provided but specific evaluation criteria could be clearer.';
        return 'Basic evaluation information provided but lacks specificity.';
        
      default:
        return 'General evaluation.';
    }
  }
}