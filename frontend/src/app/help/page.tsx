'use client';

import Breadcrumb from '@/app/components/ui/Breadcrumb';

const DOCUMENTATION_SECTIONS = [
  {
    title: 'Getting Started',
    description: 'Learn the basics of using the RFP Analyzer platform',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    articles: [
      { title: 'Platform Overview', readTime: '5 min', difficulty: 'Beginner' },
      { title: 'Creating Your First Analysis', readTime: '10 min', difficulty: 'Beginner' },
      { title: 'Understanding the Interface', readTime: '8 min', difficulty: 'Beginner' },
      { title: 'File Upload Guidelines', readTime: '6 min', difficulty: 'Beginner' }
    ]
  },
  {
    title: 'Analysis Features',
    description: 'Deep dive into RFP analysis capabilities and tools',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    articles: [
      { title: 'Comprehensive Section Analysis', readTime: '15 min', difficulty: 'Intermediate' },
      { title: 'Understanding Evaluation Scores', readTime: '12 min', difficulty: 'Intermediate' },
      { title: 'Interpretation of Results', readTime: '20 min', difficulty: 'Advanced' },
      { title: 'Custom Analysis Parameters', readTime: '18 min', difficulty: 'Advanced' }
    ]
  },
  {
    title: 'Templates & Best Practices',
    description: 'Guidelines for creating effective RFPs and using templates',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    articles: [
      { title: 'Template Selection Guide', readTime: '10 min', difficulty: 'Beginner' },
      { title: 'Customizing Templates', readTime: '15 min', difficulty: 'Intermediate' },
      { title: 'Industry-Specific Guidelines', readTime: '25 min', difficulty: 'Intermediate' },
      { title: 'Advanced Template Creation', readTime: '30 min', difficulty: 'Advanced' }
    ]
  },
  {
    title: 'Technical Support',
    description: 'Troubleshooting and technical assistance',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 110 19.5 9.75 9.75 0 010-19.5z" />
      </svg>
    ),
    articles: [
      { title: 'Common Issues & Solutions', readTime: '12 min', difficulty: 'Beginner' },
      { title: 'File Format Requirements', readTime: '8 min', difficulty: 'Beginner' },
      { title: 'Browser Compatibility', readTime: '6 min', difficulty: 'Beginner' },
      { title: 'Performance Optimization', readTime: '15 min', difficulty: 'Advanced' }
    ]
  }
];

const FAQ_ITEMS = [
  {
    question: 'What file formats are supported for RFP uploads?',
    answer: 'We support PDF, DOCX, DOC, and TXT file formats. For best results, ensure your documents are text-searchable and well-structured.'
  },
  {
    question: 'How accurate is the automated section analysis?',
    answer: 'Our AI-powered analysis achieves 85-95% accuracy in identifying and categorizing RFP sections. Manual review is recommended for critical evaluations.'
  },
  {
    question: 'Can I customize the evaluation criteria?',
    answer: 'Yes, premium users can customize evaluation parameters and weightings to align with their organization\'s specific requirements.'
  },
  {
    question: 'Is my data secure on the platform?',
    answer: 'Absolutely. We use enterprise-grade encryption, secure cloud storage, and follow SOC 2 compliance standards to protect your sensitive documents.'
  },
  {
    question: 'How do I export analysis results?',
    answer: 'Analysis results can be exported in multiple formats including PDF reports, Excel spreadsheets, and structured JSON data for integration with other systems.'
  }
];

export default function HelpPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-7xl mx-auto">
            <Breadcrumb items={[{ label: 'Resources' }, { label: 'Help & Documentation' }]} />
            
            {/* Hero Section */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-full border border-blue-200/50 dark:border-blue-700/50 mb-6">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                  Help & Documentation Center
                </span>
              </div>
              
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 dark:from-white dark:via-blue-200 dark:to-indigo-200 bg-clip-text text-transparent leading-tight">
                Help & Documentation
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                Find comprehensive guides, tutorials, and answers to help you make the most of the 
                RFP Analyzer platform and create outstanding procurement documents.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-xl mx-auto mb-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    className="w-full px-6 py-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-4 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Documentation Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {DOCUMENTATION_SECTIONS.map((section) => (
                <div key={section.title} className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg text-white">
                      {section.icon}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                        {section.title}
                      </h2>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {section.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {section.articles.map((article) => (
                      <div key={article.title} className="group flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-blue-900/20 dark:hover:to-indigo-900/20 transition-all duration-300 cursor-pointer">
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                            {article.title}
                          </h3>
                          <div className="flex items-center space-x-4 mt-1">
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {article.readTime} read
                            </span>
                            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                              article.difficulty === 'Beginner' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' :
                              article.difficulty === 'Intermediate' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300' :
                              'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                            }`}>
                              {article.difficulty}
                            </span>
                          </div>
                        </div>
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ Section */}
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-2xl p-8 mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Quick answers to common questions about the RFP Analyzer platform
                </p>
              </div>

              <div className="space-y-4">
                {FAQ_ITEMS.map((faq, index) => (
                  <div key={index} className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl border border-gray-200/50 dark:border-gray-700/50 p-6">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-start">
                      <span className="w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                        Q
                      </span>
                      {faq.question}
                    </h3>
                    <div className="ml-9">
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Support Section */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-2xl border border-blue-200/50 dark:border-blue-700/50 p-12">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  Still Need Help?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                  Can&apos;t find what you&apos;re looking for? Our support team is ready to help you with any questions 
                  or technical issues you might encounter.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105 font-semibold shadow-xl">
                    Contact Support
                  </button>
                  <button className="px-8 py-4 bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 font-semibold border border-gray-200 dark:border-gray-600">
                    Schedule Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
  );
} 