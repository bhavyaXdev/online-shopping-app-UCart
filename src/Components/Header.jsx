import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Search,
  User,
  Heart,
  UserRound,
  Shirt,
  Home,
  Smartphone,
  HeartPulse,
  Baby,
  ShoppingBasket,
  SprayCan,
  Book,
  Bell,
  ShoppingBag,
  Laptop,
  Lamp,
  UserCircle2,
  UserCircle,
  ArrowLeft,
} from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchInputRef = React.useRef(null);

  React.useEffect(() => {
    if (isSearchFocused && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    }
  }, [isSearchFocused]);

  React.useEffect(() => {
    const handleScroll = () => {
      // Trigger when scrolling past the top header (approx 64px)
      setIsScrolled(window.scrollY > 64);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="md:sticky md:top-0 z-50 w-full shadow-sm border-b border-gray-100 bg-white/90">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-2 md:bg-white bg-[#ff4d6d]">
        {/* Top Header */}
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile Profile - Left */}
          <div className="flex items-center md:hidden w-1/4">
            <Link to="/profile" className="flex items-center">
              <User size={24} strokeWidth={1.5} className="text-[#03045e]" />
              {/* <div className="relative p-1.5 rounded-full bg-gray-50 border border-gray-200 shadow-sm overflow-hidden"></div> */}
            </Link>
          </div>

          {/* Logo - Center on mobile, Left on Desktop */}
          <div className="flex-1 flex justify-center md:flex-none md:justify-start md:bg-transparent bg-[#fefae0]/80 md:p-0 p-2 rounded-xl">
            <Link
              to="/"
              className="group flex items-center gap-1.5 focus:outline-none"
            >
              <div className="bg-gradient-to-br from-brand-primary to-blue-600 p-1.5 rounded-xl shadow-md shadow-brand-primary/20 group-hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-0.5">
                <ShoppingBasket
                  className="text-white"
                  size={22}
                  strokeWidth={1}
                />
              </div>
              <h1 className="text-2xl md:text-3xl font-black tracking-tighter text-slate-800 flex items-baseline">
                Urban<span className="text-brand-primary">Cart</span>
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-brand-primary rounded-full ml-0.5 mb-1 md:mb-1.5"></div>
              </h1>
            </Link>
          </div>

          {/* Mobile Notifications - Right */}
          <div className="flex items-center justify-end md:hidden w-1/4">
            <button className="relative p-2 text-[#03045e] hover:text-brand-primary transition-colors focus:outline-none">
              <Bell size={22} strokeWidth={1.5} />
              <span className="absolute top-1.5 right-1.5 flex h-[9px] w-[9px] items-center justify-center rounded-full bg-red-500 ring-2 ring-white"></span>
            </button>
          </div>

          <div className="relative  lg:w-[30%] hidden md:flex  md:w-[40%] ">
            <input
              type="text"
              placeholder="Search items..."
              className="w-full pl-10 pr-4 py-2.5 bg-gray-100 border border-gray-200 rounded-xl text-sm focus:outline-none transition-colors "
            />
            <Search
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400  hover:text-[#463f3a] transition-colors"
              size={18}
            />
          </div>
          {/* Actions - Right */}
          <div className="flex items-center justify-end space-x-3 sm:space-x-5">
            <Link
              to="/login"
              className="hidden lg:flex items-center justify-center bg-brand-primary text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-blue-700 transition-all shadow-sm hover:shadow-brand-primary/30 active:scale-95"
            >
              Login / Sign Up
            </Link>
            <Link
              to="/profile"
              className="hidden sm:flex lg:hidden text-gray-500 hover:text-[#463f3a] transition-colors"
            >
              <User size={20} />
            </Link>
            <Link
              to="/wishlist"
              className="hidden sm:flex  hover:text-[#463f3a]   text-gray-500 transition-colors relative"
            >
              <Heart size={20} />
            </Link>
            <Link
              to="/cart"
              className="hidden md:flex text-gray-500 hover:text-[#463f3a] transition-colors relative items-center pr-2"
            >
              <ShoppingCart size={22} />
              <span className="absolute -top-1.5 0 right-0 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-brand-primary text-[10px] font-bold text-white ring-2 focus:outline-none ring-white">
                3
              </span>
            </Link>
          </div>
        </div>

        {/* Moved Mobile Search and Navigation below into a single combined sticky wrapper */}
      </div>

      {/* Category Navigation - Desktop/Tablet */}
      <div className={`hidden md:block w-full bg-white/10 border-t border-gray-100`}>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 ">
          <ul className="flex items-center justify-between h-8 overflow-x-auto no-scrollbar space-x-6 text-sm font-medium text-gray-600">
            {[
              "Women's Fashion",
              "Men's Fashion",
              "Home & Lifestyle",
              "Electronics",
              "Health & Beauty",
              "Baby's & Toys",
              "Groceries & Pets",
            ].map((category, index) => (
              <li key={index} className="flex-shrink-0">
                <Link
                  to={`/category/${category.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-").replace(/'/g, "")}`}
                  className="hover:text-black hover:underline underline-offset-4 decoration-2 transition-colors duration-200"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Sticky Wrapper (Search + Category Names) */}
      {isScrolled && <div className="md:hidden h-[90px] w-full  "></div>}
      <div
        className={`md:hidden flex flex-col w-full transition-all duration-500 ease-in-out ${isScrolled
            ? "fixed top-0 left-0 z-[60] shadow-md bg-linear-to-b from-[#ff4d6d]/80 from-1% to-[#fff]"
            : "bg-linear-to-b from-[#ff4d6d] from-1% to-[#fff] to-70%"
          }`}
      >
        {/* Mobile Search & Action Bar */}
        <div
          className={`flex items-center space-x-3 px-4 transition-all duration-300 ease-in-out ${isScrolled ? "pt-4 pb-1" : "pt-4 pb-3"}`}
        >
          <div className="relative flex-1 ">
            <input
              type="text"
              placeholder="Search items..."
              onFocus={() => setIsSearchFocused(true)}
              className={`w-full pl-10 pr-4 py-2.5  rounded-xl text-sm border border-[#878795] focus:outline-none  transition-colors ${isScrolled
                  ? "bg-gray-100 border-[#878795]"
                  : "bg-[#fefae0] border-[#878795] shadow-sm"
                }`}
            />
            <Search
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 "
              size={20}
            />
          </div>
          <div className="flex items-center space-x-4 pr-1">
            <Link
              to="/wishlist"
              className={`hover:text-brand-primary transition-colors relative ${isScrolled ? "text-gray-600" : "text-[#03045e]"}`}
            >
              <Heart size={22} strokeWidth={1.5} />
            </Link>
            <Link
              to="/cart"
              className={`hover:text-brand-primary transition-colors relative flex items-center ${isScrolled ? "text-gray-600" : "text-brand-dark"}`}
            >
              <ShoppingCart size={22} strokeWidth={1.5} />
              <span
                className={`absolute -top-1.5 -right-1.5 flex h-[16px] w-[16px] items-center justify-center rounded-full text-[10px] font-bold text-white ring-2 ${isScrolled ? "bg-brand-primary ring-white" : "bg-gray-900 ring-[#ff4d6d]"}`}
              >
                3
              </span>
            </Link>
          </div>
        </div>

        {/* Text Tabs (Category Names) - Sticky with Search */}
        <div
          className={`w-full  border-b border-gray-100  ${isScrolled ? "pb-1" : "pt-0"}`}
        >
          <div className="flex overflow-x-auto no-scrollbar px-3 space-x-4 pt-3 pb-1">
            {[
              { name: "For You", active: true, icon: ShoppingBag },
              { name: "Fashion", active: false, icon: Shirt },
              { name: "Beauty", active: false, icon: SprayCan },
              { name: "Mobiles", active: false, icon: Smartphone },
              { name: "Electronics", active: false, icon: Laptop },
              { name: "Books", active: false, icon: Book },
            ].map((tab, idx) => (
              <Link
                to={`/category/${tab.name.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-").replace(/'/g, "")}`}
                key={idx}
                className={`pb-1 flex flex-col items-center cursor-pointer transition-all px-1 border-b-[3px] ${tab.active
                    ? "border-blue-600 text-[#111] font-bold"
                    : "border-transparent text-gray-600 hover:text-gray-900 font-medium"
                  }`}
              >
                {/* Icon Container mimicking screenshot styles */}
                <div
                  className={`flex items-center justify-center transition-all duration-500 ease-in-out overflow-hidden w-[46px] rounded-[14px] ${isScrolled ? "h-0 opacity-0 mb-0 scale-75" : "h-[46px] opacity-100 mb-1 scale-100"} ${tab.active ? "bg-linear-to-b from-[#a2d2ff]" : "bg-transparent"}`}
                >
                  <div className="relative z-0 flex items-center justify-center">
                    {/* Yellow Background Accent inside Icon Box */}
                    <div className="absolute bottom-[2px] w-[14px] h-[7px] bg-[#fedc00] rounded-sm -z-10"></div>
                    <tab.icon
                      size={28}
                      strokeWidth={1.5}
                      className="text-[#333]"
                    />
                  </div>
                </div>

                <span className={`text-[12px] whitespace-nowrap transition-all duration-500 ease-in-out ${isScrolled ? "mt-0" : "mt-0.5"}`}>
                  {tab.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Category Navigation - Mobile (Icons Only) - NOT Sticky */}
      {/* <div className="md:hidden w-full bg-white">
        <div className="px-1 py-2 bg-linear-to-b from-[#ff4d6d]">
          <div className="flex items-start overflow-x-auto space-x-3 no-scrollbar">
            {[
              { name: "Home", icon: Home },
              { name: "Trendy ", icon: Shirt },
              { name: "Electronics", icon: Smartphone },
              { name: "Beauty", icon: SprayCan },
              { name: "Health", icon: HeartPulse },
              { name: "Kids", icon: Baby },
              { name: "Books & Music", icon: Book },
            ].map((category, index) => (
              <Link
                key={index}
                to={`/category/${category.name.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-").replace(/'/g, "")}`}
                className="flex flex-col items-center justify-center space-y-1.5 flex-shrink-0 min-w-[64px] group"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm group-hover:bg-brand-light group-hover:text-brand-primary transition-colors border-b-brand-primary border-b border-gray-100 text-gray-600 bg-[#eaf7fc]">
                  <category.icon size={20} strokeWidth={1.5} />
                </div>
                <span className="text-[10px] font-medium text-center w-full truncate text-gray-600">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div> */}
      {/* Mobile Search Modal */}
      <div
        className={`fixed inset-0 z-[100] bg-white flex flex-col md:hidden transition-all duration-300 ease-out transform ${isSearchFocused
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 translate-y-8 invisible pointer-events-none"
          }`}
      >
        <div className="flex items-center px-4 py-3 bg-white border-b border-gray-200 shadow-sm">
          <button
            onClick={() => setIsSearchFocused(false)}
            className="mr-3 p-1 rounded-full text-gray-600 hover:bg-gray-100 transition-colors focus:outline-none"
          >
            <ArrowLeft size={22} />
          </button>
          <div className="relative flex-1">
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search items..."
              className="w-full pl-10 pr-4 py-2.5 bg-gray-100 border border-transparent focus:border-blue-300 rounded-xl text-sm focus:outline-none transition-colors"
            />
            <Search
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto  bg-gray-50/50 p-4">
          <div className="mb-6 ">
            <h3 className="text-sm font-bold text-gray-800 mb-3 flex items-center">
              <span className="bg-brand-primary w-1 h-4 rounded-full mr-2"></span>
              Popular Categories
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {[
                "Women's Fashion",
                "Men's Fashion",
                "Smartphones",
                "Laptops",
                "Home & Lifestyle",
                "Health & Beauty",
                "Watches",
                "Groceries"
              ].map((category, index) => (
                <Link
                  key={index}
                  to={`/category/${category.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-").replace(/'/g, "")}`}
                  onClick={() => setIsSearchFocused(false)}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-full text-[13px] font-medium text-gray-600 hover:border-brand-primary hover:text-brand-primary shadow-sm transition-all"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>

          <div className="mb-0">
            <h3 className="text-sm font-bold text-gray-800 mb-3 flex items-center">
              <span className="bg-blue-500 w-1 h-4 rounded-full mr-2"></span>
              Trending Searches
            </h3>
            <div className="flex flex-col">
              {["Wireless Earbuds", "Running Shoes", "Smart Watches", "Winter Jackets"].map((item, idx) => (
                <button
                  key={idx}
                  className="flex items-center px-3 py-2.5 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors text-left"
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
    </header>
  );
};

export default Header;
