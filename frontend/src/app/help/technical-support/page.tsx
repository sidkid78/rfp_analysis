'use client';

import Breadcrumb from '@/app/components/ui/Breadcrumb';

export default function TechnicalSupportPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[
            { label: 'Help & Documentation', href: '/help' }, 
            { label: 'Technical Support' }
          ]} />
          
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-2xl p-8">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 110 19.5 9.75 9.75 0 010-19.5z" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Technical Support
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Troubleshooting guides and technical assistance for the RFP Analyzer platform
              </p>
            </div>

            {/* Common Issues */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">1</span>
                Common Issues & Solutions
              </h2>
              
              <div className="space-y-6">
                {/* Upload Issues */}
                <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-xl border border-red-200/50 dark:border-red-700/50 p-6">
                  <h3 className="text-lg font-semibold text-red-800 dark:text-red-300 mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    File Upload Problems
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Issue: &quot;File upload failed&quot;</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                        The file upload process is interrupted or fails to complete.
                      </p>
                      <div className="bg-gray-50 dark:bg-gray-700 rounded p-3">
                        <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">Solutions:</p>
                        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                          <li>• Check file size (max 50MB)</li>
                          <li>• Ensure stable internet connection</li>
                          <li>• Try a different browser</li>
                          <li>• Clear browser cache and cookies</li>
                          <li>• Disable browser extensions temporarily</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Issue: &quot;Unsupported file format&quot;</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                        The uploaded file format is not recognized by the system.
                      </p>
                      <div className="bg-gray-50 dark:bg-gray-700 rounded p-3">
                        <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">Solutions:</p>
                        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                          <li>• Use supported formats: PDF, DOCX, DOC, TXT, MD</li>
                          <li>• Convert your file to a supported format</li>
                          <li>• Ensure file is not corrupted</li>
                          <li>• Check file extension matches content</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Analysis Issues */}
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl border border-yellow-200/50 dark:border-yellow-700/50 p-6">
                  <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-300 mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    Analysis Problems
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Issue: &quot;Analysis taking too long&quot;</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                        The analysis process seems stuck or is taking longer than expected.
                      </p>
                      <div className="bg-gray-50 dark:bg-gray-700 rounded p-3">
                        <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">Expected Times:</p>
                        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                          <li>• Rule-based analysis: 30-60 seconds</li>
                          <li>• AI analysis: 2-5 minutes</li>
                          <li>• Large documents may take longer</li>
                          <li>• Refresh page if stuck for &gt;10 minutes</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Issue: &quot;Poor section detection&quot;</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                        The system is not correctly identifying RFP sections.
                      </p>
                      <div className="bg-gray-50 dark:bg-gray-700 rounded p-3">
                        <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">Improvements:</p>
                        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                          <li>• Use clear section headings</li>
                          <li>• Follow standard RFP structure</li>
                          <li>• Avoid image-only PDFs</li>
                          <li>• Try AI analysis for better detection</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* File Format Requirements */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">2</span>
                File Format Requirements
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Supported Formats */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200/50 dark:border-green-700/50 p-6">
                  <h3 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Supported Formats
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded flex items-center justify-center text-red-600 dark:text-red-400 text-xs font-bold">PDF</span>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">PDF Documents</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Text-searchable PDFs preferred</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded flex items-center justify-center text-blue-600 dark:text-blue-400 text-xs font-bold">DOC</span>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">Word Documents</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">DOCX and DOC formats</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <span className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded flex items-center justify-center text-gray-600 dark:text-gray-400 text-xs font-bold">TXT</span>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">Plain Text</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">UTF-8 encoding recommended</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded flex items-center justify-center text-purple-600 dark:text-purple-400 text-xs font-bold">MD</span>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">Markdown</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">.md and .markdown files</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Best Practices */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200/50 dark:border-blue-700/50 p-6">
                  <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Best Practices
                  </h3>
                  
                  <ul className="space-y-3 text-sm text-blue-700 dark:text-blue-300">
                    <li className="flex items-start space-x-2">
                      <span className="w-4 h-4 bg-blue-500 rounded-full mt-0.5 flex-shrink-0"></span>
                      <span>Use structured documents with clear headings</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-4 h-4 bg-blue-500 rounded-full mt-0.5 flex-shrink-0"></span>
                      <span>Ensure text is selectable (not image-based)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-4 h-4 bg-blue-500 rounded-full mt-0.5 flex-shrink-0"></span>
                      <span>Keep file sizes under 50MB for optimal performance</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-4 h-4 bg-blue-500 rounded-full mt-0.5 flex-shrink-0"></span>
                      <span>Use standard section names when possible</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-4 h-4 bg-blue-500 rounded-full mt-0.5 flex-shrink-0"></span>
                      <span>Remove password protection before upload</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Browser Compatibility */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">3</span>
                Browser Compatibility
              </h2>
              
              <div className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl border border-gray-200/50 dark:border-gray-700/50 p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Chrome</h4>
                    <p className="text-xs text-green-600 dark:text-green-400">Fully Supported</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Firefox</h4>
                    <p className="text-xs text-green-600 dark:text-green-400">Fully Supported</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Safari</h4>
                    <p className="text-xs text-green-600 dark:text-green-400">Fully Supported</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Edge</h4>
                    <p className="text-xs text-yellow-600 dark:text-yellow-400">Limited Support</p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Recommended Settings:</h4>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• Enable JavaScript</li>
                    <li>• Allow cookies and local storage</li>
                    <li>• Disable ad blockers for this site</li>
                    <li>• Use latest browser version</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Contact Support */}
            <section className="mb-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl border border-blue-200/50 dark:border-blue-700/50 p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Still Need Help?</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  If you&apos;re still experiencing issues, our technical support team is here to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105 font-semibold shadow-xl">
                    Contact Technical Support
                  </button>
                  <a href="/help" className="px-8 py-4 bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 font-semibold border border-gray-200 dark:border-gray-600">
                    Back to Help Center
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