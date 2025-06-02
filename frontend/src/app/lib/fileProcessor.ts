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
        default:
          return {
            document: {},
            error: 'Unsupported file type. Please upload PDF, DOCX, DOC, or TXT files.'
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
   * Extract RFP sections from document text
   * @param text Full document text
   * @returns RFP document with extracted sections
   */
  private static extractSections(text: string): RFPDocument {
    const document: RFPDocument = {};
    
    // Define section patterns to look for
    const sectionPatterns = [
      { name: 'introduction', pattern: /\b(?:introduction|1\.0\s+introduction|1\s+introduction|i\.\s+introduction)\b/i },
      { name: 'sow', pattern: /\b(?:statement\s+of\s+work|scope\s+of\s+work|sow|2\.0\s+sow|2\s+sow|ii\.\s+sow)\b/i },
      { name: 'proposalSubmission', pattern: /\b(?:proposal\s+submission|submission\s+instructions|submission\s+requirements)\b/i },
      { name: 'evaluationCriteria', pattern: /\b(?:evaluation\s+criteria|evaluation\s+factors|proposal\s+evaluation)\b/i }
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