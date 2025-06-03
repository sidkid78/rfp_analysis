'use client';

import { useEffect, useState, use } from 'react';
import { notFound, useRouter } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

interface AIAnalysisResult {
  id: string;
  type: string;
  timestamp: string;
  analysisText: string;
  metadata: {
    model: string;
    sectionsAnalyzed: number;
    totalContent: number;
  };
}

export default function AIResultsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState<AIAnalysisResult | null>(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch(`/api/analysis/ai/${id}`);
        
        if (!response.ok) {
          if (response.status === 404) {
            setError('AI analysis results not found');
            setLoading(false);
            return;
          }
          throw new Error('Failed to fetch AI analysis results');
        }
        
        const data = await response.json();
        setResults(data.results);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };
    
    fetchResults();
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 bg-background">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary mb-4"></div>
            <p className="text-muted-foreground">Loading AI analysis results...</p>
          </div>
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 bg-background">
        <div className="bg-destructive/10 p-4 rounded-md border border-destructive/20">
          <h2 className="text-xl font-semibold text-destructive mb-2">Error</h2>
          <p className="text-destructive/90">{error}</p>
          <button
            onClick={() => router.push('/')}
            className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }
  
  if (!results) return notFound();
  
  return (
    <div className="container mx-auto px-4 py-8 bg-background">
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI-Powered RFP Analysis
            </h1>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Model: {results.metadata.model}</span>
              </span>
              <span className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>{results.metadata.sectionsAnalyzed} sections analyzed</span>
              </span>
              <span className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{new Date(results.timestamp).toLocaleString()}</span>
              </span>
            </div>
          </div>
          
          <div className="flex space-x-2">
            <button
              onClick={() => router.push('/analyze')}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span>New Analysis</span>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-2xl p-8">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <ReactMarkdown
            components={{
              h1: ({ children }) => <h1 className="text-2xl font-bold text-foreground mb-4">{children}</h1>,
              h2: ({ children }) => <h2 className="text-xl font-semibold text-foreground mb-3 mt-6">{children}</h2>,
              h3: ({ children }) => <h3 className="text-lg font-semibold text-foreground mb-2 mt-4">{children}</h3>,
              p: ({ children }) => <p className="text-foreground mb-3 leading-relaxed">{children}</p>,
              ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-1">{children}</ul>,
              ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-1">{children}</ol>,
              li: ({ children }) => <li className="text-foreground">{children}</li>,
              strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
              em: ({ children }) => <em className="italic text-foreground">{children}</em>,
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-r-md mb-4">
                  {children}
                </blockquote>
              ),
              code: ({ children }) => (
                <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">{children}</code>
              ),
              pre: ({ children }) => (
                <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mb-4">{children}</pre>
              ),
            }}
          >
            {results.analysisText}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
} 