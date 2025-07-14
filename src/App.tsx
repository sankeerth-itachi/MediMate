import React, { useState } from 'react';
import { 
  MessageSquare, 
  FolderOpen, 
  File, 
  ArrowUp, 
  Search, 
  Brain, 
  MoreHorizontal ,
  Paperclip
} from 'lucide-react';

const App=()=> {
  const [input, setInput] = useState('');
  const [isDeepSearchEnabled, setIsDeepSearchEnabled] = useState(false);
  const [isReasonEnabled, setIsReasonEnabled] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      // Handle message submission
      console.log('Message submitted:', input);
      setInput('');
    }
  };

  const handleFileUpload =()=>{
    
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-4 space-y-4">
        <div className="p-2 bg-gray-900 rounded-lg">
          <MessageSquare className="w-5 h-5 text-white" />
        </div>
        <div className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors">
          <FolderOpen className="w-5 h-5 text-gray-600" />
        </div>
        <div className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors">
          <File className="w-5 h-5 text-gray-600" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex justify-end p-4">
          <button className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
            Get Pro
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 pb-32">
          <div className="w-full max-w-2xl">
            <h1 className="text-3xl font-semibold text-gray-900 text-center mb-8">
              What can I help with?
            </h1>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="relative">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask anything"
                  className="w-full px-4 py-4 text-gray-900 placeholder-gray-500 border-none outline-none resize-none min-h-[60px] max-h-32"
                  rows={1}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSubmit(e);
                    }
                  }}
                />
                
                {/* Input Controls */}
                <div className="px-4 py-3 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {/* Files Input */}
                    {/* File Upload Button */}
                    <label className="flex items-center space-x-2 px-3 py-1.5 rounded-full text-sm font-medium text-gray-600 hover:bg-gray-100 cursor-pointer transition-colors">
                      <Paperclip className="w-4 h-4" />
                      <span>Attach</span>
                      <input
                        type="file"
                        multiple
                        onChange={handleFileUpload}
                        className="hidden"
                        accept=".txt,.pdf,.doc,.docx,.jpg,.jpeg,.png,.gif"
                      />
                    </label>

                    {/* Deep Search Toggle */}
                    <button
                      type="button"
                      onClick={() => setIsDeepSearchEnabled(!isDeepSearchEnabled)}
                      className={`flex items-center space-x-2 px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                        isDeepSearchEnabled
                          ? 'bg-blue-100 text-blue-700'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <Search className="w-4 h-4" />
                      <span>Deep Search</span>
                    </button>

                    {/* Reason Toggle */}
                    <button
                      type="button"
                      onClick={() => setIsReasonEnabled(!isReasonEnabled)}
                      className={`flex items-center space-x-2 px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                        isReasonEnabled
                          ? 'bg-purple-100 text-purple-700'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <Brain className="w-4 h-4" />
                      <span>Reason</span>
                    </button>

                    {/* More Options */}
                    <button
                      type="button"
                      className="p-1.5 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={!input.trim()}
                    className={`p-2 rounded-full transition-colors ${
                      input.trim()
                        ? 'bg-gray-900 text-white hover:bg-gray-800'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <ArrowUp className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Messages */}
        <div className="px-4 pb-6">
          <div className="text-center space-y-2">
            <p className="text-sm text-gray-600">
              You've hit the Free plan limit for Crawl-4o. Subscribe to Pro plan to increase limits.
            </p>
            <p className="text-sm text-gray-600">
              Responses will use another model until your limit resets after 6:35 PM.
            </p>
            <p className="text-sm text-gray-500">
              AI can make mistakes. Please double-check responses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;