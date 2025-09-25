import React from 'react';
import { Code2 } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
            <Code2 className="w-10 h-10 text-white" />
          </div>
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full animate-bounce"></div>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Jeffrey C.</h2>
        <p className="text-gray-500 text-sm animate-pulse">Loading portfolio...</p>
        <div className="mt-6 flex justify-center">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;