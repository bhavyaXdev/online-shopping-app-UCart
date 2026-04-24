import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Modular Components
import DesktopHeader from "./HeaderComponents/DesktopHeader";
import DesktopNav from "./HeaderComponents/DesktopNav";
import MobileHeader from "./HeaderComponents/MobileHeader";
import MobileSearchModal from "./HeaderComponents/MobileSearchModal";
import LoginModal from "./HeaderComponents/LoginModal";

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  // States
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  
  // Refs for Category Bar Dragging
  const scrollRef = useRef(null);
  const searchInputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // --- Handlers ---
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

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

  // --- Effects ---
  useEffect(() => {
    if (isSearchFocused && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    }
  }, [isSearchFocused]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 64);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="md:sticky md:top-0 z-50 w-full shadow-sm border-b border-gray-100 bg-white/90">
      {/* 1. Main Desktop & Mobile Header (Top Section) */}
      <DesktopHeader 
        isLoggedIn={isLoggedIn}
        setIsSearchFocused={setIsSearchFocused}
        setAuthMode={setAuthMode}
        setIsLoginModalOpen={setIsLoginModalOpen}
        handleLogout={handleLogout}
      />

      {/* 2. Desktop Navigation (Category Ribbon) */}
      <DesktopNav 
        isCategoryDropdownOpen={isCategoryDropdownOpen}
        setIsCategoryDropdownOpen={setIsCategoryDropdownOpen}
        scrollRef={scrollRef}
        handleMouseDown={handleMouseDown}
        handleMouseLeave={handleMouseLeave}
        handleMouseUp={handleMouseUp}
        handleMouseMove={handleMouseMove}
        isDragging={isDragging}
      />

      {/* 3. Mobile Navigation & Sticky Header */}
      <MobileHeader 
        isScrolled={isScrolled}
        isLoggedIn={isLoggedIn}
        setIsSearchFocused={setIsSearchFocused}
        currentPath={currentPath}
        setAuthMode={setAuthMode}
        setIsLoginModalOpen={setIsLoginModalOpen}
      />

      {/* 4. Overlays & Modals */}
      <MobileSearchModal 
        isSearchFocused={isSearchFocused}
        setIsSearchFocused={setIsSearchFocused}
        searchInputRef={searchInputRef}
      />

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
