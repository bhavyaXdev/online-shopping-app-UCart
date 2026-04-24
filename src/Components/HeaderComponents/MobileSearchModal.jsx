import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search } from 'lucide-react';
import { CATEGORIES } from '../../Constants/navigation';

const MobileSearchModal = ({ 
  isSearchFocused, 
  setIsSearchFocused, 
  searchInputRef 
}) => {
  return (
    <div
      className={`fixed inset-0 z-[100] bg-white flex flex-col lg:hidden transition-all duration-300 ease-out transform ${isSearchFocused ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-8 invisible pointer-events-none"}`}
    >
      <div className="flex items-center px-4 py-3 border-b">
        <button
          onClick={() => setIsSearchFocused(false)}
          className="mr-3 p-1 rounded-full text-gray-600"
        >
          <ArrowLeft size={22} />
        </button>
        <div className="relative flex-1">
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search items..."
            className="w-full pl-10 pr-4 py-2.5 bg-gray-100 rounded-xl text-sm outline-none"
          />
          <Search
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        <div className="mb-6">
          <h3 className="text-sm font-bold text-gray-800 mb-3 flex items-center">
            <span className="bg-brand-primary w-1 h-4 rounded-full mr-2"></span>
            Popular Categories
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {CATEGORIES.slice(0, 8).map((c) => (
              <Link
                key={c}
                to={`/category/${c.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setIsSearchFocused(false)}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-[13px] text-gray-600 hover:text-brand-primary transition-all shadow-sm"
              >
                {c}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold text-gray-800 mb-3 flex items-center">
            <span className="bg-blue-500 w-1 h-4 rounded-full mr-2"></span>
            Trending Searches
          </h3>
          <div className="flex flex-col">
            {[
              "Wireless Earbuds",
              "Running Shoes",
              "Smart Watches",
              "Winter Jackets",
            ].map((item) => (
              <button
                key={item}
                className="flex items-center px-3 py-2.5 text-sm text-gray-600 hover:bg-gray-100 rounded-lg text-left"
                onClick={() => setIsSearchFocused(false)}
              >
                <Search size={16} className="text-gray-400 mr-3" />
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSearchModal;
