import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import { List } from 'lucide-react';

export const EditorSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'testcase' | 'result'>('testcase');

  const code = `#include <iostream>

int main() {
    std::cout << "Hello World";
    return 0;
}`;

  return (
    <div className="flex flex-col h-full bg-dark-secondary relative">
      {/* Editor Header */}
      <div className="h-10 px-4 flex items-center justify-between border-b border-dark-border text-xs text-zinc-400">
        <div className="flex items-center space-x-2">
          <span className="text-zinc-300">C++ (GCC 14.1.0)</span>
        </div>
      </div>

      {/* Editor Area */}
      <div className="flex-grow relative bg-[#1e1e1e]">
        <Editor
          height="100%"
          defaultLanguage="cpp"
          defaultValue={code}
          theme="vs-dark"
          options={{
            fontSize: 14,
            minimap: { enabled: false },
            padding: { top: 16 },
            scrollBeyondLastLine: false,
            automaticLayout: true,
            lineNumbersMinChars: 3,
            glyphMargin: false,
            folding: false,
            lineDecorationsWidth: 0,
            lineNumbers: 'on',
            renderLineHighlight: 'all',
          }}
        />

        {/* Floating buttons in editor bottom right */}
        <div className="absolute bottom-4 right-4 z-10">
             <button className="p-2 rounded-md bg-zinc-800 hover:bg-zinc-700 border border-dark-border text-zinc-400">
                <List size={18} />
             </button>
        </div>
      </div>

      {/* Console Area */}
      <div className="h-48 border-t border-dark-border flex flex-col bg-dark-bg">
        <div className="flex border-b border-dark-border bg-dark-secondary">
          <button
            onClick={() => setActiveTab('testcase')}
            className={`px-4 py-2.5 text-xs font-medium relative transition-colors ${activeTab === 'testcase' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
          >
            Testcase
            {activeTab === 'testcase' && <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-white rounded-full" />}
          </button>
          <button
            onClick={() => setActiveTab('result')}
            className={`px-4 py-2.5 text-xs font-medium relative transition-colors ${activeTab === 'result' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
          >
            Result
            {activeTab === 'result' && <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-white rounded-full" />}
          </button>
        </div>

        <div className="flex-grow p-4 overflow-y-auto">
          {activeTab === 'testcase' ? (
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-xs font-medium text-zinc-400">Input:</p>
                <div className="bg-zinc-800/40 p-3 rounded-md border border-dark-border font-mono text-sm text-zinc-300">
                  nums = [2,7,11,15], target = 9
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-zinc-600 italic text-sm">
              Run your code to see the result
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
