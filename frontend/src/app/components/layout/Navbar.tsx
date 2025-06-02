import Link from 'next/link';
import ThemeToggle from '../ui/ThemeToggle';

export default function Navbar() {
  return (
    <nav className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 dark:from-blue-800 dark:via-blue-900 dark:to-purple-900 text-white shadow-2xl transition-all duration-300">
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-white/10 dark:bg-black/10 backdrop-blur-sm"></div>
      
      <div className="relative container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="group flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-white/20 to-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                RFP Analyzer
              </div>
              <div className="text-xs text-blue-100/80 font-medium">
                Professional Analysis Suite
              </div>
            </div>
          </Link>
          
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex items-center space-x-6">
              <Link 
                href="/" 
                className="group relative px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                <span className="relative z-10 font-medium">Home</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link 
                href="/analyze" 
                className="group relative px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                <span className="relative z-10 font-medium">Analyze RFP</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
            
            <div className="w-px h-6 bg-white/20"></div>
            
            <ThemeToggle />
          </div>
        </div>
      </div>
      
      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
    </nav>
  );
}