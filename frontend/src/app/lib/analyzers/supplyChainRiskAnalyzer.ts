import { SectionAnalyzer } from './baseAnalyzer';

export class SupplyChainRiskAnalyzer extends SectionAnalyzer {
  constructor() {
    super();
    this.sectionName = 'Supply Chain Risk Assessment';
    this.requiredElements = ['risk_identification', 'risk_mitigation', 'vendor_requirements'];
    this.evaluationCriteria = [
      {
        name: 'Risk Identification',
        description: 'Requirements for identifying supply chain risks'
      },
      {
        name: 'Risk Mitigation',
        description: 'Required approaches for mitigating identified risks'
      },
      {
        name: 'Vendor Requirements',
        description: 'Specific requirements for vendor risk management'
      },
      {
        name: 'Evaluation Method',
        description: 'How supply chain risk assessment will be evaluated'
      }
    ];
  }
  
  protected extractInformation(sectionText: string): Record<string, string> {
    return {
      riskIdentification: this.extractRiskIdentification(sectionText),
      riskMitigation: this.extractRiskMitigation(sectionText),
      vendorRequirements: this.extractVendorRequirements(sectionText),
      evaluationMethod: this.extractEvaluationMethod(sectionText)
    };
  }
  
  private extractRiskIdentification(text: string): string {
    const identificationKeywords = [
      'identify', 'identification', 'assess', 'assessment', 'analyze',
      'analysis', 'risk', 'threat', 'vulnerability'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const identificationSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, identificationKeywords)
    );
    
    return identificationSentences.join('. ');
  }
  
  private extractRiskMitigation(text: string): string {
    const mitigationKeywords = [
      'mitigate', 'mitigation', 'reduce', 'reduction', 'manage',
      'management', 'control', 'address', 'respond'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const mitigationSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, mitigationKeywords)
    );
    
    return mitigationSentences.join('. ');
  }
  
  private extractVendorRequirements(text: string): string {
    const vendorKeywords = [
      'vendor', 'supplier', 'provider', 'third-party', 'third party',
      'subcontractor', 'partner'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const vendorSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, vendorKeywords)
    );
    
    return vendorSentences.join('. ');
  }
  
  private extractEvaluationMethod(text: string): string {
    const evaluationKeywords = [
      'evaluate', 'assess', 'review', 'factor', 'score', 'rating',
      'consider', 'acceptable'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const evaluationSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, evaluationKeywords)
    );
    
    return evaluationSentences.join('. ');
  }
  
  protected evaluateCriterion(
    criterion: { name: string; description: string },
    extractedInfo: Record<string, string>,
  ): number {
    switch (criterion.name) {
      case 'Risk Identification':
        if (!extractedInfo.riskIdentification) return 1;
        
        // Check for specific risk types
        const riskTypeCount = this.countKeywordOccurrences(
          extractedInfo.riskIdentification,
          ['counterfeit', 'foreign ownership', 'compromise', 'tamper',
           'disruption', 'quality', 'delivery', 'natural disaster']
        );
        
        // Check for identification methodology
        const hasMethodology = /method|process|procedure|approach|framework|SCRM|NIST/i.test(
          extractedInfo.riskIdentification
        );
        
        if (riskTypeCount > 2 && hasMethodology) return 5;
        if (riskTypeCount > 0 && hasMethodology) return 4;
        if (riskTypeCount > 0 || hasMethodology) return 3;
        return 2;
        
      case 'Risk Mitigation':
        if (!extractedInfo.riskMitigation) return 1;
        
        // Check for specific mitigation approaches
        const mitigationApproachCount = this.countKeywordOccurrences(
          extractedInfo.riskMitigation,
          ['avoid', 'accept', 'transfer', 'reduce', 'control',
           'monitor', 'contingency', 'plan', 'strategy']
        );
        
        // Check for mitigation detail
        const mitigationDetail = extractedInfo.riskMitigation.length;
        
        if (mitigationApproachCount > 2 && mitigationDetail > 100) return 5;
        if (mitigationApproachCount > 1) return 4;
        if (mitigationApproachCount > 0 || mitigationDetail > 50) return 3;
        return 2;
        
      case 'Vendor Requirements':
        if (!extractedInfo.vendorRequirements) return 1;
        
        // Check for specific vendor assessment requirements
        const vendorAssessmentCount = this.countKeywordOccurrences(
          extractedInfo.vendorRequirements,
          ['assessment', 'questionnaire', 'audit', 'certification',
           'verification', 'documentation', 'disclosure']
        );
        
        // Check for ongoing monitoring
        const hasOngoingMonitoring = /ongoing|continuous|periodic|monitor|regular/i.test(
          extractedInfo.vendorRequirements
        );
        
        if (vendorAssessmentCount > 2 && hasOngoingMonitoring) return 5;
        if (vendorAssessmentCount > 0 && hasOngoingMonitoring) return 4;
        if (vendorAssessmentCount > 0 || hasOngoingMonitoring) return 3;
        return 2;
        
      case 'Evaluation Method':
        if (!extractedInfo.evaluationMethod) return 1;
        
        // Check for evaluation criteria
        const hasEvaluationCriteria = /criteria|factor|score|rating|acceptable|adequate/i.test(
          extractedInfo.evaluationMethod
        );
        
        // Check for methodology reference
        const hasMethodologyReference = /method|process|procedure|framework|NIST|approach/i.test(
          extractedInfo.evaluationMethod
        );
        
        if (hasEvaluationCriteria && hasMethodologyReference) return 5;
        if (hasEvaluationCriteria || hasMethodologyReference) return 4;
        if (extractedInfo.evaluationMethod.length > 50) return 3;
        return 2;
        
      default:
        return 3;
    }
  }
  
  protected getCommentsForCriterion(
    criterion: { name: string; description: string },
    extractedInfo: Record<string, string>,
  ): string {
    switch (criterion.name) {
      case 'Risk Identification':
        if (!extractedInfo.riskIdentification)
          return 'No supply chain risk identification requirements identified.';
        
        const riskTypeCount = this.countKeywordOccurrences(
          extractedInfo.riskIdentification,
          ['counterfeit', 'foreign ownership', 'compromise', 'tamper',
           'disruption', 'quality', 'delivery', 'natural disaster']
        );
        
        const hasMethodology = /method|process|procedure|approach|framework|SCRM|NIST/i.test(
          extractedInfo.riskIdentification
        );
        
        if (riskTypeCount > 2 && hasMethodology)
          return 'Comprehensive risk identification requirements with specific risk types and methodology.';
        if (riskTypeCount > 0 && hasMethodology)
          return 'Good risk identification requirements with methodology and some risk types.';
        if (riskTypeCount > 0)
          return 'Specific risk types mentioned but identification methodology could be clearer.';
        if (hasMethodology)
          return 'Risk identification methodology mentioned but specific risk types could be clearer.';
        return 'Limited risk identification information provided.';
        
      case 'Risk Mitigation':
        if (!extractedInfo.riskMitigation)
          return 'No risk mitigation requirements identified.';
        
        const mitigationApproachCount = this.countKeywordOccurrences(
          extractedInfo.riskMitigation,
          ['avoid', 'accept', 'transfer', 'reduce', 'control',
           'monitor', 'contingency', 'plan', 'strategy']
        );
        
        const mitigationDetail = extractedInfo.riskMitigation.length;
        
        if (mitigationApproachCount > 2 && mitigationDetail > 100)
          return 'Comprehensive risk mitigation requirements with multiple specific approaches.';
        if (mitigationApproachCount > 1)
          return 'Multiple risk mitigation approaches specified.';
        if (mitigationApproachCount > 0)
          return 'Some risk mitigation approach mentioned but could be more comprehensive.';
        if (mitigationDetail > 50)
          return 'Risk mitigation mentioned but specific approaches could be clearer.';
        return 'Limited risk mitigation information provided.';
        
      case 'Vendor Requirements':
        if (!extractedInfo.vendorRequirements)
          return 'No vendor risk management requirements identified.';
        
        const vendorAssessmentCount = this.countKeywordOccurrences(
          extractedInfo.vendorRequirements,
          ['assessment', 'questionnaire', 'audit', 'certification',
           'verification', 'documentation', 'disclosure']
        );
        
        const hasOngoingMonitoring = /ongoing|continuous|periodic|monitor|regular/i.test(
          extractedInfo.vendorRequirements
        );
        
        if (vendorAssessmentCount > 2 && hasOngoingMonitoring)
          return 'Comprehensive vendor risk management requirements with specific assessment methods and ongoing monitoring.';
        if (vendorAssessmentCount > 0 && hasOngoingMonitoring)
          return 'Good vendor risk management requirements with assessment and monitoring.';
        if (vendorAssessmentCount > 0)
          return 'Vendor assessment requirements mentioned but ongoing monitoring could be clearer.';
        if (hasOngoingMonitoring)
          return 'Vendor monitoring mentioned but specific assessment methods could be clearer.';
        return 'Limited vendor risk management information provided.';
        
      case 'Evaluation Method':
        if (!extractedInfo.evaluationMethod)
          return 'No evaluation method for supply chain risk assessment identified.';
        
        const hasEvaluationCriteria = /criteria|factor|score|rating|acceptable|adequate/i.test(
          extractedInfo.evaluationMethod
        );
        
        const hasMethodologyReference = /method|process|procedure|framework|NIST|approach/i.test(
          extractedInfo.evaluationMethod
        );
        
        if (hasEvaluationCriteria && hasMethodologyReference)
          return 'Clear evaluation method with specific criteria and methodology for supply chain risk assessment.';
        if (hasEvaluationCriteria)
          return 'Evaluation criteria specified but methodology could be clearer.';
        if (hasMethodologyReference)
          return 'Evaluation methodology referenced but specific criteria could be clearer.';
        return 'Limited evaluation method information provided.';
        
      default:
        return 'General evaluation.';
    }
  }
}