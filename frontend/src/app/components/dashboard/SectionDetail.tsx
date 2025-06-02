import { SectionAnalysisResult } from '@/app/types';

type SectionDetailProps = {
  section: SectionAnalysisResult;
  sectionName: string;
};

export default function SectionDetail({ section, sectionName }: SectionDetailProps) {
  const getScoreIndicator = (score: number) => {
    if (score >= 4) return '🟢';
    if (score >= 3) return '🟡';
    return '🔴';
  };

  return (
    <div className="border border-border rounded-md p-4 bg-card">
      <h3 className="text-xl font-semibold mb-4 text-foreground">
        {section.sectionName || sectionName} Analysis
      </h3>
      
      <div className="mb-6">
        <h4 className="font-medium mb-2 text-foreground">Extracted Information</h4>
        <div className="space-y-3">
          {Object.entries(section.extractedInformation).map(([key, value]) => (
            <div key={key} className="p-3 bg-secondary rounded-md">
              <div className="font-medium text-foreground mb-1 capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}:
              </div>
              <div className="text-sm text-muted-foreground">
                {value || 'Not found'}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-6">
        <h4 className="font-medium mb-2 text-foreground">Evaluation Results</h4>
        <div className="space-y-3">
          {section.evaluationResults.map((result, index) => (
            <div key={index} className="p-3 bg-secondary rounded-md">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-foreground">{result.criterion}</span>
                <span className="text-foreground">
                  {getScoreIndicator(result.score)} {result.score}/{result.maxScore}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{result.comments}</p>
            </div>
          ))}
        </div>
      </div>
      
      {section.recommendations && section.recommendations.length > 0 && (
        <div>
          <h4 className="font-medium mb-2 text-foreground">Recommendations</h4>
          <div className="space-y-3">
            {section.recommendations.map((rec, index) => {
              const priorityClasses = {
                high: 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200',
                medium: 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200',
                low: 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200'
              };
              
              return (
                <div key={index} className={`p-3 rounded-md ${priorityClasses[rec.priority]}`}>
                  <div className="font-medium text-foreground">{rec.title}</div>
                  <div className="text-sm mt-1 text-muted-foreground">{rec.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
