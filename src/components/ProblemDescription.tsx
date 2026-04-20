import React from 'react';

export const ProblemDescription: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-dark-bg p-6 overflow-y-auto">
      <h1 className="text-2xl font-bold mb-4 text-white">1. Two Sum</h1>

      <div className="flex space-x-2 mb-6">
        <span className="px-3 py-1 rounded-full bg-leetcode-easy/10 text-leetcode-easy text-xs font-semibold">Easy</span>
        <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-400 text-xs font-medium">Array</span>
        <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-400 text-xs font-medium">Hash Table</span>
      </div>

      <div className="text-sm leading-relaxed space-y-4 text-zinc-300">
        <p>
          Given an array of integers <code className="bg-zinc-800/80 px-1.5 py-0.5 rounded text-orange-200/90 font-mono text-xs">nums</code> and an integer <code className="bg-zinc-800/80 px-1.5 py-0.5 rounded text-orange-200/90 font-mono text-xs">target</code>,
          return <span className="italic font-medium">indices of the two numbers such that they add up to target</span>.
        </p>
        <p>
          You may assume that each input would have <span className="font-bold text-white">exactly one solution</span>, and you may not use the same element twice.
        </p>
        <p>
          You can return the answer in any order.
        </p>
      </div>

      <div className="mt-12 space-y-6">
        <div>
          <h3 className="font-bold text-sm mb-3 uppercase tracking-wider text-zinc-500">Example 1:</h3>
          <div className="bg-zinc-800/30 p-4 rounded-xl border border-dark-border font-mono text-sm space-y-2">
            <p><span className="text-zinc-500 font-semibold mr-2">Input:</span> <span className="text-zinc-300">nums = [2,7,11,15], target = 9</span></p>
            <p><span className="text-zinc-500 font-semibold mr-2">Output:</span> <span className="text-zinc-300">[0,1]</span></p>
            <p><span className="text-zinc-500 font-semibold mr-2">Explanation:</span> <span className="text-zinc-400 text-xs leading-relaxed">Because nums[0] + nums[1] == 9, we return [0, 1].</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};
