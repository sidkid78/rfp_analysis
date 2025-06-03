import { RFPDocument, RFPSection } from '@/app/types';

// These imports would need to be installed in the project
// npm install pdf-parse mammoth docx

interface FileProcessorResult {
  document: RFPDocument;
  error?: string;
}

/**
 * Process uploaded RFP document files and extract sections
 */
export class FileProcessor {
  /**
   * Process a file and extract RFP sections
   * @param file File object to process
   * @returns Extracted RFP document with sections
   */
  static async processFile(file: File): Promise<FileProcessorResult> {
    try {
      const fileType = this.getFileType(file);
      let text = '';
      
      switch (fileType) {
        case 'pdf':
          text = await this.processPdf(file);
          break;
        case 'docx':
          text = await this.processDocx(file);
          break;
        case 'doc':
          text = await this.processDoc();
          break;
        case 'txt':
          text = await this.processTxt(file);
          break;
        case 'md':
        case 'markdown':
          text = await this.processMarkdown(file);
          break;
        default:
          return {
            document: {},
            error: 'Unsupported file type. Please upload PDF, DOCX, DOC, TXT, or Markdown files.'
          };
      }
      
      // Extract sections from the text
      const document = this.extractSections(text);
      
      return { document };
    } catch (error) {
      console.error('Error processing file:', error);
      return {
        document: {},
        error: `Error processing file: ${error instanceof Error ? error.message : 'Unknown error'}`
      };
    }
  }
  
  /**
   * Get the file type from the file name or type
   * @param file File object
   * @returns File type string
   */
  private static getFileType(file: File): string {
    const fileName = file.name.toLowerCase();
    
    if (fileName.endsWith('.pdf')) return 'pdf';
    if (fileName.endsWith('.docx')) return 'docx';
    if (fileName.endsWith('.doc')) return 'doc';
    if (fileName.endsWith('.txt')) return 'txt';
    if (fileName.endsWith('.md')) return 'md';
    if (fileName.endsWith('.markdown')) return 'markdown';
    
    // Fallback to MIME type check
    const mimeType = file.type.toLowerCase();
    
    if (mimeType === 'application/pdf') return 'pdf';
    if (mimeType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') return 'docx';
    if (mimeType === 'application/msword') return 'doc';
    if (mimeType === 'text/plain') return 'txt';
    
    return 'unknown';
  }
  
  /**
   * Process PDF files
   * @param file PDF file to process
   * @returns Extracted text content
   */
  private static async processPdf(file: File): Promise<string> {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await fetch('/api/parse-pdf', {
      method: 'POST',
      body: formData
    });
    
    if (!response.ok) {
      throw new Error('Failed to parse PDF');
    }
    
    const data = await response.json();
    return data.text;
  }
  
  /**
   * Process DOCX files
   * @param file DOCX file to process
   * @returns Extracted text content
   */
  private static async processDocx(file: File): Promise<string> {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await fetch('/api/parse-docx', {
      method: 'POST',
      body: formData
    });
    
    if (!response.ok) {
      throw new Error('Failed to parse DOCX');
    }
    
    const data = await response.json();
    return data.text;
  }
  
  /**
   * Process DOC files (legacy Word format)
   * @returns Extracted text content
   */
  private static async processDoc(): Promise<string> {
    // For now, we'll return an error for DOC files
    throw new Error('Legacy DOC format is not supported. Please convert to DOCX and try again.');
  }
  
  /**
   * Process plain text files
   * @param file Text file to process
   * @returns Extracted text content
   */
  private static async processTxt(file: File): Promise<string> {
    return await file.text();
  }

  /**
   * Process Markdown files
   * @param file Markdown file to process
   * @returns Extracted text content
   */
  private static async processMarkdown(file: File): Promise<string> {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await fetch('/api/parse-markdown', {
      method: 'POST',
      body: formData
    });
    
    if (!response.ok) {
      throw new Error('Failed to parse Markdown');
    }
    
    const data = await response.json();
    return data.text;
  }
  
  /**
   * Extract RFP sections from document text
   * @param text Full document text
   * @returns RFP document with extracted sections
   */
  private static extractSections(text: string): RFPDocument {
    const document: RFPDocument = {};
    
    // Define section patterns to look for (enhanced for markdown templates)
    const sectionPatterns = [
      { name: 'introduction', pattern: /^##?\s*1\.?\s*introduction/i },
      { name: 'sow', pattern: /^##?\s*2\.?\s*statement\s+of\s+work\s*\(?sow\)?/i },
      { name: 'proposalSubmission', pattern: /^##?\s*5\.?\s*proposal\s+submission/i },
      { name: 'evaluationCriteria', pattern: /^##?\s*3\.?\s*evaluation\s+criteria/i },
      { name: 'contractTerms', pattern: /^##?\s*4\.?\s*contract\s+terms/i },
      { name: 'priceCostProposal', pattern: /^##?\s*16\.?\s*price\/cost\s+proposal/i },
      { name: 'periodOfPerformance', pattern: /^##?\s*18\.?\s*period\s+of\s+performance/i },
      { name: 'keyPersonnel', pattern: /^##?\s*6\.?\s*key\s+personnel/i },
      { name: 'pastPerformance', pattern: /^##?\s*7\.?\s*past\s+performance/i },
      { name: 'subcontractingPlan', pattern: /^##?\s*9\.?\s*subcontracting\s+plan/i },
      { name: 'environmentalConsiderations', pattern: /^##?\s*10\.?\s*environmental\s+considerations/i },
      { name: 'cybersecurityPlan', pattern: /^##?\s*8\.?\s*cybersecurity\s+plan/i },
      { name: 'supplyChainRisk', pattern: /^##?\s*11\.?\s*supply\s+chain\s+risk/i },
      { name: 'contractDataRequirements', pattern: /^##?\s*15\.?\s*contract\s+data/i },
      { name: 'certificationsRepresentations', pattern: /^##?\s*17\.?\s*certifications/i },
      { name: 'technicalApproach', pattern: /^##?\s*13\.?\s*technical\s+approach/i },
      { name: 'managementApproach', pattern: /^##?\s*12\.?\s*management\s+approach/i },
      { name: 'riskAssessment', pattern: /^##?\s*14\.?\s*risk\s+assessment/i }
    ];
    
    // Split text into lines for analysis
    const lines = text.split(/\r?\n/);
    
    // Initial section detection
    const sectionMarkers: Array<{ name: string; startIndex: number; endIndex?: number }> = [];
    
    // First pass: identify section headings
    lines.forEach((line, index) => {
      for (const { name, pattern } of sectionPatterns) {
        if (pattern.test(line)) {
          sectionMarkers.push({ name, startIndex: index });
          break;
        }
      }
    });
    
    // Second pass: establish section boundaries
    sectionMarkers.forEach((section, index) => {
      if (index < sectionMarkers.length - 1) {
        section.endIndex = sectionMarkers[index + 1].startIndex;
      } else {
        section.endIndex = lines.length;
      }
    });
    
    // Extract section content
    sectionMarkers.forEach(section => {
      if (section.endIndex !== undefined) {
        const sectionText = lines.slice(section.startIndex, section.endIndex).join('\n').trim();
        document[section.name as keyof RFPDocument] = { content: sectionText } as RFPSection;
      }
    });
    
    return document;
  }
}