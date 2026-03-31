import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  MapPin, 
  Phone, 
  CreditCard, 
  ShieldCheck, 
  Truck ,
  Heart
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-slate-900 pt-16 pb-8 text-gray-300 border-t-4 border-indigo-500">
            <div className="container mx-auto px-4 md:px-6">
                {/* Newsletter & Guarantee Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12 pb-12 border-b border-slate-800">
                    <div className="flex flex-col">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight">Stay in the Loop</h3>
                        <p className="text-slate-400 text-sm md:text-base mb-6 max-w-md">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals directly to your inbox.</p>
                        <form className="flex w-full max-w-md bg-white/5 rounded-full p-1 border border-white/10 focus-within:border-indigo-500 focus-within:bg-white/10 transition-colors">
                            <input 
                                type="email" 
                                placeholder="Enter your email address" 
                                className="flex-1 bg-transparent border-none outline-none text-white px-4 text-sm placeholder:text-slate-500"
                                required 
                            />
                            <button type="submit" className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 md:px-7 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg active:scale-95">
                                Subscribe
                            </button>
                        </form>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:justify-items-end items-center mt-4 lg:mt-0">
                        <div className="flex flex-col sm:items-center lg:items-end gap-2.5 text-left sm:text-center lg:text-right group cursor-pointer">
                            <div className="w-12 h-12 bg-indigo-500/10 rounded-full flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-transform">
                                <Truck size={22} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-sm">Free Delivery</h4>
                                <p className="text-slate-500 text-[11px] md:text-xs mt-0.5">On orders over ₹999</p>
                            </div>
                        </div>
                        <div className="flex flex-col sm:items-center lg:items-end gap-2.5 text-left sm:text-center lg:text-right group cursor-pointer">
                            <div className="w-12 h-12 bg-rose-500/10 rounded-full flex items-center justify-center text-rose-400 group-hover:scale-110 group-hover:bg-rose-500/20 transition-transform">
                                <ShieldCheck size={22} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-sm">Secure Payment</h4>
                                <p className="text-slate-500 text-[11px] md:text-xs mt-0.5">100% secure checkout</p>
                            </div>
                        </div>
                        <div className="flex flex-col sm:items-center lg:items-end gap-2.5 text-left sm:text-center lg:text-right group cursor-pointer">
                            <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-transform">
                                <CreditCard size={22} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-sm">Easy Returns</h4>
                                <p className="text-slate-500 text-[11px] md:text-xs mt-0.5">15 days return policy</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Footer Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
                    {/* Brand / About */}
                    <div className="flex flex-col">
                        <Link to="/" className="text-2xl font-black text-white tracking-tighter mb-5 inline-block cursor-pointer">
                            URBAN<span className="text-indigo-500">CART</span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6 pe-4">
                            Your ultimate destination for fashion, electronics, and lifestyle. Making premium quality accessible to everyone, everywhere.
                        </p>
                        <div className="flex items-center gap-3">
                            <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1 shadow-md">
                                <Facebook size={16} />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-sky-500 hover:text-white transition-all transform hover:-translate-y-1 shadow-md">
                                <Twitter size={16} />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-rose-500 hover:text-white transition-all transform hover:-translate-y-1 shadow-md">
                                <Instagram size={16} />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-red-600 hover:text-white transition-all transform hover:-translate-y-1 shadow-md">
                                <Youtube size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col">
                        <h4 className="text-white font-bold text-base mb-6 uppercase tracking-wider relative">
                            Categories
                            <span className="absolute left-0 -bottom-2.5 w-12 h-0.5 bg-indigo-500"></span>
                        </h4>
                        <ul className="space-y-3.5">
                            <li><Link to="/category/fashion" className="text-slate-400 hover:text-indigo-400 transition-colors inline-block text-sm relative group"><span className="absolute left-0 w-0 h-[1px] bg-indigo-400 bottom-0 group-hover:w-full transition-all duration-300"></span>Women's Fashion</Link></li>
                            <li><Link to="/category/mens" className="text-slate-400 hover:text-indigo-400 transition-colors inline-block text-sm relative group"><span className="absolute left-0 w-0 h-[1px] bg-indigo-400 bottom-0 group-hover:w-full transition-all duration-300"></span>Men's Fashion</Link></li>
                            <li><Link to="/category/electronics" className="text-slate-400 hover:text-indigo-400 transition-colors inline-block text-sm relative group"><span className="absolute left-0 w-0 h-[1px] bg-indigo-400 bottom-0 group-hover:w-full transition-all duration-300"></span>Electronics & Tech</Link></li>
                            <li><Link to="/category/home" className="text-slate-400 hover:text-indigo-400 transition-colors inline-block text-sm relative group"><span className="absolute left-0 w-0 h-[1px] bg-indigo-400 bottom-0 group-hover:w-full transition-all duration-300"></span>Home Decor</Link></li>
                            <li><Link to="/category/beauty" className="text-slate-400 hover:text-indigo-400 transition-colors inline-block text-sm relative group"><span className="absolute left-0 w-0 h-[1px] bg-indigo-400 bottom-0 group-hover:w-full transition-all duration-300"></span>Beauty & Care</Link></li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div className="flex flex-col">
                        <h4 className="text-white font-bold text-base mb-6 uppercase tracking-wider relative">
                            Customer Service
                            <span className="absolute left-0 -bottom-2.5 w-12 h-0.5 bg-indigo-500"></span>
                        </h4>
                        <ul className="space-y-3.5">
                            <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors text-sm">About Us</Link></li>
                            <li><Link to="/faq" className="text-slate-400 hover:text-white transition-colors text-sm">FAQ & Help Center</Link></li>
                            <li><Link to="/policies/returns" className="text-slate-400 hover:text-white transition-colors text-sm">Return Policy</Link></li>
                            <li><Link to="/shipping" className="text-slate-400 hover:text-white transition-colors text-sm">Shipping Info</Link></li>
                            <li><Link to="/track-order" className="text-slate-400 hover:text-white transition-colors text-sm">Track Your Order</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col">
                        <h4 className="text-white font-bold text-base mb-6 uppercase tracking-wider relative">
                            Contact Us
                            <span className="absolute left-0 -bottom-2.5 w-12 h-0.5 bg-indigo-500"></span>
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 group">
                                <div className="mt-0.5 p-1.5 rounded-full bg-slate-800 group-hover:bg-indigo-500/20 transition-colors">
                                    <MapPin size={14} className="text-indigo-400 shrink-0" />
                                </div>
                                <span className="text-slate-400 text-sm leading-tight group-hover:text-white transition-colors">423 Tech Innovation Park, Sector 45, New Delhi 110001</span>
                            </li>
                            <li className="flex items-center gap-3 group cursor-pointer">
                                <div className="p-1.5 rounded-full bg-slate-800 group-hover:bg-indigo-500/20 transition-colors">
                                    <Phone size={14} className="text-indigo-400 shrink-0" />
                                </div>
                                <span className="text-slate-400 text-sm group-hover:text-white transition-colors">+91 1800 123 4567</span>
                            </li>
                            <li className="flex items-center gap-3 group cursor-pointer">
                                <div className="p-1.5 rounded-full bg-slate-800 group-hover:bg-indigo-500/20 transition-colors">
                                    <Mail size={14} className="text-indigo-400 shrink-0" />
                                </div>
                                <span className="text-slate-400 text-sm group-hover:text-white transition-colors">support@urbancart.in</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright Bar */}
                <div className="pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 text-xs text-center md:text-left">
                        © {new Date().getFullYear()} UrbanCart E-Commerce. All rights reserved. Designed with <Heart size={10} className="inline text-rose-500 fill-rose-500 mx-0.5" />
                    </p>
                    <div className="flex items-center gap-3 opacity-60">
                        {/* Mock Payment Icons Text Base */}
                        <div className="bg-slate-800 px-2 py-1 rounded text-[10px] font-bold tracking-wider text-slate-300 italic border border-slate-700">VISA</div>
                        <div className="bg-slate-800 px-2 py-1 rounded text-[10px] font-bold tracking-wider text-slate-300 italic border border-slate-700">MASTERCARD</div>
                        <div className="bg-slate-800 px-2 py-1 rounded text-[10px] font-bold tracking-wider text-slate-300 italic border border-slate-700">PAYPAL</div>
                        <div className="bg-slate-800 px-2 py-1 rounded text-[10px] font-bold tracking-wider text-slate-300 italic border border-slate-700">UPI</div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
