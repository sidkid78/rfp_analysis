'use client';

import Breadcrumb from '@/app/components/ui/Breadcrumb';

export default function AnalysisFeaturesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[
            { label: 'Help & Documentation', href: '/help' }, 
            { label: 'Analysis Features' }
          ]} />
          
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-2xl p-8">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Analysis Features
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Comprehensive AI-powered analysis capabilities for professional RFP evaluation
              </p>
            </div>

            {/* Comprehensive Section Analysis */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">1</span>
                Comprehensive Section Analysis
              </h2>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200/50 dark:border-blue-700/50 p-6 mb-6">
                <p className="text-blue-800 dark:text-blue-300 mb-4">
                                     Our AI system analyzes 18 distinct RFP sections using specialized algorithms tailored to each section&apos;s unique requirements and evaluation criteria.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: 'Introduction', description: 'Project overview and background context', color: 'blue' },
                  { name: 'Statement of Work', description: 'Detailed requirements and deliverables', color: 'indigo' },
                  { name: 'Evaluation Criteria', description: 'Assessment methodology and weightings', color: 'purple' },
                  { name: 'Proposal Submission', description: 'Format and submission requirements', color: 'pink' },
                  { name: 'Contract Terms', description: 'Legal and contractual provisions', color: 'red' },
                  { name: 'Price/Cost Proposal', description: 'Pricing structure and guidelines', color: 'orange' },
                  { name: 'Key Personnel', description: 'Staff qualifications and requirements', color: 'yellow' },
                  { name: 'Past Performance', description: 'Reference and experience criteria', color: 'green' },
                  { name: 'Technical Approach', description: 'Solution methodology requirements', color: 'emerald' },
                  { name: 'Management Approach', description: 'Project management framework', color: 'teal' },
                  { name: 'Risk Assessment', description: 'Risk identification and mitigation', color: 'cyan' },
                  { name: 'Cybersecurity Plan', description: 'Security requirements and compliance', color: 'sky' },
                  { name: 'Supply Chain Risk', description: 'Vendor and supplier risk management', color: 'blue' },
                  { name: 'Subcontracting Plan', description: 'Subcontractor requirements and goals', color: 'indigo' },
                  { name: 'Environmental Considerations', description: 'Sustainability and environmental impact', color: 'green' },
                  { name: 'Contract Data Requirements', description: 'Data management and reporting needs', color: 'purple' },
                  { name: 'Certifications & Representations', description: 'Required certifications and attestations', color: 'pink' },
                  { name: 'Period of Performance', description: 'Timeline and milestone requirements', color: 'orange' }
                ].map((section) => (
                  <div key={section.name} className={`bg-gradient-to-r from-${section.color}-50 to-${section.color}-100 dark:from-${section.color}-900/20 dark:to-${section.color}-800/20 rounded-lg border border-${section.color}-200/50 dark:border-${section.color}-700/50 p-4`}>
                    <h3 className={`font-semibold text-${section.color}-800 dark:text-${section.color}-300 mb-2 text-sm`}>
                      {section.name}
                    </h3>
                    <p className={`text-xs text-${section.color}-700 dark:text-${section.color}-400`}>
                      {section.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Evaluation Scoring System */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">2</span>
                Understanding Evaluation Scores
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Scoring Scale */}
                <div className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl border border-gray-200/50 dark:border-gray-700/50 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">5-Point Scoring Scale</h3>
                  
                  <div className="space-y-4">
                    {[
                      { score: 5, label: 'Excellent', description: 'Comprehensive, detailed, and exceeds expectations', color: 'green', bg: 'green-50', darkBg: 'green-900/20' },
                      { score: 4, label: 'Good', description: 'Well-defined with minor areas for improvement', color: 'blue', bg: 'blue-50', darkBg: 'blue-900/20' },
                      { score: 3, label: 'Satisfactory', description: 'Adequate but could be more detailed', color: 'yellow', bg: 'yellow-50', darkBg: 'yellow-900/20' },
                      { score: 2, label: 'Needs Improvement', description: 'Present but lacks important details', color: 'orange', bg: 'orange-50', darkBg: 'orange-900/20' },
                      { score: 1, label: 'Poor', description: 'Missing, unclear, or significantly inadequate', color: 'red', bg: 'red-50', darkBg: 'red-900/20' }
                    ].map((item) => (
                      <div key={item.score} className={`bg-gradient-to-r from-${item.bg} to-white dark:from-${item.darkBg} dark:to-gray-800 rounded-lg border border-${item.color}-200/50 dark:border-${item.color}-700/50 p-4`}>
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                            {item.score}
                          </div>
                          <div>
                            <h4 className={`font-semibold text-${item.color}-800 dark:text-${item.color}-300`}>{item.label}</h4>
                            <p className={`text-sm text-${item.color}-700 dark:text-${item.color}-400`}>{item.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Evaluation Criteria */}
                <div className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl border border-gray-200/50 dark:border-gray-700/50 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">What We Evaluate</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Completeness</h4>
                      <p className="text-sm text-blue-700 dark:text-blue-400">Are all required elements present and accounted for?</p>
                    </div>
                    
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4">
                      <h4 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-2">Clarity</h4>
                      <p className="text-sm text-indigo-700 dark:text-indigo-400">Are requirements clearly stated and unambiguous?</p>
                    </div>
                    
                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Detail Level</h4>
                      <p className="text-sm text-purple-700 dark:text-purple-400">Is sufficient detail provided for vendors to respond effectively?</p>
                    </div>
                    
                    <div className="bg-pink-50 dark:bg-pink-900/20 rounded-lg p-4">
                      <h4 className="font-semibold text-pink-800 dark:text-pink-300 mb-2">Compliance</h4>
                      <p className="text-sm text-pink-700 dark:text-pink-400">Do sections meet regulatory and best practice standards?</p>
                    </div>
                    
                    <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                      <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">Structure</h4>
                      <p className="text-sm text-red-700 dark:text-red-400">Is information well-organized and logically presented?</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Results Interpretation */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">3</span>
                Interpretation of Results
              </h2>
              
              <div className="space-y-6">
                {/* Executive Summary */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200/50 dark:border-blue-700/50 p-6">
                  <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    Executive Summary
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Overall Score</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">Weighted average across all analyzed sections (1.0 - 5.0 scale)</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Findings</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">Critical insights about document quality and completeness</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Summary</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">Executive-level overview of analysis results</p>
                    </div>
                  </div>
                </div>

                {/* Section-by-Section Analysis */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200/50 dark:border-green-700/50 p-6">
                  <h3 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                    Section-by-Section Analysis
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Extracted Information</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">Key content identified and categorized from each section</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Individual Scores</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">Detailed scoring for each evaluation criterion within the section</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Detailed Comments</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">Specific feedback explaining scores and suggesting improvements</p>
                    </div>
                  </div>
                </div>

                {/* Recommendations */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200/50 dark:border-purple-700/50 p-6">
                  <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-300 mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    Actionable Recommendations
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { priority: 'High', description: 'Critical issues that must be addressed before publication', color: 'red' },
                      { priority: 'Medium', description: 'Important improvements that will enhance RFP quality', color: 'yellow' },
                      { priority: 'Low', description: 'Optional enhancements for best practice compliance', color: 'green' }
                    ].map((item) => (
                      <div key={item.priority} className={`bg-${item.color}-50 dark:bg-${item.color}-900/20 rounded-lg border border-${item.color}-200/50 dark:border-${item.color}-700/50 p-4`}>
                        <h4 className={`font-semibold text-${item.color}-800 dark:text-${item.color}-300 mb-2`}>
                          {item.priority} Priority
                        </h4>
                        <p className={`text-sm text-${item.color}-700 dark:text-${item.color}-400`}>
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Advanced Features */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">4</span>
                Advanced Analysis Features
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* AI-Powered Insights */}
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl border border-indigo-200/50 dark:border-indigo-700/50 p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">🤖</span>
                    <h3 className="text-xl font-bold text-indigo-800 dark:text-indigo-300">AI-Powered Insights</h3>
                  </div>
                  
                  <ul className="space-y-2 text-indigo-700 dark:text-indigo-300 text-sm">
                    <li>• Natural language processing for content extraction</li>
                    <li>• Intelligent section identification and mapping</li>
                    <li>• Automated compliance checking</li>
                    <li>• Context-aware evaluation scoring</li>
                    <li>• Smart recommendation generation</li>
                  </ul>
                </div>

                {/* Export Options */}
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl border border-cyan-200/50 dark:border-cyan-700/50 p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">📊</span>
                    <h3 className="text-xl font-bold text-cyan-800 dark:text-cyan-300">Export & Integration</h3>
                  </div>
                  
                  <ul className="space-y-2 text-cyan-700 dark:text-cyan-300 text-sm">
                    <li>• PDF executive summary reports</li>
                    <li>• Excel spreadsheet with detailed scores</li>
                    <li>• JSON data for system integration</li>
                    <li>• PowerPoint presentation templates</li>
                    <li>• Real-time API access to results</li>
                  </ul>
                </div>

                {/* Customization Options */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200/50 dark:border-green-700/50 p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">⚙️</span>
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-300">Custom Parameters</h3>
                  </div>
                  
                  <ul className="space-y-2 text-green-700 dark:text-green-300 text-sm">
                    <li>• Adjustable scoring weightings</li>
                    <li>• Industry-specific evaluation criteria</li>
                    <li>• Custom section templates</li>
                    <li>• Configurable compliance requirements</li>
                    <li>• Organization-specific best practices</li>
                  </ul>
                </div>

                {/* Performance Analytics */}
                <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl border border-orange-200/50 dark:border-orange-700/50 p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">📈</span>
                    <h3 className="text-xl font-bold text-orange-800 dark:text-orange-300">Performance Analytics</h3>
                  </div>
                  
                  <ul className="space-y-2 text-orange-700 dark:text-orange-300 text-sm">
                    <li>• Historical analysis tracking</li>
                    <li>• Benchmark comparisons</li>
                    <li>• Quality trend analysis</li>
                    <li>• Team performance metrics</li>
                    <li>• ROI measurement tools</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Getting Started */}
            <section className="mb-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl border border-blue-200/50 dark:border-blue-700/50 p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ready to Analyze Your RFP?</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Upload your RFP document and get comprehensive analysis results in minutes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/analyze" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105 font-semibold shadow-xl">
                    Start Analysis
                  </a>
                  <a href="/help/getting-started" className="px-8 py-4 bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 font-semibold border border-gray-200 dark:border-gray-600">
                    Getting Started Guide
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
