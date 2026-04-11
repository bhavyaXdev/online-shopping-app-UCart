import React, { useState, useMemo, useEffect } from "react";
import { Filter, ChevronDown, Loader2, AlertCircle, X, Trash2, ArrowDownWideNarrow, SlidersHorizontal } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "./ProductCard";

const SORT_OPTIONS = [
  { id: "recommended", label: "Recommended" },
  { id: "price-low", label: "Price: Low to High" },
  { id: "price-high", label: "Price: High to Low" },
  { id: "newest", label: "Newest Arrivals" },
  { id: "rating", label: "Customer Rating" },
];

/**
 * CategoryListing Component
 * A reusable component for displaying a category's product list with filters and sorting.
 * 
 * @param {Object} props
 * @param {string} props.title - The category title (e.g., "Women's Fashion")
 * @param {Array} props.products - Array of product objects
 * @param {boolean} props.loading - Loading state
 * @param {string} props.error - Error message
 * @param {Function} props.onRetry - Function to call on retry
 * @param {Array} props.filterCategories - List of sub-categories for filtering
 * @param {Array} props.filterSizes - List of sizes for filtering
 * @param {Array} props.breadcrumbs - Breadcrumb items [{label, path}]
 */
const CategoryListing = ({
  title,
  products = [],
  loading = false,
  error = null,
  onRetry,
  filterCategories = [],
  filterSizes = ["FS", "XS", "S", "M", "L", "XL", "XXL"],
  breadcrumbs = []
}) => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("recommended");
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    categories: [],
    priceRange: null,
    sizes: [],
  });
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const toggleCategory = (category) => {
    setActiveFilters((prev) => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category],
    }));
  };

  const toggleSize = (size) => {
    setActiveFilters((prev) => ({
      ...prev,
      sizes: prev.sizes.includes(size)
        ? prev.sizes.filter((s) => s !== size)
        : [...prev.sizes, size],
    }));
  };

  const setPriceRange = (range) => {
    setActiveFilters((prev) => ({
      ...prev,
      priceRange: prev.priceRange === range ? null : range,
    }));
  };

  const clearFilters = () => {
    setActiveFilters({
      categories: [],
      priceRange: null,
      sizes: [],
    });
  };

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const categoryMatch =
        activeFilters.categories.length === 0 ||
        activeFilters.categories.includes(product.category);

      const sizeMatch =
        activeFilters.sizes.length === 0 ||
        (product.sizes &&
          product.sizes.some((size) => activeFilters.sizes.includes(size)));

      let priceMatch = true;
      if (activeFilters.priceRange) {
        const price = parseInt(product.price.replace(/[₹,]/g, ""));
        if (activeFilters.priceRange === "Under ₹1,000") priceMatch = price < 1000;
        else if (activeFilters.priceRange === "₹1,000 - ₹3,000")
          priceMatch = price >= 1000 && price <= 3000;
        else if (activeFilters.priceRange === "₹3,000 - ₹5,000")
          priceMatch = price >= 3000 && price <= 5000;
        else if (activeFilters.priceRange === "Over ₹5,000") priceMatch = price > 5000;
      }

      return categoryMatch && priceMatch && sizeMatch;
    });

    // Apply Sorting
    return [...result].sort((a, b) => {
      const priceA = parseInt(a.price.replace(/[₹,]/g, ""));
      const priceB = parseInt(b.price.replace(/[₹,]/g, ""));

      switch (sortBy) {
        case "price-low":
          return priceA - priceB;
        case "price-high":
          return priceB - priceA;
        case "rating":
          return b.rating - a.rating;
        case "newest":
          return b.id - a.id;
        default:
          return 0;
      }
    });
  }, [products, activeFilters, sortBy]);

  if (loading && products.length === 0) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-50">
        <Loader2 className="w-12 h-12 text-brand-primary animate-spin mb-4" />
        <p className="text-gray-500 font-bold uppercase tracking-widest animate-pulse">
          Curating your collection...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-50 p-4">
        <div className="bg-white p-8 rounded-3xl shadow-xl flex flex-col items-center max-w-sm w-full border border-red-100">
          <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6">
            <AlertCircle className="w-8 h-8 text-red-500" />
          </div>
          <h2 className="text-xl font-black text-gray-900 mb-2">
            Oops! Something went wrong
          </h2>
          <p className="text-gray-500 text-center text-sm mb-8">{error}</p>
          <button
            onClick={onRetry}
            className="w-full bg-slate-900 text-white font-bold py-3 rounded-xl hover:bg-brand-primary transition-all active:scale-95 uppercase tracking-widest text-xs"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-4 pb-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <div className="flex items-center text-xs text-gray-500 mb-6 hidden md:block font-medium">
          <span
            className="hover:text-brand-primary cursor-pointer uppercase tracking-wider"
            onClick={() => navigate("/")}
          >
            Home
          </span>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <span className="mx-2">/</span>
              <span
                className={`uppercase tracking-wider ${idx === breadcrumbs.length - 1 ? "text-gray-900" : "hover:text-brand-primary cursor-pointer"}`}
                onClick={() => crumb.path && navigate(crumb.path)}
              >
                {crumb.label}
              </span>
            </React.Fragment>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters - Sidebar */}
          <aside className="w-full lg:w-64 shrink-0 hidden lg:block">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-black text-gray-900 tracking-tight flex items-center">
                  <Filter size={18} className="mr-2 text-brand-primary" />
                  Filters
                </h3>
                <button
                  onClick={clearFilters}
                  className="text-[10px] font-bold text-brand-primary hover:underline uppercase tracking-widest"
                >
                  Clear All
                </button>
              </div>

              {/* Category Filter */}
              {filterCategories.length > 0 && (
                <div className="mb-8 ">
                  <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">
                    Sub-Category
                  </h4>
                  <div className="space-y-3">
                    {filterCategories.map((cat) => (
                      <label key={cat} className="flex items-center group cursor-pointer">
                        <div
                          className={`relative flex items-center justify-center w-4 h-4 rounded border transition-all ${activeFilters.categories.includes(cat) ? "border-brand-primary bg-brand-primary shadow-sm" : "border-gray-200 group-hover:border-brand-primary"}`}
                        >
                          <input
                            type="checkbox"
                            checked={activeFilters.categories.includes(cat)}
                            onChange={() => toggleCategory(cat)}
                            className="absolute inset-0 opacity-0 cursor-pointer"
                          />
                          {activeFilters.categories.includes(cat) && (
                            <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                          )}
                        </div>
                        <span
                          className={`ml-3 text-[13px] font-medium transition-colors ${activeFilters.categories.includes(cat) ? "text-gray-900 font-bold" : "text-gray-600 group-hover:text-gray-900"}`}
                        >
                          {cat}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Price Filter */}
              <div className="mb-8">
                <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">
                  Price Range
                </h4>
                <div className="space-y-3">
                  {[
                    "Under ₹1,000",
                    "₹1,000 - ₹3,000",
                    "₹3,000 - ₹5,000",
                    "Over ₹5,000",
                  ].map((price) => (
                    <label key={price} className="flex items-center group cursor-pointer">
                      <div
                        className={`relative flex items-center justify-center w-4 h-4 rounded-full border transition-all ${activeFilters.priceRange === price ? "border-brand-primary bg-brand-primary shadow-sm" : "border-gray-200 group-hover:border-brand-primary"}`}
                      >
                        <input
                          type="radio"
                          name="price"
                          checked={activeFilters.priceRange === price}
                          onChange={() => setPriceRange(price)}
                          className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                        {activeFilters.priceRange === price && (
                          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        )}
                      </div>
                      <span
                        className={`ml-3 text-[13px] font-medium transition-colors ${activeFilters.priceRange === price ? "text-gray-900 font-bold" : "text-gray-600 group-hover:text-gray-900"}`}
                      >
                        {price}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Size Filter */}
              {filterSizes.length > 0 && (
                <div className="mb-0">
                  <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">
                    Size
                  </h4>
                  <div className="grid grid-cols-4 gap-2">
                    {filterSizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => toggleSize(size)}
                        className={`h-8 border rounded-lg text-[11px] font-bold transition-all uppercase ${
                          activeFilters.sizes.includes(size)
                            ? "border-brand-primary bg-brand-primary text-white shadow-md shadow-brand-primary/20"
                            : "border-gray-100 text-gray-600 hover:border-brand-primary hover:text-brand-primary hover:bg-blue-50"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Page Title & Sort */}
            <div className="bg-white rounded-2xl border border-gray-100 p-4 md:p-6 shadow-sm mb-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight leading-none mb-1">
                    {title}
                  </h1>
                  <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">
                    {filteredProducts.length} Premium Collection
                  </p>
                </div>

                {/* Desktop Sort - Hidden on Mobile */}
                <div className="hidden lg:flex items-center gap-3">
                  <div className="relative">
                    <button
                      onClick={() => setIsSortOpen(!isSortOpen)}
                      className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 border border-transparent hover:border-gray-200 rounded-xl text-[13px] font-bold text-gray-700 transition-all active:scale-95"
                    >
                      Sort by: {SORT_OPTIONS.find((opt) => opt.id === sortBy)?.label}
                      <ChevronDown
                        size={16}
                        className={`text-gray-400 transition-transform duration-300 ${isSortOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {isSortOpen && (
                      <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-50 overflow-hidden animate-in fade-in zoom-in duration-200">
                        {SORT_OPTIONS.map((option) => (
                          <button
                            key={option.id}
                            onClick={() => {
                              setSortBy(option.id);
                              setIsSortOpen(false);
                            }}
                            className={`w-full text-left px-5 py-3 text-[13px] font-bold transition-colors ${sortBy === option.id ? "bg-gray-50 text-brand-primary" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Filter & Sort Row - Mockup Inspired Design */}
            <div className="lg:hidden sticky top-[132px] md:top-[88px] z-30 bg-white border-y border-gray-100 flex items-center shadow-sm -mx-4 h-[54px]">
              {/* Sort Button Half */}
              <div className="flex-1 relative h-full">
                <button
                  onClick={() => setIsSortOpen(!isSortOpen)}
                  className="w-full h-full flex items-center justify-center gap-3 active:bg-gray-50 transition-colors group"
                >
                  <ArrowDownWideNarrow size={18} className="text-gray-600 group-active:text-brand-primary" />
                  <span className="text-[14px] font-black text-gray-900 tracking-tight">Sort</span>
                </button>

                {/* Mobile Sort Dropdown */}
                <AnimatePresence>
                  {isSortOpen && (
                    <>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 z-[55]"
                        onClick={() => setIsSortOpen(false)}
                      />
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-4 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-gray-50 py-2 z-[60] overflow-hidden"
                      >
                        {SORT_OPTIONS.map((option) => (
                          <button
                            key={option.id}
                            onClick={() => {
                              setSortBy(option.id);
                              setIsSortOpen(false);
                            }}
                            className={`w-full text-left px-5 py-3 text-[13px] font-bold transition-all ${sortBy === option.id ? "bg-blue-50 text-brand-primary" : "text-gray-600 hover:bg-gray-50"}`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

              {/* Vertical Divider */}
              <div className="w-px h-6 bg-gray-200 shrink-0" />

              {/* Filter Button Half */}
              <div className="flex-1 h-full">
                <button
                  onClick={() => setIsMobileFilterOpen(true)}
                  className="w-full h-full flex items-center justify-center gap-3 active:bg-gray-50 transition-colors group relative"
                >
                  <SlidersHorizontal size={18} className="text-gray-600 group-active:text-brand-primary" />
                  <span className="text-[14px] font-black text-gray-900 tracking-tight">Filter</span>
                  
                  {/* Badge for active filters */}
                  {(activeFilters.categories.length > 0 || activeFilters.priceRange || activeFilters.sizes.length > 0) && (
                    <span className="absolute top-3 right-10 flex h-4 w-4 items-center justify-center rounded-full bg-brand-primary text-white text-[9px] font-black ring-2 ring-white">
                      {activeFilters.categories.length + (activeFilters.priceRange ? 1 : 0) + activeFilters.sizes.length}
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* Active Filter Chips - Row Below */}
            {(activeFilters.categories.length > 0 || activeFilters.priceRange || activeFilters.sizes.length > 0) && (
              <div className="lg:hidden flex items-center gap-2 overflow-x-auto no-scrollbar py-3 -mx-4 px-4 bg-white/50 border-b border-gray-50 scroll-smooth">
                <AnimatePresence mode="popLayout">
                  {activeFilters.categories.map((cat) => (
                    <motion.button
                      layout
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      key={`chip-cat-${cat}`}
                      onClick={() => toggleCategory(cat)}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100/80 hover:bg-white text-slate-700 border border-transparent hover:border-brand-primary/20 rounded-full text-[11px] font-bold shrink-0 shadow-sm"
                    >
                      {cat}
                      <X size={12} strokeWidth={3} className="text-gray-400" />
                    </motion.button>
                  ))}
                  {/* ... other chips similarly updated for premium feel ... */}
                  {activeFilters.priceRange && (
                    <motion.button
                      layout
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      key="chip-price"
                      onClick={() => setPriceRange(activeFilters.priceRange)}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100/80 hover:bg-white text-slate-700 border border-transparent hover:border-brand-primary/20 rounded-full text-[11px] font-bold shrink-0 shadow-sm"
                    >
                      {activeFilters.priceRange}
                      <X size={12} strokeWidth={3} className="text-gray-400" />
                    </motion.button>
                  )}
                  {activeFilters.sizes.map((size) => (
                    <motion.button
                      layout
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      key={`chip-size-${size}`}
                      onClick={() => toggleSize(size)}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100/80 hover:bg-white text-slate-700 border border-transparent hover:border-brand-primary/20 rounded-full text-[11px] font-bold shrink-0 shadow-sm"
                    >
                      {size}
                      <X size={12} strokeWidth={3} className="text-gray-400" />
                    </motion.button>
                  ))}
                  <motion.button
                    layout
                    key="clear-row"
                    onClick={clearFilters}
                    className="text-[11px] font-black text-brand-primary uppercase tracking-widest px-3 shrink-0 py-1"
                  >
                    Clear all
                  </motion.button>
                </AnimatePresence>
              </div>
            )}

            <div className="mb-6 invisible h-px"></div>


            {/* Product Grid */}
            {filteredProducts.length === 0 && !loading ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-dashed border-gray-200">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Filter className="text-gray-300" size={24} />
                </div>
                <h3 className="text-gray-900 font-bold mb-1">No products found</h3>
                <p className="text-gray-400 text-sm mb-6">
                  Try adjusting your filters to find what you're looking for.
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-brand-primary transition-all"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {isMobileFilterOpen && (
          <div className="fixed inset-0 z-[100] lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setIsMobileFilterOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <h3 className="font-black text-xl text-gray-900 tracking-tight flex items-center gap-2">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Filter size={20} className="text-brand-primary" />
                  </div>
                  Filters
                </h3>
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="p-2 bg-gray-50 rounded-xl text-gray-500 hover:text-gray-900 transition-colors active:scale-90"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
                {/* Category Filter */}
                {filterCategories.length > 0 && (
                  <section>
                    <h4 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">
                      Sub-Category
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {filterCategories.map((cat) => (
                        <label key={cat} className="flex items-center p-3 rounded-2xl bg-gray-50/50 hover:bg-gray-50 border border-transparent active:border-brand-primary/20 transition-all cursor-pointer">
                          <div
                            className={`relative flex items-center justify-center w-5 h-5 rounded border transition-all ${activeFilters.categories.includes(cat) ? "border-brand-primary bg-brand-primary shadow-sm shadow-brand-primary/20" : "border-gray-300"}`}
                          >
                            <input
                              type="checkbox"
                              checked={activeFilters.categories.includes(cat)}
                              onChange={() => toggleCategory(cat)}
                              className="absolute inset-0 opacity-0 cursor-pointer"
                            />
                            {activeFilters.categories.includes(cat) && (
                              <div className="w-2 h-2 bg-white rounded-[1px]"></div>
                            )}
                          </div>
                          <span
                            className={`ml-3 text-sm font-bold transition-colors ${activeFilters.categories.includes(cat) ? "text-slate-900" : "text-slate-600"}`}
                          >
                            {cat}
                          </span>
                        </label>
                      ))}
                    </div>
                  </section>
                )}

                {/* Price Filter */}
                <section>
                  <h4 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">
                    Price Range
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      "Under ₹1,000",
                      "₹1,000 - ₹3,000",
                      "₹3,000 - ₹5,000",
                      "Over ₹5,000",
                    ].map((price) => (
                      <label key={price} className="flex items-center p-3 rounded-2xl bg-gray-50/50 hover:bg-gray-50 border border-transparent active:border-brand-primary/20 transition-all cursor-pointer">
                        <div
                          className={`relative flex items-center justify-center w-5 h-5 rounded-full border transition-all ${activeFilters.priceRange === price ? "border-brand-primary bg-brand-primary shadow-sm shadow-brand-primary/20" : "border-gray-300"}`}
                        >
                          <input
                            type="radio"
                            name="mobile-price"
                            checked={activeFilters.priceRange === price}
                            onChange={() => setPriceRange(price)}
                            className="absolute inset-0 opacity-0 cursor-pointer"
                          />
                          {activeFilters.priceRange === price && (
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          )}
                        </div>
                        <span
                          className={`ml-3 text-sm font-bold transition-colors ${activeFilters.priceRange === price ? "text-slate-900" : "text-slate-600"}`}
                        >
                          {price}
                        </span>
                      </label>
                    ))}
                  </div>
                </section>

                {/* Size Filter */}
                {filterSizes.length > 0 && (
                  <section>
                    <h4 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">
                      Size
                    </h4>
                    <div className="grid grid-cols-4 gap-2">
                      {filterSizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => toggleSize(size)}
                          className={`h-11 border rounded-xl text-[12px] font-black transition-all uppercase ${
                            activeFilters.sizes.includes(size)
                              ? "border-brand-primary bg-brand-primary text-white shadow-lg shadow-brand-primary/20"
                              : "border-gray-100 bg-gray-50/50 text-slate-600 active:bg-blue-50 active:border-blue-200"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </section>
                )}
              </div>

              <div className="p-6 border-t border-gray-100 flex gap-3">
                <button
                  onClick={clearFilters}
                  className="flex-1 py-4 border border-gray-200 rounded-2xl text-[11px] font-bold text-gray-500 hover:text-red-500 hover:border-red-100 hover:bg-red-50 transition-all uppercase tracking-[0.15em] flex items-center justify-center gap-2 active:scale-95"
                >
                  <Trash2 size={14} />
                  Reset
                </button>
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="flex-1 py-4 bg-slate-900 text-white rounded-2xl text-[11px] font-bold uppercase tracking-[0.15em] shadow-lg shadow-slate-900/10 active:scale-95 hover:bg-brand-primary transition-all"
                >
                  Apply
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CategoryListing;
