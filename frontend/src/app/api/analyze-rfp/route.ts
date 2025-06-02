import { NextRequest, NextResponse } from 'next/server';
import { RFPAnalyzer } from '@/app/lib/rfpAnalyzer';
import { RFPDocument } from '@/app/types';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { document } = data as { document: RFPDocument };
    
    if (!document) {
      return NextResponse.json(
        { error: 'No RFP document provided' },
        { status: 400 }
      );
    }
    
    const analyzer = new RFPAnalyzer();
    const results = analyzer.analyzeRFP(document);
    
    // In a real implementation, you might save the results to a database
    // and return an ID for later retrieval
    
    return NextResponse.json({ 
      success: true,
      results,
      id: 'analysis-' + Date.now() // Placeholder ID
    });
  } catch (error) {
    console.error('Error analyzing RFP:', error);
    return NextResponse.json(
      { error: 'Failed to analyze RFP document' },
      { status: 500 }
    );
  }
}