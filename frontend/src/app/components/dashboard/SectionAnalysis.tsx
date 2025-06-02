import { useState } from 'react';
import SectionDetail from '@/app/components/dashboard/SectionDetail';
import { AnalysisResults, SectionAnalysisResult } from '@/app/types';

type SectionAnalysisProps = {
  analysisResults: AnalysisResults;
};

export default function SectionAnalysis({ analysisResults }: SectionAnalysisProps) {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  
  // Filter out non-section keys from results
  const sectionKeys = Object.keys(analysisResults).filter(key => 
    key !== 'executiveSummary' && key !== 'recommendations'
  );
  
  const getScoreColor = (score: number) => {
    if (score >= 4) return 'bg-green-100 dark:bg-green-900/20 border-green-500 dark:border-green-800 text-green-700 dark:text-green-200';
    if (score >= 3) return 'bg-yellow-100 dark:bg-yellow-900/20 border-yellow-500 dark:border-yellow-800 text-yellow-700 dark:text-yellow-200';
    return 'bg-red-100 dark:bg-red-900/20 border-red-500 dark:border-red-800 text-red-700 dark:text-red-200';
  };
  
  const getSectionStatus = (section: SectionAnalysisResult | { status: string; message: string }) => {
    if ('status' in section && section.status === 'Not Found') {
      return (
        <span className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs">
          Not Found
        </span>
      );
    }
    
    const analysisResult = section as SectionAnalysisResult;
    return (
      <span className={`inline-block px-2 py-1 rounded text-xs ${getScoreColor(analysisResult.evaluationScore)}`}>
        {analysisResult.evaluationScore}/5.0
      </span>
    );
  };

  return (
    <div className="bg-white dark:bg-card p-6 rounded-lg shadow-md">
      <div className="mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {sectionKeys.map((sectionKey) => {
            const section = analysisResults[sectionKey];
            return (
              <div
                key={sectionKey}
                className={`p-4 border rounded-md cursor-pointer transition hover:shadow-md ${
                  selectedSection === sectionKey 
                    ? 'border-blue-500 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20' 
                    : 'border-gray-200 dark:border-gray-700'
                }`}
                onClick={() => setSelectedSection(sectionKey)}
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium text-foreground">
                    {('sectionName' in section ? section.sectionName : sectionKey)}
                  </h4>
                  {getSectionStatus(section as SectionAnalysisResult | { status: string; message: string })}
                </div>
                
                {('status' in section && section.status !== 'Not Found' && 'recommendations' in section && 'evaluationScore' in section && Array.isArray(section.recommendations)) && (
                  <div className="mt-2 text-sm">
                    <span className="text-muted-foreground">
                      {section.recommendations.length} recommendation{section.recommendations.length !== 1 ? 's' : ''}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      
      {selectedSection && analysisResults[selectedSection] && 
       !('status' in analysisResults[selectedSection] && analysisResults[selectedSection].status === 'Not Found') && (
        <SectionDetail 
          section={analysisResults[selectedSection] as SectionAnalysisResult} 
          sectionName={selectedSection}
        />
      )}
      
      {selectedSection && analysisResults[selectedSection] && 
       ('status' in analysisResults[selectedSection] && analysisResults[selectedSection].status === 'Not Found') && (
        <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-800">
          <h3 className="text-lg font-semibold mb-2 text-foreground">
            {selectedSection} Section
          </h3>
          <p className="text-muted-foreground">
            {(analysisResults[selectedSection] as { message: string }).message}
          </p>
          <div className="mt-4">
            <h4 className="font-medium mb-2 text-foreground">Recommendation</h4>
            <p className="text-foreground">
              Include this section in your RFP document to improve completeness and compliance.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}