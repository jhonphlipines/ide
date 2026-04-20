import React from 'react';
import { Play, Send, Sun, LayoutGrid, Settings, Flame, ChevronLeft, ChevronRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="h-12 bg-dark-secondary border-b border-dark-border flex items-center justify-between px-4 text-sm z-50">
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <span className="text-orange-500 font-bold text-2xl leading-none">θ</span>
          <button className="flex items-center space-x-1 px-3 py-1 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors border border-dark-border">
            <span className="text-xs font-medium text-zinc-300">Problem List</span>
          </button>
        </div>
        <div className="flex items-center space-x-4 text-zinc-500">
           <ChevronLeft size={18} className="cursor-pointer hover:text-zinc-300" />
           <ChevronRight size={18} className="cursor-pointer hover:text-zinc-300" />
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <button className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors border border-dark-border text-zinc-300 group">
          <Play size={16} fill="currentColor" className="text-zinc-400 group-hover:text-green-500" />
        </button>
        <button className="flex items-center space-x-2 px-4 py-1.5 rounded-lg bg-[#2db55d] hover:bg-[#2db55d]/90 transition-colors text-white font-medium shadow-lg shadow-[#2db55d]/10">
          <Send size={16} className="fill-white" />
          <span>Submit</span>
        </button>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1">
            <button className="p-2 text-zinc-400 hover:text-white transition-colors rounded-md hover:bg-zinc-800"><Sun size={20} /></button>
            <button className="p-2 text-zinc-400 hover:text-white transition-colors rounded-md hover:bg-zinc-800"><LayoutGrid size={20} /></button>
            <button className="p-2 text-zinc-400 hover:text-white transition-colors rounded-md hover:bg-zinc-800"><Settings size={20} /></button>
        </div>
        <div className="flex items-center space-x-1 text-zinc-400 font-medium ml-2">
            <Flame size={18} className="text-zinc-500" />
            <span>0</span>
        </div>
        <button className="px-3 py-1.5 rounded-lg bg-orange-500/10 text-orange-500 text-xs font-bold hover:bg-orange-500/20 transition-colors">
          Premium
        </button>
        <div className="w-7 h-7 rounded-full bg-zinc-700 border border-zinc-600 cursor-pointer"></div>
      </div>
    </nav>
  );
};
