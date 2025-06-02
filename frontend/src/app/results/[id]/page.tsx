'use client';

import { useEffect, useState, use } from 'react';
import { notFound, useRouter } from 'next/navigation';
import ExecutiveSummary from '@/app/components/results/ExecutiveSummary';
import SectionAnalysis from '@/app/components/dashboard/SectionAnalysis';
import RecommendationsList from '@/app/components/dashboard/RecommendationsList';
import { useAnalysisStore } from '@/app/lib/stores/analysisStore';
import { AnalysisResults, Recommendation } from '@/app/types';

export default function ResultsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Get analysis from store
  const getAnalysisById = useAnalysisStore((state) => state.getAnalysisById);
  const setCurrentAnalysisId = useAnalysisStore((state) => state.setCurrentAnalysisId);
  const [results, setResults] = useState<AnalysisResults | null>(null);

  useEffect(() => {
    console.log('id', id);
    const storedResults = getAnalysisById(id);
    console.log('storedResults', storedResults);
    if (storedResults) {
      console.log('storedResults', storedResults);
      setResults(storedResults);
      setCurrentAnalysisId(id);
      setLoading(false);
    } else {
      const fetchResults = async () => {
        try {
          const response = await fetch(`/api/analysis/${id}`);
          
          if (!response.ok) {
            if (response.status === 404) {
              setError('Analysis results not found');
              setLoading(false);
              return;
            }
            throw new Error('Failed to fetch analysis results');
          }
          
          const data = await response.json();
          console.log('data', data);
          setResults(data.results);
          setCurrentAnalysisId(id);
          setLoading(false);
        } catch (err) {
          setError(err instanceof Error ? err.message : 'An unknown error occurred');
        } finally {
          setLoading(false);
        }
      };
      
      fetchResults();
    }
  }, [id, getAnalysisById, setCurrentAnalysisId]);
  console.log('results', results);
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 bg-background">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary mb-4"></div>
            <p className="text-muted-foreground">Loading analysis results...</p>
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
  console.log('results', results?.sectionResults);
  if (!results) return notFound();
  
  return (
    <div className="container mx-auto px-4 py-8 bg-background">
      <h1 className="text-3xl font-bold mb-6 text-foreground">RFP Analysis Results</h1>
      
      <ExecutiveSummary summary={results.executiveSummary} />
      
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
       <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Section Analysis</h2>
          <SectionAnalysis analysisResults={results} />
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Recommendations</h2>
          <RecommendationsList recommendations={results.recommendations as unknown as Recommendation[]} />
        </div>
      </div>
    </div>
  );
}