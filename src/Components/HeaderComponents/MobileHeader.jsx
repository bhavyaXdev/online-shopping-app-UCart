import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Heart, ShoppingCart, User, Bell, ShoppingBag, Shirt, SprayCan, BabyIcon, Smartphone, Home, Book } from 'lucide-react';

const MobileHeader = ({ 
  isScrolled, 
  isLoggedIn, 
  setIsSearchFocused, 
  currentPath, 
  setAuthMode, 
  setIsLoginModalOpen 
}) => {
  return (
    <>
      {isScrolled && <div className="md:hidden h-[90px] w-full"></div>}
      <div
        className={`md:hidden flex flex-col w-full transition-all duration-500 ease-in-out ${isScrolled ? "fixed top-0 left-0 z-[60] shadow-md bg-white/95 backdrop-blur-md" : "bg-gradient-to-b from-[#ff4d6d] to-white to-70%"}`}
      >
        {/* Main Mobile Bar */}
        <div className={`flex items-center space-x-3 px-4 transition-all duration-300 ${isScrolled ? "pt-4 pb-1" : "pt-4 pb-3"}`}>
          <div className="relative flex-1 ">
            <input
              type="text"
              placeholder="Search items..."
              onFocus={() => setIsSearchFocused(true)}
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border focus:outline-none transition-colors ${isScrolled ? "bg-gray-100 border-gray-200" : "bg-[#fefae0] border-[#878795]"}`}
            />
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>
          
          <div className="flex items-center space-x-4 pr-1">
            <Link to="/wishlist" className={`${isScrolled ? "text-gray-600" : "text-[#03045e]"}`}>
              <Heart size={22} strokeWidth={1.5} />
            </Link>
            <Link to="/cart" className={`relative ${isScrolled ? "text-gray-600" : "text-brand-dark"}`}>
              <ShoppingCart size={22} strokeWidth={1.5} />
              <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-brand-primary text-white text-[10px] font-bold">3</span>
            </Link>
          </div>
        </div>

        {/* Mobile Category Tabs */}
        <div className={`w-full border-b border-gray-100 ${isScrolled ? "pb-1" : "pt-0"}`}>
          <div className="flex overflow-x-auto no-scrollbar px-3 space-x-4 pt-3 pb-1">
            {[
              { name: "For You", icon: ShoppingBag },
              { name: "Fashion", icon: Shirt },
              { name: "Health & Beauty", icon: SprayCan },
              { name: "Kids & Baby", icon: BabyIcon },
              { name: "Mobiles & Tablets", icon: Smartphone },
              { name: "Home & Lifestyle", icon: Home },
              { name: "Books & Stationery", icon: Book },
            ].map((tab, idx) => {
              const targetPath = tab.name === "For You" ? "/" : `/category/${tab.name.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-")}`;
              const isActive = currentPath === targetPath || (tab.name === "For You" && currentPath === "/category/for-you") || (tab.name === "Fashion" && currentPath.includes("fashion"));
              
              return (
                <Link
                  to={targetPath}
                  key={idx}
                  className={`pb-1 flex flex-col items-center px-1.5 border-b-[3px] ${isActive ? "border-blue-600 text-[#111] font-bold" : "border-transparent text-gray-600"}`}
                >
                  <div className={`flex items-center justify-center transition-all duration-500 overflow-hidden w-[43px] rounded-lg ${isScrolled ? "h-0 opacity-0 mb-0 scale-75" : "h-[43px] opacity-100 mb-1"} ${isActive ? "bg-gradient-to-b from-blue-200 to-transparent " : "bg-transparent"}`}>
                    <tab.icon size={25} strokeWidth={1.5} className="text-[#333]" />
                  </div>
                  <span className="text-[12px] whitespace-nowrap">{tab.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
