'use client';

import Breadcrumb from '@/app/components/ui/Breadcrumb';

const TEMPLATE_CATEGORIES = [
  {
    title: 'Government Contracts',
    description: 'Templates designed for federal, state, and local government procurement with full compliance',
    templates: [
      { 
        name: 'Federal IT Services RFP', 
        complexity: 'Advanced', 
        sections: 18,
        description: 'Comprehensive template for federal IT procurement including cybersecurity, cloud services, and enterprise systems',
        features: ['FAR/DFARS Compliance', 'Security Requirements', 'Past Performance Matrix', 'SEWP Integration'],
        estimatedValue: '$5M - $50M',
        timeline: '120-180 days'
      },
      { 
        name: 'State Construction Contract', 
        complexity: 'Intermediate', 
        sections: 15,
        description: 'State-level construction procurement template with environmental and safety compliance requirements',
        features: ['OSHA Standards', 'Environmental Impact', 'Local Preference', 'Bonding Requirements'],
        estimatedValue: '$1M - $25M',
        timeline: '90-150 days'
      },
      { 
        name: 'Municipal Services RFP', 
        complexity: 'Basic', 
        sections: 12,
        description: 'Local government services template for consulting, maintenance, and operational support contracts',
        features: ['Local Business Preference', 'Community Impact', 'Budget Constraints', 'Public Meetings'],
        estimatedValue: '$100K - $5M',
        timeline: '60-90 days'
      }
    ],
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Private Sector',
    description: 'Commercial RFP templates optimized for speed, flexibility, and business value',
    templates: [
      { 
        name: 'Enterprise Technology Solutions', 
        complexity: 'Advanced', 
        sections: 16,
        description: 'Comprehensive technology procurement for large enterprises including cloud, AI/ML, and digital transformation',
        features: ['ROI Analysis', 'Scalability Matrix', 'Integration Requirements', 'Change Management'],
        estimatedValue: '$2M - $100M',
        timeline: '45-90 days'
      },
      { 
        name: 'Professional Services RFP', 
        complexity: 'Intermediate', 
        sections: 14,
        description: 'Template for consulting, legal, marketing, and other professional service engagements',
        features: ['Skill Matrix', 'Portfolio Review', 'Cost Plus Fixed Fee', 'Performance Metrics'],
        estimatedValue: '$250K - $10M',
        timeline: '30-60 days'
      },
      { 
        name: 'Strategic Vendor Selection', 
        complexity: 'Basic', 
        sections: 10,
        description: 'Streamlined template for selecting strategic business partners and long-term vendor relationships',
        features: ['Partnership Model', 'Cultural Fit', 'Growth Potential', 'Risk Assessment'],
        estimatedValue: '$500K - $25M',
        timeline: '30-45 days'
      }
    ],
    color: 'from-purple-500 to-purple-600'
  },
  {
    title: 'Specialized Industries',
    description: 'Industry-specific templates with regulatory compliance and specialized requirements',
    templates: [
      { 
        name: 'Healthcare IT & HIPAA Compliance', 
        complexity: 'Advanced', 
        sections: 20,
        description: 'Healthcare technology procurement with full HIPAA, FDA, and patient safety compliance requirements',
        features: ['HIPAA Compliance', 'FDA Validation', 'Patient Safety', 'Interoperability', 'PHI Protection'],
        estimatedValue: '$1M - $50M',
        timeline: '120-240 days'
      },
      { 
        name: 'Financial Services & Regulatory', 
        complexity: 'Advanced', 
        sections: 18,
        description: 'Financial technology and services procurement with SOX, PCI-DSS, and banking regulation compliance',
        features: ['SOX Compliance', 'PCI-DSS Standards', 'Risk Management', 'Audit Trail', 'Regulatory Reporting'],
        estimatedValue: '$2M - $75M',
        timeline: '90-180 days'
      },
      { 
        name: 'Manufacturing & Supply Chain', 
        complexity: 'Intermediate', 
        sections: 13,
        description: 'Manufacturing procurement template with quality standards, lean principles, and supply chain optimization',
        features: ['ISO Standards', 'Lean Manufacturing', 'Supply Chain', 'Quality Control', 'Just-in-Time'],
        estimatedValue: '$500K - $20M',
        timeline: '60-120 days'
      }
    ],
    color: 'from-emerald-500 to-emerald-600'
  },
  {
    title: 'Emerging Technologies',
    description: 'Cutting-edge templates for AI, blockchain, IoT, and next-generation technology procurement',
    templates: [
      { 
        name: 'AI/ML & Data Science Platform', 
        complexity: 'Advanced', 
        sections: 19,
        description: 'Artificial intelligence and machine learning platform procurement with ethical AI and data governance',
        features: ['Ethical AI Framework', 'Model Interpretability', 'Data Governance', 'MLOps Pipeline', 'Bias Detection'],
        estimatedValue: '$1M - $25M',
        timeline: '90-150 days'
      },
      { 
        name: 'Blockchain & Web3 Solutions', 
        complexity: 'Advanced', 
        sections: 17,
        description: 'Blockchain technology procurement including smart contracts, DeFi, and distributed ledger systems',
        features: ['Smart Contracts', 'Consensus Mechanisms', 'Token Economics', 'Security Audits', 'Regulatory Compliance'],
        estimatedValue: '$500K - $15M',
        timeline: '75-120 days'
      },
      { 
        name: 'IoT & Edge Computing', 
        complexity: 'Intermediate', 
        sections: 15,
        description: 'Internet of Things and edge computing solutions with real-time processing and connectivity requirements',
        features: ['Edge Processing', 'Sensor Integration', 'Real-time Analytics', 'Device Management', '5G Connectivity'],
        estimatedValue: '$750K - $20M',
        timeline: '60-100 days'
      }
    ],
    color: 'from-cyan-500 to-cyan-600'
  }
];

export default function TemplatesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-7xl mx-auto">
            <Breadcrumb items={[{ label: 'Resources' }, { label: 'RFP Templates' }]} />
            
            {/* Hero Section */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full border border-blue-200/50 dark:border-blue-700/50 mb-6">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                  Professional RFP Templates
                </span>
              </div>
              
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight">
                RFP Templates Library
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                Choose from our collection of professionally crafted RFP templates, designed to ensure 
                comprehensive coverage and compliance across various industries and project types.
              </p>
              
              <div className="flex items-center justify-center space-x-8 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span>Industry Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Customizable Sections</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Best Practices Included</span>
                </div>
              </div>
            </div>

            {/* Featured Templates */}
            <div className="mb-12 bg-gradient-to-r from-blue-50 via-purple-50/50 to-cyan-50 dark:from-blue-900/20 dark:via-purple-900/10 dark:to-cyan-900/20 rounded-2xl border border-blue-200/50 dark:border-blue-700/50 p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                  🌟 Featured Templates
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Our most popular and comprehensive templates, trusted by leading organizations worldwide
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm rounded-xl border border-blue-200/50 dark:border-blue-700/50 p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Government Certified</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">FAR/DFARS compliant templates with built-in security requirements</p>
                  <div className="text-blue-600 dark:text-blue-400 font-semibold text-sm">95% Success Rate</div>
                </div>
                
                <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm rounded-xl border border-purple-200/50 dark:border-purple-700/50 p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Enterprise Ready</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Optimized for large-scale procurement with advanced evaluation criteria</p>
                  <div className="text-purple-600 dark:text-purple-400 font-semibold text-sm">Fortune 500 Trusted</div>
                </div>
                
                <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm rounded-xl border border-cyan-200/50 dark:border-cyan-700/50 p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">AI-Enhanced</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Next-generation templates with AI analysis and smart recommendations</p>
                  <div className="text-cyan-600 dark:text-cyan-400 font-semibold text-sm">Innovation Leader</div>
                </div>
              </div>
            </div>

            {/* Template Categories */}
            <div className="space-y-12">
              {TEMPLATE_CATEGORIES.map((category, index) => (
                <div key={category.title} className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-2xl p-8">
                  <div className="mb-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center shadow-lg`}>
                        <span className="text-white font-bold text-lg">{index + 1}</span>
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                          {category.title}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {category.templates.map((template) => (
                      <div key={template.name} className="group relative bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-800 dark:to-gray-900/50 rounded-xl border border-gray-200/50 dark:border-gray-700/50 p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                        <div className="mb-4">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {template.name}
                              </h3>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                                {template.description}
                              </p>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4 mb-4 text-xs">
                            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                              <div className="text-gray-500 dark:text-gray-400 mb-1">Project Value</div>
                              <div className="font-semibold text-gray-900 dark:text-white">{template.estimatedValue}</div>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                              <div className="text-gray-500 dark:text-gray-400 mb-1">Timeline</div>
                              <div className="font-semibold text-gray-900 dark:text-white">{template.timeline}</div>
                            </div>
                          </div>
                          
                          <div className="mb-4">
                            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                template.complexity === 'Advanced' ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300' :
                                template.complexity === 'Intermediate' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300' :
                                'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                              }`}>
                                {template.complexity}
                              </span>
                              <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full text-xs font-medium">{template.sections} sections</span>
                            </div>
                            
                            <div className="space-y-2">
                              <div className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">Key Features:</div>
                              <div className="flex flex-wrap gap-1">
                                {template.features.map((feature, featureIndex) => (
                                  <span key={featureIndex} className="inline-flex items-center px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md text-xs font-medium">
                                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    {feature}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                          <button className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            <span>Preview</span>
                          </button>
                          
                          <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 text-sm font-semibold shadow-lg">
                            Use Template
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Template Statistics */}
            <div className="mt-16 mb-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
                  Template Impact & Statistics
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Real results from organizations using our RFP templates
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">2,500+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Active Templates</div>
                  <div className="text-xs text-gray-500 dark:text-gray-500">Across all industries</div>
                </div>
                
                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">85%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Success Rate</div>
                  <div className="text-xs text-gray-500 dark:text-gray-500">Successful procurements</div>
                </div>
                
                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">40%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Time Savings</div>
                  <div className="text-xs text-gray-500 dark:text-gray-500">Faster RFP creation</div>
                </div>
                
                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">$2.1B</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Contract Value</div>
                  <div className="text-xs text-gray-500 dark:text-gray-500">Total facilitated</div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl border border-blue-200/50 dark:border-blue-700/50 p-12">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  Need a Custom Template?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                  Our team can create custom RFP templates tailored to your specific industry requirements and organizational needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 font-semibold shadow-xl">
                    Request Custom Template
                  </button>
                  <button className="px-8 py-4 bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 font-semibold border border-gray-200 dark:border-gray-600">
                    Download Sample RFP
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
  );
} 