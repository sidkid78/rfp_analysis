import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { storeAnalysis } from '@/app/lib/analysisStore';

export async function POST(request: NextRequest) {
  try {
    const { document } = await request.json();
    
    if (!document || Object.keys(document).length === 0) {
      return NextResponse.json({ error: 'No RFP document provided' }, { status: 400 });
    }

    // Get API key from environment
    const apiKey = process.env.GOOGLE_GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ 
        error: 'Google Gemini API key not configured. Please add GOOGLE_GEMINI_API_KEY to your environment variables.' 
      }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Build the analysis prompt
    const sections = Object.entries(document)
      .filter(([, section]) => section && typeof section === 'object' && 'content' in section)
      .map(([name, section]) => `\n### ${name.toUpperCase()}\n${(section as { content: string }).content}`)
      .join('\n');

    const prompt = `
You are an expert RFP (Request for Proposal) analyst with 20+ years of experience in government contracting, procurement, and proposal evaluation. Please analyze the following RFP document comprehensively.

## RFP DOCUMENT SECTIONS:
${sections}

## ANALYSIS REQUIREMENTS:

Provide a detailed analysis focusing on:

1. **Overall Quality Assessment** (1-5 scale)
2. **Key Strengths** - What's working well
3. **Critical Issues** - What needs immediate attention  
4. **Missing Elements** - What's missing entirely
5. **Compliance Concerns** - Regulatory/legal issues
6. **Actionable Recommendations** - Specific improvements

## EVALUATION CRITERIA:

- **Clarity & Completeness**: Are requirements clear and complete?
- **Compliance**: Does it follow FAR/DFARS and regulations?
- **Feasibility**: Are requirements realistic and achievable?
- **Evaluation Process**: Is the methodology fair and transparent?
- **Risk Management**: Are risks identified and mitigated?

## FOCUS AREAS:

- Missing Information & Ambiguous Language
- Compliance Issues & Regulatory Concerns  
- Evaluation Fairness & Objective Criteria
- Market Readiness & Industry Alignment
- Cost Realism & Budget Expectations
- Timeline Feasibility & Risk Assessment

Provide specific, actionable recommendations that would improve RFP quality and increase successful proposal responses.

Return your analysis in a structured format with clear sections for: Executive Summary, Key Findings, Priority Recommendations, and Section-by-Section Analysis.
`;

    // Generate the analysis
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const analysisText = response.text();

    // Generate a unique ID for this analysis
    const analysisId = `ai-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    // Structure the response
    const analysisResults = {
      id: analysisId,
      type: 'ai-powered',
      timestamp: new Date().toISOString(),
      analysisText,
      document,
      metadata: {
        model: 'gemini-1.5-flash',
        sectionsAnalyzed: Object.keys(document).length,
        totalContent: sections.length
      }
    };

    // Store the analysis results for later retrieval
    storeAnalysis(analysisId, analysisResults);

    return NextResponse.json({
      id: analysisId,
      results: analysisResults,
      success: true
    });

  } catch (error) {
    console.error('AI Analysis error:', error);
    return NextResponse.json({
      error: `AI analysis failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
      success: false
    }, { status: 500 });
  }
} 