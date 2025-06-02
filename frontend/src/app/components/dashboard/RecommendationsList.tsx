interface Recommendation {
  priority: 'high' | 'medium' | 'low';
  section: string;
  recommendation: string;
}

interface RecommendationsListProps {
  recommendations?: Recommendation[] | null;
}

export default function RecommendationsList({ recommendations }: RecommendationsListProps) {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200 border-red-300 dark:border-red-800';
      case 'medium':
        return 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 border-yellow-300 dark:border-yellow-800';
      case 'low':
        return 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 border-green-300 dark:border-green-800';
      default:
        return 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-700';
    }
  };
  
  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high':
        return '⚠️';
      case 'medium':
        return '⚡';
      case 'low':
        return '💡';
      default:
        return '📝';
    }
  };

  if (!recommendations) {
    return (
      <div className="bg-white dark:bg-card rounded-lg shadow-md p-4">
        <p className="text-gray-500 dark:text-gray-400 text-center py-4">
          Loading recommendations...
        </p>
      </div>
    );
  }

  const safeRecommendations = Array.isArray(recommendations) ? recommendations : [];
  
  return (
    <div className="bg-white dark:bg-card rounded-lg shadow-md p-4">
      {safeRecommendations.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400 text-center py-4">
          No recommendations available.
        </p>
      ) : (
        <ul className="space-y-4">
          {safeRecommendations.map((rec, index) => (
            <li
              key={index}
              className={`p-4 rounded-md border ${getPriorityColor(rec.priority)}`}
            >
              <div className="flex items-start">
                <span className="text-2xl mr-3" role="img" aria-label={`${rec.priority} priority`}>
                  {getPriorityIcon(rec.priority)}
                </span>
                <div>
                  <h4 className="font-medium mb-1 text-foreground">
                    {rec.section}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {rec.recommendation}
                  </p>
                  <span className="inline-block mt-2 text-xs font-medium uppercase">
                    {rec.priority} Priority
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
