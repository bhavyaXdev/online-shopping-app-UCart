import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../../Constants/navigation';
import { Search, MapPin, Heart, ShoppingCart, User, Bell, ChevronDown } from 'lucide-react';
import Logo from '../Common/Logo';

const DesktopHeader = ({ 
  isLoggedIn, 
  setIsSearchFocused, 
  setAuthMode, 
  setIsLoginModalOpen, 
  handleLogout 
}) => {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-2 md:py-0 md:bg-white bg-[#ff4d6d]">
      <div className="flex items-center justify-between h-16 md:h-[88px]">
        {/* Mobile Profile Toggle (Hidden on Desktop) */}
        <div className="flex items-center md:hidden w-1/4">
          <button
            onClick={() => {
              setAuthMode("login");
              setIsLoginModalOpen(true);
            }}
            className="flex items-center focus:outline-none"
          >
            <User size={24} strokeWidth={1.5} className="text-[#03045e]" />
          </button>
        </div>

        {/* Logo */}
        <div className="flex-1 flex justify-center md:flex-none md:justify-start md:bg-transparent bg-[#fefae0]/80 md:p-0 p-2 rounded-xl shrink-0">
          <Logo />
        </div>

        {/* Mobile Bell (Hidden on Desktop) */}
        <div className="flex items-center justify-end md:hidden w-1/4">
          <button className="relative p-2 text-[#03045e] hover:text-brand-primary transition-colors focus:outline-none">
            <Bell size={22} strokeWidth={1.5} />
            <span className="absolute top-1.5 right-1.5 flex h-[9px] w-[9px] items-center justify-center rounded-full bg-red-500 ring-2 ring-white"></span>
          </button>
        </div>

        {/* Desktop Search */}
        <div className="hidden lg:flex flex-1 max-w-2xl lg:max-w-3xl px-6 lg:px-12">
          <div className="relative w-full group flex">
            <input
              type="text"
              placeholder="Search for products, brands and more..."
              className="w-full pl-5 lg:pr-14 pr-7 lg:py-[10px] py-[6px] bg-[#f0f2f5] border border-transparent focus:bg-white focus:border-blue-400 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.1)] rounded-l-xl text-[14px] transition-all outline-none text-gray-800 placeholder-gray-500 group-hover:bg-gray-100 focus:group-hover:bg-white"
            />
            <button className="lg:px-6 px-4 bg-brand-primary hover:bg-blue-700 transition-colors rounded-r-xl flex items-center justify-center shadow-sm">
              <Search className="text-white" size={20} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center justify-end space-x-2 lg:space-x-4 shrink-0">
          {/* Delivery Location */}
          <div className="flex items-center gap-2 pr-2 border-r border-gray-200 shrink-0 cursor-pointer group hover:opacity-80 transition-opacity">
            <div className="text-gray-500 group-hover:text-brand-primary transition-colors">
              <MapPin size={22} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-500 font-medium leading-[1.1] pt-0.5">Deliver to</span>
              <span className="text-[13px] font-bold text-gray-800 leading-[1.1]">Select Location</span>
            </div>
          </div>

          {/* Search Trigger (MD only) */}
          <div className="hidden md:flex lg:hidden items-center justify-center cursor-pointer text-gray-600 hover:text-brand-primary transition-colors group" onClick={() => setIsSearchFocused(true)}>
            <div className="p-1.5 rounded-full group-hover:bg-blue-50 transition-colors">
              <Search size={22} strokeWidth={1.5} />
            </div>
          </div>

          <Link to="/wishlist" className="flex flex-col items-center gap-1 text-gray-600 hover:text-brand-primary transition-colors group relative">
            <div className="p-1.5 rounded-full group-hover:bg-blue-50 transition-colors">
              <Heart size={22} strokeWidth={1.5} />
            </div>
          </Link>

          <Link to="/cart" className="flex flex-col items-center gap-1 text-gray-600 hover:text-brand-primary transition-colors group relative">
            <div className="relative p-1.5 rounded-full group-hover:bg-blue-50 transition-colors">
              <ShoppingCart size={22} strokeWidth={1.5} />
              <span className="absolute top-0.5 right-0 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-brand-primary text-[10px] font-bold text-white ring-2 ring-white">3</span>
            </div>
          </Link>

          {isLoggedIn ? (
            <div className="relative group/user h-full flex items-center">
              <div className="flex items-center gap-2 text-gray-600 hover:text-brand-primary transition-colors cursor-pointer pr-1">
                <div className="p-1.5 rounded-full bg-gray-50 group-hover/user:bg-blue-50 transition-colors">
                  <User size={22} strokeWidth={1.5} />
                </div>
                <div className="hidden lg:flex flex-col items-start pr-1">
                  <span className="text-[10px] text-gray-500 font-medium leading-[1.1] pt-0.5 group-hover/user:text-blue-500 transition-colors">Welcome, User</span>
                  <div className="flex items-center gap-1">
                    <span className="text-[13px] font-bold text-gray-800 leading-[1.1] group-hover/user:text-brand-primary transition-colors">My Account</span>
                    <ChevronDown size={14} className="text-gray-400 group-hover/user:rotate-180 transition-transform duration-300" />
                  </div>
                </div>
              </div>
              {/* Dropdown Menu */}
              <div className="absolute top-full right-0 w-48 bg-white shadow-[0_10px_30px_-5px_rgba(0,0,0,0.1)] rounded-b-2xl border border-gray-100 opacity-0 invisible group-hover/user:opacity-100 group-hover/user:visible transition-all duration-300 transform translate-y-2 group-hover/user:translate-y-0 z-[100] py-2 overflow-hidden">
                <Link to="/profile" className="block px-5 py-2.5 text-[13px] text-gray-600 hover:bg-gray-50 hover:text-brand-primary transition-colors font-medium">My Profile</Link>
                <Link to="/orders" className="block px-5 py-2.5 text-[13px] text-gray-600 hover:bg-gray-50 hover:text-brand-primary transition-colors font-medium">Orders</Link>
                <Link to="/settings" className="block px-5 py-2.5 text-[13px] text-gray-600 hover:bg-gray-50 hover:text-brand-primary transition-colors font-medium">Settings</Link>
                <div className="border-t border-gray-50 my-1 mx-2"></div>
                <button onClick={handleLogout} className="w-full text-left px-5 py-2.5 text-[13px] text-red-500 hover:bg-red-50 hover:text-red-600 transition-colors font-bold">Logout</button>
              </div>
            </div>
          ) : (
            <div onClick={() => { setAuthMode("login"); setIsLoginModalOpen(true); }} className="flex items-center gap-2 group focus:outline-none cursor-pointer">
              <span className="hidden lg:flex items-center justify-center bg-brand-primary text-white border border-transparent hover:bg-blue-700 px-4 py-2 rounded-xl text-[14px] font-semibold transition-all shadow-sm hover:shadow-brand-primary/30 active:scale-95">Login / Sign Up</span>
              <div className="hidden md:flex lg:hidden text-gray-600 group-hover:text-brand-primary transition-colors">
                <div className="p-1.5 rounded-full bg-gray-50 group-hover:bg-blue-50 transition-colors">
                  <User size={22} strokeWidth={1.5} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;
