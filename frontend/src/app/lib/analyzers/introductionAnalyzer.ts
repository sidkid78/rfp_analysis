import { SectionAnalyzer } from './baseAnalyzer';

export class IntroductionAnalyzer extends SectionAnalyzer {
  constructor() {
    super();
    this.sectionName = 'Introduction';
    this.requiredElements = ['purpose', 'background', 'requirements'];
    this.evaluationCriteria = [
      {
        name: 'Purpose Clarity',
        description: 'Clarity of the solicitation\'s purpose and objectives'
      },
      {
        name: 'Background Information',
        description: 'Completeness of project/requirement background'
      },
      {
        name: 'Requirements Compliance',
        description: 'Alignment with organizational and regulatory requirements'
      }
    ];
  }
  
  protected extractInformation(sectionText: string): Record<string, string> {
    return {
      purpose: this.extractPurpose(sectionText),
      background: this.extractBackground(sectionText),
      requirements: this.extractRequirements(sectionText)
    };
  }
  
  private extractPurpose(text: string): string {
    const purposeKeywords = [
      'purpose', 'objective', 'goal', 'intent', 'aim'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const purposeSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, purposeKeywords)
    );
    
    return purposeSentences.join('. ');
  }
  
  private extractBackground(text: string): string {
    const backgroundKeywords = [
      'background', 'history', 'context', 'previously', 'overview'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const backgroundSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, backgroundKeywords)
    );
    
    return backgroundSentences.join('. ');
  }
  
  private extractRequirements(text: string): string {
    const requirementKeywords = [
      'requirement', 'must', 'shall', 'required', 'mandatory', 'comply'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const requirementSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, requirementKeywords)
    );
    
    return requirementSentences.join('. ');
  }
  
  protected evaluateCriterion(
    criterion: { name: string; description: string },
    extractedInfo: Record<string, string>,
  ): number {
    switch (criterion.name) {
      case 'Purpose Clarity':
        if (!extractedInfo.purpose) return 1;
        return extractedInfo.purpose.length > 50 ? 
          (extractedInfo.purpose.length > 150 ? 5 : 4) : 2;
        
      case 'Background Information':
        if (!extractedInfo.background) return 1;
        return extractedInfo.background.length > 100 ? 
          (extractedInfo.background.length > 300 ? 5 : 4) : 3;
        
      case 'Requirements Compliance':
        if (!extractedInfo.requirements) return 1;
        const requirementsCompliance = this.countKeywordOccurrences(
          extractedInfo.requirements, ['comply', 'compliance', 'regulation', 'standard']
        );
        return requirementsCompliance > 3 ? 5 : (requirementsCompliance > 1 ? 4 : 3);
        
      default:
        return 3;
    }
  }
  
  protected getCommentsForCriterion(
    criterion: { name: string; description: string },
    extractedInfo: Record<string, string>
  ): string {
    switch (criterion.name) {
      case 'Purpose Clarity':
        if (!extractedInfo.purpose) 
          return 'No clear purpose statement found.';
        return extractedInfo.purpose.length > 150 ?
          'Clear and comprehensive purpose statement provided.' :
          'Purpose statement present but could be more detailed.';
          
      case 'Background Information':
        if (!extractedInfo.background)
          return 'No background information provided.';
        return extractedInfo.background.length > 300 ?
          'Thorough background information provided.' :
          'Some background information provided, but more context would be helpful.';
          
      case 'Requirements Compliance':
        if (!extractedInfo.requirements)
          return 'No clear requirements statements found.';
        const complianceCount = this.countKeywordOccurrences(
          extractedInfo.requirements, ['comply', 'compliance', 'regulation', 'standard']
        );
        return complianceCount > 3 ?
          'Strong emphasis on regulatory compliance.' :
          'Limited discussion of compliance requirements.';
          
      default:
        return 'General evaluation.';
    }
  }
}