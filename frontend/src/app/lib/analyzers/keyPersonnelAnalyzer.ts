import { SectionAnalyzer } from './baseAnalyzer';

export class KeyPersonnelAnalyzer extends SectionAnalyzer {
  constructor() {
    super();
    this.sectionName = 'Key Personnel';
    this.requiredElements = ['roles', 'qualifications', 'responsibilities', 'availability'];
    this.evaluationCriteria = [
      {
        name: 'Role Definition',
        description: 'Clear definition of key personnel roles and responsibilities'
      },
      {
        name: 'Qualification Requirements',
        description: 'Specificity of required qualifications and experience'
      },
      {
        name: 'Substitution Provisions',
        description: 'Clear process for personnel substitutions or changes'
      },
      {
        name: 'Commitment Requirements',
        description: 'Clear requirements for personnel availability and commitment'
      }
    ];
  }
  
  protected extractInformation(sectionText: string): Record<string, string> {
    return {
      roles: this.extractRoles(sectionText),
      qualifications: this.extractQualifications(sectionText),
      substitution: this.extractSubstitution(sectionText),
      commitment: this.extractCommitment(sectionText)
    };
  }
  
  private extractRoles(text: string): string {
    const roleKeywords = [
      'role', 'position', 'title', 'responsibility', 'duty', 'function', 'job'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const roleSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, roleKeywords)
    );
    
    return roleSentences.join('. ');
  }
  
  private extractQualifications(text: string): string {
    const qualificationKeywords = [
      'qualification', 'experience', 'education', 'skill', 'certification',
      'degree', 'knowledge', 'competency', 'expertise'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const qualificationSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, qualificationKeywords)
    );
    
    return qualificationSentences.join('. ');
  }
  
  private extractSubstitution(text: string): string {
    const substitutionKeywords = [
      'substitution', 'replacement', 'change', 'alternate', 'approval'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const substitutionSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, substitutionKeywords)
    );
    
    return substitutionSentences.join('. ');
  }
  
  private extractCommitment(text: string): string {
    const commitmentKeywords = [
      'commitment', 'availability', 'dedication', 'time', 'allocation', 
      'full-time', 'part-time', 'percentage'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const commitmentSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, commitmentKeywords)
    );
    
    return commitmentSentences.join('. ');
  }
  
  protected evaluateCriterion(
    criterion: { name: string; description: string },
    extractedInfo: Record<string, string>,
  ): number {
    switch (criterion.name) {
      case 'Role Definition':
        if (!extractedInfo.roles) return 1;
        
        // Check for specific role titles
        const hasSpecificRoles = /project manager|developer|engineer|analyst|director|lead|architect/i.test(
          extractedInfo.roles
        );
        
        // Check if responsibilities are detailed
        const responsibilityDetail = extractedInfo.roles.length;
        
        if (hasSpecificRoles && responsibilityDetail > 200) return 5;
        if (hasSpecificRoles && responsibilityDetail > 100) return 4;
        if (hasSpecificRoles || responsibilityDetail > 100) return 3;
        return 2;
        
      case 'Qualification Requirements':
        if (!extractedInfo.qualifications) return 1;
        
        // Check for specific qualification metrics
        const hasSpecificQualifications = /\d+\s+years|degree|certification|bachelor|master|phd|professional/i.test(
          extractedInfo.qualifications
        );
        
        // Check qualification detail
        const qualificationDetail = extractedInfo.qualifications.length;
        
        if (hasSpecificQualifications && qualificationDetail > 200) return 5;
        if (hasSpecificQualifications && qualificationDetail > 100) return 4;
        if (hasSpecificQualifications || qualificationDetail > 100) return 3;
        return 2;
        
      case 'Substitution Provisions':
        if (!extractedInfo.substitution) return 2; // Not always required
        
        // Check for approval process
        const hasApprovalProcess = /approval|approve|written|consent|prior/i.test(
          extractedInfo.substitution
        );
        
        // Check for equivalency requirements
        const hasEquivalencyRequirements = /equivalent|equal|same|similar|comparable/i.test(
          extractedInfo.substitution
        );
        
        if (hasApprovalProcess && hasEquivalencyRequirements) return 5;
        if (hasApprovalProcess || hasEquivalencyRequirements) return 4;
        if (extractedInfo.substitution.length > 50) return 3;
        return 2;
        
      case 'Commitment Requirements':
        if (!extractedInfo.commitment) return 2; // Not always detailed
        
        // Check for specific time commitments
        const hasSpecificCommitment = /\d+%|\d+\s+hours|full-time|part-time/i.test(
          extractedInfo.commitment
        );
        
        // Check for duration commitments
        const hasDurationCommitment = /duration|throughout|entire|period of performance/i.test(
          extractedInfo.commitment
        );
        
        if (hasSpecificCommitment && hasDurationCommitment) return 5;
        if (hasSpecificCommitment || hasDurationCommitment) return 4;
        if (extractedInfo.commitment.length > 50) return 3;
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
      case 'Role Definition':
        if (!extractedInfo.roles)
          return 'No clear role definitions identified.';
        
        const hasSpecificRoles = /project manager|developer|engineer|analyst|director|lead|architect/i.test(
          extractedInfo.roles
        );
        
        const responsibilityDetail = extractedInfo.roles.length;
        
        if (hasSpecificRoles && responsibilityDetail > 200)
          return 'Comprehensive definition of key personnel roles with detailed responsibilities.';
        if (hasSpecificRoles && responsibilityDetail > 100)
          return 'Good definition of key roles with responsibilities outlined.';
        if (hasSpecificRoles)
          return 'Specific roles are identified but responsibilities could be more detailed.';
        if (responsibilityDetail > 100)
          return 'Responsibilities are described but specific role titles could be clearer.';
        return 'Basic role information provided but lacks specificity.';
        
      case 'Qualification Requirements':
        if (!extractedInfo.qualifications)
          return 'No qualification requirements identified.';
        
        const hasSpecificQualifications = /\d+\s+years|degree|certification|bachelor|master|phd|professional/i.test(
          extractedInfo.qualifications
        );
        
        const qualificationDetail = extractedInfo.qualifications.length;
        
        if (hasSpecificQualifications && qualificationDetail > 200)
          return 'Comprehensive qualification requirements with specific experience, education, and certification details.';
        if (hasSpecificQualifications && qualificationDetail > 100)
          return 'Good qualification requirements with specific metrics for experience or education.';
        if (hasSpecificQualifications)
          return 'Specific qualification metrics mentioned but could be more comprehensive.';
        if (qualificationDetail > 100)
          return 'Qualifications are described but specific requirements could be clearer.';
        return 'Basic qualification information provided but lacks specific metrics.';
        
      case 'Substitution Provisions':
        if (!extractedInfo.substitution)
          return 'No substitution provisions identified. Consider adding a process for personnel changes.';
        
        const hasApprovalProcess = /approval|approve|written|consent|prior/i.test(
          extractedInfo.substitution
        );
        
        const hasEquivalencyRequirements = /equivalent|equal|same|similar|comparable/i.test(
          extractedInfo.substitution
        );
        
        if (hasApprovalProcess && hasEquivalencyRequirements)
          return 'Clear substitution provisions with approval process and qualification equivalency requirements.';
        if (hasApprovalProcess)
          return 'Substitution approval process defined, but equivalency requirements could be clearer.';
        if (hasEquivalencyRequirements)
          return 'Substitution equivalency requirements defined, but approval process could be clearer.';
        return 'Basic substitution information provided but lacks specific process details.';
        
      case 'Commitment Requirements':
        if (!extractedInfo.commitment)
          return 'No commitment requirements identified. Consider specifying expected availability.';
        
        const hasSpecificCommitment = /\d+%|\d+\s+hours|full-time|part-time/i.test(
          extractedInfo.commitment
        );
        
        const hasDurationCommitment = /duration|throughout|entire|period of performance/i.test(
          extractedInfo.commitment
        );
        
        if (hasSpecificCommitment && hasDurationCommitment)
          return 'Clear commitment requirements with specific time allocation and duration expectations.';
        if (hasSpecificCommitment)
          return 'Specific time commitment requirements defined, but duration could be clearer.';
        if (hasDurationCommitment)
          return 'Duration commitment requirements defined, but specific time allocation could be clearer.';
        return 'Basic commitment information provided but lacks specific details.';
        
      default:
        return 'General evaluation.';
    }
  }
}