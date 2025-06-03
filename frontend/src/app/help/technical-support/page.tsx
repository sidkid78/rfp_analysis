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
                Troubleshooting guides and technical assistance for optimal platform performance
              </p>
            </div>

            {/* Common Issues & Solutions */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">1</span>
                Common Issues & Solutions
              </h2>
              
              <div className="space-y-6">
                {/* Upload Issues */}
                <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-xl border border-red-200/50 dark:border-red-700/50 p-6">
                  <h3 className="text-xl font-semibold text-red-800 dark:text-red-300 mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    File Upload Issues
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Problem: File upload fails or times out</h4>
                      <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                        <p><strong>Solutions:</strong></p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>Ensure file size is under 50MB</li>
                          <li>Check your internet connection stability</li>
                          <li>Try uploading during off-peak hours</li>
                          <li>Clear browser cache and cookies</li>
                          <li>Disable browser extensions temporarily</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Problem: &quot;File format not supported&quot; error</h4>
                      <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                        <p><strong>Solutions:</strong></p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>Convert file to supported format (PDF, DOCX, DOC, TXT)</li>
                          <li>Ensure file is not password-protected</li>
                          <li>Check file is not corrupted by opening in original application</li>
                          <li>Save as PDF if using uncommon document format</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Analysis Issues */}
                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-xl border border-orange-200/50 dark:border-orange-700/50 p-6">
                  <h3 className="text-xl font-semibold text-orange-800 dark:text-orange-300 mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    Analysis Processing Issues
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Problem: Analysis takes too long or gets stuck</h4>
                      <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                        <p><strong>Solutions:</strong></p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>Wait up to 5 minutes for large documents (normal processing time)</li>
                          <li>Refresh the page and check if analysis completed</li>
                          <li>Try again with a smaller document to test system</li>
                          <li>Contact support if issue persists beyond 10 minutes</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Problem: Poor analysis quality or missing sections</h4>
                      <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                        <p><strong>Solutions:</strong></p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>Ensure document has clear section headings</li>
                          <li>Use searchable PDF (not scanned image)</li>
                          <li>Check document formatting is consistent</li>
                          <li>Remove excessive whitespace or formatting</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Browser Issues */}
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl border border-purple-200/50 dark:border-purple-700/50 p-6">
                  <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-300 mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                    </svg>
                    Browser-Related Issues
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Problem: Interface not loading properly</h4>
                      <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                        <p><strong>Solutions:</strong></p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>Hard refresh the page (Ctrl+F5 or Cmd+Shift+R)</li>
                          <li>Clear browser cache and reload</li>
                          <li>Disable ad blockers and privacy extensions</li>
                          <li>Try in incognito/private browsing mode</li>
                          <li>Switch to a supported browser (Chrome, Firefox, Safari, Edge)</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Problem: Buttons or features not working</h4>
                      <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                        <p><strong>Solutions:</strong></p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>Enable JavaScript in browser settings</li>
                          <li>Update browser to latest version</li>
                          <li>Check if popup blockers are preventing actions</li>
                          <li>Try different browser or device</li>
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
                  <h3 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Supported Formats
                  </h3>
                  
                  <div className="space-y-3">
                    {[
                      { format: 'PDF', description: 'Portable Document Format - Preferred for best analysis', icon: '📄' },
                      { format: 'DOCX', description: 'Microsoft Word (2007+) - Good text extraction', icon: '📝' },
                      { format: 'DOC', description: 'Microsoft Word (Legacy) - Basic support', icon: '📃' },
                      { format: 'TXT', description: 'Plain text - Simple but effective', icon: '📋' }
                    ].map((item) => (
                      <div key={item.format} className="bg-white dark:bg-gray-800 rounded-lg p-3 flex items-center space-x-3">
                        <span className="text-2xl">{item.icon}</span>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">{item.format}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* File Requirements */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200/50 dark:border-blue-700/50 p-6">
                  <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Requirements
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">File Size</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">Maximum 50MB per document</p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Text Quality</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">Searchable text preferred over scanned images</p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Security</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">Password-protected files not supported</p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Language</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">English language documents only</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Best Practices */}
              <div className="mt-6 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl border border-gray-200/50 dark:border-gray-700/50 p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">📋 Best Practices for Optimal Analysis</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Document Structure</h4>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• Use clear, descriptive section headings</li>
                      <li>• Maintain consistent formatting throughout</li>
                      <li>• Include table of contents when possible</li>
                      <li>• Number sections and subsections</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Content Quality</h4>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• Ensure text is selectable, not images</li>
                      <li>• Use standard fonts and formatting</li>
                      <li>• Avoid excessive whitespace or line breaks</li>
                      <li>• Include all required RFP sections</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Browser Compatibility */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">3</span>
                Browser Compatibility
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Supported Browsers */}
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl border border-cyan-200/50 dark:border-cyan-700/50 p-6">
                  <h3 className="text-xl font-semibold text-cyan-800 dark:text-cyan-300 mb-4">Supported Browsers</h3>
                  
                  <div className="space-y-3">
                    {[
                      { browser: 'Google Chrome', version: '90+', status: 'Recommended', icon: '🟢' },
                      { browser: 'Mozilla Firefox', version: '88+', status: 'Fully Supported', icon: '🟢' },
                      { browser: 'Safari', version: '14+', status: 'Supported', icon: '🟡' },
                      { browser: 'Microsoft Edge', version: '90+', status: 'Supported', icon: '🟡' },
                      { browser: 'Internet Explorer', version: 'Any', status: 'Not Supported', icon: '🔴' }
                    ].map((item) => (
                      <div key={item.browser} className="bg-white dark:bg-gray-800 rounded-lg p-3 flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-lg">{item.icon}</span>
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">{item.browser}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Version {item.version}</p>
                          </div>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          item.status === 'Recommended' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' :
                          item.status === 'Fully Supported' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' :
                          item.status === 'Supported' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300' :
                          'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Browser Settings */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200/50 dark:border-purple-700/50 p-6">
                  <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-300 mb-4">Required Browser Settings</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">✅ JavaScript Enabled</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">Required for file upload and analysis features</p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">✅ Cookies Enabled</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">Needed for session management and preferences</p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">✅ Local Storage</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">Used for caching and offline functionality</p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">⚠️ Ad Blockers</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">May interfere with file uploads - disable if issues occur</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Performance Optimization */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">4</span>
                Performance Optimization
              </h2>
              
              <div className="space-y-6">
                {/* System Requirements */}
                <div className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 rounded-xl border border-emerald-200/50 dark:border-emerald-700/50 p-6">
                  <h3 className="text-xl font-semibold text-emerald-800 dark:text-emerald-300 mb-4">Recommended System Requirements</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">💻 Memory (RAM)</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">4GB minimum, 8GB+ recommended for large files</p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🌐 Internet Speed</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">5 Mbps upload speed for smooth file transfers</p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🖥️ Screen Resolution</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">1024x768 minimum, 1920x1080+ recommended</p>
                    </div>
                  </div>
                </div>

                {/* Performance Tips */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200/50 dark:border-blue-700/50 p-6">
                  <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-4">Performance Optimization Tips</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">🚀 Speed Improvements</h4>
                      <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                        <li>• Close unnecessary browser tabs</li>
                        <li>• Restart browser before large uploads</li>
                        <li>• Use wired internet connection when possible</li>
                        <li>• Upload during off-peak hours</li>
                        <li>• Clear browser cache regularly</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">📊 File Optimization</h4>
                      <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                        <li>• Compress large PDFs before upload</li>
                        <li>• Remove unnecessary images or graphics</li>
                        <li>• Split very large documents if possible</li>
                        <li>• Use PDF over DOCX for better performance</li>
                        <li>• Ensure document is text-searchable</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Support */}
            <section className="mb-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl border border-blue-200/50 dark:border-blue-700/50 p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Still Experiencing Issues?</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Our technical support team is here to help resolve any persistent issues you may encounter.
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