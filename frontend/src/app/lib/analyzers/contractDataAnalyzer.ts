import { SectionAnalyzer } from './baseAnalyzer';

export class ContractDataAnalyzer extends SectionAnalyzer {
  constructor() {
    super();
    this.sectionName = 'Contract Data Requirements';
    this.requiredElements = ['deliverables', 'formats', 'schedules', 'standards'];
    this.evaluationCriteria = [
      {
        name: 'Data Deliverables',
        description: 'Clear identification of required data deliverables'
      },
      {
        name: 'Format Requirements',
        description: 'Clear requirements for data formats and standards'
      },
      {
        name: 'Delivery Schedule',
        description: 'Clear schedules for data deliverables'
      },
      {
        name: 'Quality Standards',
        description: 'Required quality standards for data deliverables'
      }
    ];
  }
  
  protected extractInformation(sectionText: string): Record<string, string> {
    return {
      dataDeliverables: this.extractDataDeliverables(sectionText),
      formatRequirements: this.extractFormatRequirements(sectionText),
      deliverySchedule: this.extractDeliverySchedule(sectionText),
      qualityStandards: this.extractQualityStandards(sectionText)
    };
  }
  
  private extractDataDeliverables(text: string): string {
    const deliverableKeywords = [
      'deliverable', 'data', 'document', 'report', 'submit', 'provide',
      'CDRL', 'Contract Data Requirements List', 'DID'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const deliverableSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, deliverableKeywords)
    );
    
    return deliverableSentences.join('. ');
  }
  
  private extractFormatRequirements(text: string): string {
    const formatKeywords = [
      'format', 'standard', 'specification', 'template', 'file type',
      'electronic', 'digital', 'PDF', 'Microsoft Word', 'Excel'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const formatSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, formatKeywords)
    );
    
    return formatSentences.join('. ');
  }
  
  private extractDeliverySchedule(text: string): string {
    const scheduleKeywords = [
      'schedule', 'due date', 'frequency', 'timeline', 'delivery date',
      'submit by', 'monthly', 'quarterly', 'annual'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const scheduleSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, scheduleKeywords)
    );
    
    return scheduleSentences.join('. ');
  }
  
  private extractQualityStandards(text: string): string {
    const qualityKeywords = [
      'quality', 'standard', 'requirement', 'acceptance', 'review',
      'approve', 'reject', 'criteria'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const qualitySentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, qualityKeywords)
    );
    
    return qualitySentences.join('. ');
  }
  
  protected evaluateCriterion(
    criterion: { name: string; description: string },
    extractedInfo: Record<string, string>,
  ): number {
    switch (criterion.name) {
      case 'Data Deliverables':
        if (!extractedInfo.dataDeliverables) return 1;
        
        // Check for specific deliverable types
        const deliverableTypeCount = (extractedInfo.dataDeliverables.match(/report|document|plan|data|design|manual|specification/gi) || []).length;
        
        // Check for CDRL reference
        const hasCDRLReference = /CDRL|Contract Data Requirements List|DID|Data Item Description/i.test(
          extractedInfo.dataDeliverables
        );
        
        if (deliverableTypeCount > 3 && hasCDRLReference) return 5;
        if (deliverableTypeCount > 2 || (deliverableTypeCount > 0 && hasCDRLReference)) return 4;
        if (deliverableTypeCount > 0 || hasCDRLReference) return 3;
        return 2;
        
      case 'Format Requirements':
        if (!extractedInfo.formatRequirements) return 1;
        
        // Check for specific format types
        const formatTypeCount = this.countKeywordOccurrences(
          extractedInfo.formatRequirements,
          ['PDF', 'Word', 'Excel', 'PowerPoint', 'electronic', 'digital',
           'hard copy', 'paper', 'file type']
        );
        
        // Check for template or standard reference
        const hasTemplateReference = /template|standard|specification|conform to|in accordance with/i.test(
          extractedInfo.formatRequirements
        );
        
        if (formatTypeCount > 2 && hasTemplateReference) return 5;
        if (formatTypeCount > 0 && hasTemplateReference) return 4;
        if (formatTypeCount > 0 || hasTemplateReference) return 3;
        return 2;
        
      case 'Delivery Schedule':
        if (!extractedInfo.deliverySchedule) return 1;
        
        // Check for specific dates or timeframes
        const hasSpecificDates = /\d{1,2}\/\d{1,2}\/\d{2,4}|\d{1,2}\s+[a-z]+\s+\d{4}|20\d\d/i.test(
          extractedInfo.deliverySchedule
        );
        
        // Check for frequency terms
        const hasFrequencyTerms = /monthly|quarterly|weekly|bi-weekly|annual|semi-annual|days after/i.test(
          extractedInfo.deliverySchedule
        );
        
        if (hasSpecificDates && hasFrequencyTerms) return 5;
        if (hasSpecificDates || hasFrequencyTerms) return 4;
        if (extractedInfo.deliverySchedule.length > 50) return 3;
        return 2;
        
      case 'Quality Standards':
        if (!extractedInfo.qualityStandards) return 1;
        
        // Check for specific quality criteria
        const qualityCriteriaCount = this.countKeywordOccurrences(
          extractedInfo.qualityStandards,
          ['accurate', 'complete', 'current', 'consistent', 'error-free',
           'conform', 'compliance', 'acceptance criteria']
        );
        
        // Check for review process
        const hasReviewProcess = /review|approve|reject|revise|resubmit|acceptance/i.test(
          extractedInfo.qualityStandards
        );
        
        if (qualityCriteriaCount > 2 && hasReviewProcess) return 5;
        if (qualityCriteriaCount > 0 && hasReviewProcess) return 4;
        if (qualityCriteriaCount > 0 || hasReviewProcess) return 3;
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
      case 'Data Deliverables':
        if (!extractedInfo.dataDeliverables)
          return 'No data deliverable requirements identified.';
        
        const deliverableTypeCount = (extractedInfo.dataDeliverables.match(/report|document|plan|data|design|manual|specification/gi) || []).length;
        
        const hasCDRLReference = /CDRL|Contract Data Requirements List|DID|Data Item Description/i.test(
          extractedInfo.dataDeliverables
        );
        
        if (deliverableTypeCount > 3 && hasCDRLReference)
          return 'Comprehensive data deliverable requirements with multiple specific deliverable types and CDRL reference.';
        if (deliverableTypeCount > 2)
          return 'Multiple specific data deliverable types identified.';
        if (hasCDRLReference)
          return 'CDRL or Data Item Description referenced but specific deliverable types could be clearer.';
        if (deliverableTypeCount > 0)
          return 'Some data deliverable types mentioned but could be more comprehensive.';
        return 'Basic data deliverable information provided but lacks specificity.';
        
      case 'Format Requirements':
        if (!extractedInfo.formatRequirements)
          return 'No format requirements for data deliverables identified.';
        
        const formatTypeCount = this.countKeywordOccurrences(
          extractedInfo.formatRequirements,
          ['PDF', 'Word', 'Excel', 'PowerPoint', 'electronic', 'digital',
           'hard copy', 'paper', 'file type']
        );
        
        const hasTemplateReference = /template|standard|specification|conform to|in accordance with/i.test(
          extractedInfo.formatRequirements
        );
        
        if (formatTypeCount > 2 && hasTemplateReference)
          return 'Comprehensive format requirements with multiple specific formats and template/standard references.';
        if (formatTypeCount > 0 && hasTemplateReference)
          return 'Good format requirements with specific formats and template/standard references.';
        if (formatTypeCount > 0)
          return 'Specific format types mentioned but standards or templates could be clearer.';
        if (hasTemplateReference)
          return 'Template or standard requirements mentioned but specific formats could be clearer.';
        return 'Limited format requirement information provided.';
        
      case 'Delivery Schedule':
        if (!extractedInfo.deliverySchedule)
          return 'No delivery schedule for data deliverables identified.';
        
        const hasSpecificDates = /\d{1,2}\/\d{1,2}\/\d{2,4}|\d{1,2}\s+[a-z]+\s+\d{4}|20\d\d/i.test(
          extractedInfo.deliverySchedule
        );
        
        const hasFrequencyTerms = /monthly|quarterly|weekly|bi-weekly|annual|semi-annual|days after/i.test(
          extractedInfo.deliverySchedule
        );
        
        if (hasSpecificDates && hasFrequencyTerms)
          return 'Clear delivery schedule with specific dates and frequency requirements.';
        if (hasSpecificDates)
          return 'Specific delivery dates provided but frequency requirements could be clearer.';
        if (hasFrequencyTerms)
          return 'Delivery frequency requirements provided but specific dates could be clearer.';
        return 'Basic delivery schedule information provided but lacks specificity.';
        
      case 'Quality Standards':
        if (!extractedInfo.qualityStandards)
          return 'No quality standards for data deliverables identified.';
        
        const qualityCriteriaCount = this.countKeywordOccurrences(
          extractedInfo.qualityStandards,
          ['accurate', 'complete', 'current', 'consistent', 'error-free',
           'conform', 'compliance', 'acceptance criteria']
        );
        
        const hasReviewProcess = /review|approve|reject|revise|resubmit|acceptance/i.test(
          extractedInfo.qualityStandards
        );
        
        if (qualityCriteriaCount > 2 && hasReviewProcess)
          return 'Comprehensive quality standards with specific criteria and review process.';
        if (qualityCriteriaCount > 0 && hasReviewProcess)
          return 'Good quality standards with specific criteria and review process.';
        if (qualityCriteriaCount > 0 || hasReviewProcess)
          return 'Some quality criteria mentioned but could be more comprehensive.';
        return 'Basic quality standard information provided but lacks specificity.';
        
      default:
        return 'General comments for this criterion.';
    }
  }
}
