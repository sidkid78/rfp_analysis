import { NextRequest, NextResponse } from 'next/server';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist/legacy/build/pdf.mjs';
import type { TextItem, PDFDocumentProxy } from 'pdfjs-dist/types/src/display/api';

// Set worker source - using CDN for better build compatibility
GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.379/pdf.worker.min.js';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const fileBuffer = await file.arrayBuffer();

    const loadingTask = getDocument({ data: fileBuffer });
    const pdfDocument: PDFDocumentProxy = await loadingTask.promise;

    let fullText = '';
    for (let i = 1; i <= pdfDocument.numPages; i++) {
      const page = await pdfDocument.getPage(i);
      const textContent = await page.getTextContent();
      
      // Type guard remains useful
      const isTextItem = (item: unknown): item is TextItem => 
        !!item && typeof item === 'object' && 'str' in item && typeof (item as { str: string }).str === 'string';

      const pageText = textContent.items
                       .filter(isTextItem)
                       .map((item: TextItem) => item.str)
                       .join(' ');
      fullText += pageText + '\n';
    }

    return NextResponse.json({ text: fullText.trim() });

  } catch (error) {
    console.error('Error parsing PDF with pdfjs-dist:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error during PDF parsing';
    return NextResponse.json(
      { error: `Failed to parse PDF: ${errorMessage}` },
      { status: 500 }
    );
  }
} 