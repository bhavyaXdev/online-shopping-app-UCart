import React from 'react';
import { X, Eye, EyeOff } from 'lucide-react';

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

export default LoginModal;
