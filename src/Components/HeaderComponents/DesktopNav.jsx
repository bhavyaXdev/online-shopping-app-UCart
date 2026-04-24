import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { Menu, ChevronDown } from 'lucide-react';
import { CATEGORIES } from '../../Constants/navigation';

const NavLink = ({ to, children, className, ...props }) => (
  <RouterNavLink to={to} className={className} {...props}>
    {children}
  </RouterNavLink>
);

const DesktopNav = ({ 
  isCategoryDropdownOpen, 
  setIsCategoryDropdownOpen, 
  scrollRef, 
  handleMouseDown, 
  handleMouseLeave, 
  handleMouseUp, 
  handleMouseMove,
  isDragging
}) => {
  return (
    <div className="hidden md:block w-full bg-white border-t border-gray-200 relative z-40">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex items-center h-[42px]">
        {/* Category Dropdown */}
        <div
          className="relative h-full flex-shrink-0 group z-50 flex items-center mr-6 lg:mr-8 border-r border-gray-200 pr-6"
          onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
          onMouseLeave={() => setIsCategoryDropdownOpen(false)}
        >
          <div className="flex items-center gap-1.5 h-full cursor-pointer text-gray-800 hover:text-brand-primary transition-colors">
            <Menu size={18} strokeWidth={2.5} className="text-brand-primary" />
            <span className="font-bold text-[14px]">All Categories</span>
            <ChevronDown
              size={16}
              strokeWidth={2}
              className={`transition-transform duration-300 ml-1 text-gray-500 ${isCategoryDropdownOpen ? "rotate-180" : "group-hover:rotate-180"}`}
            />
          </div>
          <div
            className={`absolute top-[42px] md:-left-4 lg:-left-15 w-64 bg-white shadow-xl rounded-b-xl border border-gray-100 transition-all duration-300 ${isCategoryDropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0"}`}
          >
            <ul className="py-2 overflow-y-auto max-h-[calc(100vh-140px)] custom-scrollbar">
              {CATEGORIES.map((category, index) => (
                <li key={index}>
                  <NavLink
                    to={`/category/${category.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-").replace(/'/g, "")}`}
                    className="block px-5 py-2.5 text-gray-600 hover:text-brand-primary hover:bg-blue-50 transition-colors text-[13px] font-medium"
                  >
                    {category}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Categories List */}
        <ul
          className="flex items-center space-x-6 lg:space-x-8 h-full overflow-x-auto no-scrollbar text-[14px] font-semibold text-gray-600 select-none cursor-pointer"
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {CATEGORIES.map((category, index) => (
            <li key={index} className="flex-shrink-0 h-full snap-start">
              <NavLink
                to={`/category/${category.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-").replace(/'/g, "")}`}
                className="flex items-center h-full border-b-[3px] border-transparent hover:border-brand-primary hover:text-brand-primary transition-all duration-200"
                onClick={(e) => {
                  if (isDragging) e.preventDefault();
                }}
              >
                {category}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DesktopNav;
