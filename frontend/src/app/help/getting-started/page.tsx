'use client';

import Breadcrumb from '@/app/components/ui/Breadcrumb';

export default function GettingStartedPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[
            { label: 'Help & Documentation', href: '/help' }, 
            { label: 'Getting Started' }
          ]} />
          
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-2xl p-8">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Getting Started Guide
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                                 Learn how to use the RFP Analyzer platform to improve your procurement documents
              </p>
            </div>

            {/* Table of Contents */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl border border-blue-200/50 dark:border-blue-700/50 p-6 mb-12">
              <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">What You&apos;ll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Platform Overview</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Upload & Analysis Process</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Understanding Results</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Best Practices</span>
                </div>
              </div>
            </div>

            {/* Content Sections */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              
              {/* Section 1: Platform Overview */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">1</span>
                  Platform Overview
                </h2>
                
                <div className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl border border-gray-200/50 dark:border-gray-700/50 p-6 mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">What is RFP Analyzer?</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    RFP Analyzer is an advanced platform designed to help procurement professionals create, evaluate, 
                    and improve Request for Proposal (RFP) documents. Our system uses both rule-based analysis and 
                    AI-powered insights to ensure your RFPs meet industry standards and regulatory requirements.
                  </p>
                  
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span><strong>Automated Section Analysis:</strong> Identifies and evaluates all 18 critical RFP sections</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span><strong>AI-Powered Insights:</strong> Google Gemini integration for sophisticated analysis</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span><strong>Professional Templates:</strong> Industry-standard templates for various sectors</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span><strong>Compliance Checking:</strong> FAR/DFARS and regulatory compliance validation</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 2: Getting Started */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">2</span>
                  Your First Analysis
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl border border-gray-200/50 dark:border-gray-700/50 p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                      <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm mr-3">A</span>
                      Step 1: Navigate to Analysis
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      Click on <strong>&quot;Analyze&quot;</strong> in the main navigation to access the upload interface.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl border border-gray-200/50 dark:border-gray-700/50 p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                      <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm mr-3">B</span>
                      Step 2: Choose Analysis Type
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      Select your preferred analysis method:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">📊 Rule-based Analysis</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Fast, consistent evaluation using predefined criteria and scoring algorithms.</p>
                      </div>
                      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🤖 AI Analysis</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Sophisticated analysis using Google Gemini AI for context-aware insights.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl border border-gray-200/50 dark:border-gray-700/50 p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                      <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm mr-3">C</span>
                      Step 3: Upload Your Document
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      Supported file formats:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">PDF</span>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">DOCX</span>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">DOC</span>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">TXT</span>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">Markdown (.md)</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl border border-gray-200/50 dark:border-gray-700/50 p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                      <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm mr-3">D</span>
                      Step 4: Review & Analyze
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Once uploaded, the system will automatically extract sections from your document. 
                      Review the extracted content and click &quot;Analyze RFP&quot; to start the evaluation process.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: Understanding Results */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">3</span>
                  Understanding Your Results
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl border border-gray-200/50 dark:border-gray-700/50 p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Executive Summary</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      The executive summary provides a high-level overview of your RFP quality with:
                    </p>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• <strong>Overall Score:</strong> 1-5 rating based on comprehensive analysis</li>
                      <li>• <strong>Key Findings:</strong> Most important insights and observations</li>
                      <li>• <strong>Summary:</strong> Brief overview of document quality and areas for improvement</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl border border-gray-200/50 dark:border-gray-700/50 p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Section Analysis</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Each RFP section is evaluated individually across multiple criteria:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Evaluation Areas:</h4>
                        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                          <li>• Clarity & Completeness</li>
                          <li>• Regulatory Compliance</li>
                          <li>• Technical Feasibility</li>
                          <li>• Risk Assessment</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Score Meanings:</h4>
                        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                          <li>• <span className="text-red-500">1-2:</span> Needs Improvement</li>
                          <li>• <span className="text-yellow-500">3:</span> Acceptable</li>
                          <li>• <span className="text-green-500">4-5:</span> Excellent</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl border border-gray-200/50 dark:border-gray-700/50 p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Recommendations</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Actionable recommendations are prioritized by importance:
                    </p>
                    <div className="flex space-x-4">
                      <div className="flex items-center space-x-2">
                        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                        <span className="text-sm text-gray-700 dark:text-gray-300">High Priority</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                        <span className="text-sm text-gray-700 dark:text-gray-300">Medium Priority</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                        <span className="text-sm text-gray-700 dark:text-gray-300">Low Priority</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4: Best Practices */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">4</span>
                  Best Practices
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200/50 dark:border-green-700/50 p-6">
                    <h3 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                     Do&apos;s
                    </h3>
                    <ul className="space-y-2 text-green-700 dark:text-green-300 text-sm">
                      <li>• Use clear, structured document formatting</li>
                      <li>• Include all 18 essential RFP sections</li>
                      <li>• Test both analysis types for comparison</li>
                      <li>• Review and implement recommendations</li>
                      <li>• Use professional templates as starting points</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-xl border border-red-200/50 dark:border-red-700/50 p-6">
                    <h3 className="text-lg font-semibold text-red-800 dark:text-red-300 mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Don&apos;ts
                    </h3>
                    <ul className="space-y-2 text-red-700 dark:text-red-300 text-sm">
                      <li>• Don&apos;t upload image-only PDFs</li>
                      <li>• Don&apos;t ignore high-priority recommendations</li>
                      <li>• Don&apos;t skip manual review of results</li>
                      <li>• Don&apos;t upload confidential information without approval</li>
                      <li>• Don&apos;t rely solely on automated analysis</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Next Steps */}
              <section className="mb-8">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl border border-blue-200/50 dark:border-blue-700/50 p-8 text-center">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ready to Get Started?</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Now that you understand the basics, try analyzing your first RFP or explore our template library.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="/analyze" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105 font-semibold shadow-xl">
                      Start Analysis
                    </a>
                    <a href="/templates" className="px-8 py-4 bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 font-semibold border border-gray-200 dark:border-gray-600">
                      Browse Templates
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 