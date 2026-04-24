import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBasket } from 'lucide-react';

const Logo = ({ variant = 'default', className = '' }) => {
  const isDark = variant === 'dark';
  
  return (
    <Link to="/" className={`group flex items-center gap-1.5 focus:outline-none ${className}`}>
      <div className="bg-gradient-to-br from-brand-primary to-blue-600 p-1.5 rounded-xl shadow-md shadow-brand-primary/20 group-hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-0.5">
        <ShoppingBasket className="text-white" size={24} strokeWidth={1.5} />
      </div>
      <h1 className={`text-2xl md:text-[28px] lg:text-[32px] font-black tracking-tighter flex items-baseline 
        ${isDark ? 'text-white' : 'text-slate-800'}`}
      >
        Urban<span className="text-brand-primary">Cart</span>
        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-brand-primary rounded-full ml-0.5 mb-1 md:mb-1.5"></div>
      </h1>
    </Link>
  );
};

export default Logo;
