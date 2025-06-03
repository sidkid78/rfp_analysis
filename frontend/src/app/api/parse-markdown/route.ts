import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    // Check if it's a markdown file
    if (!file.name.endsWith('.md') && !file.name.endsWith('.markdown')) {
      return NextResponse.json({ error: 'File must be a markdown (.md) file' }, { status: 400 });
    }

    // Read the file content as text
    const text = await file.text();

    return NextResponse.json({ text: text.trim() });

  } catch (error) {
    console.error('Error parsing Markdown:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error during Markdown parsing';
    return NextResponse.json(
      { error: `Failed to parse Markdown: ${errorMessage}` },
      { status: 500 }
    );
  }
} 