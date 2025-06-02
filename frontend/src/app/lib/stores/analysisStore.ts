import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AnalysisResults } from '@/app/types';

interface AnalysisStore {
  analysisResults: Record<string, AnalysisResults>;
  currentAnalysisId: string | null;
  setAnalysisResults: (id: string, results: AnalysisResults) => void;
  setCurrentAnalysisId: (id: string) => void;
  getAnalysisById: (id: string) => AnalysisResults | null;
}

export const useAnalysisStore = create<AnalysisStore>()(
  persist(
    (set, get) => ({
      analysisResults: {},
      currentAnalysisId: null,
      
      setAnalysisResults: (id, results) => set((state) => ({
        analysisResults: {
          ...state.analysisResults,
          [id]: results
        }
      })),
      
      setCurrentAnalysisId: (id) => set({ currentAnalysisId: id }),
      
      getAnalysisById: (id) => {
        const { analysisResults } = get();
        return analysisResults[id] || null;
      }
    }),
    {
      name: 'rfp-analysis-storage',
      partialize: (state) => ({ analysisResults: state.analysisResults })
    }
  )
);