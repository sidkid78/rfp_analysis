'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { RFPDocument, RFPSection } from '@/app/types';
import { FileProcessor } from '@/app/lib/fileProcessor';

export default function UploadForm() {
  const [file, setFile] = useState<File | null>(null);
  const [sections, setSections] = useState<Partial<RFPDocument>>({});
  const [manualInput, setManualInput] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');
  const [processingStatus, setProcessingStatus] = useState('');
  const router = useRouter();

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      
      // Process the file if it's a supported type
      if (selectedFile) {
        try {
          setIsProcessing(true);
          setProcessingStatus('Processing file...');
          
          const result = await FileProcessor.processFile(selectedFile);
          
          if (result.error) {
            setError(result.error);
          } else {
            // Populate the sections from the parsed document
            setSections(result.document);
            setProcessingStatus('File processed successfully. You can review the extracted sections below.');
          }
        } catch (error) {
          setError('Error processing file: ' + (error instanceof Error ? error.message : 'Unknown error'));
        } finally {
          setIsProcessing(false);
        }
      }
    }
  };

  const handleSectionChange = (sectionName: keyof RFPDocument, value: string) => {
    setSections(prev => ({
      ...prev,
      [sectionName]: { content: value } as RFPSection
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      let document: RFPDocument;
      
      if (file && !manualInput) {
        document = sections;
      } else {
        document = sections as RFPDocument;
      }
      
      // Ensure we have at least one section
      if (Object.keys(document).length === 0) {
        throw new Error('No RFP sections found. Please upload a different file or enter sections manually.');
      }
      
      const response = await fetch('/api/analyze-rfp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ document }),
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

  return (
    <form onSubmit={handleSubmit} className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 p-8 rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-3xl">
      <div className="flex items-center mb-8">
        <div className="mr-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">Upload RFP Document</h3>
          </div>
          <div className="border-2 border-dashed border-blue-300/50 dark:border-blue-600/50 rounded-xl p-6 transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 group">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <input
                title="RFP Document Upload"
                type="file"
                onChange={handleFileChange}
                accept=".pdf,.docx,.doc,.txt"
                className="block w-full text-sm text-gray-600 dark:text-gray-400
                  file:mr-4 file:py-3 file:px-6
                  file:rounded-xl file:border-0
                  file:text-sm file:font-semibold
                  file:bg-gradient-to-r file:from-blue-500 file:to-purple-600
                  file:text-white file:shadow-lg
                  hover:file:from-blue-600 hover:file:to-purple-700
                  file:transition-all file:duration-300
                  focus:outline-none"
                disabled={manualInput || isSubmitting || isProcessing}
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                Supports PDF, DOCX, DOC, and TXT files
              </p>
            </div>
          </div>
          {isProcessing && (
            <div className="mt-2 text-sm text-blue-600 dark:text-blue-400">
              {processingStatus}
            </div>
          )}
        </div>
        
        <div className="flex items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-sm"></div>
            <span className="relative px-6 py-2 bg-white dark:bg-gray-900 rounded-full text-lg font-bold text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
              OR
            </span>
          </div>
        </div>
        
        <button
          type="button"
          onClick={() => setManualInput(!manualInput)}
          className={`group relative px-6 py-4 rounded-xl font-semibold transition-all duration-300 overflow-hidden ${
            manualInput 
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl hover:shadow-2xl hover:scale-105' 
              : 'bg-white/50 dark:bg-gray-800/50 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 hover:scale-105 hover:shadow-lg'
          }`}
          disabled={isSubmitting || isProcessing}
        >
          <div className="flex items-center space-x-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            <span>Enter RFP Sections Manually</span>
          </div>
          {manualInput && (
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          )}
        </button>
      </div>
      
      {(manualInput || Object.keys(sections).length > 0) && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            {manualInput ? 'Enter RFP Sections' : 'Review Extracted Sections'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Introduction
              </label>
              <textarea
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                rows={4}
                value={sections.introduction?.content || ''}
                onChange={(e) => handleSectionChange('introduction', e.target.value)}
                disabled={isSubmitting}
                placeholder={manualInput ? 'Enter introduction content...' : 'No introduction section found.'}
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Statement of Work (SOW)
              </label>
              <textarea
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                rows={4}
                value={sections.sow?.content || ''}
                onChange={(e) => handleSectionChange('sow', e.target.value)}
                disabled={isSubmitting}
                placeholder={manualInput ? 'Enter SOW content...' : 'No SOW section found.'}
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Proposal Submission
              </label>
              <textarea
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                rows={4}
                value={sections.proposalSubmission?.content || ''}
                onChange={(e) => handleSectionChange('proposalSubmission', e.target.value)}
                disabled={isSubmitting}
                placeholder={manualInput ? 'Enter submission requirements...' : 'No proposal submission section found.'}
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Evaluation Criteria
              </label>
              <textarea
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                rows={4}
                value={sections.evaluationCriteria?.content || ''}
                onChange={(e) => handleSectionChange('evaluationCriteria', e.target.value)}
                disabled={isSubmitting}
                placeholder={manualInput ? 'Enter evaluation criteria...' : 'No evaluation criteria section found.'}
              />
            </div>
            
            {/* Add more section fields as needed or implement a dynamic list */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Additional Notes
              </label>
              <textarea
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                rows={4}
                value={sections.additionalNotes?.content || ''}
                onChange={(e) => handleSectionChange('additionalNotes', e.target.value)}
                disabled={isSubmitting}
                placeholder={manualInput ? 'Enter additional notes...' : 'No additional notes section found.'}
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Additional Sections
              </label>
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-md text-sm text-gray-600 dark:text-gray-400 transition-colors duration-200">
                {Object.keys(sections).length > 4 ? (
                  <p>{Object.keys(sections).length - 4} additional sections found. Use the full form for detailed editing.</p>
                ) : manualInput ? (
                  <p>Add more sections using the full form option.</p>
                ) : (
                  <p>No additional sections found in the document.</p>
                )}
              </div>
            </div>
          </div>
          
          {manualInput && (
            <button
              type="button"
              className="mt-2 text-blue-600 dark:text-blue-400 hover:underline text-sm transition-colors duration-200"
              onClick={() => router.push('/analyze')}
              title="Use full form to add all 18 sections"
              aria-label="Use full form to add all 18 sections"
              disabled={isSubmitting || isProcessing}
            >
              Use full form to add all 18 sections →
            </button>
          )}
        </div>
      )}
      
      {error && (
        <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800 rounded-md transition-colors duration-200">
          {error}
        </div>
      )}
      
      <button
        type="submit"
        className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl disabled:from-gray-400 disabled:to-gray-500 transition-all duration-300 focus:ring-4 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 font-semibold shadow-xl hover:shadow-2xl hover:scale-105 disabled:hover:scale-100 disabled:cursor-not-allowed"
        disabled={(Object.keys(sections).length === 0 && !manualInput) || isSubmitting || isProcessing}
      >
        <div className="flex items-center space-x-3">
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span>Analyzing...</span>
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
    </form>
  );
}
