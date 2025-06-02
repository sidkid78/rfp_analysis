import { SectionAnalyzer } from './baseAnalyzer';

export class ManagementApproachAnalyzer extends SectionAnalyzer {
  constructor() {
    super();
    this.sectionName = 'Management Approach';
    this.requiredElements = ['structure', 'personnel', 'processes', 'oversight'];
    this.evaluationCriteria = [
      {
        name: 'Organizational Structure',
        description: 'Requirements for organizational structure and management hierarchy'
      },
      {
        name: 'Key Personnel',
        description: 'Requirements for key management personnel'
      },
      {
        name: 'Management Processes',
        description: 'Requirements for management processes and procedures'
      },
      {
        name: 'Evaluation Method',
        description: 'How the management approach will be evaluated'
      }
    ];
  }
  
  protected extractInformation(sectionText: string): Record<string, string> {
    return {
      organizationalStructure: this.extractOrganizationalStructure(sectionText),
      keyPersonnel: this.extractKeyPersonnel(sectionText),
      managementProcesses: this.extractManagementProcesses(sectionText),
      evaluationMethod: this.extractEvaluationMethod(sectionText)
    };
  }
  
  private extractOrganizationalStructure(text: string): string {
    const structureKeywords = [
      'structure', 'organization', 'hierarchy', 'chart', 'team',
      'reporting', 'authority', 'responsibility'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const structureSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, structureKeywords)
    );
    
    return structureSentences.join('. ');
  }
  
  private extractKeyPersonnel(text: string): string {
    const personnelKeywords = [
      'personnel', 'manager', 'director', 'lead', 'supervisor',
      'experience', 'qualification', 'role', 'responsibility'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const personnelSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, personnelKeywords)
    );
    
    return personnelSentences.join('. ');
  }
  
  private extractManagementProcesses(text: string): string {
    const processKeywords = [
      'process', 'procedure', 'methodology', 'approach', 'system',
      'oversight', 'monitor', 'control', 'quality'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const processSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, processKeywords)
    );
    
    return processSentences.join('. ');
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
      case 'Organizational Structure':
        if (!extractedInfo.organizationalStructure) return 1;
        
        // Check for specific structure elements
        const structureElementCount = this.countKeywordOccurrences(
          extractedInfo.organizationalStructure,
          ['chart', 'diagram', 'hierarchy', 'team', 'department',
           'division', 'unit', 'reporting relationship']
        );
        
        // Check for detail level
        const structureDetail = extractedInfo.organizationalStructure.length;
        
        if (structureElementCount > 2 && structureDetail > 150) return 5;
        if (structureElementCount > 1 && structureDetail > 100) return 4;
        if (structureElementCount > 0 || structureDetail > 100) return 3;
        return 2;
        
      case 'Key Personnel':
        if (!extractedInfo.keyPersonnel) return 1;
        
        // Check for specific roles
        const roleCount = (extractedInfo.keyPersonnel.match(/manager|director|lead|supervisor|executive/gi) || []).length;
        
        // Check for qualification requirements
        const hasQualificationRequirements = /experience|qualification|skill|knowledge|education|certification/i.test(
          extractedInfo.keyPersonnel
        );
        
        if (roleCount > 2 && hasQualificationRequirements) return 5;
        if (roleCount > 0 && hasQualificationRequirements) return 4;
        if (roleCount > 0 || hasQualificationRequirements) return 3;
        return 2;
        
      case 'Management Processes':
        if (!extractedInfo.managementProcesses) return 1;
        
        // Check for specific process types
        const processTypeCount = this.countKeywordOccurrences(
          extractedInfo.managementProcesses,
          ['quality', 'risk', 'schedule', 'performance', 'communication',
           'issue', 'change', 'resource']
        );
        
        // Check for process detail
        const processDetail = extractedInfo.managementProcesses.length;
        
        if (processTypeCount > 3 && processDetail > 150) return 5;
        if (processTypeCount > 1 && processDetail > 100) return 4;
        if (processTypeCount > 0 || processDetail > 100) return 3;
        return 2;
        
      case 'Evaluation Method':
        if (!extractedInfo.evaluationMethod) return 1;
        
        // Check for specific evaluation criteria
        const evaluationCriteriaCount = this.countKeywordOccurrences(
          extractedInfo.evaluationMethod,
          ['effectiveness', 'efficiency', 'feasibility', 'adequacy',
           'comprehensiveness', 'reliability']
        );
        
        // Check for evaluation approach
        const hasEvaluationApproach = /weight|factor|score|rating|point|relative importance/i.test(
          extractedInfo.evaluationMethod
        );
        
        if (evaluationCriteriaCount > 2 && hasEvaluationApproach) return 5;
        if (evaluationCriteriaCount > 0 && hasEvaluationApproach) return 4;
        if (evaluationCriteriaCount > 0 || hasEvaluationApproach) return 3;
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
      case 'Organizational Structure':
        if (!extractedInfo.organizationalStructure)
          return 'No organizational structure requirements identified.';
        
        const structureElementCount = this.countKeywordOccurrences(
          extractedInfo.organizationalStructure,
          ['chart', 'diagram', 'hierarchy', 'team', 'department',
           'division', 'unit', 'reporting relationship']
        );
        
        const structureDetail = extractedInfo.organizationalStructure.length;
        
        if (structureElementCount > 2 && structureDetail > 150)
          return 'Comprehensive organizational structure requirements with multiple specific elements and detailed instructions.';
        if (structureElementCount > 1 && structureDetail > 100)
          return 'Good organizational structure requirements with specific elements and some detail.';
        if (structureElementCount > 0)
          return 'Some specific organizational structure elements mentioned but could include more detail.';
        if (structureDetail > 100)
          return 'Detailed organizational structure information provided but specific elements could be clearer.';
        return 'Basic organizational structure information provided but lacks specificity.';
        
      case 'Key Personnel':
        if (!extractedInfo.keyPersonnel)
          return 'No key personnel requirements identified.';
        
        const roleCount = (extractedInfo.keyPersonnel.match(/manager|director|lead|supervisor|executive/gi) || []).length;
        
        const hasQualificationRequirements = /experience|qualification|skill|knowledge|education|certification/i.test(
          extractedInfo.keyPersonnel
        );
        
        if (roleCount > 2 && hasQualificationRequirements)
          return 'Comprehensive key personnel requirements with multiple specific roles and qualification requirements.';
        if (roleCount > 0 && hasQualificationRequirements)
          return 'Good key personnel requirements with specific roles and qualification requirements.';
        if (roleCount > 0)
          return 'Specific management roles mentioned but qualification requirements could be clearer.';
        if (hasQualificationRequirements)
          return 'Management qualification requirements mentioned but specific roles could be clearer.';
        return 'Basic key personnel information provided but lacks specificity.';
        
      case 'Management Processes':
        if (!extractedInfo.managementProcesses)
          return 'No management process requirements identified.';
        
        const processTypeCount = this.countKeywordOccurrences(
          extractedInfo.managementProcesses,
          ['quality', 'risk', 'schedule', 'performance', 'communication',
           'issue', 'change', 'resource']
        );
        
        const processDetail = extractedInfo.managementProcesses.length;
        
        if (processTypeCount > 3 && processDetail > 150)
          return 'Comprehensive management process requirements with multiple specific process types and detailed instructions.';
        if (processTypeCount > 1 && processDetail > 100)
          return 'Good management process requirements with specific process types and some detail.';
        if (processTypeCount > 0)
          return 'Some specific management process types mentioned but could include more detail.';
        if (processDetail > 100)
          return 'Detailed management process information provided but specific types could be clearer.';
        return 'Basic management process information provided but lacks specificity.';
        
      case 'Evaluation Method':
        if (!extractedInfo.evaluationMethod)
          return 'No evaluation method for management approach identified.';
        
        const evaluationCriteriaCount = this.countKeywordOccurrences(
          extractedInfo.evaluationMethod,
          ['effectiveness', 'efficiency', 'feasibility', 'adequacy',
           'comprehensiveness', 'reliability']
        );
        
        const hasEvaluationApproach = /weight|factor|score|rating|point|relative importance/i.test(
          extractedInfo.evaluationMethod
        );
        
        if (evaluationCriteriaCount > 2 && hasEvaluationApproach)
          return 'Clear evaluation method with multiple specific criteria and scoring approach for management approach.';
        if (evaluationCriteriaCount > 0 && hasEvaluationApproach)
          return 'Good evaluation method with some specific criteria and scoring approach.';
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