interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  text?: string;
  variant?: 'primary' | 'secondary' | 'accent';
}

export default function LoadingSpinner({ 
  size = 'md', 
  text = 'Loading...', 
  variant = 'primary' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  const variantClasses = {
    primary: 'text-blue-600 dark:text-blue-400',
    secondary: 'text-gray-600 dark:text-gray-400',
    accent: 'text-purple-600 dark:text-purple-400'
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="relative">
        {/* Outer ring */}
        <div className={`${sizeClasses[size]} border-4 border-gray-200 dark:border-gray-700 rounded-full animate-pulse`}></div>
        
        {/* Spinning ring */}
        <div className={`absolute top-0 left-0 ${sizeClasses[size]} border-4 border-transparent border-t-current rounded-full animate-spin ${variantClasses[variant]}`}></div>
        
        {/* Inner glow effect */}
        <div className={`absolute top-1 left-1 ${
          size === 'sm' ? 'w-2 h-2' : 
          size === 'md' ? 'w-4 h-4' : 
          size === 'lg' ? 'w-8 h-8' : 'w-12 h-12'
        } bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-ping`}></div>
      </div>
      
      {text && (
        <div className={`${textSizeClasses[size]} ${variantClasses[variant]} font-medium animate-pulse`}>
          {text}
        </div>
      )}
      
      {/* Shimmer effect */}
      <div className="flex space-x-1">
        <div className={`w-2 h-2 ${variantClasses[variant]} rounded-full animate-bounce`} style={{ animationDelay: '0ms' }}></div>
        <div className={`w-2 h-2 ${variantClasses[variant]} rounded-full animate-bounce`} style={{ animationDelay: '150ms' }}></div>
        <div className={`w-2 h-2 ${variantClasses[variant]} rounded-full animate-bounce`} style={{ animationDelay: '300ms' }}></div>
      </div>
    </div>
  );
} 