import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useData } from '../context/DataContext';
import { FileText, Download, Clock, BarChart2, RefreshCw, Check } from 'lucide-react';

export const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const { refreshData } = useData();
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncMessage, setSyncMessage] = useState('');

  const handleSync = async () => {
    setIsSyncing(true);
    await refreshData();
    setIsSyncing(false);
    setSyncMessage('Website content updated from Google Sheets!');
    setTimeout(() => setSyncMessage(''), 3000);
  };

  const mockDocuments = [
    { id: 1, name: 'Q1 Financial Analysis 2025', date: 'Oct 15, 2024', size: '2.4 MB' },
    { id: 2, name: 'Market Entry Strategy - Draft', date: 'Oct 10, 2024', size: '1.1 MB' },
    { id: 3, name: 'Operational Efficiency Report', date: 'Sept 28, 2024', size: '3.5 MB' },
  ];

  return (
    <div className="bg-gray-950 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">Welcome, {user?.name}</h1>
            <p className="text-gray-400">Here is your consulting overview and documents.</p>
          </div>
          
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
             {/* Sync Button */}
             <button 
               onClick={handleSync}
               disabled={isSyncing}
               className="flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-brand-400 rounded-lg border border-gray-700 transition shadow-lg hover:shadow-brand-900/20"
             >
               <RefreshCw size={18} className={`mr-2 ${isSyncing ? 'animate-spin' : ''}`} />
               {isSyncing ? 'Syncing...' : 'Sync Website Content'}
             </button>
             
             <div className="hidden md:block px-4 py-2 bg-brand-900/20 rounded-lg border border-brand-800/50 text-sm text-brand-300">
               <span className="font-semibold uppercase">{user?.role}</span> Access
             </div>
          </div>
        </div>

        {syncMessage && (
          <div className="mb-6 bg-green-900/20 border border-green-800 text-green-400 px-4 py-3 rounded-lg flex items-center animate-fadeIn">
            <Check size={18} className="mr-2" />
            {syncMessage}
          </div>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-800">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-900/20 text-brand-400 mr-4">
                <FileText size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Active Projects</p>
                <h3 className="text-2xl font-bold text-white">3</h3>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-800">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-900/20 text-green-400 mr-4">
                <Clock size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Hours Logged</p>
                <h3 className="text-2xl font-bold text-white">42.5</h3>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-800">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-purple-900/20 text-purple-400 mr-4">
                <BarChart2 size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Pending Reports</p>
                <h3 className="text-2xl font-bold text-white">1</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Documents Section */}
        <div className="bg-gray-900 rounded-xl shadow-sm border border-gray-800 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-800 bg-gray-900">
            <h3 className="font-bold text-white">Recent Documents</h3>
          </div>
          <div className="divide-y divide-gray-800">
            {mockDocuments.map((doc) => (
              <div key={doc.id} className="p-6 hover:bg-gray-800/50 transition flex flex-col sm:flex-row sm:items-center justify-between">
                <div className="flex items-center mb-4 sm:mb-0">
                  <FileText className="text-gray-500 mr-4" size={32} />
                  <div>
                    <h4 className="font-medium text-gray-200">{doc.name}</h4>
                    <p className="text-sm text-gray-500">{doc.date} • {doc.size}</p>
                  </div>
                </div>
                <button className="flex items-center px-4 py-2 border border-gray-600 rounded-lg text-sm font-medium text-gray-300 hover:bg-gray-800 hover:border-brand-400 hover:text-brand-400 transition">
                  <Download size={16} className="mr-2" />
                  Download
                </button>
              </div>
            ))}
          </div>
          <div className="px-6 py-4 bg-gray-900 border-t border-gray-800 text-center">
             <span className="text-sm text-gray-500">Data connected via secure Google Sheets Integration</span>
          </div>
        </div>
      </div>
    </div>
  );
};