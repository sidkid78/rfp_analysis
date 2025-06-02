'use client';

import Breadcrumb from '@/app/components/ui/Breadcrumb';

const SETTINGS_SECTIONS = [
  {
    title: 'Account Settings',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    settings: [
      { name: 'Profile Information', description: 'Update your personal details and contact information', type: 'link' },
      { name: 'Password & Security', description: 'Change password and configure two-factor authentication', type: 'link' },
      { name: 'Email Preferences', description: 'Manage notification settings and email subscriptions', type: 'toggle', enabled: true },
      { name: 'Account Privacy', description: 'Control data sharing and privacy settings', type: 'toggle', enabled: false }
    ]
  },
  {
    title: 'Analysis Preferences',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    settings: [
      { name: 'Default Analysis Depth', description: 'Set comprehensive or quick analysis as default', type: 'select', value: 'comprehensive' },
      { name: 'Auto-save Results', description: 'Automatically save analysis results to your account', type: 'toggle', enabled: true },
      { name: 'Custom Evaluation Weights', description: 'Use custom scoring weights for section evaluation', type: 'toggle', enabled: false },
      { name: 'Export Format', description: 'Default format for exporting analysis results', type: 'select', value: 'pdf' }
    ]
  },
  {
    title: 'Interface & Display',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
      </svg>
    ),
    settings: [
      { name: 'Theme', description: 'Choose between light, dark, or system theme', type: 'select', value: 'system' },
      { name: 'Compact Mode', description: 'Use compact interface for better screen utilization', type: 'toggle', enabled: false },
      { name: 'Animation Effects', description: 'Enable smooth animations and transitions', type: 'toggle', enabled: true },
      { name: 'Sidebar Auto-collapse', description: 'Automatically collapse sidebar on smaller screens', type: 'toggle', enabled: true }
    ]
  },
  {
    title: 'Data & Storage',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
    settings: [
      { name: 'Data Retention', description: 'How long to keep your analysis data', type: 'select', value: '1year' },
      { name: 'Cloud Sync', description: 'Synchronize data across multiple devices', type: 'toggle', enabled: true },
      { name: 'Backup Settings', description: 'Automatic backup configuration', type: 'link' },
      { name: 'Clear Cache', description: 'Clear temporary files and cached data', type: 'button' }
    ]
  }
];

export default function SettingsPage() {
  const handleToggle = (sectionIndex: number, settingIndex: number) => {
    // Toggle logic would go here
    console.log(`Toggle setting ${settingIndex} in section ${sectionIndex}`);
  };

  const handleSelect = (sectionIndex: number, settingIndex: number, value: string) => {
    // Select logic would go here
    console.log(`Set setting ${settingIndex} in section ${sectionIndex} to ${value}`);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-50/30 to-gray-100/30 dark:from-gray-900 dark:via-slate-900/20 dark:to-gray-800/20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <Breadcrumb items={[{ label: 'Account' }, { label: 'Settings' }]} />
            
            {/* Hero Section */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-slate-100 to-gray-100 dark:from-slate-900/30 dark:to-gray-900/30 rounded-full border border-slate-200/50 dark:border-slate-700/50 mb-6">
                <div className="w-2 h-2 bg-gradient-to-r from-slate-500 to-gray-600 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Account Configuration
                </span>
              </div>
              
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-slate-800 to-gray-800 dark:from-white dark:via-slate-200 dark:to-gray-200 bg-clip-text text-transparent leading-tight">
                Settings & Preferences
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Customize your RFP Analyzer experience with personalized settings, 
                preferences, and advanced configuration options.
              </p>
            </div>

            {/* Settings Sections */}
            <div className="space-y-8">
              {SETTINGS_SECTIONS.map((section, sectionIndex) => (
                <div key={section.title} className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-2xl p-8">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-slate-500 to-gray-600 rounded-xl flex items-center justify-center shadow-lg text-white">
                      {section.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                        {section.title}
                      </h2>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {section.settings.map((setting, settingIndex) => (
                      <div key={setting.name} className="flex items-center justify-between p-6 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl border border-gray-200/50 dark:border-gray-700/50">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                            {setting.name}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {setting.description}
                          </p>
                        </div>
                        
                        <div className="ml-6 flex-shrink-0">
                          {setting.type === 'toggle' && (
                            <button
                              onClick={() => handleToggle(sectionIndex, settingIndex)}
                              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                                setting.enabled
                                  ? 'bg-gradient-to-r from-blue-600 to-purple-600'
                                  : 'bg-gray-200 dark:bg-gray-700'
                              }`}
                              aria-label={`Toggle ${setting.name}`}
                              title={`Toggle ${setting.name}`}
                            >
                              <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                  setting.enabled ? 'translate-x-6' : 'translate-x-1'
                                }`}
                              />
                            </button>
                          )}
                          
                          {setting.type === 'select' && (
                            <select
                              value={setting.value}
                              onChange={(e) => handleSelect(sectionIndex, settingIndex, e.target.value)}
                              className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                              aria-label={setting.name}
                              title={setting.name}
                            >
                              {setting.name === 'Default Analysis Depth' && (
                                <>
                                  <option value="quick">Quick Analysis</option>
                                  <option value="comprehensive">Comprehensive</option>
                                  <option value="custom">Custom</option>
                                </>
                              )}
                              {setting.name === 'Export Format' && (
                                <>
                                  <option value="pdf">PDF Report</option>
                                  <option value="excel">Excel Spreadsheet</option>
                                  <option value="json">JSON Data</option>
                                  <option value="csv">CSV Export</option>
                                </>
                              )}
                              {setting.name === 'Theme' && (
                                <>
                                  <option value="light">Light</option>
                                  <option value="dark">Dark</option>
                                  <option value="system">System</option>
                                </>
                              )}
                              {setting.name === 'Data Retention' && (
                                <>
                                  <option value="30days">30 Days</option>
                                  <option value="6months">6 Months</option>
                                  <option value="1year">1 Year</option>
                                  <option value="forever">Forever</option>
                                </>
                              )}
                            </select>
                          )}
                          
                          {setting.type === 'link' && (
                            <button className="flex items-center px-4 py-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors">
                              Configure
                              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          )}
                          
                          {setting.type === 'button' && (
                            <button className="px-4 py-2 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-lg hover:from-red-600 hover:to-pink-700 transition-all duration-300 hover:scale-105 font-medium shadow-lg">
                              Clear Now
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Danger Zone */}
            <div className="mt-12 bg-red-50/50 dark:bg-red-900/20 backdrop-blur-xl border border-red-200/50 dark:border-red-800/50 rounded-2xl shadow-2xl p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-red-800 dark:text-red-200">
                    Danger Zone
                  </h2>
                  <p className="text-red-600 dark:text-red-400">
                    Irreversible actions that affect your account
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl border border-red-200/50 dark:border-red-800/50">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Delete All Analysis Data
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Permanently remove all your saved analysis results and history
                    </p>
                  </div>
                  <button className="px-6 py-3 bg-gradient-to-r from-red-600 to-pink-700 text-white rounded-lg hover:from-red-700 hover:to-pink-800 transition-all duration-300 font-semibold shadow-lg">
                    Delete Data
                  </button>
                </div>

                <div className="flex items-center justify-between p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl border border-red-200/50 dark:border-red-800/50">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Close Account
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Permanently delete your account and all associated data
                    </p>
                  </div>
                  <button className="px-6 py-3 bg-gradient-to-r from-red-700 to-pink-800 text-white rounded-lg hover:from-red-800 hover:to-pink-900 transition-all duration-300 font-semibold shadow-lg">
                    Close Account
                  </button>
                </div>
              </div>
            </div>

            {/* Save Changes */}
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-900/30 dark:to-gray-900/30 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-8">
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Changes are automatically saved when you modify settings
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-4 bg-gradient-to-r from-slate-600 to-gray-600 text-white rounded-xl hover:from-slate-700 hover:to-gray-700 transition-all duration-300 hover:scale-105 font-semibold shadow-xl">
                    Export Settings
                  </button>
                  <button className="px-8 py-4 bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 font-semibold border border-gray-200 dark:border-gray-600">
                    Reset to Defaults
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
  );
} 