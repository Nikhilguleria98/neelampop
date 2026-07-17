import React from "react";
import { Phone, Mail, MapPin, AtSign, Send, Milk } from "lucide-react";

export default function Footer() {
  return (
    // Outer wrapper with a light background to make the white card pop beautifully
    <footer className="bg-slate-50 pt-16 pb-12 font-sans relative overflow-hidden px-4">
      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* =========================================
            TOP OVERLAPPING NEWSLETTER SECTION
        ========================================= */}
        <div className="relative z-20 mx-auto max-w-5xl bg-[#2592ad] rounded-[2rem] p-6 sm:p-10 md:p-12 shadow-2xl shadow-[#2592ad]/20 -mb-28 sm:-mb-24 lg:-mb-20 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 overflow-hidden">
          
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
          <div className="w-full lg:w-3/4 flex flex-col gap-4 relative z-10 text-center md:text-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white leading-tight tracking-tight">
              Subscribe to our newsletter for the <br className="hidden lg:block" /> latest packaging innovations.
            </h2>
            <p className="text-white/80 text-xs sm:text-sm max-w-xl mx-auto md:mx-0">
              Get early access to smart bottle designs, sustainable PET alternatives, custom blow-molding technology, and wholesale market shifts.
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
          </div>
        </div>

        {/* =========================================
            MAIN FOOTER CARD (White Background)
        ========================================= */}
        <div className="bg-white rounded-[2rem] pt-36 sm:pt-40 md:pt-44 lg:pt-36 pb-8 px-6 sm:px-8 md:px-12 lg:px-16 shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-slate-100">
          
          {/* Footer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            
            {/* Brand Profile (4 Columns) */}
            <div className="lg:col-span-4 flex flex-col gap-6 sm:col-span-2 lg:col-span-4 text-center sm:text-left items-center sm:items-start">
              <div className="flex items-center gap-3 text-[#2592ad]">
                <Milk className="h-8 w-8 transform rotate-6" /> 
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                  Neelam Print O Pack
                </h3>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                Leading Specialty Bottle Manufacturer providing high-quality glass, PET, and eco-friendly packaging solutions engineered across multiple commercial industries.
              </p>
              
              {/* Social Icons */}
              <div className="flex gap-3 mt-2 justify-center sm:justify-start">
                <a href="#" aria-label="Instagram" className="w-9 h-9 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center hover:bg-[#2592ad] hover:text-white transition-all duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                </a>
                <a href="#" aria-label="Facebook" className="w-9 h-9 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center hover:bg-[#2592ad] hover:text-white transition-all duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="w-9 h-9 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center hover:bg-[#2592ad] hover:text-white transition-all duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
                <a href="#" aria-label="X (Twitter)" className="w-9 h-9 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center hover:bg-[#2592ad] hover:text-white transition-all duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
                </a>
              </div>
            </div>

            {/* Links Columns (5 Columns) */}
            <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8 text-center sm:text-left">
              {/* Products */}
              <div>
                <h4 className="font-semibold text-slate-900 mb-4 text-base">Products</h4>
                <ul className="space-y-3 text-sm text-slate-500">
                  <li><a href="#" className="hover:text-[#2592ad] transition-colors">PET Bottles</a></li>
                  <li><a href="#" className="hover:text-[#2592ad] transition-colors">Glass Containers</a></li>
                  <li><a href="#" className="hover:text-[#2592ad] transition-colors">Custom Molding</a></li>
                  <li><a href="#" className="hover:text-[#2592ad] transition-colors">Caps & Closures</a></li>
                </ul>
              </div>
              {/* Capabilities */}
              <div>
                <h4 className="font-semibold text-slate-900 mb-4 text-base">Capabilities</h4>
                <ul className="space-y-3 text-sm text-slate-500">
                  <li><a href="#" className="hover:text-[#2592ad] transition-colors">Eco Materials</a></li>
                  <li><a href="#" className="hover:text-[#2592ad] transition-colors">Design Prototypes</a></li>
                  <li><a href="#" className="hover:text-[#2592ad] transition-colors">Bulk Orders</a></li>
                  <li><a href="#" className="hover:text-[#2592ad] transition-colors">Quality Standards</a></li>
                </ul>
              </div>
              {/* Resources */}
              <div className="col-span-2 sm:col-span-1">
                <h4 className="font-semibold text-slate-900 mb-4 text-base">Resources</h4>
                <ul className="space-y-3 text-sm text-slate-500">
                  <li><a href="#" className="hover:text-[#2592ad] transition-colors">Material Datasheets</a></li>
                  <li><a href="#" className="hover:text-[#2592ad] transition-colors">Order Guide</a></li>
                  <li><a href="#" className="hover:text-[#2592ad] transition-colors">FAQs</a></li>
                  <li><a href="#" className="hover:text-[#2592ad] transition-colors">Client Cases</a></li>
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
          <div className="mt-12 pt-6 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-500 text-center md:text-left">
            <p>© {new Date().getFullYear()} Neelam Print O Pack. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <a href="#" className="hover:text-[#2592ad] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#2592ad] transition-colors">Terms & Conditions</a>
              <a href="#" className="hover:text-[#2592ad] transition-colors">Legal</a>
              <a href="#" className="hover:text-[#2592ad] transition-colors">Site Map</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}