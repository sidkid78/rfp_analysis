import { SectionAnalyzer } from './baseAnalyzer';

export class EnvironmentalAnalyzer extends SectionAnalyzer {
  constructor() {
    super();
    this.sectionName = 'Environmental Considerations';
    this.requiredElements = ['requirements', 'compliance', 'sustainability'];
    this.evaluationCriteria = [
      {
        name: 'Regulatory Requirements',
        description: 'Clear identification of applicable environmental regulations'
      },
      {
        name: 'Compliance Verification',
        description: 'Methods for verifying environmental compliance'
      },
      {
        name: 'Sustainability Requirements',
        description: 'Requirements for sustainable practices or certifications'
      },
      {
        name: 'Evaluation Method',
        description: 'How environmental considerations will be evaluated'
      }
    ];
  }
  
  protected extractInformation(sectionText: string): Record<string, string> {
    return {
      regulatoryRequirements: this.extractRegulatoryRequirements(sectionText),
      complianceVerification: this.extractComplianceVerification(sectionText),
      sustainabilityRequirements: this.extractSustainabilityRequirements(sectionText),
      evaluationMethod: this.extractEvaluationMethod(sectionText)
    };
  }
  
  private extractRegulatoryRequirements(text: string): string {
    const regulatoryKeywords = [
      'regulation', 'law', 'requirement', 'EPA', 'environmental protection', 
      'Clean Air', 'Clean Water', 'hazardous', 'waste', 'disposal'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const regulatorySentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, regulatoryKeywords)
    );
    
    return regulatorySentences.join('. ');
  }
  
  private extractComplianceVerification(text: string): string {
    const complianceKeywords = [
      'compliance', 'verify', 'demonstrate', 'certification', 'audit',
      'documentation', 'report', 'monitor'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const complianceSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, complianceKeywords)
    );
    
    return complianceSentences.join('. ');
  }
  
  private extractSustainabilityRequirements(text: string): string {
    const sustainabilityKeywords = [
      'sustainability', 'sustainable', 'green', 'recycled', 'renewable',
      'energy efficiency', 'carbon', 'footprint', 'eco-friendly'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const sustainabilitySentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, sustainabilityKeywords)
    );
    
    return sustainabilitySentences.join('. ');
  }
  
  private extractEvaluationMethod(text: string): string {
    const evaluationKeywords = [
      'evaluate', 'assess', 'factor', 'consider', 'score', 'rating',
      'preference', 'priority'
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
      case 'Regulatory Requirements':
        if (!extractedInfo.regulatoryRequirements) return 1;
        
        // Check for specific regulations
        const specificRegulationCount = this.countKeywordOccurrences(
          extractedInfo.regulatoryRequirements,
          ['EPA', 'Clean Air Act', 'Clean Water Act', 'RCRA', 'CERCLA',
           'NEPA', 'ESA', 'TSCA']
        );
        
        // Check for general environmental terms
        const environmentalTermCount = this.countKeywordOccurrences(
          extractedInfo.regulatoryRequirements,
          ['hazardous', 'waste', 'disposal', 'emission', 'discharge',
           'pollution', 'contamination']
        );
        
        if (specificRegulationCount > 2 && environmentalTermCount > 2) return 5;
        if (specificRegulationCount > 0 && environmentalTermCount > 1) return 4;
        if (specificRegulationCount > 0 || environmentalTermCount > 1) return 3;
        return 2;
        
      case 'Compliance Verification':
        if (!extractedInfo.complianceVerification) return 1;
        
        // Check for verification methods
        const verificationMethodCount = this.countKeywordOccurrences(
          extractedInfo.complianceVerification,
          ['certification', 'audit', 'documentation', 'report', 'monitor',
           'inspection', 'verification']
        );
        
        if (verificationMethodCount > 2 && extractedInfo.complianceVerification.length > 100) return 5;
        if (verificationMethodCount > 1) return 4;
        if (verificationMethodCount > 0) return 3;
        return 2;
        
      case 'Sustainability Requirements':
        if (!extractedInfo.sustainabilityRequirements) return 2; // Not always required
        
        // Check for specific sustainability requirements
        const sustainabilityRequirementCount = this.countKeywordOccurrences(
          extractedInfo.sustainabilityRequirements,
          ['recycled', 'renewable', 'energy efficiency', 'carbon', 'footprint',
           'reduction', 'minimize', 'conserve']
        );
        
        // Check for certification requirements
        const hasCertificationRequirements = /certification|certified|LEED|Energy Star|Green Seal/i.test(
          extractedInfo.sustainabilityRequirements
        );
        
        if (sustainabilityRequirementCount > 2 && hasCertificationRequirements) return 5;
        if (sustainabilityRequirementCount > 1 || hasCertificationRequirements) return 4;
        if (sustainabilityRequirementCount > 0) return 3;
        return 2;
        
      case 'Evaluation Method':
        if (!extractedInfo.evaluationMethod) return 2; // Not always detailed
        
        // Check for specific evaluation criteria
        const hasEvaluationCriteria = /factor|weight|consider|score|rating|preference/i.test(
          extractedInfo.evaluationMethod
        );
        
        // Check if sustainability is an evaluation factor
        const isSustainabilityFactor = /sustainability|environmental|green/i.test(
          extractedInfo.evaluationMethod
        );
        
        if (hasEvaluationCriteria && isSustainabilityFactor) return 5;
        if (hasEvaluationCriteria || isSustainabilityFactor) return 4;
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
      case 'Regulatory Requirements':
        if (!extractedInfo.regulatoryRequirements)
          return 'No environmental regulatory requirements identified.';
        
        const specificRegulationCount = this.countKeywordOccurrences(
          extractedInfo.regulatoryRequirements,
          ['EPA', 'Clean Air Act', 'Clean Water Act', 'RCRA', 'CERCLA',
           'NEPA', 'ESA', 'TSCA']
        );
        
        const environmentalTermCount = this.countKeywordOccurrences(
          extractedInfo.regulatoryRequirements,
          ['hazardous', 'waste', 'disposal', 'emission', 'discharge',
           'pollution', 'contamination']
        );
        
        if (specificRegulationCount > 2 && environmentalTermCount > 2)
          return 'Comprehensive environmental regulatory requirements with specific regulations and environmental terms.';
        if (specificRegulationCount > 0 && environmentalTermCount > 1)
          return 'Good environmental requirements with some specific regulations and environmental terms.';
        if (specificRegulationCount > 0)
          return 'Some specific environmental regulations mentioned but could include more environmental terms.';
        if (environmentalTermCount > 1)
          return 'Environmental terms referenced but specific regulations could be clearer.';
        return 'Limited environmental regulatory information provided.';
        
      case 'Compliance Verification':
        if (!extractedInfo.complianceVerification)
          return 'No compliance verification methods identified.';
        
        const verificationMethodCount = this.countKeywordOccurrences(
          extractedInfo.complianceVerification,
          ['certification', 'audit', 'documentation', 'report', 'monitor',
           'inspection', 'verification']
        );
        
        if (verificationMethodCount > 2 && extractedInfo.complianceVerification.length > 100)
          return 'Comprehensive compliance verification methods with multiple specific approaches.';
        if (verificationMethodCount > 1)
          return 'Multiple compliance verification methods specified.';
        if (verificationMethodCount > 0)
          return 'Basic compliance verification method mentioned but could be more comprehensive.';
        return 'Limited compliance verification information provided.';
        
      case 'Sustainability Requirements':
        if (!extractedInfo.sustainabilityRequirements)
          return 'No sustainability requirements identified.';
        
        const sustainabilityRequirementCount = this.countKeywordOccurrences(
          extractedInfo.sustainabilityRequirements,
          ['recycled', 'renewable', 'energy efficiency', 'carbon', 'footprint',
           'reduction', 'minimize', 'conserve']
        );
        
        const hasCertificationRequirements = /certification|certified|LEED|Energy Star|Green Seal/i.test(
          extractedInfo.sustainabilityRequirements
        );
        
        if (sustainabilityRequirementCount > 2 && hasCertificationRequirements)
          return 'Comprehensive sustainability requirements with specific measures and certification requirements.';
        if (sustainabilityRequirementCount > 1)
          return 'Multiple sustainability requirements specified.';
        if (hasCertificationRequirements)
          return 'Sustainability certification requirements specified.';
        if (sustainabilityRequirementCount > 0)
          return 'Basic sustainability requirements mentioned but could be more comprehensive.';
        return 'Limited sustainability information provided.';
        
      case 'Evaluation Method':
        if (!extractedInfo.evaluationMethod)
          return 'No evaluation method for environmental considerations identified.';
        
        const hasEvaluationCriteria = /factor|weight|consider|score|rating|preference/i.test(
          extractedInfo.evaluationMethod
        );
        
        const isSustainabilityFactor = /sustainability|environmental|green/i.test(
          extractedInfo.evaluationMethod
        );
        
        if (hasEvaluationCriteria && isSustainabilityFactor)
          return 'Clear evaluation method with sustainability as a specific evaluation factor.';
        if (hasEvaluationCriteria)
          return 'Evaluation criteria specified but sustainability as a factor could be clearer.';
        if (isSustainabilityFactor)
          return 'Sustainability identified as an evaluation factor but scoring approach could be clearer.';
        return 'Limited evaluation information for environmental considerations provided.';
        
      default:
        return 'General evaluation.';
    }
  }
}
        