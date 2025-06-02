import { SectionAnalyzer } from './baseAnalyzer';

export class PriceCostProposalAnalyzer extends SectionAnalyzer {
  constructor() {
    super();
    this.sectionName = 'Price/Cost Proposal';
    this.requiredElements = ['pricing_structure', 'cost_estimation', 'cost_breakdown'];
    this.evaluationCriteria = [
      {
        name: 'Pricing Structure',
        description: 'Clarity of required pricing structure and format'
      },
      {
        name: 'Cost Elements',
        description: 'Comprehensiveness of cost elements to be included'
      },
      {
        name: 'Cost Principles',
        description: 'Alignment with applicable cost principles and regulations'
      },
      {
        name: 'Evaluation Methodology',
        description: 'Clear explanation of how cost proposals will be evaluated'
      }
    ];
  }
  
  protected extractInformation(sectionText: string): Record<string, string> {
    return {
      pricingStructure: this.extractPricingStructure(sectionText),
      costElements: this.extractCostElements(sectionText),
      costPrinciples: this.extractCostPrinciples(sectionText),
      evaluationMethodology: this.extractEvaluationMethodology(sectionText)
    };
  }
  
  private extractPricingStructure(text: string): string {
    const structureKeywords = [
      'price', 'cost', 'fee', 'structure', 'format', 'schedule', 'proposal'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const structureSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, structureKeywords)
    );
    
    return structureSentences.join('. ');
  }
  
  private extractCostElements(text: string): string {
    const elementKeywords = [
      'direct cost', 'indirect cost', 'overhead', 'G&A', 'labor', 'material',
      'travel', 'equipment', 'subcontract', 'ODC', 'other direct cost'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const elementSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, elementKeywords)
    );
    
    return elementSentences.join('. ');
  }
  
  private extractCostPrinciples(text: string): string {
    const principleKeywords = [
      'principle', 'regulation', 'FAR', 'reasonable', 'allowable', 'allocable',
      'compliance', 'DCAA', 'CAS', 'cost accounting'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const principleSentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, principleKeywords)
    );
    
    return principleSentences.join('. ');
  }
  
  private extractEvaluationMethodology(text: string): string {
    const methodologyKeywords = [
      'evaluate', 'assessment', 'analysis', 'review', 'reasonableness',
      'realism', 'comparison', 'best value'
    ];
    
    const sentences = text.split(/[.!?]+/);
    const methodologySentences = sentences.filter(sentence => 
      this.containsKeywords(sentence, methodologyKeywords)
    );
    
    return methodologySentences.join('. ');
  }
  
  protected evaluateCriterion(
    criterion: { name: string; description: string },
    extractedInfo: Record<string, string>,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    sectionText: string
  ): number {
    switch (criterion.name) {
      case 'Pricing Structure':
        if (!extractedInfo.pricingStructure) return 1;
        
        const hasSpecificFormat = /format|template|form|spreadsheet|table/.test(
          extractedInfo.pricingStructure.toLowerCase()
        );
        
        const structureDetail = extractedInfo.pricingStructure.length;
        
        if (hasSpecificFormat && structureDetail > 150) return 5;
        if (hasSpecificFormat) return 4;
        if (structureDetail > 100) return 3;
        return 2;
        
      case 'Cost Elements':
        if (!extractedInfo.costElements) return 1;
        
        const elementCount = this.countKeywordOccurrences(
          extractedInfo.costElements,
          ['direct', 'indirect', 'overhead', 'G&A', 'labor', 'material',
           'travel', 'equipment', 'subcontract', 'ODC']
        );
        
        return elementCount > 6 ? 5 :
               (elementCount > 4 ? 4 :
               (elementCount > 2 ? 3 : 2));
        
      case 'Cost Principles':
        if (!extractedInfo.costPrinciples) return 1;
        
        const principleCount = this.countKeywordOccurrences(
          extractedInfo.costPrinciples,
          ['principle', 'FAR', 'reasonable', 'allowable', 'allocable',
           'compliance', 'DCAA', 'CAS']
        );
        
        return principleCount > 4 ? 5 :
               (principleCount > 2 ? 4 :
               (principleCount > 0 ? 3 : 2));
        
      case 'Evaluation Methodology':
        if (!extractedInfo.evaluationMethodology) return 1;
        
        const methodologyDetail = extractedInfo.evaluationMethodology.length;
        const hasSpecificApproach = /realism|reasonableness|best value|comparison/.test(
          extractedInfo.evaluationMethodology.toLowerCase()
        );
        
        if (hasSpecificApproach && methodologyDetail > 100) return 5;
        if (hasSpecificApproach) return 4;
        if (methodologyDetail > 50) return 3;
        return 2;
        
      default:
        return 3;
    }
  }
  
  protected getCommentsForCriterion(
    criterion: { name: string; description: string },
    extractedInfo: Record<string, string>,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    sectionText: string
  ): string {
    switch (criterion.name) {
      case 'Pricing Structure':
        if (!extractedInfo.pricingStructure)
          return 'No clear pricing structure identified.';
        
        const hasSpecificFormat = /format|template|form|spreadsheet|table/.test(
          extractedInfo.pricingStructure.toLowerCase()
        );
        
        const structureDetail = extractedInfo.pricingStructure.length;
        
        if (hasSpecificFormat && structureDetail > 150)
          return 'Comprehensive pricing structure with specific format requirements and detailed guidance.';
        else if (hasSpecificFormat)
          return 'Clear pricing format specified but could include more detailed guidance.';
        else if (structureDetail > 100)
          return 'Detailed pricing guidance provided but specific format could be clearer.';
        else
          return 'Basic pricing information provided but lacks specific structure and format.';
        
      case 'Cost Elements':
        if (!extractedInfo.costElements)
          return 'No clear cost elements identified.';
        
        const elementCount = this.countKeywordOccurrences(
          extractedInfo.costElements,
          ['direct', 'indirect', 'overhead', 'G&A', 'labor', 'material',
           'travel', 'equipment', 'subcontract', 'ODC']
        );
        
        if (elementCount > 6)
          return 'Comprehensive list of cost elements with specific categories and subcategories.';
        else if (elementCount > 4)
          return 'Good coverage of major cost elements with some detail.';
        else if (elementCount > 2)
          return 'Basic cost elements mentioned but could be more comprehensive.';
        else
          return 'Minimal mention of specific cost elements which could lead to inconsistent proposals.';
        
      case 'Cost Principles':
        if (!extractedInfo.costPrinciples)
          return 'No reference to cost principles or regulations.';
        
        const principleCount = this.countKeywordOccurrences(
          extractedInfo.costPrinciples,
          ['principle', 'FAR', 'reasonable', 'allowable', 'allocable',
           'compliance', 'DCAA', 'CAS']
        );
        
        if (principleCount > 4)
          return 'Strong emphasis on cost principles with specific regulatory references.';
        else if (principleCount > 2)
          return 'Good reference to cost principles with some regulatory guidance.';
        else if (principleCount > 0)
          return 'Basic mention of cost principles but lacks specific regulatory references.';
        else
          return 'Limited or no reference to applicable cost principles and regulations.';
        
      case 'Evaluation Methodology':
        if (!extractedInfo.evaluationMethodology)
          return 'No clear methodology for evaluating cost proposals.';
        
        const methodologyDetail = extractedInfo.evaluationMethodology.length;
        const hasSpecificApproach = /realism|reasonableness|best value|comparison/.test(
          extractedInfo.evaluationMethodology.toLowerCase()
        );
        
        if (hasSpecificApproach && methodologyDetail > 100)
          return 'Comprehensive explanation of cost evaluation methodology with specific approaches.';
        else if (hasSpecificApproach)
          return 'Clear cost evaluation approach specified but could include more detail.';
        else if (methodologyDetail > 50)
          return 'Some information on cost evaluation provided but specific approach could be clearer.';
        else
          return 'Limited information on how cost proposals will be evaluated.';
        
      default:
        return 'General evaluation.';
    }
  }
}