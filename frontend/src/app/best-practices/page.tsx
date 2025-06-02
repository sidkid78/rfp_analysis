'use client';

import Breadcrumb from '@/app/components/ui/Breadcrumb';

const BEST_PRACTICES = [
  {
    category: 'RFP Structure & Organization',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    practices: [
      {
        title: 'Clear Section Organization',
        description: 'Structure your RFP with logical sections that flow from general to specific requirements.',
        impact: 'High',
        tips: ['Use numbered sections', 'Include table of contents', 'Cross-reference related sections']
      },
      {
        title: 'Consistent Terminology',
        description: 'Maintain consistent use of terms and definitions throughout the document.',
        impact: 'Medium',
        tips: ['Create a glossary', 'Define technical terms', 'Use standard industry language']
      },
      {
        title: 'Comprehensive Scope Definition',
        description: 'Clearly define project scope, deliverables, and boundaries.',
        impact: 'High',
        tips: ['List all deliverables', 'Define project phases', 'Clarify exclusions']
      }
    ]
  },
  {
    category: 'Evaluation Criteria',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    practices: [
      {
        title: 'Weighted Scoring System',
        description: 'Establish clear weights for different evaluation criteria based on project priorities.',
        impact: 'High',
        tips: ['Assign percentage weights', 'Prioritize business value', 'Include technical and commercial factors']
      },
      {
        title: 'Objective Criteria Definition',
        description: 'Define measurable, objective criteria that minimize subjective interpretation.',
        impact: 'High',
        tips: ['Use quantifiable metrics', 'Define rating scales', 'Provide evaluation examples']
      },
      {
        title: 'Past Performance Requirements',
        description: 'Include specific requirements for demonstrating relevant experience.',
        impact: 'Medium',
        tips: ['Request similar project examples', 'Define minimum experience levels', 'Include reference requirements']
      }
    ]
  },
  {
    category: 'Legal & Compliance',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    practices: [
      {
        title: 'Regulatory Compliance',
        description: 'Ensure all applicable regulations and standards are clearly referenced.',
        impact: 'Critical',
        tips: ['List all applicable regulations', 'Include compliance requirements', 'Reference industry standards']
      },
      {
        title: 'Contract Terms Clarity',
        description: 'Define clear contract terms, conditions, and legal requirements.',
        impact: 'High',
        tips: ['Include standard terms', 'Define liability limits', 'Specify dispute resolution']
      },
      {
        title: 'Intellectual Property Rights',
        description: 'Clearly define IP ownership and usage rights for all deliverables.',
        impact: 'High',
        tips: ['Define IP ownership', 'Specify usage rights', 'Include confidentiality terms']
      }
    ]
  }
];

const QUICK_TIPS = [
  { tip: 'Use clear, concise language throughout the RFP', category: 'Writing' },
  { tip: 'Provide realistic timelines with adequate buffer time', category: 'Planning' },
  { tip: 'Include detailed technical specifications and requirements', category: 'Technical' },
  { tip: 'Establish clear communication protocols and contact points', category: 'Communication' },
  { tip: 'Define acceptance criteria for all deliverables', category: 'Quality' },
  { tip: 'Include change management and scope modification procedures', category: 'Process' }
];

export default function BestPracticesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-emerald-50/30 to-blue-50/30 dark:from-gray-900 dark:via-emerald-900/20 dark:to-blue-900/20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-7xl mx-auto">
            <Breadcrumb items={[{ label: 'Resources' }, { label: 'Best Practices' }]} />
            
            {/* Hero Section */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-100 to-blue-100 dark:from-emerald-900/30 dark:to-blue-900/30 rounded-full border border-emerald-200/50 dark:border-emerald-700/50 mb-6">
                <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                  RFP Best Practices Guide
                </span>
              </div>
              
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-emerald-800 to-blue-800 dark:from-white dark:via-emerald-200 dark:to-blue-200 bg-clip-text text-transparent leading-tight">
                RFP Best Practices
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                Follow these proven best practices to create comprehensive, effective RFPs that attract 
                quality proposals and ensure successful project outcomes.
              </p>
              
              <div className="flex items-center justify-center space-x-8 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span>Industry Standards</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Proven Methods</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Expert Insights</span>
                </div>
              </div>
            </div>

            {/* Best Practices Sections */}
            <div className="space-y-12 mb-16">
              {BEST_PRACTICES.map((section) => (
                <div key={section.category} className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-2xl p-8">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg text-white">
                      {section.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                        {section.category}
                      </h2>
                    </div>
                  </div>

                  <div className="grid gap-6">
                    {section.practices.map((practice) => (
                      <div key={practice.title} className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl border border-gray-200/50 dark:border-gray-700/50 p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                              {practice.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                              {practice.description}
                            </p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ml-4 ${
                            practice.impact === 'Critical' ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300' :
                            practice.impact === 'High' ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300' :
                            'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
                          }`}>
                            {practice.impact} Impact
                          </span>
                        </div>
                        
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Key Tips:</h4>
                          <ul className="space-y-1">
                            {practice.tips.map((tip, tipIndex) => (
                              <li key={tipIndex} className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400">
                                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Tips Section */}
            <div className="bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-900/30 dark:to-blue-900/30 rounded-2xl border border-emerald-200/50 dark:border-emerald-700/50 p-8">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent text-center">
                Quick Tips for RFP Success
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {QUICK_TIPS.map((item, index) => (
                  <div key={index} className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-4 border border-emerald-200/30 dark:border-emerald-700/30">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">{item.tip}</p>
                        <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">{item.category}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-blue-900/30 dark:to-emerald-900/30 rounded-2xl border border-blue-200/50 dark:border-blue-700/50 p-12">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  Ready to Apply These Best Practices?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                  Start creating your next RFP using our comprehensive analysis tools and professional templates.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-blue-600 text-white rounded-xl hover:from-emerald-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 font-semibold shadow-xl">
                    Start RFP Analysis
                  </button>
                  <button className="px-8 py-4 bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 font-semibold border border-gray-200 dark:border-gray-600">
                    Browse Templates
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
  );
} 