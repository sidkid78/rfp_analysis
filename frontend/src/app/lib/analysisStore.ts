// Shared in-memory store for analysis results
// In production, you'd use a proper database
export const analysisStore = new Map<string, object>();

export function storeAnalysis(id: string, analysis: object): void {
  analysisStore.set(id, analysis);
}

export function getAnalysis(id: string): object | null {
  return analysisStore.get(id) || null;
}

export function hasAnalysis(id: string): boolean {
  return analysisStore.has(id);
}

export function deleteAnalysis(id: string): boolean {
  return analysisStore.delete(id);
}

export function getAllAnalysisIds(): string[] {
  return Array.from(analysisStore.keys());
} 