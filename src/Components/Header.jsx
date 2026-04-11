import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ShoppingCart,
  Search,
  User,
  Heart,
  Shirt,
  Smartphone,
  ShoppingBasket,
  SprayCan,
  Book,
  Bell,
  ShoppingBag,
  Laptop,
  ArrowLeft,
  MapPin,
  Menu,
  ChevronDown,
  X,
  Eye,
  EyeOff,
} from "lucide-react";

// --- Reusable Sub-Components ---

const Logo = () => (
  <Link to="/" className="group flex items-center gap-1.5 focus:outline-none">
    <div className="bg-gradient-to-br from-brand-primary to-blue-600 p-1.5 rounded-xl shadow-md shadow-brand-primary/20 group-hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-0.5">
      <ShoppingBasket className="text-white" size={24} strokeWidth={1.5} />
    </div>
    <h1 className="text-2xl md:text-[28px] lg:text-[32px] font-black tracking-tighter text-slate-800 flex items-baseline">
      Urban<span className="text-brand-primary">Cart</span>
      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-brand-primary rounded-full ml-0.5 mb-1 md:mb-1.5"></div>
    </h1>
  </Link>
);

const NavLink = ({ to, children, className, ...props }) => (
  <Link to={to} className={className} {...props}>
    {children}
  </Link>
);

const CATEGORIES = [
  "Fashion",
  "Kids & Baby",
  "Mobiles & Tablets",
  "Computers & Laptops",
  "Electronics",
  "Home & Lifestyle",
  "Health & Beauty",
  "Groceries & Pets",
  "Sports & Outdoors",
  "Books & Stationery",
  "Watches & Accessories",
  "Automotive",
];

const LoginModal = ({
  isOpen,
  onClose,
  authMode,
  setAuthMode,
  showPassword,
  setShowPassword,
  handleAuth,
}) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      <div className="relative w-full max-w-[420px] bg-white rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-gray-100/80 text-gray-500 hover:bg-gray-200 hover:text-gray-800 transition-all active:scale-90"
          >
            <X size={20} />
          </button>
        </div>
        <div className="p-5 md:p-6">
          <div className="text-center mb-8">
            <h2 className="text-xl font-black text-gray-900 tracking-tight leading-none">
              {authMode === "login" ? "Welcome Back" : "Join UrbanCart"}
            </h2>
            <p className="text-[11px] text-gray-400 mt-1.5 font-medium tracking-wide">
              {authMode === "login"
                ? "Enter your credentials to access your account"
                : "Create an account for a seamless shopping experience"}
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleAuth}>
            {authMode === "signup" && (
              <div className="space-y-1.5">
                <div className="flex justify-between items-end ml-1">
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    Full Name
                  </label>
                  <span className="text-[9px] text-gray-400 font-medium italic">
                    As per ID
                  </span>
                </div>
                <input
                  required
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-lg text-[13px] focus:bg-white focus:border-brand-primary outline-none transition-all"
                />
              </div>
            )}
            <div className="space-y-1.5">
              <div className="flex justify-between items-end ml-1">
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                  Email Address
                </label>
                <span className="text-[9px] text-gray-400 font-medium italic">
                  Use personal email
                </span>
              </div>
              <input
                required
                type="email"
                placeholder="name@example.com"
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-lg text-[13px] focus:bg-white focus:border-brand-primary outline-none transition-all"
              />
            </div>
            <div className="space-y-1.5">
              <div className="flex justify-between items-end ml-1">
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                  Password
                </label>
                <span className="text-[9px] text-gray-400 font-medium italic">
                  Min. 8 characters
                </span>
              </div>
              <div className="relative">
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-lg text-[13px] focus:bg-white focus:border-brand-primary outline-none transition-all pr-12"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  {authMode === "login" && (
                    <button
                      type="button"
                      className="text-[10px] font-bold text-brand-primary/60 hover:text-brand-primary transition-colors"
                    >
                      Reset?
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
            </div>
            <button className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white font-bold py-3 rounded-lg shadow-lg shadow-brand-primary/20 transition-all active:scale-[0.98] mt-1 text-sm">
              {authMode === "login" ? "Login" : "Create Account"}
            </button>
          </form>
          <div className="text-center mt-5">
            <p className="text-[12px] text-gray-500">
              {authMode === "login"
                ? "Don't have an account? "
                : "Already have an account? "}
              <button
                onClick={() =>
                  setAuthMode(authMode === "login" ? "signup" : "login")
                }
                className="text-brand-primary font-bold hover:underline underline-offset-4"
              >
                {authMode === "login" ? "Sign Up" : "Log In"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const searchInputRef = React.useRef(null);
  const scrollRef = React.useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleAuth = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setIsLoginModalOpen(false);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLoggedIn(false);
  };

  React.useEffect(() => {
    if (isSearchFocused && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    }
  }, [isSearchFocused]);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 64);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="md:sticky md:top-0 z-50 w-full shadow-sm border-b border-gray-100 bg-white/90">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-2 md:py-0 md:bg-white bg-[#ff4d6d]">
        <div className="flex items-center justify-between h-16 md:h-[88px]">
          {/* Mobile Profile */}
          <div className="flex items-center md:hidden w-1/4">
            {isLoggedIn ? (
              <Link to="/profile" className="flex items-center">
                <User size={24} strokeWidth={1.5} className="text-[#03045e]" />
              </Link>
            ) : (
              <button
                onClick={() => {
                  setAuthMode("login");
                  setIsLoginModalOpen(true);
                }}
                className="flex items-center focus:outline-none"
              >
                <User size={24} strokeWidth={1.5} className="text-[#03045e]" />
              </button>
            )}
          </div>

          <div className="flex-1 flex justify-center md:flex-none md:justify-start md:bg-transparent bg-[#fefae0]/80 md:p-0 p-2 rounded-xl shrink-0">
            <Logo />
          </div>

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
            <div className="flex items-center gap-2 pr-2 border-r border-gray-200 shrink-0 cursor-pointer group hover:opacity-80 transition-opacity">
              <div className="text-gray-500 group-hover:text-brand-primary transition-colors">
                <MapPin size={22} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-500 font-medium leading-[1.1] pt-0.5">
                  Deliver to
                </span>
                <span className="text-[13px] font-bold text-gray-800 leading-[1.1]">
                  Select Location
                </span>
              </div>
            </div>
            <div
              className="hidden md:flex lg:hidden items-center justify-center cursor-pointer text-gray-600 hover:text-brand-primary transition-colors group"
              onClick={() => setIsSearchFocused(true)}
            >
              <div className="p-1.5 rounded-full group-hover:bg-blue-50 transition-colors">
                <Search size={22} strokeWidth={1.5} />
              </div>
            </div>
            <Link
              to="/wishlist"
              className="flex flex-col items-center gap-1 text-gray-600 hover:text-brand-primary transition-colors group relative"
            >
              <div className="p-1.5 rounded-full group-hover:bg-blue-50 transition-colors">
                <Heart size={22} strokeWidth={1.5} />
              </div>
            </Link>
            <Link
              to="/cart"
              className="flex flex-col items-center gap-1 text-gray-600 hover:text-brand-primary transition-colors group relative"
            >
              <div className="relative p-1.5 rounded-full group-hover:bg-blue-50 transition-colors">
                <ShoppingCart size={22} strokeWidth={1.5} />
                <span className="absolute top-0.5 right-0 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-brand-primary text-[10px] font-bold text-white ring-2 ring-white">
                  3
                </span>
              </div>
            </Link>
            {isLoggedIn ? (
              <div className="relative group/user h-full flex items-center">
                <div className="flex items-center gap-2 text-gray-600 hover:text-brand-primary transition-colors cursor-pointer pr-1">
                  <div className="p-1.5 rounded-full bg-gray-50 group-hover/user:bg-blue-50 transition-colors">
                    <User size={22} strokeWidth={1.5} />
                  </div>
                  <div className="hidden lg:flex flex-col items-start pr-1">
                    <span className="text-[10px] text-gray-500 font-medium leading-[1.1] pt-0.5 group-hover/user:text-blue-500 transition-colors">
                      Welcome, User
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-[13px] font-bold text-gray-800 leading-[1.1] group-hover/user:text-brand-primary transition-colors">
                        My Account
                      </span>
                      <ChevronDown
                        size={14}
                        className="text-gray-400 group-hover/user:rotate-180 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute top-full right-0 w-48 bg-white shadow-[0_10px_30px_-5px_rgba(0,0,0,0.1)] rounded-b-2xl border border-gray-100 opacity-0 invisible group-hover/user:opacity-100 group-hover/user:visible transition-all duration-300 transform translate-y-2 group-hover/user:translate-y-0 z-[100] py-2 overflow-hidden">
                  <Link
                    to="/profile"
                    className="block px-5 py-2.5 text-[13px] text-gray-600 hover:bg-gray-50 hover:text-brand-primary transition-colors font-medium"
                  >
                    My Profile
                  </Link>
                  <Link
                    to="/orders"
                    className="block px-5 py-2.5 text-[13px] text-gray-600 hover:bg-gray-50 hover:text-brand-primary transition-colors font-medium"
                  >
                    Orders
                  </Link>
                  <Link
                    to="/settings"
                    className="block px-5 py-2.5 text-[13px] text-gray-600 hover:bg-gray-50 hover:text-brand-primary transition-colors font-medium"
                  >
                    Settings
                  </Link>
                  <div className="border-t border-gray-50 my-1 mx-2"></div>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-5 py-2.5 text-[13px] text-red-500 hover:bg-red-50 hover:text-red-600 transition-colors font-bold"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div
                onClick={() => {
                  setAuthMode("login");
                  setIsLoginModalOpen(true);
                }}
                className="flex items-center gap-2 group focus:outline-none cursor-pointer"
              >
                <span className="hidden lg:flex items-center justify-center bg-brand-primary text-white border border-transparent hover:bg-blue-700 px-4 py-2 rounded-xl text-[14px] font-semibold transition-all shadow-sm hover:shadow-brand-primary/30 active:scale-95">
                  Login / Sign Up
                </span>
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

      {/* Desktop Ribbon */}
      <div className="hidden md:block w-full bg-white border-t border-gray-200 relative z-40">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 flex items-center h-[42px]">
          <div
            className="relative h-full flex-shrink-0 group z-50 flex items-center mr-6 lg:mr-8 border-r border-gray-200 pr-6"
            onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
            onMouseLeave={() => setIsCategoryDropdownOpen(false)}
          >
            <div className="flex items-center gap-1.5 h-full cursor-pointer text-gray-800 hover:text-brand-primary transition-colors">
              <Menu
                size={18}
                strokeWidth={2.5}
                className="text-brand-primary"
              />
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

      {/* Mobile Sticky */}
      {isScrolled && <div className="md:hidden h-[90px] w-full"></div>}
      <div
        className={`md:hidden flex flex-col w-full transition-all duration-500 ease-in-out ${isScrolled ? "fixed top-0 left-0 z-[60] shadow-md bg-white/95 backdrop-blur-md" : "bg-gradient-to-b from-[#ff4d6d] to-white to-70%"}`}
      >
        <div
          className={`flex items-center space-x-3 px-4 transition-all duration-300 ${isScrolled ? "pt-4 pb-1" : "pt-4 pb-3"}`}
        >
          <div className="relative flex-1 ">
            <input
              type="text"
              placeholder="Search items..."
              onFocus={() => setIsSearchFocused(true)}
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border focus:outline-none transition-colors ${isScrolled ? "bg-gray-100 border-gray-200" : "bg-[#fefae0] border-[#878795]"}`}
            />
            <Search
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
          <div className="flex items-center space-x-4 pr-1">
            <Link
              to="/wishlist"
              className={`${isScrolled ? "text-gray-600" : "text-[#03045e]"}`}
            >
              <Heart size={22} strokeWidth={1.5} />
            </Link>
            <Link
              to="/cart"
              className={`relative ${isScrolled ? "text-gray-600" : "text-brand-dark"}`}
            >
              <ShoppingCart size={22} strokeWidth={1.5} />
              <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-brand-primary text-white text-[10px] font-bold">
                3
              </span>
            </Link>
          </div>
        </div>
        <div
          className={`w-full border-b border-gray-100 ${isScrolled ? "pb-1" : "pt-0"}`}
        >
          <div className="flex overflow-x-auto no-scrollbar px-3 space-x-4 pt-3 pb-1">
            {[
              { name: "For You", icon: ShoppingBag },
              { name: "Fashion", icon: Shirt },
              { name: "Beauty", icon: SprayCan },
              { name: "Mobiles", icon: Smartphone },
              { name: "Electronics", icon: Laptop },
              { name: "Books", icon: Book },
            ].map((tab, idx) => {
              const targetPath = tab.name === "For You" ? "/" : `/category/${tab.name.toLowerCase().replace(/\s+/g, "-")}`;
              const isActive = currentPath === targetPath || (tab.name === "For You" && currentPath === "/category/for-you") || (tab.name === "Fashion" && currentPath.includes("fashion"));
              
              return (
              <Link
                to={targetPath}
                key={idx}
                className={`pb-1 flex flex-col items-center px-1.5 border-b-[3px] ${isActive ? "border-blue-600 text-[#111] font-bold" : "border-transparent text-gray-600"}`}
              >
                <div
                  className={`flex items-center justify-center transition-all duration-500 overflow-hidden w-[43px] rounded-lg ${isScrolled ? "h-0 opacity-0 mb-0 scale-75" : "h-[43px] opacity-100 mb-1"} ${isActive ? "bg-gradient-to-b from-blue-200 to-transparent " : "bg-transparent"}`}
                >
                  <tab.icon
                    size={25}
                    strokeWidth={1.5}
                    className="text-[#333]"
                  />
                </div>
                <span className="text-[12px] whitespace-nowrap">
                  {tab.name}
                </span>
              </Link>
            )})}
          </div>
        </div>
      </div>

      {/* Mobile Search Modal */}
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

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        authMode={authMode}
        setAuthMode={setAuthMode}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        handleAuth={handleAuth}
      />
    </header>
  );
};

export default Header;
