'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { RFPDocument, RFPSection } from '@/app/types';

const RFP_SECTIONS = [
  { key: 'introduction', label: 'Introduction', description: 'General introduction and background information' },
  { key: 'sow', label: 'Statement of Work (SOW)', description: 'Detailed description of work to be performed' },
  { key: 'proposalSubmission', label: 'Proposal Submission', description: 'Instructions for proposal submission and requirements' },
  { key: 'evaluationCriteria', label: 'Evaluation Criteria', description: 'Criteria used to evaluate and score proposals' },
  { key: 'contractTerms', label: 'Contract Terms', description: 'Contract terms and conditions' },
  { key: 'priceCostProposal', label: 'Price/Cost Proposal', description: 'Pricing structure and cost requirements' },
  { key: 'periodOfPerformance', label: 'Period of Performance', description: 'Timeline and performance schedule' },
  { key: 'keyPersonnel', label: 'Key Personnel', description: 'Required personnel qualifications and roles' },
  { key: 'pastPerformance', label: 'Past Performance', description: 'Requirements for demonstrating past performance' },
  { key: 'subcontractingPlan', label: 'Subcontracting Plan', description: 'Requirements for subcontractor utilization' },
  { key: 'environmentalConsiderations', label: 'Environmental Considerations', description: 'Environmental compliance and requirements' },
  { key: 'cybersecurityPlan', label: 'Cybersecurity Plan', description: 'Information security and cybersecurity requirements' },
  { key: 'supplyChainRisk', label: 'Supply Chain Risk', description: 'Supply chain risk management requirements' },
  { key: 'contractDataRequirements', label: 'Contract Data Requirements', description: 'Data deliverable requirements and specifications' },
  { key: 'certificationsRepresentations', label: 'Certifications & Representations', description: 'Required certifications and representations' },
  { key: 'technicalApproach', label: 'Technical Approach', description: 'Technical methodology and approach requirements' },
  { key: 'managementApproach', label: 'Management Approach', description: 'Project management methodology requirements' },
  { key: 'riskAssessment', label: 'Risk Assessment', description: 'Risk identification and mitigation requirements' }
] as const;

type SectionKey = typeof RFP_SECTIONS[number]['key'];

export default function FullRFPForm() {
  const [sections, setSections] = useState<Partial<RFPDocument>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [activeSection, setActiveSection] = useState<string>('introduction');
  const router = useRouter();

  const handleSectionChange = (sectionKey: SectionKey, value: string) => {
    setSections(prev => ({
      ...prev,
      [sectionKey]: { content: value } as RFPSection
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // Ensure we have at least one section with content
      const sectionsWithContent = Object.entries(sections).filter(
        ([, section]) => section?.content && section.content.trim().length > 0
      );
      
      if (sectionsWithContent.length === 0) {
        throw new Error('Please enter content for at least one section.');
      }
      
      const response = await fetch('/api/analyze-rfp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ document: sections }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to analyze RFP');
      }
      
      router.push(`/results/${data.id}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getSectionProgress = () => {
    const completedSections = RFP_SECTIONS.filter(
      section => {
        const sectionContent = sections[section.key]?.content;
        return sectionContent && sectionContent.trim().length > 10;
      }
    ).length;
    return { completed: completedSections, total: RFP_SECTIONS.length };
  };

  const progress = getSectionProgress();

  return (
    <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-3xl">
      {/* Premium Progress Header */}
      <div className="relative p-8 border-b border-gradient-to-r from-blue-500/20 to-purple-500/20">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-t-2xl"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                RFP Analysis Workspace
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 font-medium">
                Complete your comprehensive RFP evaluation
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  {progress.completed} of {progress.total}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-500">
                  sections completed
                </div>
              </div>
              <div className="w-12 h-12 relative">
                <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-gray-200 dark:text-gray-700"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray={`${(progress.completed / progress.total) * 100}, 100`}
                    className="text-blue-600 dark:text-blue-500 transition-all duration-1000 ease-out"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                    {Math.round((progress.completed / progress.total) * 100)}%
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Progress Bar */}
          <div className="relative">
            <div className="w-full h-3 bg-gray-200/50 dark:bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                style={{ width: `${(progress.completed / progress.total) * 100}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent animate-shimmer"></div>
              </div>
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-500 dark:text-gray-400">
              <span>Started</span>
              <span className="font-medium">
                {progress.completed === progress.total ? 'Complete!' : 'In Progress'}
              </span>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex min-h-[800px]">
        {/* Premium Sidebar Navigation */}
        <div className="w-96 border-r border-gray-200/50 dark:border-gray-700/50 max-h-[800px] overflow-y-auto bg-gradient-to-b from-gray-50/50 to-white/50 dark:from-gray-800/50 dark:to-gray-900/50">
          <div className="p-6 sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg z-10 border-b border-gray-200/50 dark:border-gray-700/50">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Section Navigator
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Complete each section to build comprehensive analysis
            </p>
          </div>
          
          <div className="p-6 space-y-3">
            {RFP_SECTIONS.map((section, index) => {
              const sectionContent = sections[section.key]?.content;
              const hasContent = sectionContent && sectionContent.trim().length > 0;
              const isActive = activeSection === section.key;
              const wordCount = sectionContent ? sectionContent.trim().split(/\s+/).length : 0;
              
              return (
                <button
                  key={section.key}
                  type="button"
                  onClick={() => setActiveSection(section.key)}
                  className={`group w-full text-left rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border-2 border-blue-500/30 shadow-lg'
                      : hasContent
                      ? 'bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 border-2 border-emerald-200 dark:border-emerald-700/50 hover:border-emerald-300 dark:hover:border-emerald-600'
                      : 'bg-white/50 dark:bg-gray-800/50 border-2 border-gray-200/50 dark:border-gray-700/50 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50/80 dark:hover:bg-gray-700/50'
                  }`}
                >
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                          isActive 
                            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
                            : hasContent
                            ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-md'
                            : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                        }`}>
                          {index + 1}
                        </div>
                        <div>
                          <span className={`font-semibold text-sm block transition-colors duration-300 ${
                            isActive 
                              ? 'text-blue-700 dark:text-blue-300' 
                              : hasContent
                              ? 'text-emerald-700 dark:text-emerald-300'
                              : 'text-gray-700 dark:text-gray-300'
                          }`}>
                            {section.label}
                          </span>
                          {hasContent && (
                            <div className="flex items-center space-x-2 mt-1">
                              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300">
                                {wordCount} words
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        {hasContent && (
                          <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full shadow-sm animate-pulse"></div>
                        )}
                        {isActive && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        )}
                      </div>
                    </div>
                    <p className={`text-xs leading-relaxed transition-colors duration-300 ${
                      isActive 
                        ? 'text-blue-600/80 dark:text-blue-400/80' 
                        : 'text-gray-500 dark:text-gray-400'
                    }`}>
                      {section.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Premium Main Content Area */}
        <div className="flex-1 bg-gradient-to-br from-white/50 to-gray-50/50 dark:from-gray-900/50 dark:to-gray-800/50">
          {RFP_SECTIONS.map((section, index) => {
            const sectionContent = sections[section.key]?.content || '';
            const wordCount = sectionContent.trim() ? sectionContent.trim().split(/\s+/).length : 0;
            const charCount = sectionContent.length;
            const isActive = activeSection === section.key;
            
            return (
              <div
                key={section.key}
                className={`${isActive ? 'block' : 'hidden'} h-full`}
              >
                <div className="h-full flex flex-col">
                  {/* Enhanced Section Header */}
                  <div className="p-8 bg-gradient-to-r from-white/80 to-gray-50/80 dark:from-gray-900/80 dark:to-gray-800/80 backdrop-blur-sm border-b border-gray-200/50 dark:border-gray-700/50">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold text-lg">{index + 1}</span>
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-1">
                            {section.label}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 font-medium">
                            {section.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                            {wordCount} words
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-500">
                            {charCount} characters
                          </div>
                        </div>
                        {wordCount > 0 && (
                          <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full shadow-sm animate-pulse"></div>
                        )}
                      </div>
                    </div>
                    
                    {/* Writing Guidelines */}
                    <div className="bg-blue-50/50 dark:bg-blue-900/20 border border-blue-200/50 dark:border-blue-700/50 rounded-xl p-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-900 dark:text-blue-100 text-sm mb-1">
                            Writing Guidelines
                          </h4>
                          <p className="text-xs text-blue-700 dark:text-blue-300 leading-relaxed">
                            Focus on clarity, completeness, and specificity. Include all relevant requirements, constraints, and evaluation criteria for this section.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced Content Area */}
                  <div className="flex-1 p-8">
                    <div className="relative">
                      <label 
                        htmlFor={`section-${section.key}`}
                        className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3"
                      >
                        Section Content
                      </label>
                      <div className="relative group">
                        <textarea
                          id={`section-${section.key}`}
                          className="w-full h-96 p-6 border-2 border-gray-200/50 dark:border-gray-600/50 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm text-gray-900 dark:text-white transition-all duration-300 focus:ring-4 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 focus:border-blue-500 dark:focus:border-blue-400 resize-none shadow-lg hover:shadow-xl group-hover:border-blue-300 dark:group-hover:border-blue-600 font-mono text-sm leading-relaxed"
                          value={sectionContent}
                          onChange={(e) => handleSectionChange(section.key, e.target.value)}
                          placeholder={`Enter comprehensive ${section.label.toLowerCase()} details here...\n\nTip: Be thorough and specific. Include all requirements, constraints, and evaluation criteria relevant to this section.`}
                          disabled={isSubmitting}
                        />
                        <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg px-3 py-1 border border-gray-200/50 dark:border-gray-600/50 shadow-sm">
                          <div className="flex items-center space-x-2 text-xs">
                            <span className={`font-medium ${wordCount > 100 ? 'text-emerald-600 dark:text-emerald-400' : 'text-gray-500 dark:text-gray-400'}`}>
                              {wordCount} words
                            </span>
                            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                            <span className="text-gray-500 dark:text-gray-400">{charCount} chars</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Premium Navigation Buttons */}
                  <div className="p-8 border-t border-gray-200/50 dark:border-gray-700/50 bg-gradient-to-r from-gray-50/50 to-white/50 dark:from-gray-800/50 dark:to-gray-900/50">
                    <div className="flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => {
                          const currentIndex = RFP_SECTIONS.findIndex(s => s.key === section.key);
                          if (currentIndex > 0) {
                            setActiveSection(RFP_SECTIONS[currentIndex - 1].key);
                          }
                        }}
                        className="group flex items-center space-x-2 px-6 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-lg hover:scale-105"
                        disabled={RFP_SECTIONS.findIndex(s => s.key === section.key) === 0}
                      >
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                          Previous Section
                        </span>
                      </button>
                      
                      <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-medium">{index + 1}</span>
                        <span>of</span>
                        <span className="font-medium">{RFP_SECTIONS.length}</span>
                      </div>
                      
                      <button
                        type="button"
                        onClick={() => {
                          const currentIndex = RFP_SECTIONS.findIndex(s => s.key === section.key);
                          if (currentIndex < RFP_SECTIONS.length - 1) {
                            setActiveSection(RFP_SECTIONS[currentIndex + 1].key);
                          }
                        }}
                        className="group flex items-center space-x-2 px-6 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-lg hover:scale-105"
                        disabled={RFP_SECTIONS.findIndex(s => s.key === section.key) === RFP_SECTIONS.length - 1}
                      >
                        <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                          Next Section
                        </span>
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
              </div>
            </div>
          )})}

          {/* Premium Submit Section */}
          <div className="sticky bottom-0 p-8 bg-gradient-to-r from-white/90 to-gray-50/90 dark:from-gray-900/90 dark:to-gray-800/90 backdrop-blur-xl border-t border-gray-200/50 dark:border-gray-700/50 shadow-xl">
            {error && (
              <div className="mb-6 p-4 bg-gradient-to-r from-red-50 to-red-100/50 dark:from-red-900/30 dark:to-red-800/20 border border-red-200 dark:border-red-700/50 rounded-xl backdrop-blur-sm">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-900 dark:text-red-100 text-sm mb-1">
                      Analysis Error
                    </h4>
                    <p className="text-red-700 dark:text-red-300 text-sm">
                      {error}
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full shadow-sm animate-pulse"></div>
                  <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    {progress.completed} of {progress.total} sections complete
                  </div>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {progress.completed > 0 ? (
                    <span>Ready for comprehensive analysis</span>
                  ) : (
                    <span>Add content to begin analysis</span>
                  )}
                </div>
              </div>
              
              <button
                type="submit"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl disabled:from-gray-400 disabled:to-gray-500 transition-all duration-300 focus:ring-4 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 font-semibold shadow-xl hover:shadow-2xl hover:scale-105 disabled:hover:scale-100 disabled:cursor-not-allowed"
                disabled={progress.completed === 0 || isSubmitting}
              >
                <div className="flex items-center space-x-3">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Analyzing RFP...</span>
                    </>
                  ) : (
                    <>
                      <span>Analyze RFP</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
} 