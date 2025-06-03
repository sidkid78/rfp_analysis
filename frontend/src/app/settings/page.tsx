'use client';

import { useState } from 'react';
import Breadcrumb from '@/app/components/ui/Breadcrumb';

export default function SettingsPage() {
  // State for different settings categories
  const [analysisSettings, setAnalysisSettings] = useState({
    defaultAnalysisType: 'ai',
    autoSaveResults: true,
    includeConfidenceScores: true,
    enableDetailedComments: true,
    customWeightings: false
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    analysisComplete: true,
    weeklyReports: false,
    systemUpdates: true,
    marketingEmails: false
  });

  const [displaySettings, setDisplaySettings] = useState({
    theme: 'system',
    compactMode: false,
    showTooltips: true,
    animationsEnabled: true,
    language: 'en'
  });

  const [privacySettings, setPrivacySettings] = useState({
    saveUploadHistory: true,
    shareAnonymousUsage: false,
    retainDocuments: 30,
    allowAnalytics: true
  });

  const handleSaveSettings = () => {
    // In a real app, this would save to backend/localStorage
    console.log('Settings saved:', {
      analysisSettings,
      notificationSettings,
      displaySettings,
      privacySettings
    });
    // Show success message
    alert('Settings saved successfully!');
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[{ label: 'Settings' }]} />
          
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-2xl p-8">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Settings
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Customize your RFP Analyzer experience and preferences
              </p>
            </div>

            <div className="space-y-8">
              {/* Analysis Settings */}
              <section className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200/50 dark:border-blue-700/50 p-6">
                <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-300 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">1</span>
                  Analysis Preferences
                </h2>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Default Analysis Type */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                      <label className="block text-sm font-medium text-gray-900 dark:text-white mb-3">
                        Default Analysis Type
                      </label>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="analysisType"
                            value="ai"
                            checked={analysisSettings.defaultAnalysisType === 'ai'}
                            onChange={(e) => setAnalysisSettings({...analysisSettings, defaultAnalysisType: e.target.value})}
                            className="mr-2 text-blue-600"
                          />
                          <span className="text-sm text-gray-700 dark:text-gray-300">AI-Powered Analysis (Recommended)</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="analysisType"
                            value="rules"
                            checked={analysisSettings.defaultAnalysisType === 'rules'}
                            onChange={(e) => setAnalysisSettings({...analysisSettings, defaultAnalysisType: e.target.value})}
                            className="mr-2 text-blue-600"
                          />
                          <span className="text-sm text-gray-700 dark:text-gray-300">Rule-Based Analysis</span>
                        </label>
                      </div>
                    </div>

                    {/* Auto-save Results */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                      <label className="flex items-center justify-between">
                        <div>
                          <span className="text-sm font-medium text-gray-900 dark:text-white">Auto-save Results</span>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Automatically save analysis results to history</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={analysisSettings.autoSaveResults}
                          onChange={(e) => setAnalysisSettings({...analysisSettings, autoSaveResults: e.target.checked})}
                          className="ml-3 text-blue-600 rounded"
                        />
                      </label>
                    </div>

                    {/* Include Confidence Scores */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                      <label className="flex items-center justify-between">
                        <div>
                          <span className="text-sm font-medium text-gray-900 dark:text-white">Show Confidence Scores</span>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Display AI confidence levels in results</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={analysisSettings.includeConfidenceScores}
                          onChange={(e) => setAnalysisSettings({...analysisSettings, includeConfidenceScores: e.target.checked})}
                          className="ml-3 text-blue-600 rounded"
                        />
                      </label>
                    </div>

                    {/* Detailed Comments */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                      <label className="flex items-center justify-between">
                        <div>
                          <span className="text-sm font-medium text-gray-900 dark:text-white">Detailed Comments</span>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Include detailed explanations for scores</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={analysisSettings.enableDetailedComments}
                          onChange={(e) => setAnalysisSettings({...analysisSettings, enableDetailedComments: e.target.checked})}
                          className="ml-3 text-blue-600 rounded"
                        />
                      </label>
                    </div>
                  </div>

                  {/* Custom Weightings */}
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border border-yellow-200 dark:border-yellow-700">
                    <label className="flex items-center justify-between">
                      <div>
                        <span className="text-sm font-medium text-gray-900 dark:text-white flex items-center">
                          Custom Section Weightings
                          <span className="ml-2 px-2 py-0.5 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs rounded-full">Pro</span>
                        </span>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Customize importance of different RFP sections</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={analysisSettings.customWeightings}
                        onChange={(e) => setAnalysisSettings({...analysisSettings, customWeightings: e.target.checked})}
                        className="ml-3 text-blue-600 rounded"
                      />
                    </label>
                  </div>
                </div>
              </section>

              {/* Notification Settings */}
              <section className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200/50 dark:border-green-700/50 p-6">
                <h2 className="text-2xl font-bold text-green-800 dark:text-green-300 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">2</span>
                  Notifications
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                      <label className="flex items-center justify-between">
                        <div>
                          <span className="text-sm font-medium text-gray-900 dark:text-white">Email Notifications</span>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Receive notifications via email</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={notificationSettings.emailNotifications}
                          onChange={(e) => setNotificationSettings({...notificationSettings, emailNotifications: e.target.checked})}
                          className="ml-3 text-green-600 rounded"
                        />
                      </label>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                      <label className="flex items-center justify-between">
                        <div>
                          <span className="text-sm font-medium text-gray-900 dark:text-white">Analysis Complete</span>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Notify when analysis finishes</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={notificationSettings.analysisComplete}
                          onChange={(e) => setNotificationSettings({...notificationSettings, analysisComplete: e.target.checked})}
                          className="ml-3 text-green-600 rounded"
                          disabled={!notificationSettings.emailNotifications}
                        />
                      </label>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                      <label className="flex items-center justify-between">
                        <div>
                          <span className="text-sm font-medium text-gray-900 dark:text-white">Weekly Reports</span>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Summary of your activity</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={notificationSettings.weeklyReports}
                          onChange={(e) => setNotificationSettings({...notificationSettings, weeklyReports: e.target.checked})}
                          className="ml-3 text-green-600 rounded"
                          disabled={!notificationSettings.emailNotifications}
                        />
                      </label>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                      <label className="flex items-center justify-between">
                        <div>
                          <span className="text-sm font-medium text-gray-900 dark:text-white">System Updates</span>
                          <p className="text-xs text-gray-600 dark:text-gray-400">New features and improvements</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={notificationSettings.systemUpdates}
                          onChange={(e) => setNotificationSettings({...notificationSettings, systemUpdates: e.target.checked})}
                          className="ml-3 text-green-600 rounded"
                          disabled={!notificationSettings.emailNotifications}
                        />
                      </label>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                      <label className="flex items-center justify-between">
                        <div>
                          <span className="text-sm font-medium text-gray-900 dark:text-white">Marketing Emails</span>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Tips, tutorials, and promotions</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={notificationSettings.marketingEmails}
                          onChange={(e) => setNotificationSettings({...notificationSettings, marketingEmails: e.target.checked})}
                          className="ml-3 text-green-600 rounded"
                          disabled={!notificationSettings.emailNotifications}
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </section>

              {/* Display Settings */}
              <section className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200/50 dark:border-purple-700/50 p-6">
                <h2 className="text-2xl font-bold text-purple-800 dark:text-purple-300 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">3</span>
                  Display & Interface
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Theme Selection */}
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-3">
                      Theme Preference
                    </label>
                    <select
                      value={displaySettings.theme}
                      onChange={(e) => setDisplaySettings({...displaySettings, theme: e.target.value})}
                      className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                      aria-label="Theme Preference"
                    >
                      <option value="system">System Default</option>
                      <option value="light">Light Mode</option>
                      <option value="dark">Dark Mode</option>
                    </select>
                  </div>

                  {/* Language Selection */}
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-3">
                      Language
                    </label>
                    <select
                      value={displaySettings.language}
                      onChange={(e) => setDisplaySettings({...displaySettings, language: e.target.value})}
                      className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                      aria-label="Language"
                    >
                      <option value="en">English</option>
                      <option value="es">Español (Coming Soon)</option>
                      <option value="fr">Français (Coming Soon)</option>
                    </select>
                  </div>

                  {/* Compact Mode */}
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                    <label className="flex items-center justify-between">
                      <div>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">Compact Mode</span>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Reduce spacing and padding</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={displaySettings.compactMode}
                        onChange={(e) => setDisplaySettings({...displaySettings, compactMode: e.target.checked})}
                        className="ml-3 text-purple-600 rounded"
                      />
                    </label>
                  </div>

                  {/* Show Tooltips */}
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                    <label className="flex items-center justify-between">
                      <div>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">Show Tooltips</span>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Display helpful tips and explanations</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={displaySettings.showTooltips}
                        onChange={(e) => setDisplaySettings({...displaySettings, showTooltips: e.target.checked})}
                        className="ml-3 text-purple-600 rounded"
                      />
                    </label>
                  </div>

                  {/* Animations */}
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 md:col-span-2">
                    <label className="flex items-center justify-between">
                      <div>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">Enable Animations</span>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Smooth transitions and visual effects</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={displaySettings.animationsEnabled}
                        onChange={(e) => setDisplaySettings({...displaySettings, animationsEnabled: e.target.checked})}
                        className="ml-3 text-purple-600 rounded"
                      />
                    </label>
                  </div>
                </div>
              </section>

              {/* Privacy & Data Settings */}
              <section className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl border border-orange-200/50 dark:border-orange-700/50 p-6">
                <h2 className="text-2xl font-bold text-orange-800 dark:text-orange-300 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">4</span>
                  Privacy & Data
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                    <label className="flex items-center justify-between">
                      <div>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">Save Upload History</span>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Keep record of uploaded documents</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={privacySettings.saveUploadHistory}
                        onChange={(e) => setPrivacySettings({...privacySettings, saveUploadHistory: e.target.checked})}
                        className="ml-3 text-orange-600 rounded"
                      />
                    </label>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                    <label className="flex items-center justify-between">
                      <div>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">Anonymous Usage Data</span>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Help improve the platform</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={privacySettings.shareAnonymousUsage}
                        onChange={(e) => setPrivacySettings({...privacySettings, shareAnonymousUsage: e.target.checked})}
                        className="ml-3 text-orange-600 rounded"
                      />
                    </label>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-3">
                      Document Retention (Days)
                    </label>
                    <select
                      value={privacySettings.retainDocuments}
                      onChange={(e) => setPrivacySettings({...privacySettings, retainDocuments: parseInt(e.target.value)})}
                      className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                      aria-label="Document Retention Period"
                    >
                      <option value={7}>7 Days</option>
                      <option value={30}>30 Days</option>
                      <option value={90}>90 Days</option>
                      <option value={365}>1 Year</option>
                      <option value={-1}>Keep Forever</option>
                    </select>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                    <label className="flex items-center justify-between">
                      <div>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">Analytics</span>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Performance and usage analytics</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={privacySettings.allowAnalytics}
                        onChange={(e) => setPrivacySettings({...privacySettings, allowAnalytics: e.target.checked})}
                        className="ml-3 text-orange-600 rounded"
                      />
                    </label>
                  </div>
                </div>
              </section>

              {/* Account Management */}
              <section className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl border border-gray-200/50 dark:border-gray-700/50 p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-gray-500 to-gray-600 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">5</span>
                  Account Management
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                    Change Password
                  </button>
                  
                  <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
                    Export Data
                  </button>
                  
                  <button className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium">
                    Delete Account
                  </button>
                </div>
                
                <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-sm text-blue-800 dark:text-blue-300">
                    <strong>Note:</strong> Account changes may require email verification. 
                    Data export includes all your analysis history and uploaded documents.
                  </p>
                </div>
              </section>

              {/* Save Button */}
              <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => {
                    // Reset to defaults logic would go here
                    alert('Settings reset to defaults');
                  }}
                  className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
                >
                  Reset to Defaults
                </button>
                
                <button
                  onClick={handleSaveSettings}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105 font-semibold shadow-xl"
                >
                  Save Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 