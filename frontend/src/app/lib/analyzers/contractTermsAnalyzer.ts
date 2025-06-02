import { SectionAnalyzer } from './baseAnalyzer';

export class ContractTermsAnalyzer extends SectionAnalyzer {
  constructor() {
    super();
    this.sectionName = 'Contract Terms';
    this.requiredElements = ['terms', 'conditions', 'clauses'];
    this.evaluationCriteria = [
      {
        name: 'Completeness',
        description: 'Inclusion of all required terms and conditions'
      },
      {
        name: 'Clarity',
        description: 'Clear and unambiguous language in contract terms'
      },
      {
        name: 'Regulatory Compliance',
        description: 'Compliance with applicable laws and regulations'
      },
      {
        name: 'Risk Allocation',
        description: 'Fair allocation of risks between parties'
      }
    ];
  }
  
  protected extractInformation(sectionText: string): Record<string, string> {
    return {
      contractTerms: this.extractTerms(sectionText),
      contractConditions: this.extractConditions(sectionText),
      requiredClauses: this.extractClauses(sectionText),
      regulatoryReferences: this.extractRegulatoryReferences(sectionText),
      riskAllocation: this.extractRiskAllocation(sectionText)
    };
  }
  
  private extractTerms(text: string): string {
    const termKeywords = [
      'term', 'provision', 'agreement', 'contract', 'stipulation'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const termSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, termKeywords)
    );
    
    return termSentences.join('. ');
  }
  
  private extractConditions(text: string): string {
    const conditionKeywords = [
      'condition', 'requirement', 'contingent', 'dependent', 'subject to'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const conditionSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, conditionKeywords)
    );
    
    return conditionSentences.join('. ');
  }
  
  private extractClauses(text: string): string {
    const clauseKeywords = [
      'clause', 'section', 'provision', 'paragraph', 'article'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const clauseSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, clauseKeywords)
    );
    
    return clauseSentences.join('. ');
  }
  
  private extractRegulatoryReferences(text: string): string {
    const regulatoryKeywords = [
      'regulation', 'law', 'statute', 'act', 'code', 'compliance', 'legal'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const regulatorySentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, regulatoryKeywords)
    );
    
    return regulatorySentences.join('. ');
  }
  
  private extractRiskAllocation(text: string): string {
    const riskKeywords = [
      'risk', 'liability', 'responsible', 'indemnification', 'warranty', 'guarantee'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const riskSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, riskKeywords)
    );
    
    return riskSentences.join('. ');
  }
  
  protected evaluateCriterion(
    criterion: { name: string; description: string },
    extractedInfo: Record<string, string>
  ): number {
    switch (criterion.name) {
      case 'Completeness':
        const termCompleteness = extractedInfo.contractTerms?.length || 0;
        const conditionCompleteness = extractedInfo.contractConditions?.length || 0;
        const clauseCompleteness = extractedInfo.requiredClauses?.length || 0;
        
        const totalCompleteness = termCompleteness + conditionCompleteness + clauseCompleteness;
        return totalCompleteness > 300 ? 5 : 
               (totalCompleteness > 150 ? 4 : 
               (totalCompleteness > 50 ? 3 : 2));
      
      case 'Clarity':
        // Look for ambiguous language as negative indicator
        const ambiguityCount = this.countKeywordOccurrences(
          extractedInfo.contractTerms,
          ['ambiguity', 'unclear', 'vague', 'may', 'might', 'could', 'should']
        );
        
        const definitivesCount = this.countKeywordOccurrences(
          extractedInfo.contractTerms,
          ['shall', 'must', 'will', 'required', 'specific', 'defined']
        );
        
        // Higher ratio of definitives to ambiguities is better
        const clarityRatio = ambiguityCount === 0 ? definitivesCount : definitivesCount / ambiguityCount;
        return clarityRatio > 5 ? 5 :
               (clarityRatio > 3 ? 4 :
               (clarityRatio > 1 ? 3 : 2));
        
      case 'Regulatory Compliance':
        if (!extractedInfo.regulatoryReferences) return 2;
        
        const complianceCount = this.countKeywordOccurrences(
          extractedInfo.regulatoryReferences,
          ['comply', 'compliance', 'accordance', 'pursuant', 'regulation', 'law', 'statute']
        );
        
        return complianceCount > 5 ? 5 :
               (complianceCount > 3 ? 4 :
               (complianceCount > 1 ? 3 : 2));
        
      case 'Risk Allocation':
        if (!extractedInfo.riskAllocation) return 2;
        
        // Look for balanced risk language
        const fairnessCount = this.countKeywordOccurrences(
          extractedInfo.riskAllocation,
          ['fair', 'reasonable', 'appropriate', 'equitable', 'mutual', 'both parties']
        );
        
        // Look for one-sided risk language
        const onesidedCount = this.countKeywordOccurrences(
          extractedInfo.riskAllocation,
          ['sole', 'solely', 'exclusively', 'entirely', 'only']
        );
        
        // Higher fairness and lower one-sidedness is better
        const fairnessScore = fairnessCount - onesidedCount;
        return fairnessScore > 3 ? 5 :
               (fairnessScore > 1 ? 4 :
               (fairnessScore >= 0 ? 3 : 2));
        
      default:
        return 3;
    }
  }
  
  protected getCommentsForCriterion(
    criterion: { name: string; description: string },
    extractedInfo: Record<string, string>
  ): string {
    switch (criterion.name) {
      case 'Completeness':
        const termCompleteness = extractedInfo.contractTerms?.length || 0;
        const conditionCompleteness = extractedInfo.contractConditions?.length || 0;
        const clauseCompleteness = extractedInfo.requiredClauses?.length || 0;
        
        const totalCompleteness = termCompleteness + conditionCompleteness + clauseCompleteness;
        
        if (totalCompleteness > 300)
          return 'Comprehensive terms and conditions covering all key contractual areas.';
        else if (totalCompleteness > 150)
          return 'Most major terms and conditions are addressed, but some areas could be more detailed.';
        else if (totalCompleteness > 50)
          return 'Basic contract terms are present but lack comprehensive coverage.';
        else
          return 'Contract terms are minimal or incomplete.';
        
      case 'Clarity':
        const ambiguityCount = this.countKeywordOccurrences(
          extractedInfo.contractTerms,
          ['ambiguity', 'unclear', 'vague', 'may', 'might', 'could', 'should']
        );
        
        const definitivesCount = this.countKeywordOccurrences(
          extractedInfo.contractTerms,
          ['shall', 'must', 'will', 'required', 'specific', 'defined']
        );
        
        const clarityRatio = ambiguityCount === 0 ? definitivesCount : definitivesCount / ambiguityCount;
        
        if (clarityRatio > 5)
          return 'Contract terms use clear, definitive language with minimal ambiguity.';
        else if (clarityRatio > 3)
          return 'Generally clear language with some potential ambiguities.';
        else if (clarityRatio > 1)
          return 'Contract language contains a moderate amount of ambiguous terms.';
        else
          return 'Contract terms contain significant ambiguity that could lead to disputes.';
        
      case 'Regulatory Compliance':
        if (!extractedInfo.regulatoryReferences)
          return 'No clear references to regulatory compliance requirements.';
        
        const complianceCount = this.countKeywordOccurrences(
          extractedInfo.regulatoryReferences,
          ['comply', 'compliance', 'accordance', 'pursuant', 'regulation', 'law', 'statute']
        );
        
        if (complianceCount > 5)
          return 'Strong emphasis on regulatory compliance with specific references to applicable laws.';
        else if (complianceCount > 3)
          return 'Good coverage of regulatory compliance with some specific references.';
        else if (complianceCount > 1)
          return 'Basic regulatory compliance addressed but lacks specific references.';
        else
          return 'Minimal attention to regulatory compliance requirements.';
        
      case 'Risk Allocation':
        if (!extractedInfo.riskAllocation)
          return 'No clear provisions for risk allocation between parties.';
        
        const fairnessCount = this.countKeywordOccurrences(
          extractedInfo.riskAllocation,
          ['fair', 'reasonable', 'appropriate', 'equitable', 'mutual', 'both parties']
        );
        
        const onesidedCount = this.countKeywordOccurrences(
          extractedInfo.riskAllocation,
          ['sole', 'solely', 'exclusively', 'entirely', 'only']
        );
        
        const fairnessScore = fairnessCount - onesidedCount;
        
        if (fairnessScore > 3)
          return 'Balanced risk allocation with fair and equitable terms for both parties.';
        else if (fairnessScore > 1)
          return 'Generally fair risk allocation with some imbalances.';
        else if (fairnessScore >= 0)
          return 'Mixed risk allocation with both fair and one-sided provisions.';
        else
          return 'Risk allocation appears to favor one party significantly over the other.';
        
      default:
        return 'General evaluation.';
    }
  }
}