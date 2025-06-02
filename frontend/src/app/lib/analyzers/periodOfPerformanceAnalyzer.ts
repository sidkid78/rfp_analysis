import { SectionAnalyzer } from './baseAnalyzer';

export class PerformanceAnalyzer extends SectionAnalyzer {
  constructor() {
    super();
    this.sectionName = 'Period of Performance';
    this.requiredElements = ['start_date', 'end_date', 'milestones', 'deadlines'];
    this.evaluationCriteria = [
      {
        name: 'Timeline Clarity',
        description: 'Clarity and specificity of performance timeline'
      },
      {
        name: 'Milestone Definition',
        description: 'Clear definition of project milestones and deliverable dates'
      },
      {
        name: 'Flexibility',
        description: 'Appropriate provisions for timeline adjustments if needed'
      },
      {
        name: 'Alignment with Scope',
        description: 'Appropriate timeframe for the project scope'
      }
    ];
  }
  
  protected extractInformation(sectionText: string): Record<string, string> {
    return {
      performancePeriod: this.extractPerformancePeriod(sectionText),
      startDate: this.extractStartDate(sectionText),
      endDate: this.extractEndDate(sectionText),
      milestones: this.extractMilestones(sectionText),
      flexibility: this.extractFlexibility(sectionText)
    };
  }
  
  private extractPerformancePeriod(text: string): string {
    const periodKeywords = [
      'period of performance', 'contract period', 'performance period', 
      'duration', 'timeframe', 'period'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const periodSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, periodKeywords)
    );
    
    return periodSentences.join('. ');
  }
  
  private extractStartDate(text: string): string {
    const startKeywords = [
      'start date', 'commence', 'begin', 'effective date', 'start'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const startSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, startKeywords)
    );
    
    return startSentences.join('. ');
  }
  
  private extractEndDate(text: string): string {
    const endKeywords = [
      'end date', 'completion date', 'conclude', 'expire', 'termination'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const endSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, endKeywords)
    );
    
    return endSentences.join('. ');
  }
  
  private extractMilestones(text: string): string {
    const milestoneKeywords = [
      'milestone', 'deliverable date', 'phase', 'schedule', 'deadline', 'due date'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const milestoneSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, milestoneKeywords)
    );
    
    return milestoneSentences.join('. ');
  }
  
  private extractFlexibility(text: string): string {
    const flexibilityKeywords = [
      'extension', 'option', 'adjust', 'modify', 'change', 'flexibility'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const flexibilitySentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, flexibilityKeywords)
    );
    
    return flexibilitySentences.join('. ');
  }
  
  protected evaluateCriterion(
    criterion: { name: string; description: string },
    extractedInfo: Record<string, string>,
    sectionText: string
  ): number {
    switch (criterion.name) {
      case 'Timeline Clarity':
        // Check if specific dates or durations are provided
        const hasStartDate = /\d{1,2}\/\d{1,2}\/\d{2,4}|\d{1,2}\s+[a-z]+\s+\d{4}|20\d\d/.test(
          extractedInfo.startDate || ''
        );
        
        const hasEndDate = /\d{1,2}\/\d{1,2}\/\d{2,4}|\d{1,2}\s+[a-z]+\s+\d{4}|20\d\d/.test(
          extractedInfo.endDate || ''
        );
        
        const hasDuration = /\d+\s+(?:day|week|month|year)|(?:day|week|month|year)s/.test(
          extractedInfo.performancePeriod || ''
        );
        
        if (hasStartDate && hasEndDate) return 5;
        if ((hasStartDate || hasEndDate) && hasDuration) return 4;
        if (hasStartDate || hasEndDate || hasDuration) return 3;
        return extractedInfo.performancePeriod ? 2 : 1;
        
      case 'Milestone Definition':
        if (!extractedInfo.milestones) return 1;
        
        // Check for specific milestone dates
        const hasMilestoneDates = /\d{1,2}\/\d{1,2}\/\d{2,4}|\d{1,2}\s+[a-z]+\s+\d{4}|20\d\d/.test(
          extractedInfo.milestones
        );
        
        // Check for multiple milestones
        const milestoneCount = (extractedInfo.milestones.match(/milestone|phase|deliverable/gi) || []).length;
        
        if (hasMilestoneDates && milestoneCount > 3) return 5;
        if (hasMilestoneDates && milestoneCount > 1) return 4;
        if (hasMilestoneDates || milestoneCount > 1) return 3;
        return 2;
        
      case 'Flexibility':
        if (!extractedInfo.flexibility) return 2; // Not necessarily bad if no flexibility mentioned
        
        const flexibilityScore = this.countKeywordOccurrences(
          extractedInfo.flexibility,
          ['extension', 'option', 'adjust', 'modify', 'change', 'if needed']
        );
        
        return flexibilityScore > 2 ? 5 :
               (flexibilityScore > 0 ? 4 : 3);
        
      case 'Alignment with Scope':
        // This is harder to evaluate automatically - would need more context
        // Look for references to scope or work volume
        const scopeReferences = this.countKeywordOccurrences(
          sectionText,
          ['scope', 'volume', 'appropriate', 'sufficient', 'adequate']
        );
        
        return scopeReferences > 2 ? 4 : 3; // Default to medium score without more context
        
      default:
        return 3;
    }
  }
  
  protected getCommentsForCriterion(
    criterion: { name: string; description: string },
    extractedInfo: Record<string, string>,
    sectionText: string
  ): string {
    switch (criterion.name) {
      case 'Timeline Clarity':
        const hasStartDate = /\d{1,2}\/\d{1,2}\/\d{2,4}|\d{1,2}\s+[a-z]+\s+\d{4}|20\d\d/.test(
          extractedInfo.startDate || ''
        );
        
        const hasEndDate = /\d{1,2}\/\d{1,2}\/\d{2,4}|\d{1,2}\s+[a-z]+\s+\d{4}|20\d\d/.test(
          extractedInfo.endDate || ''
        );
        
        const hasDuration = /\d+\s+(?:day|week|month|year)|(?:day|week|month|year)s/.test(
          extractedInfo.performancePeriod || ''
        );
        
        if (hasStartDate && hasEndDate)
          return 'Clear start and end dates are specified with exact dates.';
        if ((hasStartDate || hasEndDate) && hasDuration)
          return 'Performance period is defined with specific duration and at least one fixed date.';
        if (hasStartDate || hasEndDate || hasDuration)
          return 'Some timeline information is provided but could be more specific.';
        if (extractedInfo.performancePeriod)
          return 'Period of performance is mentioned but lacks specific dates or duration.';
        return 'No clear timeline information provided.';
        
      case 'Milestone Definition':
        if (!extractedInfo.milestones)
          return 'No milestone information identified.';
        
        const hasMilestoneDates = /\d{1,2}\/\d{1,2}\/\d{2,4}|\d{1,2}\s+[a-z]+\s+\d{4}|20\d\d/.test(
          extractedInfo.milestones
        );
        
        const milestoneCount = (extractedInfo.milestones.match(/milestone|phase|deliverable/gi) || []).length;
        
        if (hasMilestoneDates && milestoneCount > 3)
          return 'Comprehensive milestone schedule with specific dates for multiple project phases.';
        if (hasMilestoneDates && milestoneCount > 1)
          return 'Multiple milestones with specific dates are identified.';
        if (hasMilestoneDates)
          return 'At least one milestone has a specific date, but more detail would be beneficial.';
        if (milestoneCount > 1)
          return 'Multiple milestones mentioned but without specific dates.';
        return 'Limited milestone information provided.';
        
      case 'Flexibility':
        if (!extractedInfo.flexibility)
          return 'No flexibility provisions identified. Consider adding extension options if appropriate.';
        
        const flexibilityScore = this.countKeywordOccurrences(
          extractedInfo.flexibility,
          ['extension', 'option', 'adjust', 'modify', 'change', 'if needed']
        );
        
        if (flexibilityScore > 2)
          return 'Strong flexibility provisions with multiple options for timeline adjustments if needed.';
        if (flexibilityScore > 0)
          return 'Some flexibility provisions included, which is appropriate.';
        return 'Limited flexibility mentioned but could be enhanced.';
        
      case 'Alignment with Scope':
        // This requires more context than is easily available
        const scopeReferences = this.countKeywordOccurrences(
          sectionText,
          ['scope', 'volume', 'appropriate', 'sufficient', 'adequate']
        );
        
        if (scopeReferences > 2)
          return 'Performance period appears well-aligned with project scope based on explicit references.';
        if (scopeReferences > 0)
          return 'Some consideration of alignment between timeline and scope is evident.';
        return 'No explicit alignment between performance period and project scope is mentioned.';
        
      default:
        return 'General evaluation.';
    }
  }
}