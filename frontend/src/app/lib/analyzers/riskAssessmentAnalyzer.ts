import { SectionAnalyzer } from './baseAnalyzer';

export class RiskAssessmentAnalyzer extends SectionAnalyzer {
  constructor() {
    super();
    this.sectionName = 'Risk Assessment';
    this.requiredElements = ['identification', 'mitigation', 'monitoring', 'analysis'];
    this.evaluationCriteria = [
      {
        name: 'Risk Identification',
        description: 'Requirements for identifying project risks'
      },
      {
        name: 'Risk Mitigation',
        description: 'Requirements for mitigating identified risks'
      },
      {
        name: 'Risk Monitoring',
        description: 'Requirements for ongoing risk monitoring and management'
      },
      {
        name: 'Evaluation Method',
        description: 'How the risk assessment will be evaluated'
      }
    ];
  }
  
  protected extractInformation(sectionText: string): Record<string, string> {
    return {
      riskIdentification: this.extractRiskIdentification(sectionText),
      riskMitigation: this.extractRiskMitigation(sectionText),
      riskMonitoring: this.extractRiskMonitoring(sectionText),
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
  
  private extractRiskMonitoring(text: string): string {
    const monitoringKeywords = [
      'monitor', 'monitoring', 'track', 'tracking', 'report',
      'reporting', 'update', 'review', 'oversight'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const monitoringSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, monitoringKeywords)
    );
    
    return monitoringSentences.join('. ');
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
      case 'Risk Identification':
        if (!extractedInfo.riskIdentification) return 1;
        
        // Check for specific risk types
        const riskTypeCount = this.countKeywordOccurrences(
          extractedInfo.riskIdentification,
          ['technical', 'schedule', 'cost', 'performance', 'resource',
           'quality', 'management', 'external']
        );
        
        // Check for identification methodology
        const hasMethodology = /method|process|procedure|approach|matrix|register|log/i.test(
          extractedInfo.riskIdentification
        );
        
        if (riskTypeCount > 3 && hasMethodology) return 5;
        if (riskTypeCount > 1 && hasMethodology) return 4;
        if (riskTypeCount > 0 || hasMethodology) return 3;
        return 2;
        
      case 'Risk Mitigation':
        if (!extractedInfo.riskMitigation) return 1;
        
        // Check for specific mitigation approaches
        const mitigationApproachCount = this.countKeywordOccurrences(
          extractedInfo.riskMitigation,
          ['avoid', 'accept', 'transfer', 'mitigate', 'control',
           'contingency', 'plan', 'strategy']
        );
        
        // Check for mitigation detail
        const mitigationDetail = extractedInfo.riskMitigation.length;
        
        if (mitigationApproachCount > 2 && mitigationDetail > 120) return 5;
        if (mitigationApproachCount > 1 && mitigationDetail > 80) return 4;
        if (mitigationApproachCount > 0 || mitigationDetail > 80) return 3;
        return 2;
        
      case 'Risk Monitoring':
        if (!extractedInfo.riskMonitoring) return 1;
        
        // Check for monitoring frequency
        const hasMonitoringFrequency = /continuous|ongoing|regular|periodic|weekly|monthly|quarterly/i.test(
          extractedInfo.riskMonitoring
        );
        
        // Check for monitoring process
        const hasMonitoringProcess = /process|procedure|approach|report|review|meeting|update/i.test(
          extractedInfo.riskMonitoring
        );
        
        if (hasMonitoringFrequency && hasMonitoringProcess) return 5;
        if (hasMonitoringFrequency || hasMonitoringProcess) return 4;
        if (extractedInfo.riskMonitoring.length > 50) return 3;
        return 2;
        
      case 'Evaluation Method':
        if (!extractedInfo.evaluationMethod) return 1;
        
        // Check for specific evaluation criteria
        const evaluationCriteriaCount = this.countKeywordOccurrences(
          extractedInfo.evaluationMethod,
          ['thoroughness', 'completeness', 'effectiveness', 'practicality',
           'realism', 'adequacy', 'comprehensiveness']
        );
        
        // Check for evaluation approach
        const hasEvaluationApproach = /weight|factor|score|rating|point|relative importance/i.test(
          extractedInfo.evaluationMethod
        );
        
        if (evaluationCriteriaCount > 1 && hasEvaluationApproach) return 5;
        if (evaluationCriteriaCount > 0 || hasEvaluationApproach) return 4;
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
      case 'Risk Identification':
        if (!extractedInfo.riskIdentification)
          return 'No risk identification requirements identified.';
        
        const riskTypeCount = this.countKeywordOccurrences(
          extractedInfo.riskIdentification,
          ['technical', 'schedule', 'cost', 'performance', 'resource',
           'quality', 'management', 'external']
        );
        
        const hasMethodology = /method|process|procedure|approach|matrix|register|log/i.test(
          extractedInfo.riskIdentification
        );
        
        if (riskTypeCount > 3 && hasMethodology)
          return 'Comprehensive risk identification requirements with multiple risk types and identification methodology.';
        if (riskTypeCount > 1 && hasMethodology)
          return 'Good risk identification requirements with several risk types and identification methodology.';
        if (riskTypeCount > 0)
          return 'Some specific risk types mentioned but identification methodology could be clearer.';
        if (hasMethodology)
          return 'Risk identification methodology mentioned but specific risk types could be clearer.';
        return 'Basic risk identification information provided but lacks specificity.';
        
      case 'Risk Mitigation':
        if (!extractedInfo.riskMitigation)
          return 'No risk mitigation requirements identified.';
        
        const mitigationApproachCount = this.countKeywordOccurrences(
          extractedInfo.riskMitigation,
          ['avoid', 'accept', 'transfer', 'mitigate', 'control',
           'contingency', 'plan', 'strategy']
        );
        
        const mitigationDetail = extractedInfo.riskMitigation.length;
        
        if (mitigationApproachCount > 2 && mitigationDetail > 120)
          return 'Comprehensive risk mitigation requirements with multiple specific approaches and detailed instructions.';
        if (mitigationApproachCount > 1 && mitigationDetail > 80)
          return 'Good risk mitigation requirements with multiple approaches and some detail.';
        if (mitigationApproachCount > 0)
          return 'Some specific mitigation approaches mentioned but could include more detail.';
        if (mitigationDetail > 80)
          return 'Detailed mitigation information provided but specific approaches could be clearer.';
        return 'Basic risk mitigation information provided but lacks specificity.';
        
      case 'Risk Monitoring':
        if (!extractedInfo.riskMonitoring)
          return 'No risk monitoring requirements identified.';
        
        const hasMonitoringFrequency = /continuous|ongoing|regular|periodic|weekly|monthly|quarterly/i.test(
          extractedInfo.riskMonitoring
        );
        
        const hasMonitoringProcess = /process|procedure|approach|report|review|meeting|update/i.test(
          extractedInfo.riskMonitoring
        );
        
        if (hasMonitoringFrequency && hasMonitoringProcess)
          return 'Clear risk monitoring requirements with monitoring frequency and process specified.';
        if (hasMonitoringFrequency)
          return 'Risk monitoring frequency specified but process could be clearer.';
        if (hasMonitoringProcess)
          return 'Risk monitoring process specified but frequency could be clearer.';
        return 'Basic risk monitoring information provided but lacks specificity.';
        
      case 'Evaluation Method':
        if (!extractedInfo.evaluationMethod)
          return 'No evaluation method for risk assessment identified.';
        
        const evaluationCriteriaCount = this.countKeywordOccurrences(
          extractedInfo.evaluationMethod,
          ['thoroughness', 'completeness', 'effectiveness', 'practicality',
           'realism', 'adequacy', 'comprehensiveness']
        );
        
        const hasEvaluationApproach = /weight|factor|score|rating|point|relative importance/i.test(
          extractedInfo.evaluationMethod
        );
        
        if (evaluationCriteriaCount > 1 && hasEvaluationApproach)
          return 'Clear evaluation method with specific criteria and scoring approach for risk assessment.';
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