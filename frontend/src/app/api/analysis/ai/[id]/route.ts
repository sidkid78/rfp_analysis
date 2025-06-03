import { NextRequest, NextResponse } from 'next/server';
import { getAnalysis, storeAnalysis } from '@/app/lib/analysisStore';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    // Check if analysis exists in store
    const analysis = getAnalysis(id);
    
    if (!analysis) {
      return NextResponse.json(
        { error: 'AI analysis not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      results: analysis,
      success: true
    });
    
  } catch (error) {
    console.error('Error retrieving AI analysis:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve analysis' },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const analysis = await request.json();
    
    // Store the analysis
    storeAnalysis(id, analysis);
    
    return NextResponse.json({
      success: true,
      message: 'Analysis stored successfully'
    });
    
  } catch (error) {
    console.error('Error storing AI analysis:', error);
    return NextResponse.json(
      { error: 'Failed to store analysis' },
      { status: 500 }
    );
  }
} 