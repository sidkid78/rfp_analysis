import { SectionAnalyzer } from './baseAnalyzer';

export class ProposalSubmissionAnalyzer extends SectionAnalyzer {
  constructor() {
    super();
    this.sectionName = 'Proposal Submission';
    this.requiredElements = ['format', 'method', 'required_documents'];
    this.evaluationCriteria = [
      {
        name: 'Format Instructions',
        description: 'Clarity of proposal format requirements'
      },
      {
        name: 'Submission Method',
        description: 'Clear definition of submission method and deadlines'
      },
      {
        name: 'Required Documents',
        description: 'Comprehensive list of required documents and attachments'
      }
    ];
  }
  
  protected extractInformation(sectionText: string): Record<string, string> {
    return {
      format: this.extractFormat(sectionText),
      submissionMethod: this.extractSubmissionMethod(sectionText),
      requiredDocuments: this.extractRequiredDocuments(sectionText),
      deadlines: this.extractDeadlines(sectionText)
    };
  }
  
  private extractFormat(text: string): string {
    const formatKeywords = [
      'format', 'layout', 'structure', 'organize', 'page limit', 'font', 'margin'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const formatSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, formatKeywords)
    );
    
    return formatSentences.join('. ');
  }
  
  private extractSubmissionMethod(text: string): string {
    const methodKeywords = [
      'submit', 'submission', 'deliver', 'email', 'portal', 'mail', 'upload'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const methodSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, methodKeywords)
    );
    
    return methodSentences.join('. ');
  }
  
  private extractRequiredDocuments(text: string): string {
    const documentKeywords = [
      'document', 'attachment', 'appendix', 'form', 'certificate', 'submission package'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const documentSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, documentKeywords)
    );
    
    return documentSentences.join('. ');
  }
  
  private extractDeadlines(text: string): string {
    const deadlineKeywords = [
      'deadline', 'due date', 'due by', 'no later than', 'by', 'dated'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const deadlineSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, deadlineKeywords)
    );
    
    return deadlineSentences.join('. ');
  }
  
  protected evaluateCriterion(
    criterion: { name: string; description: string },
    extractedInfo: Record<string, string>
  ): number {
    switch (criterion.name) {
      case 'Format Instructions':
        if (!extractedInfo.format) return 1;
        
        const formatSpecificity = this.countKeywordOccurrences(
          extractedInfo.format,
          ['page', 'font', 'margin', 'size', 'number', 'limit', 'section', 'heading']
        );
        
        return formatSpecificity > 5 ? 5 :
               (formatSpecificity > 3 ? 4 :
               (formatSpecificity > 1 ? 3 : 2));
        
      case 'Submission Method':
        if (!extractedInfo.submissionMethod || !extractedInfo.deadlines) return 1;
        
        // Check for specific submission methods
        const hasSpecificMethod = /email|portal|mail|upload|website|platform/.test(
          extractedInfo.submissionMethod.toLowerCase()
        );
        
        // Check for specific deadline
        const hasSpecificDeadline = /\d{1,2}\/\d{1,2}\/\d{2,4}|\d{1,2}\s+[a-z]+\s+\d{4}|20\d\d/.test(
          extractedInfo.deadlines.toLowerCase()
        );
        
        if (hasSpecificMethod && hasSpecificDeadline) return 5;
        if (hasSpecificMethod) return 4;
        if (hasSpecificDeadline) return 3;
        return 2;
        
      case 'Required Documents':
        if (!extractedInfo.requiredDocuments) return 1;
        
        // Count the number of document references
        const documentCount = (extractedInfo.requiredDocuments.match(/document|form|certificate|appendix|attachment/gi) || []).length;
        
        return documentCount > 6 ? 5 :
               (documentCount > 4 ? 4 :
               (documentCount > 2 ? 3 : 2));
        
      default:
        return 3;
    }
  }
  
  protected getCommentsForCriterion(
    criterion: { name: string; description: string },
    extractedInfo: Record<string, string>
  ): string {
    switch (criterion.name) {
      case 'Format Instructions':
        if (!extractedInfo.format)
          return 'No clear format instructions identified.';
        
        const formatSpecificity = this.countKeywordOccurrences(
          extractedInfo.format,
          ['page', 'font', 'margin', 'size', 'number', 'limit', 'section', 'heading']
        );
        
        if (formatSpecificity > 5)
          return 'Comprehensive format instructions with specific requirements for layout, structure, and presentation.';
        else if (formatSpecificity > 3)
          return 'Good format instructions with several specific requirements.';
        else if (formatSpecificity > 1)
          return 'Basic format instructions with limited specific requirements.';
        else
          return 'Minimal format instructions that may lead to inconsistent proposal submissions.';
        
      case 'Submission Method':
        if (!extractedInfo.submissionMethod)
          return 'No clear submission method identified.';
        if (!extractedInfo.deadlines)
          return 'No clear submission deadline identified.';
        
        const hasSpecificMethod = /email|portal|mail|upload|website|platform/.test(
          extractedInfo.submissionMethod.toLowerCase()
        );
        
        const hasSpecificDeadline = /\d{1,2}\/\d{1,2}\/\d{2,4}|\d{1,2}\s+[a-z]+\s+\d{4}|20\d\d/.test(
          extractedInfo.deadlines.toLowerCase()
        );
        
        if (hasSpecificMethod && hasSpecificDeadline)
          return 'Clear submission method and deadline specified.';
        else if (hasSpecificMethod)
          return 'Submission method specified but deadline could be clearer.';
        else if (hasSpecificDeadline)
          return 'Deadline specified but submission method could be clearer.';
        return 'Basic submission information provided but lacks specificity.';
        
      case 'Required Documents':
        if (!extractedInfo.requiredDocuments)
          return 'No clear list of required documents identified.';
        
        const documentCount = (extractedInfo.requiredDocuments.match(/document|form|certificate|appendix|attachment/gi) || []).length;
        
        if (documentCount > 6)
          return 'Comprehensive list of required documents with specific requirements.';
        else if (documentCount > 4)
          return 'Good list of required documents with several specific items.';
        else if (documentCount > 2)
          return 'Basic list of required documents with limited specificity.';
        return 'Minimal document requirements that may need clarification.';
        
      default:
        return 'General evaluation.';
    }
  }
}