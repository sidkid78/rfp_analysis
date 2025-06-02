'use client';

import Breadcrumb from '@/app/components/ui/Breadcrumb';

const ANALYSIS_HISTORY = [
  {
    id: 'ANL-001',
    title: 'Federal IT Services RFP Analysis',
    fileName: 'fed_it_services_rfp_2024.pdf',
    date: '2024-01-15',
    time: '14:30',
    score: 4.2,
    status: 'completed',
    sections: 18,
    tags: ['Government', 'IT Services', 'Federal'],
    size: '2.4 MB'
  },
  {
    id: 'ANL-002', 
    title: 'Healthcare Management System RFP',
    fileName: 'healthcare_mgmt_rfp.docx',
    date: '2024-01-12',
    time: '09:45',
    score: 3.8,
    status: 'completed',
    sections: 16,
    tags: ['Healthcare', 'Management System', 'Private'],
    size: '1.8 MB'
  },
  {
    id: 'ANL-003',
    title: 'Construction Services Procurement',
    fileName: 'construction_services.pdf', 
    date: '2024-01-10',
    time: '11:20',
    score: 4.5,
    status: 'completed',
    sections: 15,
    tags: ['Construction', 'Services', 'Municipal'],
    size: '3.1 MB'
  },
  {
    id: 'ANL-004',
    title: 'Software Development RFP',
    fileName: 'software_dev_rfp_draft.pdf',
    date: '2024-01-08',
    time: '16:15',
    score: 0,
    status: 'in_progress',
    sections: 12,
    tags: ['Software', 'Development', 'Technology'],
    size: '1.5 MB'
  },
  {
    id: 'ANL-005',
    title: 'Cybersecurity Consulting RFP',
    fileName: 'cybersecurity_consulting.docx',
    date: '2024-01-05',
    time: '13:00',
    score: 4.1,
    status: 'completed',
    sections: 20,
    tags: ['Cybersecurity', 'Consulting', 'Enterprise'],
    size: '2.7 MB'
  },
  {
    id: 'ANL-006',
    title: 'Cloud Infrastructure Migration',
    fileName: 'cloud_migration_rfp.pdf',
    date: '2024-01-03',
    time: '10:30',
    score: 3.9,
    status: 'completed',
    sections: 14,
    tags: ['Cloud', 'Infrastructure', 'Migration'],
    size: '2.2 MB'
  }
];

const FILTER_OPTIONS = [
  { label: 'All Analyses', value: 'all' },
  { label: 'Completed', value: 'completed' },
  { label: 'In Progress', value: 'in_progress' },
  { label: 'High Score (4.0+)', value: 'high_score' },
  { label: 'Recent (Last 7 Days)', value: 'recent' }
];

export default function HistoryPage() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300';
      case 'in_progress':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300';
      default:
        return 'bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 4.0) return 'text-emerald-600 dark:text-emerald-400';
    if (score >= 3.0) return 'text-yellow-600 dark:text-yellow-400';
    if (score > 0) return 'text-red-600 dark:text-red-400';
    return 'text-gray-400 dark:text-gray-500';
  };

  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-7xl mx-auto">
            <Breadcrumb items={[{ label: 'Account' }, { label: 'Analysis History' }]} />
            
            {/* Hero Section */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-full border border-blue-200/50 dark:border-blue-700/50 mb-6">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                  Analysis Dashboard
                </span>
              </div>
              
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 dark:from-white dark:via-blue-200 dark:to-indigo-200 bg-clip-text text-transparent leading-tight">
                Analysis History
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Track your RFP analysis progress, review past results, and manage your document library 
                with comprehensive insights and detailed reports.
              </p>
            </div>

            {/* Filters and Search */}
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-2xl p-6 mb-8">
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {FILTER_OPTIONS.map((filter) => (
                    <button
                      key={filter.value}
                      className="px-4 py-2 bg-gradient-to-r from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200/50 dark:border-gray-700/50 hover:from-blue-50 hover:to-indigo-50 dark:hover:from-blue-900/20 dark:hover:to-indigo-900/20 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300 hover:scale-105 text-sm font-medium"
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search analyses..."
                      className="w-64 px-4 py-2 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                  
                  <select 
                    className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    aria-label="Sort options"
                    title="Sort options"
                  >
                    <option>Sort by Date</option>
                    <option>Sort by Score</option>
                    <option>Sort by Title</option>
                    <option>Sort by Status</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200/50 dark:border-blue-700/50 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100">24</h3>
                    <p className="text-blue-700 dark:text-blue-300 text-sm font-medium">Total Analyses</p>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 rounded-xl border border-emerald-200/50 dark:border-emerald-700/50 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-emerald-900 dark:text-emerald-100">4.1</h3>
                    <p className="text-emerald-700 dark:text-emerald-300 text-sm font-medium">Avg Score</p>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200/50 dark:border-purple-700/50 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-100">18</h3>
                    <p className="text-purple-700 dark:text-purple-300 text-sm font-medium">This Month</p>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h6m-6 0V9a2 2 0 00-2 2v6a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl border border-orange-200/50 dark:border-orange-700/50 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-orange-900 dark:text-orange-100">95%</h3>
                    <p className="text-orange-700 dark:text-orange-300 text-sm font-medium">Success Rate</p>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Analysis History List */}
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden">
              <div className="p-6 border-b border-gray-200/50 dark:border-gray-700/50">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Recent Analyses</h2>
              </div>
              
              <div className="divide-y divide-gray-200/50 dark:divide-gray-700/50">
                {ANALYSIS_HISTORY.map((analysis) => (
                  <div key={analysis.id} className="p-6 hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-all duration-300 group">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1">
                              {analysis.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                              {analysis.fileName} • {analysis.size}
                            </p>
                            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                              <span>{analysis.date} at {analysis.time}</span>
                              <span>•</span>
                              <span>{analysis.sections} sections</span>
                              {analysis.score > 0 && (
                                <>
                                  <span>•</span>
                                  <span className={`font-medium ${getScoreColor(analysis.score)}`}>
                                    Score: {analysis.score}/5.0
                                  </span>
                                </>
                              )}
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-3 ml-6">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(analysis.status)}`}>
                              {analysis.status === 'completed' ? 'Completed' : 'In Progress'}
                            </span>
                            <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 hover:scale-105 text-sm font-medium shadow-lg opacity-0 group-hover:opacity-100">
                              View Results
                            </button>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {analysis.tags.map((tag) => (
                            <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-6 bg-gray-50/50 dark:bg-gray-800/50 text-center">
                <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105 font-semibold shadow-lg">
                  Load More Analyses
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
