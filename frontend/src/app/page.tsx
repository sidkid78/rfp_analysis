import UploadForm from './components/forms/UploadForm';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">RFP Analysis Tool</h1>
      <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">
        Upload an RFP document to analyze 18 key sections, evaluate compliance, 
        and receive recommendations for improvement.
      </p>
      
      <UploadForm />
      
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Key Features</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Comprehensive analysis of 18 RFP sections</li>
          <li>Extraction of key information and requirements</li>
          <li>Standardized evaluation against industry best practices</li>
          <li>Prioritized recommendations for improvement</li>
          <li>Executive summary with strengths and weaknesses</li>
        </ul>
      </div>
    </main>
  );
}
