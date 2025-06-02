import { SectionAnalyzer } from './baseAnalyzer';

export class CertificationsAnalyzer extends SectionAnalyzer {
  constructor() {
    super();
    this.sectionName = 'Certifications and Representations';
    this.requiredElements = ['certifications', 'representations', 'compliance', 'forms'];
    this.evaluationCriteria = [
      {
        name: 'Required Certifications',
        description: 'Clear identification of required certifications'
      },
      {
        name: 'Required Representations',
        description: 'Clear identification of required representations'
      },
      {
        name: 'Submission Requirements',
        description: 'Clear requirements for submitting certifications and representations'
      },
      {
        name: 'Compliance References',
        description: 'References to applicable laws and regulations'
      }
    ];
  }
  
  protected extractInformation(sectionText: string): Record<string, string> {
    return {
      requiredCertifications: this.extractRequiredCertifications(sectionText),
      requiredRepresentations: this.extractRequiredRepresentations(sectionText),
      submissionRequirements: this.extractSubmissionRequirements(sectionText),
      complianceReferences: this.extractComplianceReferences(sectionText)
    };
  }
  
  private extractRequiredCertifications(text: string): string {
    const certificationKeywords = [
      'certification', 'certify', 'certificate', 'certified',
      'self-certification', 'attest'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const certificationSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, certificationKeywords)
    );
    
    return certificationSentences.join('. ');
  }
  
  private extractRequiredRepresentations(text: string): string {
    const representationKeywords = [
      'representation', 'represent', 'declare', 'declaration',
      'disclosure', 'disclose'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const representationSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, representationKeywords)
    );
    
    return representationSentences.join('. ');
  }
  
  private extractSubmissionRequirements(text: string): string {
    const submissionKeywords = [
      'submit', 'submission', 'provide', 'include', 'form',
      'SAM', 'Representations and Certifications', 'ORCA'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const submissionSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, submissionKeywords)
    );
    
    return submissionSentences.join('. ');
  }
  
  private extractComplianceReferences(text: string): string {
    const complianceKeywords = [
      'comply', 'compliance', 'law', 'regulation', 'statute',
      'FAR', 'Federal Acquisition Regulation', 'requirement'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const complianceSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, complianceKeywords)
    );
    
    return complianceSentences.join('. ');
  }
  
  protected evaluateCriterion(
    criterion: { name: string; description: string },
    extractedInfo: Record<string, string>
  ): number {
    switch (criterion.name) {
      case 'Required Certifications':
        if (!extractedInfo.requiredCertifications) return 1;
        
        // Check for specific certification types
        const certificationTypeCount = this.countKeywordOccurrences(
          extractedInfo.requiredCertifications,
          ['small business', 'disadvantaged', 'woman-owned', 'veteran',
           'HUBZone', 'size', 'status', 'registration']
        );
        
        // Check for specific requirements
        const certificationDetail = extractedInfo.requiredCertifications.length;
        
        if (certificationTypeCount > 3 && certificationDetail > 150) return 5;
        if (certificationTypeCount > 1 && certificationDetail > 80) return 4;
        if (certificationTypeCount > 0 || certificationDetail > 80) return 3;
        return 2;
        
      case 'Required Representations':
        if (!extractedInfo.requiredRepresentations) return 1;
        
        // Check for specific representation types
        const representationTypeCount = this.countKeywordOccurrences(
          extractedInfo.requiredRepresentations,
          ['ethics', 'integrity', 'responsibility', 'debarment', 'suspension',
           'conflict of interest', 'tax', 'criminal']
        );
        
        // Check for representation detail
        const representationDetail = extractedInfo.requiredRepresentations.length;
        
        if (representationTypeCount > 3 && representationDetail > 150) return 5;
        if (representationTypeCount > 1 && representationDetail > 80) return 4;
        if (representationTypeCount > 0 || representationDetail > 80) return 3;
        return 2;
        
      case 'Submission Requirements':
        if (!extractedInfo.submissionRequirements) return 1;
        
        // Check for specific submission methods
        const hasSubmissionMethod = /form|SAM|System for Award Management|ORCA|online|electronic|submit with/i.test(
          extractedInfo.submissionRequirements
        );
        
        // Check for timing requirements
        const hasTimingRequirement = /before|prior|with|at time of|by|date|proposal|offer|bid/i.test(
          extractedInfo.submissionRequirements
        );
        
        if (hasSubmissionMethod && hasTimingRequirement) return 5;
        if (hasSubmissionMethod || hasTimingRequirement) return 4;
        if (extractedInfo.submissionRequirements.length > 50) return 3;
        return 2;
        
      case 'Compliance References':
        if (!extractedInfo.complianceReferences) return 1;
        
        // Check for specific regulatory references
        const regulationCount = this.countKeywordOccurrences(
          extractedInfo.complianceReferences,
          ['FAR', 'DFARS', 'CFR', 'USC', 'Public Law', 'section', 'clause']
        );
        
        // Check for specific citation format
        const hasCitationFormat = /\d+\.\d+|\d+\s+CFR|\d+\s+USC|\d+-\d+/i.test(
          extractedInfo.complianceReferences
        );
        
        if (regulationCount > 2 && hasCitationFormat) return 5;
        if (regulationCount > 0 && hasCitationFormat) return 4;
        if (regulationCount > 0 || hasCitationFormat) return 3;
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
      case 'Required Certifications':
        if (!extractedInfo.requiredCertifications)
          return 'No certification requirements identified.';
        
        const certificationTypeCount = this.countKeywordOccurrences(
          extractedInfo.requiredCertifications,
          ['small business', 'disadvantaged', 'woman-owned', 'veteran',
           'HUBZone', 'size', 'status', 'registration']
        );
        
        const certificationDetail = extractedInfo.requiredCertifications.length;
        
        if (certificationTypeCount > 3 && certificationDetail > 150)
          return 'Comprehensive certification requirements with multiple specific types and detailed requirements.';
        if (certificationTypeCount > 1 && certificationDetail > 80)
          return 'Good certification requirements with specific types and some detail.';
        if (certificationTypeCount > 0)
          return 'Some specific certification types mentioned but could include more detail.';
        if (certificationDetail > 80)
          return 'Detailed certification information provided but specific types could be clearer.';
        return 'Basic certification information provided but lacks specificity.';
        
      case 'Required Representations':
        if (!extractedInfo.requiredRepresentations)
          return 'No representation requirements identified.';
        
        const representationTypeCount = this.countKeywordOccurrences(
          extractedInfo.requiredRepresentations,
          ['ethics', 'integrity', 'responsibility', 'debarment', 'suspension',
           'conflict of interest', 'tax', 'criminal']
        );
        
        const representationDetail = extractedInfo.requiredRepresentations.length;
        
        if (representationTypeCount > 3 && representationDetail > 150)
          return 'Comprehensive representation requirements with multiple specific types and detailed requirements.';
        if (representationTypeCount > 1 && representationDetail > 80)
          return 'Good representation requirements with specific types and some detail.';
        if (representationTypeCount > 0)
          return 'Some specific representation types mentioned but could include more detail.';
        if (representationDetail > 80)
          return 'Detailed representation information provided but specific types could be clearer.';
        return 'Basic representation information provided but lacks specificity.';
        
      case 'Submission Requirements':
        if (!extractedInfo.submissionRequirements)
          return 'No submission requirements for certifications and representations identified.';
        
        const hasSubmissionMethod = /form|SAM|System for Award Management|ORCA|online|electronic|submit with/i.test(
          extractedInfo.submissionRequirements
        );
        
        const hasTimingRequirement = /before|prior|with|at time of|by|date|proposal|offer|bid/i.test(
          extractedInfo.submissionRequirements
        );
        
        if (hasSubmissionMethod && hasTimingRequirement)
          return 'Clear submission requirements with specific method and timing for certifications and representations.';
        if (hasSubmissionMethod)
          return 'Submission method specified but timing requirements could be clearer.';
        if (hasTimingRequirement)
          return 'Submission timing requirements specified but method could be clearer.';
        return 'Basic submission information provided but lacks specificity.';
        
      case 'Compliance References':
        if (!extractedInfo.complianceReferences)
          return 'No compliance references identified.';
        
        const regulationCount = this.countKeywordOccurrences(
          extractedInfo.complianceReferences,
          ['FAR', 'DFARS', 'CFR', 'USC', 'Public Law', 'section', 'clause']
        );
        
        const hasCitationFormat = /\d+\.\d+|\d+\s+CFR|\d+\s+USC|\d+-\d+/i.test(
          extractedInfo.complianceReferences
        );
        
        if (regulationCount > 2 && hasCitationFormat)
          return 'Comprehensive compliance references with multiple specific regulations and proper citations.';
        if (regulationCount > 0 && hasCitationFormat)
          return 'Good compliance references with specific regulations and citations.';
        if (regulationCount > 0)
          return 'Some specific regulations mentioned but citations could be more precise.';
        if (hasCitationFormat)
          return 'Regulatory citations present but specific regulations could be clearer.';
        return 'Limited compliance reference information provided.';
        
      default:
        return 'General evaluation.';
    }
  }
}