import React from 'react';
import { 
  ChevronDown, 
  Menu, 
  Shirt, 
  BabyIcon, 
  Smartphone, 
  Laptop, 
  Home, 
  SprayCan, 
  Book, 
  ShoppingBag,
  ArrowRight
} from 'lucide-react';

import { CATEGORIES } from '../../Constants/navigation';

const CategoryBar = ({ 
  scrollRef, 
  handleMouseDown, 
  handleMouseLeave, 
  handleMouseUp, 
  handleMouseMove 
}) => {
  return (
    <div className="bg-white md:bg-gray-50 border-b border-gray-100 hidden md:block overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          {/* Main Menu Trigger */}
          <button className="flex items-center gap-2 py-3.5 text-gray-800 font-bold hover:text-brand-primary transition-colors border-r border-gray-200 pr-6 shrink-0 group">
            <Menu size={18} className="group-hover:rotate-180 transition-transform duration-500" />
            <span className="text-[13px] uppercase tracking-wider font-black">All Categories</span>
          </button>

          {/* Draggable Categories List */}
          <div 
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="flex-1 flex items-center gap-2 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none py-1"
          >
            {CATEGORIES.map((cat, idx) => (
              <button 
                key={cat}
                className={`flex items-center gap-2.5 px-4 py-2 rounded-xl whitespace-nowrap transition-all duration-300 group
                  ${idx === 0 ? 'bg-brand-primary text-white shadow-md shadow-brand-primary/20' : 'text-gray-600 hover:bg-white hover:shadow-sm hover:text-brand-primary border border-transparent hover:border-gray-100'}
                `}
              >
                {/* Simplified Icon Logic for extraction - can be enhanced */}
                <span className="text-[13px] font-bold tracking-tight">{cat}</span>
                {idx !== 0 && <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" />}
              </button>
            ))}
          </div>

          {/* Flash Deals / Special Action */}
          <div className="hidden lg:flex items-center gap-2 pl-6 border-l border-gray-200 shrink-0">
             <button className="flex items-center gap-2 px-4 py-2 bg-rose-50 text-rose-600 rounded-xl text-[12px] font-black uppercase tracking-wider hover:bg-rose-100 transition-all active:scale-95 group">
                ⚡ Flash Deals
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryBar;
