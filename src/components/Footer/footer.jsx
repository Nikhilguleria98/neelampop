import React from "react";
import { AtSign, Mail, MapPin, Phone, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#edf4e8] px-4 pb-8 pt-12 font-sans">
      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* =========================================
            TOP CONTACT SECTION
        ========================================= */}
        <div className="relative z-20 mx-auto -mb-20 flex max-w-5xl flex-col items-center justify-between gap-6 overflow-hidden rounded-[2rem] bg-[#2592ad] p-6 shadow-2xl shadow-[#2592ad]/20 sm:p-8 md:-mb-16 md:flex-row md:gap-8">
          
          {/* Decorative Background Glows */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 left-1/3 w-40 h-40 bg-black/5 rounded-full blur-2xl pointer-events-none" />

          {/* Left Graphic Side: Responsive Glassmorphic Bottle Silhouette */}
          <div className="hidden lg:flex w-1/4 justify-center relative min-h-[180px]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-48 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-xl flex flex-col items-center justify-center transform -rotate-12 hover:rotate-0 transition-transform duration-500">
              {/* Bottle Neck */}
              <div className="absolute -top-5 w-8 h-6 bg-white/15 border-x border-t border-white/20 rounded-t-md"></div>
              {/* Bottle Cap */}
              <div className="absolute -top-7 w-10 h-2 bg-white/30 rounded-sm"></div>
              {/* Fluid Glow Effect */}
              <div className="w-20 h-32 bg-gradient-to-t from-white/20 to-transparent rounded-2xl absolute bottom-2"></div>
              {/* Floating Mail Icon */}
              <Mail className="h-8 w-8 text-white opacity-90 relative z-10 drop-shadow" />
            </div>
          </div>

          {/* Right Content Side: Form and Text */}
          <div className="relative z-10 flex w-full flex-col gap-3 text-center md:w-3/4 md:text-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white leading-tight tracking-tight">
              Need packaging for your product?
            </h2>
            <p className="text-white/80 text-xs sm:text-sm max-w-xl mx-auto md:mx-0">
              Contact our team to discuss product sizes, packaging options, and your requirements.
            </p>
            
            {/* Input Group (Optimized for all viewports) */}
            <div className="flex flex-col sm:flex-row items-center bg-white/10 border border-white/25 rounded-2xl sm:rounded-full p-1.5 backdrop-blur-md w-full max-w-xl mx-auto md:mx-0 shadow-inner gap-2 sm:gap-0">
              <div className="hidden sm:flex items-center pl-4 pr-2 text-white/70">
                <AtSign className="h-4 w-4" />
              </div>
              <input
                type="email"
                defaultValue="kambojmehakpreetkaur@gmail.com"
                placeholder="Enter your manufacturing email"
                className="w-full sm:flex-1 bg-transparent text-white placeholder:text-white/50 outline-none text-sm px-4 sm:px-2 py-2.5 sm:py-0 text-center sm:text-left"
              />
              <button className="w-full sm:w-auto bg-white text-[#2592ad] font-bold px-6 py-3 sm:py-2.5 rounded-xl sm:rounded-full text-sm hover:bg-slate-50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-md">
                Subscribe <Send className="h-4 w-4" />
              </button>
            </div>
            <a href="/contact" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#f7faf4] px-6 py-3 text-sm font-semibold text-[#2592ad] shadow-md transition-colors hover:bg-[#e5efdd] sm:w-fit">
              Send an inquiry <Send className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* =========================================
            MAIN FOOTER CARD
        ========================================= */}
        <div className="rounded-[2rem] border border-[#dce8d4] bg-[#f7faf4] px-6 pb-8 pt-24 shadow-[0_8px_30px_rgb(0,0,0,0.03)] sm:px-8 md:px-12 md:pt-28 lg:px-16">
          
          {/* Footer Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-7">
            
            {/* Brand Profile (4 Columns) */}
            <div className="lg:col-span-4 flex flex-col gap-4 sm:col-span-2 lg:col-span-4 text-center sm:text-left items-center sm:items-start">
              <div className="flex items-center gap-3 text-[#2592ad]">
                <img src="/logo.png" alt="Neelam Print'o'Pack" className="h-12 w-48 object-contain object-left" />
              </div>
              <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                Plastic packaging manufactured in Baddi for pharmaceutical, FMCG, cosmetics, food, and home care businesses.
              </p>
              
            </div>

            {/* Main site links */}
            <div className="grid grid-cols-2 gap-6 text-center sm:text-left lg:col-span-5">
              <div>
                <h4 className="mb-3 text-base font-semibold text-slate-900">Products</h4>
                <ul className="space-y-2 text-sm text-slate-500">
                  <li><a href="/products/1" className="hover:text-[#2592ad]">Pharma dry syrup bottles</a></li>
                  <li><a href="/products/3" className="hover:text-[#2592ad]">Lotion bottles</a></li>
                  <li><a href="/products/5" className="hover:text-[#2592ad]">Dropper bottles</a></li>
                  <li><a href="/products/9" className="hover:text-[#2592ad]">Jars</a></li>
                  <li><a href="/products/11" className="hover:text-[#2592ad]">Oil and shampoo bottles</a></li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3 text-base font-semibold text-slate-900">Company</h4>
                <ul className="space-y-2 text-sm text-slate-500">
                  <li><a href="/about" className="hover:text-[#2592ad]">About us</a></li>
                  <li><a href="/quality" className="hover:text-[#2592ad]">Quality assurance</a></li>
                  <li><a href="/values" className="hover:text-[#2592ad]">Our values</a></li>
                  <li><a href="/contact" className="hover:text-[#2592ad]">Contact us</a></li>
                </ul>
              </div>
            </div>
            {/* Contact Information (3 Columns) */}
            <div className="lg:col-span-3 text-center sm:text-left">
              <h4 className="font-semibold text-slate-900 mb-4 text-base">Contact Us</h4>
              <ul className="space-y-4 text-sm text-slate-500 flex flex-col items-center sm:items-start">
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-[#2592ad] shrink-0 mt-0.5" />
                  <a href="tel:+91XXXXXXXXX" className="hover:text-[#2592ad] transition-colors">
                    +91-XXXXXXXXX
                  </a>
                </li>
                </ul>
              <ul className="flex flex-col items-center space-y-4 text-sm text-slate-500 sm:items-start">
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-[#2592ad] shrink-0 mt-0.5" />
                  <a href="mailto:neelampop@gmail.com" className="hover:text-[#2592ad] transition-colors break-all">
                    neelampop@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#2592ad] shrink-0 mt-0.5" />
                  <span>Baddi, Himachal Pradesh<br/> India</span>
                </li>
              </ul>
            </div>
          </div>

          {/* =========================================
              BOTTOM LEGAL BAR
          ========================================= */}
          <div className="mt-8 border-t border-slate-100 pt-5 text-center text-xs text-slate-500 sm:text-sm md:text-left">
            <p>Copyright {new Date().getFullYear()} Neelam Print'o'Pack. All rights reserved.</p>

          </div>

        </div>
      </div>
    </footer>
  );
}
