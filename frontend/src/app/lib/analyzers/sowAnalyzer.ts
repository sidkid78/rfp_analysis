import { SectionAnalyzer } from './baseAnalyzer';

export class SOWAnalyzer extends SectionAnalyzer {
  constructor() {
    super();
    this.sectionName = 'Statement of Work';
    this.requiredElements = ['tasks', 'deliverables', 'performance_standards'];
    this.evaluationCriteria = [
      {
        name: 'Task Clarity',
        description: 'Clarity and specificity of required tasks'
      },
      {
        name: 'Deliverables Definition',
        description: 'Clear definition of expected deliverables'
      },
      {
        name: 'Performance Standards',
        description: 'Specificity of performance standards and metrics'
      },
      {
        name: 'Technical Requirements',
        description: 'Clarity of technical requirements and specifications'
      }
    ];
  }
  
  protected extractInformation(sectionText: string): Record<string, string> {
    return {
      tasks: this.extractTasks(sectionText),
      deliverables: this.extractDeliverables(sectionText),
      performanceStandards: this.extractPerformanceStandards(sectionText),
      technicalRequirements: this.extractTechnicalRequirements(sectionText)
    };
  }
  
  private extractTasks(text: string): string {
    const taskKeywords = [
      'task', 'activity', 'perform', 'conduct', 'execute', 'responsible for'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const taskSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, taskKeywords)
    );
    
    return taskSentences.join('. ');
  }
  
  private extractDeliverables(text: string): string {
    const deliverableKeywords = [
      'deliverable', 'deliver', 'provide', 'submission', 'output', 'report'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const deliverableSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, deliverableKeywords)
    );
    
    return deliverableSentences.join('. ');
  }
  
  private extractPerformanceStandards(text: string): string {
    const standardKeywords = [
      'standard', 'metric', 'measure', 'performance', 'quality', 'acceptance criteria'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const standardSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, standardKeywords)
    );
    
    return standardSentences.join('. ');
  }
  
  private extractTechnicalRequirements(text: string): string {
    const techKeywords = [
      'technical', 'specification', 'requirement', 'technology', 'system', 'architecture'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const techSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, techKeywords)
    );
    
    return techSentences.join('. ');
  }
  
  protected evaluateCriterion(
    criterion: { name: string; description: string },
    extractedInfo: Record<string, string>
  ): number {
    switch (criterion.name) {
      case 'Task Clarity':
        if (!extractedInfo.tasks) return 1;
        return extractedInfo.tasks.length > 200 ? 5 : 
               (extractedInfo.tasks.length > 100 ? 4 : 3);
               
      case 'Deliverables Definition':
        if (!extractedInfo.deliverables) return 1;
        return extractedInfo.deliverables.length > 150 ? 5 : 
               (extractedInfo.deliverables.length > 80 ? 4 : 3);
               
      case 'Performance Standards':
        if (!extractedInfo.performanceStandards) return 1;
        return extractedInfo.performanceStandards.length > 100 ? 5 : 
               (extractedInfo.performanceStandards.length > 50 ? 4 : 3);
               
      case 'Technical Requirements':
        if (!extractedInfo.technicalRequirements) return 1;
        return extractedInfo.technicalRequirements.length > 120 ? 5 : 
               (extractedInfo.technicalRequirements.length > 60 ? 4 : 3);
               
      default:
        return 3;
    }
  }
  
  protected getCommentsForCriterion(
    criterion: { name: string; description: string },
    extractedInfo: Record<string, string>
  ): string {
    switch (criterion.name) {
      case 'Task Clarity':
        if (!extractedInfo.tasks)
          return 'No clear tasks identified.';
        return extractedInfo.tasks.length > 200 ?
          'Tasks are clearly defined with specific responsibilities.' :
          'Tasks are present but could benefit from more detailed descriptions.';
          
      case 'Deliverables Definition':
        if (!extractedInfo.deliverables)
          return 'No clear deliverables identified.';
        return extractedInfo.deliverables.length > 150 ?
          'Deliverables are well-defined with clear expectations.' :
          'Deliverables are mentioned but specifications could be more detailed.';
          
      case 'Performance Standards':
        if (!extractedInfo.performanceStandards)
          return 'No performance standards identified.';
        return extractedInfo.performanceStandards.length > 100 ?
          'Clear performance standards with specific metrics provided.' :
          'Some performance standards mentioned but metrics could be more specific.';
          
      case 'Technical Requirements':
        if (!extractedInfo.technicalRequirements)
          return 'No technical requirements identified.';
        return extractedInfo.technicalRequirements.length > 120 ?
          'Technical requirements are clearly specified.' :
          'Technical requirements are mentioned but could be more comprehensive.';
          
      default:
        return 'General evaluation.';
    }
  }
}
