import { GoogleGenerativeAI, GenerativeModel } from '@google/generative-ai';
import { RFPDocument, AnalysisResults } from '@/app/types';

export class GeminiRFPAnalyzer {
  private genAI: GoogleGenerativeAI;
  private model: GenerativeModel;

  constructor() {
    const apiKey = process.env.GOOGLE_GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('Google Gemini API key not found in environment variables');
    }
    
    this.genAI = new GoogleGenerativeAI(apiKey);
    this.model = this.genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  }

  async analyzeRFP(rfpDocument: RFPDocument): Promise<AnalysisResults> {
    try {
      const prompt = this.buildAnalysisPrompt(rfpDocument);
      
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      // Parse the AI response into our structure
      return this.parseGeminiResponse(text, rfpDocument);
    } catch (error) {
      console.error('Gemini analysis error:', error);
      throw new Error(`AI analysis failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  private buildAnalysisPrompt(rfpDocument: RFPDocument): string {
    const sections = Object.entries(rfpDocument)
      .filter(([, section]) => section?.content)
      .map(([name, section]) => `\n### ${name.toUpperCase()}\n${section!.content}`)
      .join('\n');

    return `
You are an expert RFP (Request for Proposal) analyst with 20+ years of experience in government contracting, procurement, and proposal evaluation. Please analyze the following RFP document comprehensively.

## RFP DOCUMENT SECTIONS:
${sections}

## ANALYSIS REQUIREMENTS:

Please provide a detailed analysis in the following JSON format:

{
  "executiveSummary": {
    "overallScore": [number 1-5],
    "summary": "[2-3 sentence executive summary]",
    "keyFindings": ["finding 1", "finding 2", "finding 3"]
  },
  "recommendations": [
    {
      "priority": "high|medium|low",
      "section": "[section name]",
      "recommendation": "[specific actionable recommendation]"
    }
  ],
  "sectionAnalysis": {
    "introduction": {
      "score": [1-5],
      "strengths": ["strength 1", "strength 2"],
      "weaknesses": ["weakness 1", "weakness 2"],
      "recommendations": ["rec 1", "rec 2"]
    },
    "sow": {
      "score": [1-5],
      "strengths": ["strength 1", "strength 2"],
      "weaknesses": ["weakness 1", "weakness 2"],
      "recommendations": ["rec 1", "rec 2"]
    },
    "evaluationCriteria": {
      "score": [1-5],
      "strengths": ["strength 1", "strength 2"],
      "weaknesses": ["weakness 1", "weakness 2"],
      "recommendations": ["rec 1", "rec 2"]
    },
    "contractTerms": {
      "score": [1-5],
      "strengths": ["strength 1", "strength 2"],
      "weaknesses": ["weakness 1", "weakness 2"],
      "recommendations": ["rec 1", "rec 2"]
    }
  }
}

## EVALUATION CRITERIA:

1. **Clarity & Completeness** (1-5): Are requirements clear, complete, and unambiguous?
2. **Compliance** (1-5): Does it follow FAR/DFARS and applicable regulations?
3. **Feasibility** (1-5): Are requirements realistic and achievable?
4. **Evaluation Process** (1-5): Is the evaluation methodology fair and transparent?
5. **Risk Management** (1-5): Are potential risks identified and mitigated?

## FOCUS AREAS:

- **Missing Information**: Identify critical gaps
- **Ambiguous Language**: Flag unclear or contradictory statements
- **Compliance Issues**: Note regulatory compliance concerns
- **Evaluation Fairness**: Assess if criteria are objective and measurable
- **Market Readiness**: Evaluate if requirements align with industry capabilities
- **Cost Realism**: Check if budget expectations are realistic
- **Timeline Feasibility**: Assess if proposed timelines are achievable

Provide actionable, specific recommendations that would improve the RFP quality and increase successful proposal responses.

Return ONLY the JSON response with no additional text or formatting.
`;
  }

  private parseGeminiResponse(response: string, rfpDocument: RFPDocument): AnalysisResults {
    try {
      // Clean the response to extract JSON
      const jsonMatch = response.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error('No valid JSON found in AI response');
      }

      const parsed = JSON.parse(jsonMatch[0]);
      
      // Transform to our expected format
      const analysisResults: AnalysisResults = {
        executiveSummary: parsed.executiveSummary,
        recommendations: parsed.recommendations,
      };

      // Add section analysis results
      Object.keys(rfpDocument).forEach(sectionName => {
        if (parsed.sectionAnalysis?.[sectionName]) {
          const sectionData = parsed.sectionAnalysis[sectionName];
          analysisResults[sectionName] = {
            content: rfpDocument[sectionName as keyof RFPDocument]?.content || '',
            sectionName,
            extractedInformation: {
              content: rfpDocument[sectionName as keyof RFPDocument]?.content || '',
              strengths: sectionData.strengths?.join(', ') || 'None identified',
              weaknesses: sectionData.weaknesses?.join(', ') || 'None identified'
            },
            evaluationResults: [
              {
                criterion: 'AI Analysis',
                score: Number(sectionData.score) || 3,
                maxScore: 5,
                comments: `Strengths: ${sectionData.strengths?.join(', ') || 'None identified'}. Weaknesses: ${sectionData.weaknesses?.join(', ') || 'None identified'}.`
              }
            ],
            evaluationScore: Number(sectionData.score) || 3,
            recommendations: Array.isArray(sectionData.recommendations) ? sectionData.recommendations : []
          };
        }
      });

      return analysisResults;
    } catch (error) {
      console.error('Error parsing Gemini response:', error);
      console.log('Raw response:', response);
      
      // Fallback to basic analysis
      return {
        executiveSummary: {
          overallScore: 3,
          summary: 'AI analysis encountered an error. Manual review recommended.',
          keyFindings: ['AI analysis failed', 'Manual review required', 'Check system logs for details']
        },
        recommendations: [
          {
            priority: 'high',
            section: 'System',
            recommendation: 'AI analysis failed. Please review the document manually or try again.'
          }
        ]
      };
    }
  }
} 