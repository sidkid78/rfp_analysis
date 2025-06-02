// /app/lib/analyzers/cybersecurityAnalyzer.ts
import { SectionAnalyzer } from './baseAnalyzer';

export class CybersecurityAnalyzer extends SectionAnalyzer {
  constructor() {
    super();
    this.sectionName = 'Cybersecurity Plan';
    this.requiredElements = ['requirements', 'standards', 'controls', 'compliance'];
    this.evaluationCriteria = [
      {
        name: 'Security Requirements',
        description: 'Clear identification of cybersecurity requirements'
      },
      {
        name: 'Standards Compliance',
        description: 'Specific security standards and frameworks required'
      },
      {
        name: 'Security Controls',
        description: 'Specific security controls or safeguards required'
      },
      {
        name: 'Evaluation Method',
        description: 'How cybersecurity plan will be evaluated'
      }
    ];
  }
  
  protected extractInformation(sectionText: string): Record<string, string> {
    return {
      securityRequirements: this.extractSecurityRequirements(sectionText),
      standardsCompliance: this.extractStandardsCompliance(sectionText),
      securityControls: this.extractSecurityControls(sectionText),
      evaluationMethod: this.extractEvaluationMethod(sectionText)
    };
  }
  
  private extractSecurityRequirements(text: string): string {
    const securityKeywords = [
      'security', 'cybersecurity', 'requirement', 'protect', 'safeguard',
      'confidentiality', 'integrity', 'availability'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const securitySentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, securityKeywords)
    );
    
    return securitySentences.join('. ');
  }
  
  private extractStandardsCompliance(text: string): string {
    const standardsKeywords = [
      'standard', 'framework', 'NIST', 'FISMA', 'FedRAMP', 'ISO', '27001',
      'CMMC', 'SOC 2', 'compliance', 'comply'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const standardsSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, standardsKeywords)
    );
    
    return standardsSentences.join('. ');
  }
  
  private extractSecurityControls(text: string): string {
    const controlsKeywords = [
      'control', 'safeguard', 'measure', 'encryption', 'authentication',
      'access control', 'monitoring', 'incident response', 'backup'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const controlsSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, controlsKeywords)
    );
    
    return controlsSentences.join('. ');
  }
  
  private extractEvaluationMethod(text: string): string {
    const evaluationKeywords = [
      'evaluate', 'assess', 'review', 'factor', 'score', 'rating',
      'audit', 'examination'
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
      case 'Security Requirements':
        if (!extractedInfo.securityRequirements) return 1;
        
        // Check for specific requirements
        const securityRequirementCount = this.countKeywordOccurrences(
          extractedInfo.securityRequirements,
          ['protect', 'safeguard', 'ensure', 'maintain', 'implement',
           'confidentiality', 'integrity', 'availability']
        );
        
        // Check if data types are specified
        const hasDataTypeSpecification = /data|information|system|application|network|personal|sensitive|classified/i.test(
          extractedInfo.securityRequirements
        );
        
        if (securityRequirementCount > 3 && hasDataTypeSpecification) return 5;
        if (securityRequirementCount > 2 || (securityRequirementCount > 0 && hasDataTypeSpecification)) return 4;
        if (securityRequirementCount > 0 || hasDataTypeSpecification) return 3;
        return 2;
        
      case 'Standards Compliance':
        if (!extractedInfo.standardsCompliance) return 1;
        
        // Check for specific standards
        const standardCount = this.countKeywordOccurrences(
          extractedInfo.standardsCompliance,
          ['NIST', 'FISMA', 'FedRAMP', 'ISO', '27001', 'CMMC', 'SOC 2', 
           '800-53', '800-171']
        );
        
        // Check for compliance terms
        const hasComplianceRequirement = /comply|compliance|adhere|accordance|meet/i.test(
          extractedInfo.standardsCompliance
        );
        
        if (standardCount > 2 && hasComplianceRequirement) return 5;
        if (standardCount > 0 && hasComplianceRequirement) return 4;
        if (standardCount > 0 || hasComplianceRequirement) return 3;
        return 2;
        
      case 'Security Controls':
        if (!extractedInfo.securityControls) return 1;
        
        // Check for specific control types
        const controlTypeCount = this.countKeywordOccurrences(
          extractedInfo.securityControls,
          ['encryption', 'authentication', 'access control', 'monitoring',
           'incident response', 'backup', 'recovery', 'patch', 'update']
        );
        
        // Check control detail
        const controlDetail = extractedInfo.securityControls.length;
        
        if (controlTypeCount > 3 && controlDetail > 150) return 5;
        if (controlTypeCount > 1 && controlDetail > 100) return 4;
        if (controlTypeCount > 0) return 3;
        return 2;
        
      case 'Evaluation Method':
        if (!extractedInfo.evaluationMethod) return 1;
        
        // Check for evaluation approach
        const hasEvaluationApproach = /review|assess|evaluate|audit|examination|test/i.test(
          extractedInfo.evaluationMethod
        );
        
        // Check for specific criteria
        const hasCriteria = /criteria|factor|score|rating|acceptable|adequate/i.test(
          extractedInfo.evaluationMethod
        );
        
        if (hasEvaluationApproach && hasCriteria) return 5;
        if (hasEvaluationApproach || hasCriteria) return 4;
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
      case 'Security Requirements':
        if (!extractedInfo.securityRequirements)
          return 'No cybersecurity requirements identified.';
        
        const securityRequirementCount = this.countKeywordOccurrences(
          extractedInfo.securityRequirements,
          ['protect', 'safeguard', 'ensure', 'maintain', 'implement',
           'confidentiality', 'integrity', 'availability']
        );
        
        const hasDataTypeSpecification = /data|information|system|application|network|personal|sensitive|classified/i.test(
          extractedInfo.securityRequirements
        );
        
        if (securityRequirementCount > 3 && hasDataTypeSpecification)
          return 'Comprehensive cybersecurity requirements with specific protections and data types identified.';
        if (securityRequirementCount > 2)
          return 'Multiple specific cybersecurity requirements identified.';
        if (hasDataTypeSpecification)
          return 'Data types requiring protection are specified but security requirements could be more detailed.';
        if (securityRequirementCount > 0)
          return 'Basic security requirements mentioned but could be more comprehensive.';
        return 'Limited cybersecurity requirements provided.';
        
      case 'Standards Compliance':
        if (!extractedInfo.standardsCompliance)
          return 'No cybersecurity standards compliance requirements identified.';
        
        const standardCount = this.countKeywordOccurrences(
          extractedInfo.standardsCompliance,
          ['NIST', 'FISMA', 'FedRAMP', 'ISO', '27001', 'CMMC', 'SOC 2', 
           '800-53', '800-171']
        );
        
        const hasComplianceRequirement = /comply|compliance|adhere|accordance|meet/i.test(
          extractedInfo.standardsCompliance
        );
        
        if (standardCount > 2 && hasComplianceRequirement)
          return 'Comprehensive standards compliance requirements with multiple specific frameworks identified.';
        if (standardCount > 0 && hasComplianceRequirement)
          return 'Good standards compliance requirements with specific frameworks referenced.';
        if (standardCount > 0)
          return 'Specific security frameworks mentioned but compliance requirements could be clearer.';
        if (hasComplianceRequirement)
          return 'Compliance requirements mentioned but specific frameworks could be clearer.';
        return 'Limited standards compliance information provided.';
        
      case 'Security Controls':
        if (!extractedInfo.securityControls)
          return 'No security controls or safeguards identified.';
        
        const controlTypeCount = this.countKeywordOccurrences(
          extractedInfo.securityControls,
          ['encryption', 'authentication', 'access control', 'monitoring',
           'incident response', 'backup', 'recovery', 'patch', 'update']
        );
        
        const controlDetail = extractedInfo.securityControls.length;
        
        if (controlTypeCount > 3 && controlDetail > 150)
          return 'Comprehensive security controls with multiple specific control types and detailed requirements.';
        if (controlTypeCount > 1 && controlDetail > 100)
          return 'Good security controls with multiple control types identified.';
        if (controlTypeCount > 0)
          return 'Specific security control types mentioned but could be more comprehensive.';
        return 'Limited security control information provided.';
        
      case 'Evaluation Method':
        if (!extractedInfo.evaluationMethod)
          return 'No evaluation method for cybersecurity plan identified.';
        
        const hasEvaluationApproach = /review|assess|evaluate|audit|examination|test/i.test(
          extractedInfo.evaluationMethod
        );
        
        const hasCriteria = /criteria|factor|score|rating|acceptable|adequate/i.test(
          extractedInfo.evaluationMethod
        );
        
        if (hasEvaluationApproach && hasCriteria)
          return 'Clear evaluation method with specific approach and criteria for cybersecurity plan.';
        if (hasEvaluationApproach)
          return 'Evaluation approach specified but criteria could be clearer.';
        if (hasCriteria)
          return 'Evaluation criteria specified but approach could be clearer.';
        return 'Limited evaluation method information provided.';
        
      default:
        return 'General evaluation.';
    }
  }
}