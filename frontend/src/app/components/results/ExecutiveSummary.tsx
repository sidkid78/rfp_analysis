interface ExecutiveSummaryProps {
  summary?: {
    overallScore?: number;
    summary?: string;
    keyFindings?: string[];
  };
}

export default function ExecutiveSummary({ summary }: ExecutiveSummaryProps) {
  const getScoreColor = (score: number) => {
    if (score >= 4) return 'text-green-600 dark:text-green-400';
    if (score >= 3) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };

  if (!summary) {
    return (
      <div className="bg-white dark:bg-card rounded-lg shadow-md p-6">
        <p className="text-gray-500 dark:text-gray-400">No summary data available</p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-card rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-foreground">Executive Summary</h2>
        {summary.overallScore !== undefined && (
          <div className="text-center">
            <div className={`text-3xl font-bold ${getScoreColor(summary.overallScore)}`}>
              {summary.overallScore.toFixed(1)}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Overall Score</div>
          </div>
        )}
      </div>
      
      {summary.summary && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-foreground">Summary</h3>
          <p className="text-gray-700 dark:text-gray-300">{summary.summary}</p>
        </div>
      )}
      
      {summary.keyFindings && summary.keyFindings.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-foreground">Key Findings</h3>
          <ul className="space-y-2">
            {summary.keyFindings.map((finding, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                <span className="text-gray-700 dark:text-gray-300">{finding}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}