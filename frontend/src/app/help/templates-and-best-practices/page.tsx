'use client';

import Breadcrumb from '@/app/components/ui/Breadcrumb';

export default function TemplatesBestPracticesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[
            { label: 'Help & Documentation', href: '/help' }, 
            { label: 'Templates & Best Practices' }
          ]} />
          
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-2xl p-8">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Templates & Best Practices
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Professional templates and expert guidelines for creating effective RFPs
              </p>
            </div>

            {/* Template Categories */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">1</span>
                Template Categories
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Government Contracts */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl border border-blue-200/50 dark:border-blue-700/50 p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">🏛️</span>
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-300">Government Contracts</h3>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                    FAR/DFARS compliant templates for federal procurement with required clauses and certifications.
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Federal IT Services RFP
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Cybersecurity Services RFP
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Cloud Migration Services
                    </div>
                  </div>
                </div>

                {/* Private Sector */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200/50 dark:border-green-700/50 p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">🏢</span>
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-300">Private Sector</h3>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                    Commercial templates optimized for business efficiency and competitive procurement.
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Software Development
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Marketing Services
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Professional Services
                    </div>
                  </div>
                </div>

                {/* Specialized Industries */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200/50 dark:border-purple-700/50 p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">🔬</span>
                    <h3 className="text-xl font-bold text-purple-800 dark:text-purple-300">Specialized Industries</h3>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                    Industry-specific templates with specialized requirements and compliance standards.
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      Healthcare Technology
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      Financial Services
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      Education Technology
                    </div>
                  </div>
                </div>

                {/* Emerging Technologies */}
                <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl border border-orange-200/50 dark:border-orange-700/50 p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">🚀</span>
                    <h3 className="text-xl font-bold text-orange-800 dark:text-orange-300">Emerging Technologies</h3>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                    Cutting-edge templates for modern technology procurement and innovation projects.
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                      AI/ML Services
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                      Blockchain Solutions
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                      IoT Implementation
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <a href="/templates" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105 font-semibold shadow-lg">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Browse All Templates
                </a>
              </div>
            </section>

            {/* RFP Structure Best Practices */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">2</span>
                RFP Structure Best Practices
              </h2>
              
              <div className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl border border-gray-200/50 dark:border-gray-700/50 p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Essential RFP Sections</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  A well-structured RFP should include all 18 core sections for comprehensive evaluation and compliance.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { section: 'Introduction', description: 'Project overview and context', priority: 'high' },
                    { section: 'Statement of Work', description: 'Detailed requirements and deliverables', priority: 'high' },
                    { section: 'Evaluation Criteria', description: 'How proposals will be assessed', priority: 'high' },
                    { section: 'Proposal Submission', description: 'Format and submission requirements', priority: 'high' },
                    { section: 'Contract Terms', description: 'Legal and contractual provisions', priority: 'high' },
                    { section: 'Key Personnel', description: 'Required staff qualifications', priority: 'medium' },
                    { section: 'Past Performance', description: 'Reference and experience requirements', priority: 'medium' },
                    { section: 'Price/Cost Proposal', description: 'Pricing structure and format', priority: 'high' },
                    { section: 'Technical Approach', description: 'Solution methodology', priority: 'medium' }
                  ].map((item) => (
                    <div key={item.section} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{item.section}</h4>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          item.priority === 'high' ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300' :
                          'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
                        }`}>
                          {item.priority}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Writing Guidelines */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">3</span>
                Writing Guidelines
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Clarity Guidelines */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200/50 dark:border-blue-700/50 p-6">
                    <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Clarity & Precision
                    </h3>
                    <ul className="space-y-2 text-blue-700 dark:text-blue-300 text-sm">
                      <li>• Use specific, measurable requirements</li>
                      <li>• Avoid ambiguous language like &quot;reasonable&quot;</li>
                      <li>• Define technical terms and acronyms</li>
                      <li>• Include concrete examples where helpful</li>
                      <li>• Use active voice for clearer instructions</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200/50 dark:border-green-700/50 p-6">
                    <h3 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Timeline Management
                    </h3>
                    <ul className="space-y-2 text-green-700 dark:text-green-300 text-sm">
                      <li>• Provide realistic proposal preparation time</li>
                      <li>• Include clear milestone dates</li>
                      <li>• Account for vendor question periods</li>
                      <li>• Allow buffer time for evaluation</li>
                      <li>• Communicate any hard deadlines</li>
                    </ul>
                  </div>
                </div>

                {/* Compliance Guidelines */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200/50 dark:border-purple-700/50 p-6">
                    <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-300 mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      Compliance Requirements
                    </h3>
                    <ul className="space-y-2 text-purple-700 dark:text-purple-300 text-sm">
                      <li>• Include mandatory FAR/DFARS clauses</li>
                      <li>• Specify required certifications</li>
                      <li>• Address security clearance needs</li>
                      <li>• Include cybersecurity requirements</li>
                      <li>• Address accessibility standards</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl border border-orange-200/50 dark:border-orange-700/50 p-6">
                    <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-300 mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                      Common Pitfalls
                    </h3>
                    <ul className="space-y-2 text-orange-700 dark:text-orange-300 text-sm">
                      <li>• Overly restrictive specifications</li>
                      <li>• Unclear evaluation weightings</li>
                      <li>• Missing mandatory clauses</li>
                      <li>• Unrealistic budget expectations</li>
                      <li>• Insufficient vendor guidance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Quality Checklist */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">4</span>
                Pre-Publication Checklist
              </h2>
              
              <div className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl border border-gray-200/50 dark:border-gray-700/50 p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Content Review</h3>
                    <div className="space-y-3">
                      {[
                        'All 18 RFP sections included',
                        'Technical requirements clearly defined',
                        'Evaluation criteria detailed',
                        'Submission instructions complete',
                        'Timeline realistic and achievable'
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded"></div>
                          <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Compliance Check</h3>
                    <div className="space-y-3">
                      {[
                        'Regulatory requirements addressed',
                        'Mandatory clauses included',
                        'Legal review completed',
                        'Accessibility standards met',
                        'Security requirements specified'
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded"></div>
                          <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-sm text-blue-800 dark:text-blue-300">
                    <strong>Pro Tip:</strong> Use the RFP Analyzer to automatically check your document against these best practices before publication.
                  </p>
                </div>
              </div>
            </section>

            {/* Next Steps */}
            <section className="mb-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl border border-blue-200/50 dark:border-blue-700/50 p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ready to Create Professional RFPs?</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Apply these best practices using our professional templates and analysis tools.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/templates" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105 font-semibold shadow-xl">
                    Explore Templates
                  </a>
                  <a href="/analyze" className="px-8 py-4 bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 font-semibold border border-gray-200 dark:border-gray-600">
                    Analyze RFP
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
} 