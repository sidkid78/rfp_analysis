import { NextRequest, NextResponse } from 'next/server';
import mammoth from 'mammoth';

// This would require the mammoth package to be installed
// npm install mammoth

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }
    
    // Convert File to Buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    // Parse DOCX
    const result = await mammoth.extractRawText({ buffer });
    const text = result.value;
    
    return NextResponse.json({ text });
  } catch (error) {
    console.error('Error processing DOCX:', error);
    return NextResponse.json(
      { error: 'Failed to process DOCX file' },
      { status: 500 }
    );
  }
}